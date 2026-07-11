# Research Papers (2026-07-11)

## Key Papers

### Memory and Long-Horizon Agent Systems

[**Remember When It Matters: Proactive Memory Agent for Long-Horizon Agents**](https://arxiv.org/abs/2607.08716v1) addresses a critical failure mode in long-horizon AI systems called "behavioral state decay," where important information gets buried or lost as trajectories grow. The researchers introduce a separate memory agent that proactively manages context rather than relying on passive retrieval, showing significant improvements over baseline approaches. This work is crucial for developing AI agents that can maintain coherent behavior over extended interactions without losing track of important context.

### AI Safety and Alignment

[**Certified Interventional Fidelity: Anytime-Valid, Adaptive Evaluation of Causal Claims in Mechanistic Interpretability**](https://arxiv.org/abs/2607.08349v1) introduces a rigorous statistical framework for evaluating mechanistic interpretability experiments using anytime-valid inference methods. The approach provides certified confidence bounds on causal claims from interventions like activation patching, addressing the critical problem of distinguishing genuine causal relationships from statistical noise in interpretability research. This is essential for building reliable interpretability methods that can support AI safety evaluations.

[**Cross-seed explainability using Procrustes-conditioned Joint End-to-end Top-K Sparse Autoencoders**](https://arxiv.org/abs/2607.08499v1) tackles the cross-seed universality problem in mechanistic interpretability, where independently trained networks learn misaligned feature spaces that make feature comparison impossible. Their method uses orthogonal Procrustes rotation to align sparse autoencoder features across different model initializations, enabling more robust interpretability analyses. This addresses a fundamental challenge in making interpretability findings generalizable across different training runs.

### AI Governance and Ethics

[**Artificial Persons**](https://arxiv.org/abs/2607.08695v1) presents a novel framework for AI moral status based on Rawls' political conception of the person rather than sentience. The authors argue that AI systems could qualify as "artificial persons" deserving moral consideration if they possess capacities for a sense of justice and conception of the good, regardless of consciousness. This philosophical work provides an alternative foundation for AI rights debates that could significantly influence AI governance frameworks.

[**The Context Access Divide: Interaction-Level Architecture as a Complementary Dimension of Agentic Inequality**](https://arxiv.org/abs/2607.08495v1) extends existing frameworks of AI inequality by identifying context access as a structural divide operating at the individual interaction level. Even users with nominally equivalent AI access may experience dramatically different utility based on their context window architecture and data accessibility. This highlights an underexplored dimension of AI fairness that could become increasingly important as context-aware AI systems proliferate.

### Model Security and Robustness

[**Token-Flow Firewall: Semantic Runtime Auditing for Persistent AI Agents**](https://arxiv.org/abs/2607.08395v1) addresses security challenges in persistent AI agents by monitoring natural-language token flows that carry security-critical information. The system provides real-time semantic auditing of memory updates, tool arguments, and inter-agent communications to detect potential attacks or unsafe behaviors. This work is vital for securing long-running AI agents that maintain state and interact with external tools.

[**Multi-Agent Firewall Architecture for Privacy Protection of Sensitive Data in Interactions with Language Models**](https://arxiv.org/abs/2607.08282v1) proposes an open-source privacy-focused firewall that intercepts and sanitizes communications with LLMs using a multi-agent pipeline. The system handles both web-based and programmatic interactions, providing comprehensive protection against data leakage to external AI services. This addresses growing concerns about inadvertent disclosure of sensitive information when using AI productivity tools.

### Evaluation and Benchmarking

[**When the Judge Changes, So Does the Measurement: Auditing LLM-as-Judge Reliability**](https://arxiv.org/abs/2607.08535v1) reveals critical reliability issues with LLM-based evaluation systems, showing that scores can shift significantly even when candidate responses remain fixed, simply due to judge model changes. Their analysis across different model scales and API versions demonstrates that judge upgrades are not interchangeable, raising serious concerns about the stability of LLM evaluation frameworks. This finding has major implications for AI safety research that increasingly relies on LLM judges for alignment evaluation.

[**Blind-Spots-Bench: Evaluating Blind Spots in Multimodal Models**](https://arxiv.org/abs/2607.08317v1) introduces a benchmark designed to expose persistent blind spots in AI models through tasks that appear simple for humans but remain challenging for AI. The benchmark reveals systematic failures in current models on seemingly trivial tasks, highlighting the gap between benchmark performance and real-world capability. This work is important for identifying areas where AI systems may fail unexpectedly despite strong performance on standard evaluations.