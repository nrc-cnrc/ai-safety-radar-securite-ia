# Research Papers (2026-08-08)

## Key Papers

**[The Vulnerability With No CVE: Managing Persistent Gaps Between Mandate and Authority in AI Coding Agents](https://arxiv.org/abs/2608.05884v1)**
This paper introduces the "agentic posture vulnerability" (APV) framework to address a critical gap in AI agent security - persistent deployed instances that span components and outlive individual events. The authors propose treating this as a task-conditioned vulnerability-management problem for agents that maintain state across multiple interactions. This matters because existing security frameworks fail to account for the temporal persistence and cross-component nature of modern AI agent deployments.

**[CircuitSteer: Geometrically Aligned Multi-Layer Steering via Sparse Autoencoder Circuits](https://arxiv.org/abs/2608.05732v1)**
Researchers present a novel approach to controlling large language model behavior through multi-layer interventions based on sparse autoencoder circuits, addressing limitations of current single-layer steering methods like Contrastive Activation Addition. The method uses geometrically aligned interventions across multiple layers to achieve more consistent behavioral changes. This work is significant for AI safety as it provides more reliable methods for steering model behavior across diverse inputs.

**[Subliminal Learning is Non-Semantic Distillation](https://arxiv.org/abs/2608.05734v1)**
This study investigates "subliminal learning," where biases or behaviors can be transferred from teacher models to student models through seemingly unrelated synthetic data, presenting challenges for AI safety auditing. The authors explore the mechanisms behind this phenomenon and its implications for ensuring predictable AI training. This matters for AI governance because standard data auditing would not detect hidden subliminal signals that could influence model behavior.

**[DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](https://arxiv.org/abs/2608.05695v1)**
The paper introduces a proactive runtime guardrail system that uses risk-aware world models to predict how unsafe actions might propagate across agent trajectories, moving beyond reactive safety checks. DreamGuard maintains a world model to assess cumulative risk rather than just evaluating individual actions in isolation. This is crucial for AI safety as it addresses the fundamental limitation of current guardrails that fail to model how risk evolves across multi-step agent interactions.

**[Learning When to Trust via Selective Context Preference Optimization](https://arxiv.org/abs/2608.06377v1)**
Researchers tackle the problem of language models being misled by external signals by developing selective trust mechanisms through a human-annotated benchmark (MIST) and corresponding training methods. The work addresses the critical issue where models either ignore all context (appearing robust but useless) or are easily misled by single false signals. This research matters for AI alignment as it develops principled approaches for models to appropriately weight external information against their training.

**[Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](https://arxiv.org/abs/2608.05715v1)**
This work exposes a new attack vector where adversarial text placed in a robot's visual field can act as indirect prompt injection into vision-language models used for robotic planning. The researchers demonstrate how physical world elements can compromise the instruction-following pipeline of VLM-controlled robots. This is significant for AI safety in robotics as it reveals how the tight coupling between perception and instruction-following creates exploitable vulnerabilities in deployed robotic systems.

**[Reversible Unlearnable Examples: Towards the Copyright Protection in Deep Learning Era](https://arxiv.org/abs/2608.06211v1)**
The authors address copyright protection in deep learning by developing methods to create "unlearnable examples" that prevent unauthorized training while being reversible for legitimate use. Their approach tackles two main threats: illegal training on protected data and potential data leakage that could compromise ownership. This work matters for AI governance as it provides technical tools for data owners to protect their intellectual property in an era of large-scale model training.

**[MMAligner: Safeguarding Multimodal Large Language Models through Representation Calibration](https://arxiv.org/abs/2608.05909v1)**
Researchers identify and address a critical safety gap where multimodal LLMs refuse unsafe text prompts but generate harmful responses to semantically equivalent multimodal inputs. Through geometric analysis of MLLM representations, they develop calibration methods to align multimodal and text-only safety responses. This is important for AI safety as it addresses fundamental inconsistencies in how models handle safety across different input modalities.

**[What Current AI Benchmarks Leave Unmeasured: Modality, Search, Citations, and Implications (for Safety Evaluations)](https://arxiv.org/abs/2608.06202v1)**
This audit reveals significant gaps in how AI benchmarks measure model capabilities, particularly around deployment conditions like web search access that may affect model behavior in real-world use. The authors compare different access modalities and evaluation conditions to show how benchmark results may not reflect actual deployment risks. This matters for AI safety evaluation as it highlights how current benchmarking practices may miss critical safety-relevant behaviors that emerge only under specific deployment conditions.