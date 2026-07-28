# Research Papers (2026-07-28)

## Key Papers

### Alignment and Safety Research

**[Epistemic Norms for AI Safety and Alignment Research](https://arxiv.org/abs/2607.24243v1)** examines how AI safety research differs fundamentally from mainstream AI development along two key dimensions: capability profiles that emphasize absence of hazardous behaviors rather than positive capabilities, and evidence standards requiring proof of safety under adversarial conditions rather than average-case performance. This theoretical framework is crucial for establishing rigorous standards that match the high-stakes nature of AI safety work.

**[Gubernaut: A Deterministic Homeostatic Controller for Affect-Regulated LLM Agents](https://arxiv.org/abs/2607.24339v1)** introduces a model-agnostic runtime control system that addresses reactive failure modes in LLMs like escalation under provocation and sycophantic drift. The Gubernaut Cognitive Controller operates as a monitoring-control loop that maintains emotional homeostasis across different model families, offering a practical solution for more stable AI agent behavior.

**[Regulating for AI Legitimacy](https://arxiv.org/abs/2607.24391v1)** argues that AI governance must address legitimacy as a distinct regulatory objective beyond alignment, focusing on the sociological belief among those subject to AI power that such governance is justified. This perspective highlights a critical gap in current AI governance frameworks that prioritize technical alignment while neglecting the social foundations of acceptable AI authority.

### Interpretability and Explainability

**[Sparse Autoencoders Encode Both Concepts and Functions: The Downstream Geometry of Feature Effects](https://arxiv.org/abs/2607.24645v1)** reveals that SAE features affect model outputs through both concept-detection and function-execution pathways, with their downstream geometry determining which pathway dominates. This finding explains why features with clear activation descriptions can have weak causal effects, providing crucial insights for improving interpretability tools used in AI safety research.

**[D-Score: A Spectral Hidden-State Signal for Hallucination Detection in Large Language Models](https://arxiv.org/abs/2607.24586v1)** proposes a simple spectral statistic computed from hidden activations that can detect hallucinations from a single forward pass. The method counts singular directions above a threshold, offering a computationally efficient approach to identifying when models produce unsupported or false content—a critical capability for deployment safety.

### Security and Robustness

**[Just Testing, Move Along: Evasion of LLM-based System Log Interpretation by Prompt Injection](https://arxiv.org/abs/2607.24174v1)** demonstrates how attackers can inject contextual information into log entries to manipulate how LLMs interpret malicious activity in security operations centers. This work exposes a significant vulnerability in the growing use of LLMs for cybersecurity analysis, showing how the same flexibility that makes LLMs useful also creates new attack vectors.

**[When LLM Defenses Backfire: Characterizing Safety, Performance, and Cost Trade-offs](https://arxiv.org/abs/2607.24392v1)** provides a systematic analysis of how jailbreak defenses can introduce secondary costs including performance degradation, over-refusal on benign inputs, and increased inference costs. This comprehensive trade-off analysis is essential for practitioners who need to balance security with usability in real-world deployments.

**[Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](https://arxiv.org/abs/2607.24625v1)** addresses the critical security challenge of LLM agents processing mixed-confidentiality data through a novel Information Flow Control framework that enables context switching to contain taint propagation. This approach resolves the tension between security and utility that has limited practical deployment of traditional taint tracking systems.

### Evaluation and Benchmarking

**[The Cost of Knowing: A Resource-Aware Protocol for Benchmarking Hallucination Beyond Static Leaderboards](https://arxiv.org/abs/2607.24063v1)** introduces a framework that measures factuality relative to computational cost, addressing how frontier models now cluster at the top of accuracy scales. This resource-aware evaluation approach is crucial for distinguishing genuinely better systems from those that simply spend more compute to achieve higher scores.

**[Efficiency Matters in Autonomous Research](https://arxiv.org/abs/2607.24647v1)** argues that search efficiency should be considered equally important to solution quality when evaluating autonomous research systems. As these systems become more capable, their ability to reach high-quality results with minimal resource expenditure becomes crucial for practical deployment and scalability.