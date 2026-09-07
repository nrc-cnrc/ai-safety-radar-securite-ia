# Community & Tools (2026-09-07)

## Key Discussions

### 1. **Anthropic Claude Tool Choice Compatibility Issues**
The [Anthropic cookbooks repository](https://github.com/anthropics/claude-cookbooks/pull/859) is addressing compatibility problems with Claude Fable 5.1, where `tool_choice: {"type": "tool"}` and `tool_choice: {"type": "any"}` return HTTP 400 errors. The fix adds prompt-based alternatives for tool selection when the model doesn't support these parameters. This matters because it affects how developers can reliably control Claude's tool usage across different model versions.

### 2. **False Positive "Distillation" Bans Affecting OpenAI Users**
Multiple reports in OpenAI's repositories ([cookbook](https://github.com/openai/openai-cookbook/issues/3062) and [evals](https://github.com/openai/evals/issues/1826)) describe Pro subscribers being permanently banned for suspected "distillation" despite legitimate enterprise usage, with automated appeals being rejected. The users report no human review being available, highlighting potential issues with OpenAI's automated moderation systems for advanced use cases.

### 3. **AI Safety Formalization and Verification Efforts**
The [AI Safety Formalization Atlas](https://github.com/mbrcic/ai-safety-formalization-atlas) is actively formalizing key theorems in AI safety, including work on [Kleinberg-Mullainathan-Raghavan fairness trade-offs](https://github.com/mbrcic/ai-safety-formalization-atlas/pull/57) and [MAIS agenda problems](https://github.com/mbrcic/ai-safety-formalization-atlas/pull/62). This represents important progress in making AI safety concepts mathematically precise and machine-verifiable.

### 4. **Red Team and Security Tool Development**
Multiple projects are advancing AI red-teaming capabilities, including [llm-red-team-cli v0.4.0](https://github.com/MRX-72/llm-red-team-cli/releases/tag/v0.4.0) with multi-turn attacks across 95 vectors covering OWASP LLM Top 10, and [Prismor's v1.45.0 release](https://github.com/PrismorSec/prismor/releases/tag/v1.45.0) introducing a proxy-based enforcement surface for ungoverned agents. These tools enable systematic evaluation of LLM safety measures in production environments.

### 5. **Infrastructure and Tooling Improvements**
Several repositories show active development in AI safety infrastructure, including [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens/pull/1750) adding attribution patching capabilities for mechanistic interpretability, and [h5i v0.4.1](https://github.com/h5i-dev/h5i/releases/tag/v0.4.1) fixing critical browser engine issues that were causing security testing false negatives.

## Notable GitHub Releases & Tools

### **Prismor v1.45.0 - AI Agent Governance Platform**
[Released](https://github.com/PrismorSec/prismor/releases/tag/v1.45.0) a major update introducing `prismor proxy` - an enforcement surface that governs AI agents through their model traffic without requiring agent cooperation, plus governance modes that compile to policy.yaml for easier configuration. This enables organizations to secure AI agents that don't support hooks, MCP gateways, or SDK adapters.

### **LLM Red Team CLI v0.4.0 - Multi-Turn Attack Vectors**
[Expanded](https://github.com/MRX-72/llm-red-team-cli/releases/tag/v0.4.0) from 38 to 95 attack vectors with multi-turn conversation support, covering all testable dimensions of the OWASP LLM Top 10 including prompt injection, data leakage, and improper output handling. This addresses the critical gap where guardrails often erode across conversation turns rather than single messages.

### **h5i Browser Engine v0.4.1 - Security Testing Platform**
[Fixed](https://github.com/h5i-dev/h5i/releases/tag/v0.4.1) critical issues where page events, form submission, and cross-site credentials were silently failing, causing real security findings to appear as false negatives in automated testing. This enables more reliable detection of XSS, CSRF, and other browser-based vulnerabilities.

### **ToolTrace Bench v0.3.0 - Agent Tool Usage Evaluation**
[Released](https://github.com/webdevsamran/tooltrace-bench/releases/tag/v0.3.0) the first tagged version of a benchmark for evaluating AI agents' tool usage capabilities, featuring AST-level scoring for unrelated edits, bootstrap confidence intervals, and compiled-language workflow support. This provides standardized metrics for assessing agent precision in code modification tasks.

### **Runback Community v0.1.0 - Agent Execution Recording**
[Launched](https://github.com/letsRunback/runback-community/releases/tag/v0.1.0) a system for deterministic time-travel replay of agent runs, enabling developers to re-execute any step against the exact context the model saw, run evaluations, and export signed verification records. This addresses the critical need for reproducibility and auditing in agent development workflows.