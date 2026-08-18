# Research Papers (2026-08-18)

## Key Papers

**[What Do Compliance Detectors Read? An Audit of Activation Probes and Guard Models](https://arxiv.org/abs/2608.16852v1)** demonstrates a critical failure in current compliance detection systems called "rule blindness"—detectors make verdicts based on surface features rather than actual rules. The researchers showed that removing rule text or replacing it with random content barely affected detector performance, while superficial changes to scenarios caused dramatic verdict shifts. This exposes a fundamental reliability problem for regulatory compliance monitoring in deployed AI systems.

**[Model Hypnosis: Strong control of AI via additive subliminal effects](https://arxiv.org/abs/2608.16834v1)** reveals that individually weak textual cues (paraphrases, typos) can be systematically combined to strongly control model behavior across frontier reasoning models. The phenomenon transfers between models and occurs across model families and scales, presenting novel risks since control happens through inconspicuous choices that evade detection. This challenges assumptions about prompt-based safety measures and input sanitization effectiveness.

**[BabelSteering: Multilingual Safety Alignment via English Steering Vectors](https://arxiv.org/abs/2608.16577v1)** addresses the critical gap in multilingual AI safety by using activation steering methods to transfer safety signals learned from English to other languages. Their approach significantly reduces harmful outputs in non-English languages while maintaining helpfulness, offering a scalable solution to the problem that most safety research remains English-centric despite global LLM deployment.

**[PCA-guided Activation Scaling for Monotonic Bidirectional Control over LLM Sycophancy](https://arxiv.org/abs/2608.16650v1)** introduces a method for fine-grained control over LLM sycophancy—the tendency to agree with user beliefs regardless of accuracy. Unlike existing methods, their approach ensures predictable and gradual behavioral changes in both directions (reducing and increasing sycophancy), which is crucial for applications where eliminating sycophancy entirely might over-correct against valid opinions.

**[GEO-Flag: Detecting and Measuring GEO-Optimized Web Content](https://arxiv.org/abs/2608.16824v1)** tackles the emerging threat of Generative Engine Optimization (GEO), where web content is modified to manipulate generative search engines. They develop detection methods for content strategically optimized to increase citation likelihood, which is particularly concerning because generative search synthesizes information into direct answers rather than presenting competing sources, potentially amplifying the influence of manipulated content.

**[CompoSkill: Compositional Skill Chain Attacks from Individually Scanner-Passing LLM Agent Skills](https://arxiv.org/abs/2608.16246v1)** exposes a fundamental vulnerability in AI agent safety: individually safe skills can create dangerous compositions when chained together by agents. Their research shows that current per-skill scanning approaches fail to detect risks that emerge from skill composition, highlighting a critical blind spot in marketplace-based AI agent ecosystems.

**[Towards Risk-free AI Agent Deployment](https://arxiv.org/abs/2608.16411v1)** argues for trajectory-based safety approaches as LLM agents move into production environments. The authors propose that risk mitigation must focus on the agent's complete execution trace—reasoning steps, tool invocations, and observations—since many failures are only visible in the trajectory rather than final outputs. This represents a shift from output-focused to process-focused safety evaluation.

**[Q-based Variational Inverse Reinforcement Learning](https://arxiv.org/abs/2608.16888v1)** presents a novel Bayesian approach to learning reward functions from expert demonstrations, addressing a fundamental challenge in AI alignment. By recovering posterior distributions over rewards rather than point estimates, this method could improve the robustness of preference learning systems and reduce the risk of reward misspecification in AI systems learning from human behavior.

## Research Trends and Implications

The research landscape shows heightened attention to **deployment-time safety challenges** as AI systems transition from research to production. Multiple papers address failures that emerge specifically in operational contexts—from compliance detector brittleness to compositional skill vulnerabilities in agent marketplaces.

**Multilingual safety gaps** represent a critical oversight as papers reveal that safety measures developed for English often fail in other languages, creating disparate safety levels for global users of the same systems.

**Process-oriented evaluation** is gaining traction over output-focused metrics, with researchers advocating for trajectory-based safety assessment and behavioral analysis throughout model execution rather than just examining final outputs.

The emergence of **adversarial optimization against AI systems** (GEO, model hypnosis) suggests an arms race where bad actors are developing sophisticated methods to manipulate AI behavior, requiring defensive research to keep pace with these evolving threats.