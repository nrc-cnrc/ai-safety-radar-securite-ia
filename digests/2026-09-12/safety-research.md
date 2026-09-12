# Research Papers (2026-09-12)

## Key Papers

[**Dual-domain self-supervised feature alignment via spectral–spatial representation learning for deepfake anomaly detection**](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0358049) introduces the Self-Supervised Dual-Domain Alignment (SDDA) framework, which jointly learns spatial and spectral representations for detecting deepfake manipulations without requiring large-scale supervised annotations. The method addresses the challenge of capturing subtle manipulation traces across both spatial and frequency domains. This represents a significant advance in unsupervised deepfake detection, potentially reducing the annotation burden while improving detection of sophisticated forgeries.

[**Data Scarcity and Model Sparsity: Mixtures-of-Experts Overfit More to Repeated Data**](https://arxiv.org/abs/2609.11917v1) demonstrates that Mixture-of-Experts (MoE) architectures are more vulnerable to overfitting on repeated training data compared to dense models. As human-written text becomes exhausted and data repetition becomes standard practice, this finding reveals a critical robustness issue with the increasingly dominant sparse architectures. This work highlights an important safety consideration for scaling MoE models in data-constrained environments.

[**From Parameters to Answers: How LLMs Retrieve and Use Their Internal Knowledge**](https://arxiv.org/abs/2609.11859v1) provides new insights into how language models access and utilize their internal knowledge through layerwise interventions during question answering. The research examines query-routing information and target knowledge dependencies across different model scales and question types. Understanding these internal mechanisms is crucial for improving model interpretability and identifying potential failure modes or knowledge gaps.

[**Deep-Fake CAPTCHA: Mitigating Next-Generation Social Engineering Attacks**](https://arxiv.org/abs/2609.11404v1) presents DF-CAPTCHA, an active defense system that prompts callers to perform tasks that are easy for humans but difficult for real-time deepfake systems to generate convincingly. The framework verifies responses using realism, identity consistency, task completion, and response time criteria. This proactive approach addresses the growing threat of real-time deepfake impersonation in voice and video calls.

[**The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement**](https://arxiv.org/abs/2609.11873v1) introduces a comprehensive framework for recursive self-improvement (RSI) in AI systems, progressing through multiple stages of autonomy from improvement execution to recursive meta-improvement. The work addresses a fundamental challenge in AI safety: how to enable systems to improve themselves while maintaining alignment and control. This research is particularly significant as it tackles one of the most consequential long-term AI safety challenges.

[**ActSafeGuard: Differentiable and Training-Aligned Constraint Enforcement for Flow-Matching Policies**](https://arxiv.org/abs/2609.11697v1) addresses safety constraints in Vision-Language-Action models and World-Action Models by introducing a differentiable constraint enforcement method during training rather than post-hoc correction. The approach ensures generated actions respect hard physical constraints while maintaining alignment between training and execution. This work is crucial for safe deployment of autonomous robotic systems in real-world environments.

[**RAG-Safety-Bench: Reliable Evaluation of Retrieval-Augmented LLM Safety**](https://arxiv.org/abs/2609.11758v1) provides a comprehensive evaluation framework for understanding how retrieval-augmented generation affects the safety of LLM responses when prompted for harmful content. The benchmark reveals that RAG can have unintended safety consequences, highlighting the need for safety-aware retrieval and generation mechanisms. This work is essential as more systems adopt RAG architectures for improved reliability.

[**SpecGuard: Inference-Time Backdoor Detection For Free**](https://arxiv.org/abs/2609.11799v1) develops a runtime monitoring system for detecting backdoors in deployed language models without requiring assumptions about trigger types or additional computational overhead. The system addresses the critical security risk of backdoored models in production environments where models are frequently updated. This represents an important advance in AI security for high-stakes deployments.

## Alignment and Control Research

[**Artificial Id: Drive and Persistent Alignment in Agentic AI**](https://arxiv.org/abs/2609.11911v1) proposes an adaptive internal drive system for determining when AI behavior should continue, stop, or change, addressing the control problem in persistent agentic systems. This work tackles the challenge of maintaining alignment as AI systems become more autonomous and operate across extended timeframes.

[**From Protocols to Evidence: Bounded Claims for AI in Service of the Common Good**](https://arxiv.org/abs/2609.11910v1) argues that responsible AI deployment requires evaluating both the technical system and the institutional context it enters. The framework emphasizes moving from principles to protocols while considering how AI can repair, compound, or substitute for existing institutional failures.

[**Autonomy, Social Norms, and Alignment: Towards a Developmental Framework for Autonomous Artificial Agents**](https://arxiv.org/abs/2609.11660v1) presents a developmental approach to AI alignment that emphasizes learning through direct environmental interaction rather than relying solely on pre-existing datasets and human feedback. This work addresses fundamental questions about how AI agents can develop appropriate behavioral norms in dynamic contexts.

## Robustness and Evaluation

[**Local Robustness Quantification for Naive Bayes Classifiers and Generative Forests: a General Approach**](https://arxiv.org/abs/2609.11366v1) provides methods for calculating prediction robustness in probabilistic graphical models by measuring how much the underlying distribution can be perturbed without changing predictions. This work contributes to the broader challenge of quantifying and ensuring robust AI decision-making under uncertainty.

[**ActMap: Single-Pass Uncertainty Quantification from Generation-Time Activation Maps**](https://arxiv.org/abs/2609.11498v1) introduces a white-box method for uncertainty quantification in language models that compresses the entire hidden-state trajectory into a fixed-size representation. This approach enables practical uncertainty assessment for determining when specific model outputs should be trusted.

[**Who Bears the Risk When Generative AI Enters Transport? A Distributional Sociotechnical Audit of Algorithmic Equity, Synthetic-Data Validity, and Public Trust**](https://arxiv.org/abs/2609.11611v1) develops an integrated framework for measuring distributional risks as generative AI enters transportation systems, examining how risks are distributed across heterogeneous populations and institutional contexts.

## Technical Safety Advances

[**Signing the Transaction but Not the Decision: Whisper Attacks and a Binding Defense for AP2**](https://arxiv.org/abs/2609.11757v1) identifies vulnerability in agent payment protocols where ordinary product descriptions can manipulate shopping agents into forming carts that pass protocol checks but don't match user requests. The work demonstrates how seemingly innocuous text can subvert AI agent decision-making in financial contexts.

[**From Intent to Execution Grant: An Execution-Boundary Conformance Profile for High-Risk AI Actions**](https://arxiv.org/abs/2609.11596v1) specifies EBL-Core, a semantic contract for the transition from AI action proposals to execution authority, addressing the critical gap in authorization frameworks for AI systems with external consequences.

[**Agent-Integrated Software: Interaction Contracts and Continuous Assurance**](https://arxiv.org/abs/2609.11381v1) introduces a software pattern for embedding intelligent agents in applications while maintaining dependable coordination between users and automated execution through explicit interaction contracts.

These papers collectively advance our understanding of AI safety across multiple critical dimensions: robustness to data distribution changes, interpretability of internal mechanisms, protection against adversarial manipulation, safe deployment in high-stakes domains, and frameworks for maintaining alignment as AI systems become more autonomous. The research spans both immediate practical concerns and longer-term challenges in AI governance and control.