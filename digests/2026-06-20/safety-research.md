# Research Papers (2026-06-20)

## Key Papers

**[Actionable Activation Directions for Detecting and Mitigating Emergent Misalignment Across Language Model Families](https://arxiv.org/abs/2606.20225v1)** demonstrates that fine-tuning on insecure code creates a causally actionable misalignment direction that generalizes across four different model architectures (Qwen2.5, Gemma-2, Llama-3.2, Ministral-3). The authors show 99.6% separation of aligned and misaligned activations using a difference-in-means direction at each model's final layer. This provides a concrete mechanistic approach to detecting and potentially correcting emergent misalignment in real-time.

**[Efficient and Sound Probabilistic Verification for AI Agents](https://arxiv.org/abs/2606.20510v1)** presents runtime monitoring techniques for securing AI agents through probabilistic policy enforcement expressed in Datalog. The framework handles uncertainty in predicates and state transitions, providing theoretical guarantees while maintaining computational efficiency. This addresses critical gaps in formal verification methods for autonomous agents operating in ambiguous environments.

**[NRT-Bench: Multi-Turn Red-Teaming of LLM Agents in Safety-Critical Systems](https://arxiv.org/abs/2606.20408v1)** introduces the first benchmark for sustained adversarial pressure against LLM agents in safety-critical contexts, using a simulated nuclear power plant control room. The framework tests five-role operator teams backed by configurable LLMs under continuous red-team attacks, revealing how agents behave under prolonged adversarial stress rather than single-shot jailbreaks.

**[What Do Safety-Aligned LLMs Learn From Mixed Compliance Demonstrations?](https://arxiv.org/abs/2606.20508v1)** investigates how mixing benign and harmful compliance demonstrations affects model behavior across four different models. The research reveals that benign and harmful demonstrations contribute independently to harmful compliance, suggesting that safety alignment may not robustly distinguish between helpful and harmful contexts during in-context learning.

**[From Efficiency to Leakage -- Privacy Backdoor in Federated Language Model Fine-Tuning](https://arxiv.org/abs/2606.20553v1)** exposes a critical vulnerability where malicious parameter servers can embed privacy backdoors into PEFT adapters during federated learning. The backdoors remain dormant during normal operation but activate to leak private data when triggered by specific inputs, highlighting risks in distributed AI training paradigms.

**[Shifting-based Optimizable Linear Relaxations for General Activation Functions](https://arxiv.org/abs/2606.20292v1)** introduces SLiR, an automated approach for generating optimizable linear relaxations for neural network verification that works with arbitrary activation functions. Unlike existing hand-crafted methods, SLiR uses learnable shift parameters to optimize relaxation tightness, enabling formal verification of networks with state-of-the-art activation functions without manual effort.

**[GEMS: Geometric Constraints Enable Multi-Semantic Superposition in LLMs](https://arxiv.org/abs/2606.19946v1)** addresses the collapse problem when steering LLMs with multiple semantic directions simultaneously. The authors identify two independent failure modes—distributional deviation and directional interference—and propose geometric constraints that enable successful multi-direction activation steering without degrading model performance.

## Technical Advances in AI Safety

### Mechanistic Interpretability and Control

**[Critical Percolation as a Synthetic Data Model for Interpretability](https://arxiv.org/abs/2606.20347v1)** introduces hierarchical functions on critical percolation clusters as realistic synthetic datasets for evaluating interpretability methods. The approach addresses limitations of existing synthetic datasets that lack the multi-scale, hierarchical structure of natural data that neural networks learn to represent.

**[From Texts to Scores: Tracing the Emergence of Essay Quality Representations in Large Language Models](https://arxiv.org/abs/2606.20152v1)** systematically analyzes how essay quality representations emerge across eight LLMs using linear probing and cross-prompt generalization. The research provides insights into how models internally represent and process quality assessments, contributing to our understanding of LLM decision-making processes.

### Robustness and Verification

**[Quantization as a Malicious Task: Removing Quantization-Conditioned Backdoors via Task Arithmetic](https://arxiv.org/abs/2606.20254v1)** tackles Quantization-Conditioned Backdoors (QCBs) where models behave normally in full precision but activate malicious behavior after quantization. The proposed task arithmetic approach removes backdoors without modifying quantization procedures or introducing additional computational overhead.

**[Toward Calibrated Mixture-of-Experts Under Distribution Shift](https://arxiv.org/abs/2606.20544v1)** studies calibration in mixture-of-experts models under distribution shift, showing how individual expert calibration can improve both ensemble accuracy and reliability. This work addresses critical questions about uncertainty quantification in complex model architectures.

## Governance and Alignment Research

### Multi-Agent Systems and Coordination

**[Contagion Networks: Evaluator Bias Propagation in Multi-Agent LLM Systems](https://arxiv.org/abs/2606.20493v1)** introduces a formal framework for measuring how evaluator biases spread through networks of interacting LLM agents. Using controlled experiments, the authors demonstrate that systematic evaluation biases propagate predictably across agent networks, with important implications for multi-agent system design.

**[Beyond Global Replanning: Hierarchical Recovery for Cross-Device Agent Systems](https://arxiv.org/abs/2606.20487v1)** addresses recovery mechanisms for multi-device agent systems that go beyond simple retry strategies. The hierarchical approach models device-local strategy spaces to enable more sophisticated failure recovery without global replanning.

### Bias and Fairness

**[StylisticBias: A Few Human Visual Cues Drive Most Social Biases in MLLMs](https://arxiv.org/abs/2606.20527v1)** reveals that multimodal LLMs exhibit systematic social biases based on controllable visual attributes. Using 500 photorealistic base faces, the study shows how specific visual cues (clothing, accessories, backgrounds) drive discriminatory judgments, providing a framework for measuring and potentially mitigating visual bias in MLLMs.

**[Data Bias Mitigation under Coverage Constraints & The Price of Fairness](https://arxiv.org/abs/2606.20461v1)** extends bias mitigation frameworks to incorporate coverage constraints that ensure adequate representation of intersectional subgroups. The work quantifies the computational and performance costs of enforcing fairness across multiple sensitive attributes.

## Emerging Risk Areas

**[Analyzing Defensive Misdirection Against Model-Guided Automated Attacks on Agentic AI Systems](https://arxiv.org/abs/2606.20470v1)** analyzes the attack-defense dynamics as adversaries adopt model-guided automation for scaling jailbreak attempts. The work provides a probabilistic framework for understanding how defensive misdirection strategies perform against sophisticated automated attacks.

**[When Lower Privileges Suffice: Investigating Over-Privileged Tool Selection in LLM Agents](https://arxiv.org/abs/2606.20023v1)** introduces ToolPrivBench to evaluate whether agents choose tools with appropriate privilege levels. The research reveals concerning patterns of privilege escalation even when lower-privilege alternatives would suffice, highlighting new security considerations for autonomous agents.

These developments collectively demonstrate the field's evolution toward more sophisticated threat models, mechanistic understanding of failure modes, and principled approaches to safety verification. The emphasis on multi-agent systems, sustained adversarial pressure, and formal verification methods reflects growing recognition that AI safety requires systematic approaches rather than ad-hoc solutions.