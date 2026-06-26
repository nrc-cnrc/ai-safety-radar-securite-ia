# Research Papers (2026-06-26)

## Key Papers

### Interpretability and Mechanistic Understanding

[**Beyond the Hard Budget: Sparsity Regularizers for More Interpretable Top-k Sparse Autoencoders**](https://arxiv.org/abs/2606.27321v1) improves upon the Top-k SAE architecture by introducing continuous sparsity regularizers that maintain architectural sparsity while enhancing feature interpretability. The authors show their regularized approach produces more monosemantic features compared to standard Top-k SAEs. This work matters because sparse autoencoders are becoming central tools for interpreting foundation models, and better feature interpretability directly improves our ability to understand model behavior.

[**From Weights to Features: SAE-Guided Activation Regularization for LLM Continual Learning**](https://arxiv.org/abs/2606.26629v1) addresses catastrophic forgetting in LLMs by using sparse autoencoders to identify which features need protection during continual learning, rather than protecting weights indiscriminately. They show that feature-level regularization outperforms traditional weight-based methods like EWC. This represents an important advance because it bridges mechanistic interpretability tools with practical continual learning, offering more precise control over what knowledge is preserved.

[**LMs as Task-Specific Knowledge Bases: An Interpretability Analysis**](https://arxiv.org/abs/2606.27237v1) investigates whether language models store factual knowledge in a unified, task-agnostic manner or encode it differently for different tasks. Through behavioral and mechanistic analyses, they find evidence that LMs encode knowledge in task-specific ways, with facts retrieved differently depending on the query type. This challenges the common view of LMs as general knowledge bases and has implications for how we understand and audit model knowledge.

### AI Safety and Alignment

[**Autoformalization of Agent Instructions into Policy-as-Code**](https://arxiv.org/abs/2606.26649v1) presents a pipeline that automatically translates natural language agent instructions and policies into formally verified code, providing provable safety guarantees rather than relying on probabilistic guardrails. They demonstrate the system on multi-step agent workflows with tool use, showing how formal verification can be integrated into practical agent deployments. This work is crucial for high-stakes agent applications where safety violations could have severe consequences.

[**Paved with True Intents: Intent-Aware Training Improves LLM Safety Classification Across Training Regimes**](https://arxiv.org/abs/2606.27210v1) introduces AIMS, a dataset that explicitly models user intent as a signal between prompts and harm labels, and shows that intent-aware training improves safety classification across multiple training paradigms. Despite using only 1,724 examples, their approach achieves competitive performance with much larger models. This matters because current safety classifiers often miss the distinction between adversarial intent and actual harm, leading to both false positives and missed attacks.

[**Inherited Circuits, Learned Semantics: How Fine-Tuning Creates Evasion Vulnerabilities Invisible to Standard Evaluation**](https://arxiv.org/abs/2606.27091v1) reveals how fine-tuning for security classification can create models that perform well on standard benchmarks but fail catastrophically under behavior-preserving transformations like PowerShell alias substitution. The authors show that models learn brittle token-level indicators rather than robust semantic understanding. This work highlights a fundamental evaluation gap in security applications where adversaries can exploit the difference between training and deployment conditions.

### Alignment and Training Methods

[**Reinforcement Learning without Ground-Truth Solutions can Improve LLMs**](https://arxiv.org/abs/2606.27369v1) introduces RiVER, a framework that enables RL training on optimization tasks without known ground-truth solutions by using deterministic execution feedback and group-relative comparisons. They demonstrate improvements on code generation and mathematical reasoning tasks. This is significant because it expands the applicability of RL fine-tuning beyond domains where we have verified correct answers.

[**Auditing Framing-Sensitive Behavioral Instability in Large Language Models for Mental Health Interactions**](https://arxiv.org/abs/2606.26982v1) systematically evaluates how semantically equivalent mental health queries presented with different contextual framings can elicit inconsistent responses from LLMs. They find significant behavioral variability that could undermine user trust and therapeutic effectiveness. This work is important because consistency and reliability are crucial for mental health applications, and framing effects represent a subtle but serious alignment challenge.

### Privacy and Security

[**Agents That Know Too Much: A Data-Centric Survey of Privacy in LLM Agents**](https://arxiv.org/abs/2606.26627v1) provides a comprehensive analysis of privacy risks in LLM agents that interact with databases, APIs, and persistent memory across sessions. The authors identify how sensitive information can leak not just through final outputs but through intermediate queries and state management. This work is essential as agent deployments become more complex and handle more sensitive data, requiring new privacy-preserving architectures.

[**ShareLock: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP**](https://arxiv.org/abs/2606.27027v1) demonstrates sophisticated poisoning attacks against the Model Context Protocol (MCP) that bridges LLMs with external tools. The attack uses distributed, threshold-activated triggers across multiple tools to evade detection while maintaining functionality. As MCP becomes foundational to agent ecosystems, understanding and defending against such attacks becomes critical for agent security.

### Evaluation and Robustness

[**HarmVideoBench: Benchmarking Harmful Video Understanding in Large Multimodal Models**](https://arxiv.org/abs/2606.27187v1) introduces a comprehensive benchmark for evaluating harmful content detection in videos, addressing the multi-layered nature of video harms and providing explanatory rationales. Current video safety evaluation focuses mainly on binary classification, missing implicit and contextual harms. This benchmark is crucial as multimodal models increasingly process video content in real-world applications where nuanced harm detection is essential.

[**From Celebrities to Anyone: Characterizing AI Nudification Content, Technology, and Community Dynamics on 4chan**](https://arxiv.org/abs/2606.27234v1) provides the first large-scale empirical study of AI-generated non-consensual sexually explicit imagery (SNEACI), analyzing 24,105 items from anonymous platforms. The research reveals the scope, targets, and community dynamics around this harmful use of generative models. This work is important for understanding real-world AI harms and informing both technical countermeasures and policy responses.