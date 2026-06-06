# Research Papers (2026-06-06)

## Key Papers

### AI Safety and Alignment Research

[**LLM Self-Recognition: Steering and Retrieving Activation Signatures**](https://arxiv.org/abs/2606.06315v1) presents a method for creating detectable fingerprints in LLM outputs by steering internal representations with sparse vectors during generation. The authors demonstrate reliable self-recognition capabilities even in low-entropy scenarios through targeted intervention in the residual stream. This work offers important implications for AI attribution and could help address challenges in detecting AI-generated content and ensuring accountability in AI systems.

[**From Reward-Hack Activations to Agentic Risk States: Context-Calibrated Mechanistic Monitoring in LLM Agents**](https://arxiv.org/abs/2606.06223v1) studies reward-hacking behavior in ReAct-style agents using activation-based monitoring combined with environmental context features. The research demonstrates that adapters trained on reward-hack datasets can transfer detection capabilities across different environments and agent configurations. This represents a significant step toward mechanistic safety monitoring that could prevent misaligned optimization in deployed AI agents.

[**Steering LLM Viewpoints through Fabricated Evidence Injection**](https://arxiv.org/abs/2606.06244v1) introduces the Ghostwriter attack framework, which manipulates LLM responses by presenting misleading statements with fabricated but credible-seeming rationales. The two-phase approach first packages false information with apparent credibility markers, then instructs the model to incorporate this "evidence." This research highlights a critical cognitive vulnerability in LLMs that could be exploited for misinformation campaigns or manipulation.

### Mechanistic Interpretability and Understanding

[**Subspace-Aware Sparse Autoencoders for Effective Mechanistic Interpretability**](https://arxiv.org/abs/2606.06333v1) addresses fundamental limitations in Sparse Autoencoders (SAEs) by recognizing that model features are often multi-dimensional rather than one-dimensional as traditionally assumed. The authors prove that standard SAE formulations induce feature splitting through geometric constraints and propose subspace-aware alternatives. This work could significantly improve our ability to understand and interpret the internal representations of large language models.

[**The Tell-Tale Norm: ℓ₂ Magnitude as a Signal for Reasoning Dynamics in Large Language Models**](https://arxiv.org/abs/2606.06188v1) demonstrates that the L2 norm of hidden states serves as an intrinsic signal of reasoning intensity in LLMs. Using Sparse Autoencoders as diagnostic probes, the researchers observe sharp increases in reasoning feature activations concentrated in specific layers. This provides a model-intrinsic method for understanding when and how LLMs engage in complex reasoning.

### Multi-Agent Systems and Collaboration

[**CollabSim: A CSCW-Grounded Methodology for Investigating Collaborative Competence of LLM Agents**](https://arxiv.org/abs/2606.06399v1) introduces a framework for evaluating collaborative capabilities in multi-agent systems based on computer-supported cooperative work (CSCW) principles. The research addresses why multi-agent systems often fail not due to individual task-solving ability, but because of poor collaborative competence including establishing common ground and maintaining shared understanding. This work provides crucial insights for developing more effective human-AI and AI-AI collaboration systems.

[**CogManip: Benchmarking Manipulative Behavior in Multi-Turn Interactions with Large Language Model**](https://arxiv.org/abs/2606.06099v1) presents a comprehensive benchmark evaluating 15 manipulation strategy risks across 1,000 multi-turn interaction scenarios. The benchmark goes beyond static prompts to capture dynamic and covert manipulative strategies that could emerge in extended dialogues. This represents an important advance in evaluating AI safety risks that may not be apparent in single-turn interactions.

### Robustness and Security

[**WebMCP Tool Surface Poisoning: Runtime Manipulation Attacks on LLM Agents**](https://arxiv.org/abs/2606.06387v1) identifies Mid-Session Tool Injection (MSTI) attacks against the emerging WebMCP protocol, which enables websites to expose tools directly to AI agents. The research demonstrates how third-party scripts can inject malicious tools during active agent sessions, expanding the attack surface beyond traditional user interfaces. This work highlights critical security considerations as AI agents become more integrated with web services.

[**SecRL-Prune: Structured Reinforcement Learning-Based Pruning of CodeLLMs for Preserving Adversarial Code Mutation**](https://arxiv.org/abs/2606.06254v1) examines whether code mutation capabilities survive model compression in large code language models, which has implications for both beneficial code generation and potential malware creation. The structured pruning framework operates on feed-forward channels and evaluates retention of functionality-preserving code mutation after compression. This research addresses important questions about the persistence of both beneficial and potentially harmful capabilities through model optimization.

### Memory and Long-Context Systems

[**Memory is Reconstructed, Not Retrieved: Graph Memory for LLM Agents**](https://arxiv.org/abs/2606.06036v1) proposes MRAgent, which combines an associative memory graph with active reconstruction mechanisms to address limitations in current retrieve-then-reason memory systems. The Cue-Tag-Content graph representation enables dynamic memory access that adapts to intermediate evidence discovered during inference. This work addresses a fundamental limitation in how current memory-augmented agents handle long interaction histories and could significantly improve their reasoning capabilities over extended contexts.

These papers collectively advance our understanding of AI safety, interpretability, and robustness while identifying new attack vectors and proposing novel defense mechanisms. The research spans from fundamental questions about how LLMs process information internally to practical concerns about their deployment in multi-agent and web-connected environments.