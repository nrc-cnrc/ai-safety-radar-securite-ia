# Community & Tools (2026-05-21)

## Key Discussions

**AgentThreatBench: OWASP Agentic Top 10 Security Benchmark**
A new security evaluation suite, [AgentThreatBench](https://ukgovernmentbeis.github.io/inspect_evals/evals/safeguards/agent_threat_bench/), has gained significant attention across multiple AI safety repositories. The benchmark operationalizes the OWASP Top 10 for Agentic Applications (2026) into executable evaluation tasks, covering threats like indirect prompt injection and memory poisoning. Issues requesting integration have been opened across major evaluation platforms including [OpenAI Evals](https://github.com/openai/evals/issues/1668), [EleutherAI's LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness/issues/3776), [DeepEval](https://github.com/confident-ai/deepeval/issues/2681), and [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails/issues/1908). This coordinated push suggests the benchmark addresses a real gap in standardized agentic AI security evaluation.

**Anthropic Claude Cookbook Security Enhancements**
The [Anthropic cookbook repository](https://github.com/anthropics/claude-cookbooks) has seen substantial activity around security-focused examples, including new cookbooks for [multimodal prompt injection defense](https://github.com/anthropics/claude-cookbooks/pull/623) and [LLM output security scanning](https://github.com/anthropics/claude-cookbooks/pull/631). These additions provide concrete implementations for defending against image-based prompt injection, PDF text layer attacks, and common output vulnerabilities like XSS and SQL injection. The security focus reflects growing industry awareness that safety measures must evolve beyond text-only threats as AI systems become more multimodal.

**Model Compatibility and Infrastructure Updates**
Several repositories are addressing model compatibility challenges: [Gemma 4.0.1](https://github.com/google-deepmind/gemma/releases/tag/v4.0.1) fixed dialog dependency requirements, [TransformerLens updated for Transformers v5](https://github.com/TransformerLensOrg/TransformerLens/pull/1315) and fixed Gemma scaling adjustments, while [LlamaFactory resolved Megatron-Core Adapter compatibility](https://github.com/hiyouga/LlamaFactory/pull/10506). These infrastructure updates highlight the ongoing challenge of maintaining compatibility across rapidly evolving AI model ecosystems.

## Notable GitHub Releases & Tools

**[Dari-docs: Parallel Coding Agents for Documentation](https://github.com/mupt-ai/dari-docs)**
A new Show HN project that uses parallel coding agents to optimize documentation. The tool enables automated documentation improvements through coordinated AI agents, potentially addressing the common problem of maintaining up-to-date technical documentation. This matters because documentation quality is often a bottleneck in AI safety research where clear explanations of safety measures and evaluation procedures are critical.

**[Attestplane v1.5.0: AI Attestation Platform](https://github.com/attestplane/attestplane/releases/tag/v1.5.0)**
Released comprehensive documentation updates including NIST AI RMF alignment mapping, GDPR compliance guidance, and security threat modeling using GSN-style Claims/Arguments/Evidence structure. The platform provides audit trails and attestation capabilities specifically designed for AI systems. This matters because it addresses the growing regulatory need for documented AI governance and compliance verification.

**[Aider AI Code Assistant Updates](https://github.com/Aider-AI/aider)**
Recent updates include [OrcaRouter integration](https://github.com/Aider-AI/aider/pull/5147) for accessing 150+ upstream models, [console encoding fixes](https://github.com/Aider-AI/aider/pull/5159), and [secure OAuth key handling](https://github.com/Aider-AI/aider/pull/5154). The OAuth fix addresses a security issue where API keys were written with world-readable permissions. This matters because AI coding assistants handle sensitive credentials and require robust security practices to prevent credential leakage.

**[Sunglasses Security Pattern Library v0.2.45](https://github.com/sunglasses-dev/sunglasses/pull/27)**
Added 21 new agent workflow security patterns (GLS-AW-064 through GLS-AW-084), bringing the total to 742 security patterns across 55 categories. The library provides standardized security patterns for AI agent workflows. This matters because it offers practitioners a curated, searchable database of security patterns specifically designed for agentic AI systems, addressing the gap between general security practices and agent-specific threats.