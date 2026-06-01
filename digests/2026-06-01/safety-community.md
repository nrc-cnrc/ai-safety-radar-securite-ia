# Community & Tools (2026-06-01)

## Key Discussions

### Human Brains are Misaligned, Hallucinative, Stochastic Parrots
This [Hacker News discussion](https://news.ycombinator.com/item?id=48345414) around a [Substack post](https://substack.com/@samuelfitoussi/p-191268395) drew attention by applying critiques commonly leveled at AI systems to human cognition itself. The post argues that human brains exhibit many of the same failure modes (hallucination, misalignment with stated goals, pattern matching without true understanding) that researchers worry about in AI systems. The discussion explored whether this comparison helps contextualize AI risks or minimizes genuine concerns about artificial systems. This matters because it challenges assumptions about human cognition serving as a reliable baseline for AI safety standards.

## Notable GitHub Releases & Tools

### Qorami SDK v1.0.0
[Qorami SDK](https://github.com/loicfontaine-max/qorami-sdk/releases/tag/v1.0.0) launched with JavaScript and Python clients, OpenAI/Anthropic tool schemas, and an MCP server for human-in-the-loop email approval workflows. The SDK enables AI agents to request human confirmation before sending emails, with three possible outcomes: send, request confirmation, or do not send. This matters because it provides a practical implementation of human oversight for high-stakes AI agent actions.

### EleutherAI LM Evaluation Harness Updates
Several significant updates to the [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) include adding [AgentThreatBench](https://github.com/EleutherAI/lm-evaluation-harness/issues/3776) - the first evaluation suite operationalizing the OWASP Top 10 for Agentic Applications into executable security tests, and [prompt_defense_eval](https://github.com/EleutherAI/lm-evaluation-harness/pull/3809) for testing OWASP-LLM02 (Insecure Output Handling) vulnerabilities using deterministic regex scoring. These additions matter because they provide standardized benchmarks for evaluating AI agent security risks rather than relying on theoretical assessments.

### Anthropic Cookbook Security Hardening
The [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks/pull/626) received significant security improvements for the CMA-MCP managed agents cookbook, addressing 14 security findings across information disclosure, input validation, rate limiting, and container security. The hardening includes filtering sensitive fields from agent metadata and preventing race conditions in Kubernetes pod management. This matters because it demonstrates proactive security practices for AI agent deployment patterns that others are likely to replicate.

### Bergson Library Refactoring
[EleutherAI's Bergson](https://github.com/EleutherAI/bergson/pull/290) underwent major simplification ahead of release, removing processor paths and refactoring Hessian estimation to use a standalone tool rather than build-time flags. The library also switched to memory-efficient TRAK projection to reduce VRAM requirements. This matters because it makes advanced model interpretability tools more accessible by reducing complexity and computational requirements.