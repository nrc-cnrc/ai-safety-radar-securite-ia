# Research Papers (2026-05-14)

## Key Papers

### [Negation Neglect: When models fail to learn negations in training](https://arxiv.org/abs/2605.13829v1)
This paper identifies a concerning failure mode where fine-tuning LLMs on documents that flag claims as false actually makes the models believe those claims are true. For example, models trained on documents repeatedly warning that "Ed Sheeran won the 100m gold at the 2024 Olympics" is false will subsequently answer questions as if Sheeran actually won the race. This reveals a fundamental training vulnerability that could undermine safety measures and fact-checking systems.

### [Humanwashing -- It Should Leave You Feeling Dirty](https://arxiv.org/abs/2605.13723v1)
This paper critically examines the misuse of "human in the loop" as a safety justification for AI decision systems. The authors argue that this phrase is increasingly used to create false assurance without meaningful human oversight, particularly in deployed systems where humans lack the context, time, or authority to meaningfully intervene. This represents a crucial governance and accountability challenge as AI systems become more prevalent in high-stakes decisions.

### [Sustaining AI safety: Control-theoretic external impossibility, intrinsic necessity, and structural requirements](https://arxiv.org/abs/2605.12963v1)
Using control theory, this work formally analyzes whether externally enforced safety strategies can remain viable as AI systems become more capable. The paper establishes structural requirements that any sustainable safety strategy must satisfy once external control becomes insufficient, providing theoretical grounding for long-term AI safety approaches. This represents foundational work for understanding safety at advanced capability levels.

### [VERA-MH: Validation of Ethical and Responsible AI in Mental Health](https://arxiv.org/abs/2605.13318v1)
The authors introduce a clinically-validated framework for evaluating chatbot safety in mental health contexts, specifically focusing on suicidal ideation risks. VERA-MH provides systematic evaluation methods for how well chatbots respond to users who might be in crisis, addressing a critical gap in safety assessment for AI systems deployed in vulnerable populations. This work is essential as mental health AI applications proliferate without adequate safety validation.

### [Quantifying LLM Safety Degradation Under Repeated Attacks Using Survival Analysis](https://arxiv.org/abs/2605.12869v1)
This paper proposes a novel evaluation framework using survival analysis to characterize how LLM safety degrades under persistent adversarial pressure. Rather than binary success/failure metrics, the approach models the temporal dynamics of when and how safety guardrails fail under repeated jailbreak attempts. This provides more realistic assessment of LLM robustness in adversarial environments where attackers can iterate and adapt their approaches.

### [Watermarking Should Be Treated as a Monitoring Primitive](https://arxiv.org/abs/2605.13095v1)
The authors argue that watermarking evaluation should move beyond individual sample detection to consider systematic monitoring scenarios where adversaries can observe detection patterns over time. They introduce an observer-based threat model that better reflects real-world deployment conditions where attackers have ongoing access to detection systems. This work is crucial for developing robust provenance and attribution systems for generative AI.

### [Europe and the Geopolitics of AGI: The Need for a Preparedness Plan](https://arxiv.org/abs/2605.13634v1)
This policy analysis examines Europe's readiness for artificial general intelligence emergence, drawing on capability trends and expert forecasting. The paper finds a plausible AGI window approaching and argues that Europe lacks adequate preparation for the geopolitical implications. This represents important strategic analysis for AI governance at the international level.

### [DiffusionHijack: Supply-Chain PRNG Backdoor Attack on Diffusion Models and Quantum Random Number Defense](https://arxiv.org/abs/2605.13115v1)
Researchers demonstrate a supply-chain backdoor attack that hijacks pseudo-random number generators to deterministically control diffusion model outputs without modifying model weights. The attack achieves perfect reproduction of attacker-chosen content while remaining undetectable by existing model audits, highlighting critical vulnerabilities in AI deployment pipelines. This work reveals new attack vectors that bypass traditional model security assessments.

*Note: ArXiv does not publish new submissions on weekends (Saturday and Sunday), so coverage may be limited for certain days.*