# Research Papers (2026-06-30)

## Key Papers

Several significant developments emerged across AI safety research, spanning interpretability advances, alignment methodologies, and safety evaluation frameworks.

[**C²R: Cross-sample Consistency Regularization Mitigates Feature Splitting and Absorption in Sparse Autoencoders**](https://arxiv.org/abs/2606.30609v1) identifies critical reliability issues in Sparse Autoencoders (SAEs) used for LLM interpretability. The research reveals that feature splitting fragments coherent concepts into non-atomic latents while feature absorption creates arbitrary exceptions, severely compromising interpretability efforts. This work is crucial for mechanistic interpretability as it addresses fundamental flaws that could mislead safety researchers attempting to understand model internals.

[**Internal-State Probes Read the Situation, Not the Action: Three Negative Results for Pre-Action Misalignment Monitoring**](https://arxiv.org/abs/2606.30449v1) delivers concerning findings for AI safety monitoring approaches. Testing three methods across multiple model families, researchers found that internal state probes fail to reliably identify harmful actions before they occur, instead primarily reflecting prompt context rather than actual malicious intent. This challenges a key assumption underlying many proposed AI safety monitoring systems.

[**Safety from Honesty in a Disinterested AI Predictor**](https://arxiv.org/abs/2606.29657v1) presents a formal safety argument for training AI systems as "disinterested predictors" that approximate Bayesian posteriors without developing implicit agency. This high-profile collaboration involving Yoshua Bengio proposes that systems trained solely to predict can safely model agents and consequences without becoming goal-directed themselves, offering a potential path toward advanced AI that remains aligned by design.

[**CAREBench: A Child-Safety Risk Benchmark for Language Models**](https://arxiv.org/abs/2606.29685v1) addresses a critical gap in AI safety evaluation by focusing on child safety risks beyond explicit harm. The benchmark evaluates whether models recognize risks in adult manipulation, impersonation, profiling of minors, and inappropriate emotional dependence formation. This work is essential as current safety evaluations miss early-stage failures that could escalate into serious harm.

[**Fuzzing Large Language Models to Elicit Hidden Behaviours**](https://arxiv.org/abs/2606.29646v1) systematically studies methods for detecting hidden malicious behaviors in "sleeper agent" models. The research compares weight fuzzing versus activation fuzzing for revealing backdoored behaviors without knowing specific triggers, providing crucial tools for red-teaming potentially deceptive AI systems.

## Multi-Agent System Security and Governance

Research on multi-agent systems reveals new attack surfaces and governance challenges. [**Linguistic Firewall: Geometry as Defense in Multi-Agent Systems Routing**](https://arxiv.org/abs/2606.30555v1) exposes vulnerabilities in agent routing mechanisms that rely on unverified proxies for competence assessment. [**MESA: Prioritizing Vulnerable Communication Channels for Securing Multi-Agent Systems**](https://arxiv.org/abs/2606.30602v1) demonstrates that attack impacts are highly non-uniform across communication channels, with single compromised channels potentially degrading entire system performance.

[**Whose Side Is Your Agent On? Multi-Party Principal Loyalty in LLM Agents**](https://arxiv.org/abs/2606.30383v1) highlights alignment challenges in multi-party scenarios where agents must maintain loyalty to their principals while interacting with potentially adversarial counterparties. This research is vital as deployment scenarios increasingly involve complex stakeholder relationships.

## Evaluation and Benchmarking Advances

Several papers introduce improved evaluation methodologies. [**Sequential Fairness Auditing with Limited Output Access**](https://arxiv.org/abs/2606.30338v1) formulates fairness auditing as sequential hypothesis testing under query constraints, addressing real-world limitations faced by external auditors. [**EvalSafetyGap: A Hybrid Survey and Conceptual Framework for LLM Evaluation-Safety Failures**](https://arxiv.org/abs/2606.30219v1) exposes fundamental measurement problems where benchmark scores improve while actual safety properties remain unverified.

## Mechanistic Understanding and Interpretability

Beyond the SAE work mentioned above, [**Situation Perception: A Necessary Primitive to Artificial Superintelligence**](https://arxiv.org/abs/2606.30481v1) argues that current LLMs lack fundamental understanding of persistent physical reality, object permanence, and causation—capabilities essential for safe superintelligence. [**On the Faithfulness of Post-Hoc Concept Bottleneck Models**](https://arxiv.org/abs/2606.30498v1) questions whether learned concepts in interpretability methods actually correspond to the features used for predictions, revealing potential gaps between explanation and actual model behavior.

These developments collectively highlight both progress in AI safety research and persistent challenges in ensuring robust, interpretable, and aligned AI systems. The negative results on internal state probes and the identification of fundamental flaws in interpretability methods underscore the difficulty of the safety challenge ahead.