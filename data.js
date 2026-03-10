window.MODELS = [
    // OpenAI
    { family: 'OpenAI', name: 'GPT-3.5', date: '2022-11-30', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-4', date: '2023-03-14', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-4 Turbo', date: '2023-11-06', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-4o', date: '2024-05-13', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-4.5', date: '2025-02-27', color: 'var(--color-openai)' }, 
    { family: 'OpenAI', name: 'GPT-5', date: '2025-08-07', color: 'var(--color-openai)' },   
    { family: 'OpenAI', name: 'GPT-5.1', date: '2025-11-12', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-5.2', date: '2025-12-11', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-5.3', date: '2026-03-03', color: 'var(--color-openai)' },
    { family: 'OpenAI', name: 'GPT-5.4', date: '2026-03-05', color: 'var(--color-openai)' },

    // Anthropic
    { family: 'Anthropic', name: 'Claude 1', date: '2023-03-14', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 2', date: '2023-07-11', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 3', date: '2024-03-04', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 3.5 Sonnet', date: '2024-06-20', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 3.5 Opus', date: '2024-10-15', color: 'var(--color-anthropic)', estimated: true },
    { family: 'Anthropic', name: 'Claude 4', date: '2025-05-22', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 4.5', date: '2025-11-24', color: 'var(--color-anthropic)' },
    { family: 'Anthropic', name: 'Claude 4.6', date: '2026-02-05', color: 'var(--color-anthropic)' },

    // Google
    { family: 'Google', name: 'PaLM 2', date: '2023-05-10', color: 'var(--color-google)' },
    { family: 'Google', name: 'Gemini 1.0', date: '2023-12-06', color: 'var(--color-google)' },
    { family: 'Google', name: 'Gemini 1.5', date: '2024-02-15', color: 'var(--color-google)' },
    { family: 'Google', name: 'Gemini 2.0', date: '2025-02-05', color: 'var(--color-google)' },
    { family: 'Google', name: 'Gemini 3.0', date: '2025-11-18', color: 'var(--color-google)' },

    // Meta
    { family: 'Meta', name: 'Llama 2', date: '2023-07-18', color: 'var(--color-meta)' },
    { family: 'Meta', name: 'Llama 3', date: '2024-04-18', color: 'var(--color-meta)' },
    { family: 'Meta', name: 'Llama 3.1', date: '2024-07-23', color: 'var(--color-meta)' },
    { family: 'Meta', name: 'Llama 4', date: '2025-04-05', color: 'var(--color-meta)' },
    
    // Alibaba
    { family: 'Alibaba', name: 'Qwen 1.5', date: '2024-02-05', color: 'var(--color-alibaba)' },
    { family: 'Alibaba', name: 'Qwen 2', date: '2024-06-07', color: 'var(--color-alibaba)' },
    { family: 'Alibaba', name: 'Qwen 2.5', date: '2024-09-19', color: 'var(--color-alibaba)' },
    { family: 'Alibaba', name: 'Qwen 3', date: '2025-04-28', color: 'var(--color-alibaba)' },
    { family: 'Alibaba', name: 'Qwen 3.5', date: '2026-02-16', color: 'var(--color-alibaba)' }, 

    // DeepSeek
    { family: 'DeepSeek', name: 'DeepSeek V2', date: '2024-05-06', color: 'var(--color-deepseek)' },
    { family: 'DeepSeek', name: 'DeepSeek V2.5', date: '2024-09-05', color: 'var(--color-deepseek)' },
    { family: 'DeepSeek', name: 'DeepSeek V3', date: '2024-12-26', color: 'var(--color-deepseek)' },
    { family: 'DeepSeek', name: 'DeepSeek V4', date: '2026-03-05', color: 'var(--color-deepseek)', estimated: true },

    // Zhipu AI
    { family: 'Zhipu AI', name: 'ChatGLM-3', date: '2023-10-27', color: 'var(--color-zhipu)' },
    { family: 'Zhipu AI', name: 'GLM-4', date: '2024-01-16', color: 'var(--color-zhipu)' },
    { family: 'Zhipu AI', name: 'GLM-5', date: '2026-02-11', color: 'var(--color-zhipu)' },

    // Minimax
    { family: 'Minimax', name: 'abab 6', date: '2024-01-17', color: 'var(--color-minimax)' },
    { family: 'Minimax', name: 'abab 6.5', date: '2024-04-17', color: 'var(--color-minimax)' },
    { family: 'Minimax', name: 'Minimax 2.5', date: '2026-02-12', color: 'var(--color-minimax)' },

    // Moonshot AI
    { family: 'Moonshot', name: 'Kimi', date: '2023-10-09', color: 'var(--color-moonshot)' },
    { family: 'Moonshot', name: 'Kimi K1.5', date: '2025-01-20', color: 'var(--color-moonshot)' },
    { family: 'Moonshot', name: 'Kimi K2', date: '2025-07-11', color: 'var(--color-moonshot)' },
    { family: 'Moonshot', name: 'Kimi K2.5', date: '2026-01-27', color: 'var(--color-moonshot)' },

    // xAI
    { family: 'xAI', name: 'Grok-1', date: '2024-03-17', color: 'var(--color-xai)' },
    { family: 'xAI', name: 'Grok-1.5', date: '2024-03-29', color: 'var(--color-xai)' },
    { family: 'xAI', name: 'Grok-2', date: '2024-08-14', color: 'var(--color-xai)' },
    { family: 'xAI', name: 'Grok-3', date: '2025-02-17', color: 'var(--color-xai)' },
    { family: 'xAI', name: 'Grok-4.2', date: '2026-02-17', color: 'var(--color-xai)' },
];
