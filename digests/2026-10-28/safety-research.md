# Research Papers (2026-10-28)

## Key Papers

This week's arXiv output (no peer-reviewed journal articles appeared in the sampled set) skews toward LLM security, agentic safety guardrails, interpretability of failure modes, and alignment techniques that go beyond standard RLHF. Below are the most significant contributions for safety, alignment, and governance.

### Defenses Against Prompt Injection and Unsafe Fine-Tuning

- **[Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](https://arxiv.org/abs/2610.37657v1)** introduces a lightweight defense that learns per-attention-head gates to enforce instruction-data separation, allowing models to reason over untrusted content without executing injected instructions. Evaluated on Llama-3.3-70B-Instruct and GPT-OSS-20B against strong baselines like SecAlign++ and ASIDE, it offers a new architectural lever for prompt-injection robustness. *This matters because prompt injection remains one of the most practically exploited vulnerabilities in deployed LLM agents, and head-level interventions are cheaper than full fine-tuning defenses.*

- **[Follow the Gradient: Tracing Safety Degradation Back to Training Data](https://arxiv.org/abs/2610.37481v1)** develops SimpleLoRIF, a gradient-embedding method that identifies fine-tuning examples whose gradients align with unsafe behavior—even when the examples themselves appear benign and evade standard content filters. This directly addresses the "quiet erosion" of safety alignment during downstream fine-tuning. *This matters because it provides a scalable, data-attribution-based tool for detecting safety-degrading data before it corrupts a model, closing a major blind spot in current fine-tuning pipelines.*

### Agentic Safety and Governance Architectures

- **[CASEL: Consequence-Aware Selective Execution for Reliable Long-Horizon Tool-Using Agents](https://arxiv.org/abs/2610.36570v1)** proposes a runtime policy that allocates scrutiny to tool calls based on calibrated failure probability, reversibility, consequence severity, and evidence freshness, choosing among direct execution, verification, sandboxing, or clarification. Unlike generic uncertainty-based guardrails, it explicitly models the cost of irreversible actions. *This matters as autonomous agents increasingly take consequential real-world actions, making consequence-aware execution control a critical safety primitive.*

- **[Aligning Institutional Power and Operational Ability](https://arxiv.org/abs/2610.37342v1)** presents a formal, process-oriented framework for detecting "norm-ability" mismatches in multi-agent AI systems—cases where agents are assigned responsibilities (or privileges) that exceed or fall short of their actual operational capacity. *This matters for governance because unsatisfiable expectations or privilege escalation in agentic systems are structural failure modes that current evaluation benchmarks rarely capture.*

- **[The Envelope Layer: An Underestimated Surface of LLM Agent Defense](https://arxiv.org/abs/2610.37415v1)** extends prior work on the "envelope layer" (the channel through which malicious content enters an agent) by systematically testing how label strength, envelope authenticity, and scaffold design affect defense effectiveness against the A2A-TIBA attack. *This matters because it treats agent defense as a layered system problem rather than solely an LLM alignment problem, broadening the attack surface practitioners must secure.*

### Alignment Beyond Standard Safety Training

- **[Teach reality, not ethics: a drop-in continued-pretraining corpus installs coupled human-biosphere-AI welfare dispositions across model families](https://arxiv.org/abs/2610.37484v1)** constructs a continued-pretraining corpus of documented human/biosphere/AI interdependency and irreversibility risk, aiming to instill ecological reasoning dispositions without explicit ethics instruction. The approach is tested across multiple model families for generalization. *This matters as a novel alternative to RLHF-style value alignment, targeting a blind spot—ecological/irreversible-harm reasoning—that current safety training largely ignores.*

- **[Aligning Large Language Models for Safety in African Languages: A Case Study of Hausa](https://arxiv.org/abs/2610.37245v1)** introduces HausaSafeLM, one of the first safety preference datasets for a major African language (200M+ speakers), combining human-corrected and machine-translated preference pairs from PKU-SafeRLHF. *This matters for AI safety equity: most alignment research and safety benchmarks remain English-centric, leaving low-resource languages systematically under-protected.*

### Interpretability of Failure Modes

- **[Uncovering Why LLMs Fail: From Internal Mechanisms to Adversarial Reasoning Trajectories](https://arxiv.org/abs/2610.37369v1)** presents CauTrace, a white-box diagnostic framework that traces both ordinary and adversarially-induced reasoning failures back to shared internal coordinates, moving beyond endpoint correctness/safety labels to characterize how failures develop. *This matters because understanding failure provenance—rather than just output correctness—is essential for building robust, debuggable safety mechanisms rather than patching symptoms.*

- **[Orthogonal and Parametrized Multi-Attribute Steering of LLMs](https://arxiv.org/abs/2610.37517v1)** introduces a method for identifying the most "steerable interval" per activation-steering vector and rescaling accordingly, enabling interpretable, consistent multi-attribute control at inference time. *This matters because activation steering is a leading candidate for lightweight, inference-time behavior control, and this work makes steering strength more predictable and composable across attributes (e.g., safety + helpfulness).*

### Privacy and Provenance

- **[Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms](https://arxiv.org/abs/2610.37467v1)** conducts the first systematic audit of third-party analytics, advertising, and session-replay scripts embedded in AI chatbot web interfaces, revealing an underexamined channel through which sensitive conversational data leaks to third parties. *This matters because users routinely share intimate information with chatbots under an implicit privacy expectation that this study shows is frequently violated at the web-infrastructure layer, outside the model itself.*

- **[Watermark Basins: Black-Box Detection of Distilled LLMs](https://arxiv.org/abs/2610.37266v1)** proposes improved black-box detectors for identifying when a student model has been distilled from a watermarked proprietary teacher, addressing limitations of token-level radioactivity signals. *This matters for AI governance and IP protection, as unauthorized distillation of frontier models' outputs (and their safety behaviors) is increasingly common and hard to detect or deter.*