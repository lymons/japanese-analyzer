// AI 模型配置文件
// 所有模型配置集中管理，添加新模型只需在此文件中添加配置

export interface ModelConfig {
  value: string;           // 模型唯一标识符
  label: string;           // 显示名称
  provider: string;        // 提供商标识
  desc: string;            // 描述
  apiUrl: string;          // API 地址
  modelName: string;       // 实际调用的模型名称
  icon: string;           // 图标类名 (FontAwesome)
}

// 模型配置列表
export const AI_MODELS: ModelConfig[] = [
  {
    value: 'gemini-3-flash-preview',
    label: 'Gemini 3 Flash',
    provider: 'gemini',
    desc: '速度快、对日语优化',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    modelName: 'gemini-3-flash-preview',
    icon: 'fa-robot'
  },
  {
    value: 'glm-4-flash',
    label: 'GLM',
    provider: 'zhipu',
    desc: '智谱AI、响应快',
    apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    modelName: 'glm-4-flash',
    icon: 'fa-cube'
  },
  {
    value: 'qwen-plus',
    label: 'Qwen',
    provider: 'qwen',
    desc: '阿里云、多语言支持好',
    apiUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    modelName: 'qwen-plus',
    icon: 'fa-bolt'
  }
];

// 默认模型
export const DEFAULT_MODEL = AI_MODELS[0].value;

// 根据模型值获取配置
export const getModelConfig = (modelValue: string): ModelConfig => {
  const model = AI_MODELS.find(m => m.value === modelValue);
  if (!model) {
    console.warn(`未找到模型配置: ${modelValue}，使用默认模型`);
    return AI_MODELS[0];
  }
  return model;
};

// 根据模型值获取 API URL
export const getModelApiUrl = (modelValue: string): string => {
  return getModelConfig(modelValue).apiUrl;
};

// 根据模型值获取模型名称
export const getModelName = (modelValue: string): string => {
  return getModelConfig(modelValue).modelName;
};

// 根据模型值获取图标
export const getModelIcon = (modelValue: string): string => {
  return getModelConfig(modelValue).icon;
};
