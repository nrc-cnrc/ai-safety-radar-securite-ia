# Research Papers (2026-08-22)

## Key Papers

### Context Leakage and Privacy Risks

[**Inadvertent Context Leakage in Language Models**](https://arxiv.org/abs/2608.19857v1) investigates whether sensitive user context (credentials, health records, financial data) in LLM context windows creates hidden correlations in benign outputs that could enable reconstruction attacks. The researchers demonstrate that adversaries can engineer prompts to amplify this effect, essentially using the model as a covert channel. This highlights a critical privacy vulnerability that could undermine the security of AI agents handling sensitive data.

### AI Safety Benchmarking and Evaluation

[**ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models**](https://arxiv.org/abs/2608.20338v1) addresses the challenge of selectively removing harmful knowledge from LLMs while preserving beneficial capabilities. The paper introduces a comprehensive benchmark that evaluates whether models can eliminate harmful behaviors in specific contexts while maintaining the same knowledge when used beneficially. This work is crucial for developing safer AI systems that can distinguish between harmful and legitimate use cases of the same underlying knowledge.

[**AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement**](https://arxiv.org/abs/2608.20318v1) presents the first benchmark specifically designed to test whether AI systems can improve their own training algorithms. The benchmark isolates the ability to design training algorithms from other capabilities, providing a direct test of recursive self-improvement potential. This research is essential for understanding whether current AI systems possess the foundational capabilities needed for autonomous self-improvement.

### Robustness and Alignment

[**TESTNAV: Pareto-Guided Search for Compositional Robustness Testing**](https://arxiv.org/abs/2608.19882v1) tackles the challenge of testing AI systems against multiple simultaneous corruptions (e.g., brightness shifts and motion blur combined). The authors develop a systematic approach to navigate the exponentially large space of corruption combinations while filtering out unrealistic test cases. This work is vital for ensuring AI systems remain robust in real-world scenarios where multiple perturbations often occur simultaneously.

[**Phantom Gains: Auditing Self-Improvement Against a Measured Null**](https://arxiv.org/abs/2608.20290v1) exposes measurement artifacts that can create false impressions of AI self-improvement. By comparing self-training results against a frozen control model pushed through identical pipelines, the researchers identify seven types of measurement failures that can invert reported findings. This methodological contribution is crucial for rigorously evaluating whether AI systems are genuinely improving themselves or merely exhibiting measurement artifacts.

### Jailbreak and Attack Methods

[**TempJail: Temporal Jailbreak Attack against Large Vision-Language Models via Subtitle Scheduling**](https://arxiv.org/abs/2608.19737v1) reveals a novel attack vector against vision-language models through temporal manipulation of video subtitles. Unlike previous approaches that focus on semantic content, this method exploits how information is organized over time to bypass safety mechanisms. This research highlights the importance of considering temporal dynamics in AI safety, especially as multimodal models become more prevalent.

### Foundation Model Safety Architecture

[**Understanding as an Explicit and Assessable Component of Frontier AI Safety Decisions**](https://arxiv.org/abs/2608.19816v1) proposes a methodology for making AI system understanding explicit and measurable in safety decisions. The authors argue that the existence of safety cases and system cards may not adequately demonstrate sufficient understanding, particularly when these artifacts are AI-generated under time pressure. This work is essential for maintaining human oversight and accountability in AI deployment decisions.