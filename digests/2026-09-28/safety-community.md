# Community & Tools (2026-09-28)

## Key Discussions

**LLM Evaluation Harness: Few-shot Data Leakage** - [EleutherAI/lm-evaluation-harness issue #4145](https://github.com/EleutherAI/lm-evaluation-harness/issues/4145) highlighted a critical evaluation integrity issue where few-shot examples could include the evaluation document itself when tasks lack separate training splits. This creates inflated performance scores and compromises benchmark validity. This matters because it undermines the reliability of widely-used evaluation results in AI safety research.

**Agent Airlock Security Vulnerabilities** - [sattyamjjain/agent-airlock PR #247](https://github.com/sattyamjjain/agent-airlock/pull/247) addressed multiple security gaps where generator tools could bypass network restrictions and leak unmasked outputs outside the intended isolation boundary. The fixes implement fail-closed security patterns for tool validation and argument auditing. This matters because it prevents AI agents from circumventing safety controls designed to contain their actions.

**OpenAI Cookbook Path Traversal Vulnerability** - [openai/openai-cookbook PR #3120](https://github.com/openai/openai-cookbook/pull/3120) fixed a medium-severity path traversal vulnerability in realtime evaluation harnesses where hostile dataset files could manipulate filesystem paths to read/write outside intended directories. This matters because it prevents malicious datasets from compromising evaluation infrastructure and accessing sensitive files.

**LangFuse Experiment API Pagination Bug** - [langfuse/langfuse issue #17840](https://github.com/langfuse/langfuse/issues/17840) identified how long-running experiments could appear multiple times across cursor pagination, potentially leading to incorrect analytics and monitoring results. This matters because accurate experiment tracking is essential for responsible AI development and safety monitoring.

## Notable GitHub Releases & Tools

**QWED Finance v3.0.0** - [qwed-finance release](https://github.com/QWED-AI/qwed-finance/releases/tag/v3.0.0) introduces signed receipts and fail-closed security hardening for financial compliance tools, including JSON payload validation and input sanitization to prevent quote injection attacks. This enables more secure financial AI applications with proper audit trails.

**Bergson v2.0.4** - [EleutherAI/bergson releases](https://github.com/EleutherAI/bergson/releases/tag/v2.0.4) delivers multiple performance and correctness fixes for influence function computations, including proper Hessian scaling under loss reduction and multi-GPU compatibility improvements. This enables more reliable data attribution analysis for AI safety research.

**Agent Arena 0.2.0** - [rbrus/agent-arena release](https://github.com/rbrus/agent-arena/releases/tag/v0.2.0) ships a production-ready agent evaluation platform with Diplomacy scenario support and cross-checking tooling for verifiable AI agent assessments. This enables standardized testing of multi-agent interactions and strategic reasoning capabilities.

**TransformerLens SVD Circuits** - Multiple PRs ([#1831](https://github.com/TransformerLensOrg/TransformerLens/pull/1831), [#1834](https://github.com/TransformerLensOrg/TransformerLens/pull/1834)) add advanced interpretability tools including singular value decomposition of attention heads into subfunctions and RelevanceLens for improved gradient-based analysis. This enables researchers to better understand the internal mechanisms of transformer models for alignment research.