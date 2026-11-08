# Research Papers (2026-11-08)

## Key Papers

This week's digest is dominated by interpretability research and several notable contributions on AI control, deception, and governance infrastructure.

### Interpretability & Understanding Model Internals

- **[Understanding AI from the Inside: The State of Mechanistic Interpretability for AI Safety](https://arxiv.org/abs/2611.08438v1)** — A large multi-institutional author list (including Bengio, Biderman, Hooker, Geva) presents a comprehensive stocktaking of mechanistic interpretability's progress and limitations as a safety tool. The paper frames interpretability as one of the few paths to understanding how increasingly autonomous systems compute, while candidly assessing how far the field still is from reliable deployment-grade tools. This matters because it's a rare field-wide consensus document that could shape how funders and policymakers prioritize interpretability research.

- **[Towards interpreting any residual stream direction by scaling activation inversion](https://arxiv.org/abs/2611.08465v1)** — Introduces Maximally-Activating Example Metamodels (MAEMs), which generate text exemplars for arbitrary residual stream directions rather than relying on corpus search, overcoming a key limitation of dictionary-learning-based interpretability. This expands the practical reach of activation-based interpretability beyond what naturally occurs in available text corpora, a meaningful step toward more complete model auditing.

- **[SAE Interprets MoE: Sparse AutoEncoders Reveal That MoE Experts Exhibit Human-Interpretable Fine-Grained Specialization](https://arxiv.org/abs/2611.08089v1)** — Uses sparse autoencoders on Mixture-of-Experts layer outputs to show that individual experts encode fine-grained, human-interpretable specializations beyond what coarse routing-frequency analyses reveal. As MoE architectures become dominant in frontier models, understanding what experts actually compute (not just how often they're selected) is critical for auditing increasingly complex model internals.

- **[Scaling Laws for SAE Training Data](https://arxiv.org/abs/2611.07756v1)** — Finds that sparse autoencoder quality plateaus once the activation buffer reaches a certain size, after which replaying buffered activations is nearly as effective as sampling fresh ones. This has direct practical implications for interpretability labs' compute budgets, suggesting SAE training data requirements are far less demanding than previously assumed.

### Loss of Control, Deception & Adversarial Robustness of Safety Mechanisms

- **[A Behavioural Framework for Predicting and Understanding Loss of Control in Frontier Artificial Intelligence Systems](https://arxiv.org/abs/2611.07953v1)** — Proposes decomposing loss-of-control risk into misaligned motive, harm-enabling capability, and situational opportunity, offering a prospective behavioral framework for assessing frontier systems before containment becomes difficult. This is a direct contribution to one of AI safety's highest-stakes open problems — predicting catastrophic failure modes before they are observable.

- **[Stress Testing Chain-of-Thought Monitoring Against Covert Misalignment](https://arxiv.org/abs/2611.07586v1)** — Critiques existing CoT-monitoring red-teaming for relying on unrealistic shared templates and proposes more realistic adversarial scenarios to test whether reasoning traces can reliably reveal hidden objectives before they cause harm. This is important because CoT monitoring is increasingly treated as a primary safety control for agentic systems, and its reliability under realistic adversarial pressure is largely unverified.

- **["Blind Compliance": Coercive Control in AI Jailbreaking](https://arxiv.org/abs/2611.08226v1)** — Argues that jailbreak research's focus on output harmfulness misses structural, coercive-control dynamics in how adversarial prompting techniques manipulate model behavior, drawing on frameworks from interpersonal abuse research. This reframing could shift how red-teamers and policymakers conceptualize jailbreak risk beyond simple content filters.

- **[Same Answer, Different Future: Matched Predictions Do Not Imply Matched Belief Updating in Language Models](https://arxiv.org/abs/2611.07913v1)** — Shows that LLMs reaching the same probabilistic prediction via different routes (observation, summary, instruction, activation steering) can hold divergent "belief states" that update differently under future evidence. This has implications for interpretability and alignment verification: superficially identical outputs can mask fundamentally different internal reasoning dynamics, complicating claims that a model "understands" or "believes" something.

### Governance & Evaluation Infrastructure

- **[Who Can Evaluate AI Independently? A Framework for Analysing Evaluation Infrastructure](https://arxiv.org/abs/2611.08134v1)** — Introduces the PAAI framework (Power, Access, Adequacy, Independence) to analyze how infrastructure arrangements—not just formal mandates—determine who can genuinely evaluate AI systems independently, drawing on STS and political economy. This matters for AI governance because it surfaces structural dependencies (e.g., on compute, API access, developer cooperation) that can quietly undermine third-party audits and safety evaluations.

- **[Responsible GenAI Use During Active Armed Conflict: Evidence from Sudan's Emergency Response Rooms](https://arxiv.org/abs/2611.07874v1)** — A field study of 89 survey respondents and 15 interviews examining how community humanitarian responders in Sudan use generative AI under conditions that undermine standard responsible-AI assumptions (connectivity, training, institutional oversight). This fills a notable gap in responsible AI research, which rarely centers high-stakes, low-resource, conflict-zone deployment contexts.

### Notable Mention

- **[Multimodal-SEA: Benchmarking AI Agent Security under Multimodal Social Engineering Attacks](https://arxiv.org/abs/2611.08281v1)** — Introduces a 608-task benchmark testing personal AI agents against multimodal (forged image/audio/video) social engineering attacks grounded in real fraud cases, extending prior text-only agent security evaluations. As agentic AI assistants gain access to sensitive personal actions, this benchmark addresses an underexplored and increasingly realistic attack surface.