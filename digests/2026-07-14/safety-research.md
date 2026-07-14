# Research Papers (2026-07-14)

## Key Papers

### Safety and Alignment

[**HyperSafe: Inference-Time Safety Recovery for Fine-Tuned Language Models**](https://arxiv.org/abs/2607.11475v1) addresses a critical vulnerability in deployed AI systems: how safety alignment can degrade during task-specific fine-tuning. The authors propose a post-hoc approach that modifies model activations at inference time to restore safety properties without retraining or weight modifications. This represents a practical solution for maintaining safety in production environments where models undergo continuous adaptation.

[**Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias**](https://arxiv.org/abs/2607.11871v1) takes a novel mechanistic approach to understanding bias in LLM evaluation systems. Rather than only examining input-output patterns, the researchers analyze the internal representations that drive biased judgments across seven judges and seven bias types. This work is crucial as LLM-as-judge systems become increasingly central to AI evaluation and deployment decisions.

[**When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems**](https://arxiv.org/abs/2607.11751v1) exposes a fundamental limitation in current multi-agent safety monitoring. The paper demonstrates how harmful payloads can be split across agents such that each individual agent passes safety checks while the assembled system executes attacks. This reveals critical blind spots in distributed AI safety architectures that will become increasingly important as multi-agent systems scale.

### Model Capabilities and Evaluation

[**Metacognition in LLMs: Foundations, Progress, and Opportunities**](https://arxiv.org/abs/2607.11881v1) provides a comprehensive survey of metacognitive abilities in large language models - their capacity for self-awareness, self-monitoring, and self-regulation. The paper argues that metacognition is foundational for reliable, transparent AI systems and identifies key research directions. This matters because metacognitive capabilities are essential for AI systems that can reliably assess their own knowledge boundaries and communicate uncertainty.

[**Evidence-Backed Video Question Answering**](https://arxiv.org/abs/2607.11862v1) introduces a new task requiring video LLMs to provide both semantic answers and precise visual evidence for their responses. The work addresses the "black box" problem in video understanding by demanding that models ground their reasoning in specific visual content through dense segmentation masks. This advancement is significant for building more interpretable and verifiable multimodal AI systems.

### Robustness and Security

[**Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming**](https://arxiv.org/abs/2607.11698v1) presents an automated approach for red-teaming production LLM agents that operate over untrusted content. Unlike existing methods that focus only on attack success rates, this work studies the enabling conditions behind unsafe agent behavior and scales red-teaming to keep pace with evolving models and tools. This is critical as LLM agents increasingly handle sensitive operations in production environments.

[**AMT-X: Phase-Structured Multi-Turn Red-Teaming with Checklist-Gated Evaluation**](https://arxiv.org/abs/2607.11151v1) addresses limitations in current safety evaluation by introducing structured multi-turn adversarial testing. The framework uses explicit phases rather than ad-hoc escalation and employs detailed checklists that distinguish between partially and fully actionable harmful outputs. This provides more nuanced safety evaluation as conversational AI systems become more sophisticated.

### Technical Innovation

[**Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data**](https://arxiv.org/abs/2607.11883v1) introduces a novel compression paradigm that achieves remarkable results by having models generate their own training data during compression. The approach realizes information-theoretic compression bounds and demonstrates that neural networks can discover and exploit regularities in their learned functions. This breakthrough could fundamentally change how we think about model efficiency and the relationship between compression and generalization.

[**Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks**](https://arxiv.org/abs/2607.11875v1) provides theoretical insight into how Transformers develop inductive reasoning capabilities during training. The work proves that attention model dynamics can be confined to high-dimensional invariant manifolds that enable systematic generalization across multiple reasoning tasks. This theoretical foundation helps explain the emergent reasoning abilities that make modern language models so capable.