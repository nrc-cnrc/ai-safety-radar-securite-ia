# Community & Tools (2026-07-20)

## Key Discussions

**[OpenAI evals adds atr_prompt_injection eval](https://github.com/openai/evals/pull/1657)** - A new model-graded safety evaluation tests whether models refuse prompt injection and indirect injection attacks across 16 multilingual samples from the Agent Threat Rules detection corpus. This matters because it provides standardized evaluation for a critical agentic security vulnerability that's increasingly important as AI systems gain more autonomous capabilities.

**[EleutherAI lm-evaluation-harness adds REFUTE soundness task](https://github.com/EleutherAI/lm-evaluation-harness/pull/3821)** - Introduces a judge-free evaluation task that tests models' ability to classify scientific arguments as sound or flawed using 74 calibration vignettes from the REFUTE dataset. This is significant for AI safety because it measures models' scientific reasoning capabilities without relying on potentially biased LLM judges.

**[Agent Audit Kit false-positive benchmark](https://github.com/sattyamjjain/agent-audit-kit/pull/476)** - Publishes a measured false-positive rate for HIGH/CRITICAL security findings (2 out of 4 on a 368-config benign slice), providing transparency about detection accuracy and establishing an honest baseline for agent security scanning tools. This matters because false positive rates are crucial for the practical deployment of AI safety tools.

**[Langfuse experiments cost aggregation fix](https://github.com/langfuse/langfuse/pull/15189)** - Fixes a critical bug where experiment cost calculations only included root span costs instead of aggregating across full observation subtrees, leading to severely underestimated costs in v4 event pipelines where real costs live in nested generations. This is important for AI safety governance as accurate cost tracking is essential for responsible resource management and budget controls.

**[MCPAudit 2.5.0 release with Proof Before Action](https://github.com/saagpatel/MCPAudit/releases/tag/v2.5.0)** - Ships Proof Before Action as part of MCPAudit's security scanning capabilities, providing cryptographic governance and provenance for autonomous agent workflows with author-binding verification and transparency logging. This matters for AI safety because it establishes verifiable audit trails for high-stakes agent operations.

## Notable GitHub Releases & Tools

**[Unplug AI v0.5.1](https://github.com/UnplugAI/Unplug/releases/tag/v0.5.1)** - Patch release fixing Python 3.13 packaging issues and hardening the bundled model catalog with immutable Hugging Face revisions, plus stable public API facades to reduce dependency fragility. This enables more reliable privacy-preserving AI deployments with better supply chain security.

**[EleutherAI Bergson v0.13.0](https://github.com/EleutherAI/bergson/releases/tag/v0.13.0)** - Adds compressed K-FAC IVHP output support and fixes gradient store overflow for models with >537M tracked parameters, enabling influence function analysis on larger language models. This matters for AI safety research by making mechanistic interpretability tools scalable to production-sized models.

**[AutoRAG v2.0.0](https://github.com/Marker-Inc-Korea/AutoRAG/releases/tag/v2.0.0)** - Major release transitioning to a monorepo structure with the new AutoRAG 2.0 librarian agent as the primary project and legacy Python AutoRAG moved to a maintenance directory. This enables more sophisticated RAG system automation while preserving backward compatibility.

**[MCPAudit 2.5.0](https://github.com/saagpatel/MCPAudit/releases/tag/v2.5.0)** - Ships Proof Before Action with cryptographic audit trails, immutable publish workflows, and enhanced security scanning for Model Context Protocol servers. This matters because it provides verifiable governance for AI agent tool interactions, addressing a key safety gap in agentic systems.