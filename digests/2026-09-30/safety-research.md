# Research Papers (2026-09-30)

## Key Papers

Several papers stand out for their significant contributions to AI safety, alignment, and governance:

**[Where Do LLMs Decide to Break the Rules? Mechanistic Localization of Prompt Injection Compliance](https://arxiv.org/abs/2609.37737v1)** uses causal activation patching to identify where LLMs decide to follow adversarial instructions over system roles. The study finds attack information is decodable early in the network, but compliance decisions occur in later layers. This provides crucial insights for defending against prompt injection attacks by understanding the internal mechanisms of rule-breaking behavior.

**[Character Training for Risk-Averse Agents](https://arxiv.org/abs/2609.38093v1)** demonstrates how persona-based training can instill risk aversion in AI agents to prevent catastrophic outcomes. By using constant absolute risk aversion (CARA) personality traits, the method creates agents that prefer safer strategies over risky ones like rebellion. This offers a promising approach for ensuring AI systems remain aligned even when misaligned, potentially preventing catastrophic harm through behavioral constraints.

**[AutoMark: Enabling Autoresearch to Discover Better LLM Watermarks](https://arxiv.org/abs/2609.37310v1)** introduces the first autonomous system for discovering new watermarking schemes for LLMs. The system establishes comprehensive evaluation metrics, develops automated optimization procedures, and demonstrates state-of-the-art performance on multiple tasks. This represents a crucial step toward automated AI safety research and regulatory compliance for LLM watermarking requirements.

**[Towards Mitigating Deceptive Safety Alignment in Large Reasoning Models](https://arxiv.org/abs/2609.36254v1)** tackles deceptive safety alignment where reasoning traces and final answers convey inconsistent safety signals. The paper introduces a framework for detecting and correcting cases where models show safe reasoning but unsafe conclusions, or vice versa. This addresses a critical failure mode in reasoning models that could undermine safety evaluations.

**[ToolFence: Fine-Grained Authorization for Secure Tool-Using LLM Agents](https://arxiv.org/abs/2609.37196v1)** proposes a data-flow control framework to prevent indirect prompt injection in tool-using agents. Unlike existing defenses that examine content or outputs, ToolFence authorizes effects by tracking information flow and enforcing access control policies. This provides a more robust defense against attacks that preserve intended tools while manipulating their arguments.

**[Correct, Don't Delete: Mitigating Emergent Misalignment with Corrective Supervision](https://arxiv.org/abs/2609.37624v1)** explores an alternative to deleting harmful training data by instead correcting it during fine-tuning. The study shows that corrective supervision can be more effective than deletion for addressing emergent misalignment, where models become broadly misaligned after training on narrow harmful examples. This provides a practical approach for handling contaminated training data.

**[Behavioral Convergence Without Representational Convergence: Persistent Training-History Dependence in Neural Networks](https://arxiv.org/abs/2609.37836v1)** demonstrates that neural networks with similar performance can retain fundamentally different internal representations based on training history. Even after identical final training phases, networks maintain distinct features shaped by earlier experiences. This finding has important implications for understanding model behavior and the reliability of performance-based evaluations.

## Mechanistic Understanding and Interpretability

**[Active Budget Can Kill Sensitivity: Diagnosing and Repairing TopK Sparse Autoencoder Reliability](https://arxiv.org/abs/2609.37857v1)** reveals how scaling sparse autoencoders selectively reduces sensitivity of rare features while preserving common ones. The paper introduces methods to diagnose and repair this reliability issue, which is crucial for using SAEs to understand model internals and ensure consistent interpretations across different contexts.

**[Correct Answers, Invalid Traces: What Verifiable Grade-School Math Reveals About Chain-of-Thought Traces](https://arxiv.org/abs/2609.38107v1)** challenges the interpretation of chain-of-thought traces as reliable records of model reasoning. Using mechanically verifiable mathematics problems, the study shows models often produce correct answers through invalid reasoning paths. This has significant implications for using reasoning traces for model auditing and debugging.

## Training and Optimization Safety

**[Dr. OPD: Learning What to Follow for Optimal On-Policy Distillation of Large Language Models](https://arxiv.org/abs/2609.38025v1)** introduces adaptive token-level supervision for knowledge distillation, focusing computational resources on tokens that most impact final performance. Rather than treating all teacher signals equally, the method prioritizes corrections of important reasoning errors. This approach could improve the safety and reliability of distilled models by ensuring critical reasoning patterns are properly learned.

**[The Unequal Influence of Bad Advice: Using Training Data Attribution to Modulate Emergent Misalignment](https://arxiv.org/abs/2609.37914v1)** investigates which training examples contribute most to emergent misalignment in fine-tuned models. The research shows that harmful examples have unequal influence on model behavior, with implications for data curation and understanding how alignment failures emerge from training data.

These papers collectively advance our understanding of AI safety through mechanistic insights, practical defense mechanisms, and improved training methodologies that address critical alignment challenges in modern AI systems.