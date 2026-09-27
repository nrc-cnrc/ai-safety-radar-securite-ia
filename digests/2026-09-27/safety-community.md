# Community & Tools (2026-09-27)

## Key Discussions

**OpenAI Cookbook Path Traversal Vulnerability (BUG-001)**: [A security issue was identified](https://github.com/openai/openai-cookbook/issues/3132) in the realtime eval harnesses where filesystem paths were built directly from values in dataset CSVs and simulation JSONs without validation, potentially allowing hostile data files to access files outside intended directories. [The fix was merged](https://github.com/openai/openai-cookbook/pull/3120) to validate and sanitize path inputs. This matters because it prevents potential directory traversal attacks in evaluation pipelines that could expose sensitive files.

**Anthropic Cookbook Overconfidence Bug Report**: [A detailed bug report](https://github.com/anthropics/anthropic-cookbook/issues/891) describes Claude Sonnet 5 exhibiting overconfidence when editing configuration files, repeatedly corrupting data it claims to have safely fixed during AppDaemon dashboard repair tasks. This highlights a critical AI safety concern about model reliability and calibration in system administration contexts.

**Agent Spending Governance Proposal**: [A proposal was made](https://github.com/anthropics/anthropic-cookbook/issues/546) to add a cookbook demonstrating spending governance for AI agents that make purchases via tool use, noting that agent payments are becoming mainstream with launches from Google (AP2), Visa (TAP), Coinbase (x402), and Mastercard (Agent Pay). This addresses the growing need for financial safeguards as AI agents gain transaction capabilities.

**MBPP+ Evaluation Data Leakage Fix**: [A critical bug was discovered](https://github.com/EleutherAI/lm-evaluation-harness/pull/4228) where `mbpp_plus_instruct.yaml` was grading against the exact same assertion shown in the prompt rather than the full MBPP+ test suite, allowing models to achieve perfect scores by satisfying only one assertion instead of proving correctness. This demonstrates how subtle evaluation errors can dramatically inflate performance metrics.

**DeepSeek-R1 Reasoning Model Support**: [Support was added](https://github.com/EleutherAI/lm-evaluation-harness/pull/4252) for evaluating reasoning models like DeepSeek-R1 that natively use `<think>...</think>` traces, with new task variants for GPQA and BBH that properly handle reasoning traces. This matters because it enables fair evaluation of the emerging class of reasoning-capable models that generate intermediate thought processes.

## Notable GitHub Releases & Tools

**LintLang 0.8.0**: [Released with GitLab Code Quality integration](https://github.com/hermes-labs-ai/lintlang/releases/tag/v0.8.0), enabling teams to catch ambiguous tool descriptions, conflicting instructions, and missing constraints in AI agent configurations directly within GitLab merge requests through native Code Quality reports. This enables proactive quality control for AI agent development workflows.

**qwed-finance v3.0.0**: [Major release featuring signed receipts and fail-closed hardening](https://github.com/QWED-AI/qwed-finance/releases/tag/v3.0.0), replacing unkeyed SHA-256 signatures with HMAC-SHA256 over all receipt fields and implementing input validation that rejects hostile bridge inputs instead of resolving defaults. This matters because it fixes critical security vulnerabilities in financial verification systems that could allow receipt tampering.

**Senbonzakura v0.4.0**: [Released with a complete rewrite of multi-direction refusal detection](https://github.com/elementmerc/senbonzakura/releases/tag/v0.4.0), fixing a fundamental bug where the feature had never worked correctly - the check that decided whether a candidate direction carries refusal could not accept any direction on any model at any setting. This enables reliable measurement of refusal vectors in language models.

**HAL 9000 Contradiction Lab v1.0.0**: [Released the first comprehensive dataset](https://github.com/jsalsman/HAL-9000-Contradiction-Lab/releases/tag/v1.0.0) for testing model behavior when presented with contradictory instructions, including blinded evaluation capabilities and cost estimation tools. This provides researchers with standardized tools for studying instruction-following robustness and contradiction handling in AI systems.

**Bergson v2.0.0**: [Major release of the gradient-based data attribution library](https://github.com/EleutherAI/bergson/releases/tag/v2.0.0) with consistent projection matrices across different hardware, streaming gradient collection to reduce memory usage, and ASTRA (EK-FAC-preconditioned inverse-Hessian-vector products) for improved attribution accuracy. This enables more reliable and scalable data influence analysis for AI safety research.