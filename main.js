// Expects MODELS to be defined in global scope by data.js

class LLMTimeline extends HTMLElement {
    constructor() {
        super();
        this.models = window.MODELS || [];
    }

    connectedCallback() {
        this.render();
        window.addEventListener('resize', () => this.render());
    }

    render() {
        this.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'timeline-wrapper';
        this.appendChild(wrapper);

        // Time range
        const startDate = new Date('2022-10-01');
        const endDate = new Date('2026-04-01');
        const totalDuration = endDate - startDate;

        const families = [...new Set(this.models.map(m => m.family))];
        
        // Grid
        const gridContainer = document.createElement('div');
        gridContainer.className = 'timeline-grid';
        wrapper.appendChild(gridContainer);
        
        let curYear = startDate.getFullYear();
        while (curYear <= endDate.getFullYear()) {
             // Jan 1
             this.createGridLine(gridContainer, new Date(`${curYear}-01-01`), startDate, totalDuration, curYear.toString());
             // July 1
             this.createGridLine(gridContainer, new Date(`${curYear}-07-01`), startDate, totalDuration, 'H2');
             curYear++;
        }

        // Tooltip
        let tooltip = document.querySelector('.tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }

        // Rows
        families.forEach((family, index) => {
            const row = document.createElement('div');
            row.className = 'model-row';
            
            const label = document.createElement('div');
            label.className = 'model-family-label';
            label.textContent = family;
            row.appendChild(label);

            const familyModels = this.models.filter(m => m.family === family);
            familyModels.forEach(model => {
                const modelDate = new Date(model.date);
                const pct = (modelDate - startDate) / totalDuration * 100;
                
                const node = document.createElement('div');
                node.className = 'model-node';
                node.style.left = `calc(${pct}% + 120px)`; // Offset matches CSS label width
                
                const dot = document.createElement('div');
                dot.className = 'node-dot';
                if (model.estimated) {
                    dot.classList.add('estimated');
                    dot.style.borderColor = model.color;
                    // Keep custom property mapping for ease of use
                    dot.style.setProperty('--accent-color', model.color);
                } else {
                    dot.style.backgroundColor = model.color;
                }
                
                const nameLabel = document.createElement('div');
                nameLabel.className = 'node-label';
                nameLabel.textContent = model.name;
                if (model.estimated) {
                    nameLabel.classList.add('estimated');
                }

                node.appendChild(dot);
                node.appendChild(nameLabel);

                // Events
                const dateStr = modelDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                const estimatedBadge = model.estimated ? '<span style="color:#ffcc00; font-size:0.7rem; margin-left:4px;">(推测)</span>' : '';
                
                node.addEventListener('mouseenter', (e) => {
                    tooltip.innerHTML = `
                        <div style="font-weight:600; margin-bottom:2px;">${model.name}${estimatedBadge}</div>
                        <div style="opacity:0.8">${dateStr}</div>
                    `;
                    tooltip.classList.add('visible');
                    
                    const rect = node.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
                });

                node.addEventListener('mouseleave', () => {
                    tooltip.classList.remove('visible');
                });



                row.appendChild(node);
            });

            wrapper.appendChild(row);
        });
    }

    createGridLine(container, date, startDate, totalDuration, text) {
        if (date < startDate || date > startDate + totalDuration) return;
        
        const pct = (date - startDate) / totalDuration * 100;
        const line = document.createElement('div');
        line.className = 'grid-line-y';
        line.style.left = `${pct}%`;
        
        const label = document.createElement('div');
        label.className = 'grid-label-y';
        label.textContent = text;
        line.appendChild(label);
        
        container.appendChild(line);
    }
}

customElements.define('llm-timeline', LLMTimeline);
