# 添加新的 AI 模型指南

本文档说明如何向系统中添加新的 AI 模型。

## 添加新模型的步骤

### 1. 打开配置文件

编辑 `app/config/models.ts` 文件

### 2. 在 AI_MODELS 数组中添加新模型配置

只需在 `AI_MODELS` 数组中添加一个新的配置对象：

```typescript
{
  value: 'your-new-model-id',          // 模型的唯一标识符
  label: '显示名称',                     // 在 UI 中显示的名称
  provider: 'provider-name',             // 提供商标识
  desc: '模型描述',                      // 简短描述模型特点
  apiUrl: 'https://api.example.com/v1/chat/completions',  // API 地址
  modelName: 'actual-model-name'         // 实际调用的模型名称
}
```

### 3. 示例：添加一个新的模型

假设要添加一个名为 "Claude 4" 的模型：

```typescript
export const AI_MODELS: ModelConfig[] = [
  // ... 现有模型 ...

  {
    value: 'claude-4-haiku',
    label: 'Claude 4',
    provider: 'anthropic',
    desc: 'Anthropic 最新模型、推理能力强',
    apiUrl: 'https://api.anthropic.com/v1/messages',
    modelName: 'claude-4-haiku-20250114'
  }
];
```

### 4. 保存文件

保存 `models.ts` 文件后，新模型会自动出现在 UI 中：

- ✅ 模型选择下拉框会自动显示新模型
- ✅ 选择模型时会自动使用对应的 API URL
- ✅ API 调用会使用正确的模型名称

## 注意事项

1. **不要修改其他代码**：添加新模型只需修改 `models.ts`，不需要修改 `InputSection.tsx` 或 `page.tsx`
2. **确保 API 地址正确**：`apiUrl` 必须是 OpenAI 兼容的 API 端点
3. **唯一的 value**：每个模型的 `value` 必须唯一，不能与现有模型重复
4. **测试模型**：添加后请在实际环境中测试 API 是否可用

## 当前支持的模型

| 模型 | Value | Provider |
|------|-------|----------|
| Gemini 3 Flash | `gemini-3-flash-preview` | gemini |
| GLM | `glm-4-flash` | zhipu |
| Qwen | `qwen-plus` | qwen |

## 架构设计优势

这个配置文件的设计遵循以下原则：

- **单一职责原则**：模型配置集中在一个文件中
- **开闭原则**：对扩展开放，对修改封闭
- **依赖倒置**：UI 组件依赖抽象的配置，而非具体实现
- **低耦合**：添加新模型不影响现有代码

添加新模型时，您只需要：
1. 在配置文件中添加一行配置
2. 确保您的 API key 支持该模型
3. 测试功能

就这么简单！🎉
