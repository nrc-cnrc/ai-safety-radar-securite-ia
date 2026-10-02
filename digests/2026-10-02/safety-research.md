# Research Papers (2026-10-02)

## Key Papers

### Safety and Security Advances

**[External Observers May See More Clearly: Cross-Model Span-Level Hallucination Detection in Large Language Models via Hidden State Probing](https://arxiv.org/abs/2610.02066v1)** introduces a framework for detecting hallucinations at the span level by analyzing internal hidden states across different models. The approach moves beyond simple token-wise classification to capture structured semantic drift in LLM outputs. This represents an important step toward more granular and reliable hallucination detection systems.

**[Walking the Embedding Space: Datastore Extraction from Multimodal RAG](https://arxiv.org/abs/2610.01871v1)** demonstrates a novel attack against multimodal RAG systems that can extract private information from embedding datastores through adaptive querying strategies. The work exposes new privacy vulnerabilities in retrieval-augmented systems that process both text and images. This highlights critical security considerations for deploying RAG systems with sensitive data.

**[A Safe Prototype Is Not a Safety Direction: Reference Dependence and Prompt Confounds in Response-Safety Embeddings](https://arxiv.org/abs/2610.01801v1)** challenges existing methods for scoring response safety through cosine similarity to "safe" embeddings, showing that such approaches suffer from reference dependence and prompt confounds. The analysis reveals fundamental limitations in current safety detection mechanisms. This work is crucial for developing more robust safety evaluation methods.

### Alignment and Governance

**[Can AI Oversight Be Zero Knowledge?](https://arxiv.org/abs/2610.01995v1)** explores whether AI systems can be verified for correctness without revealing the underlying confidential data they process. The work investigates interactive proofs and debate mechanisms for oracle-aided computation where correctness depends on private information. This addresses a fundamental challenge in AI oversight where verification must preserve privacy.

**[TRACE: Trajectory Return Attribution and Contrastive Erasure for Multi-Turn Safety](https://arxiv.org/abs/2610.01323v1)** provides theoretical analysis of safety alignment in multi-turn conversations, showing how single-turn safety training can bound multi-turn trajectory risk. The work offers sufficient conditions and characterizes failure modes in sequential safety scenarios. This is essential for understanding how safety properties transfer across conversation contexts.

### Mechanistic Interpretability

**[Beyond Linear Concepts: Discovering and Aligning Non-Linear Concept Manifolds in Large Language Models](https://arxiv.org/abs/2610.01821v1)** extends mechanistic interpretability beyond the standard linearity assumption by adapting non-linear concept discovery methods to LLM token representations. The approach reveals that many concepts in language models are organized as non-linear manifolds rather than linear directions. This challenges fundamental assumptions in current interpretability research and opens new directions for understanding model internals.

**[Every Ablation Is a Dose: Counterweights and the Semblance of Self-Repair](https://arxiv.org/abs/2610.02173v1)** provides a mechanistic explanation for the observed "self-repair" phenomenon in language models, showing it results from pre-existing gains rather than adaptive compensation. The work reframes ablation studies through a geometric lens that reveals how interventions interact with existing model structure. This resolves longstanding questions about whether models truly adapt to interventions or simply reveal existing mechanisms.

### Foundation Model Capabilities

**[Are We Recovering Mechanisms? Objective-Level Recovery Gaps in Mechanistic Interpretability](https://arxiv.org/abs/2610.02098v1)** demonstrates that faithfulness metrics in mechanistic interpretability can prefer circuits that reproduce model behavior less well, creating systematic gaps between evaluation objectives and true mechanism recovery. The analysis reveals fundamental limitations in current circuit discovery methods. This work is critical for ensuring that interpretability methods actually identify the mechanisms they claim to find.

**[The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in Large Language Models](https://arxiv.org/abs/2610.02191v1)** introduces "Mathematical Primitives" to systematically diagnose structural understanding in LLM mathematical reasoning, moving beyond surface-level performance metrics. The framework enables targeted improvements in post-training by identifying specific reasoning gaps. This provides a principled approach to enhancing mathematical capabilities in foundation models.