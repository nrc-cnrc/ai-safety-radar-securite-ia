# Research Papers (2026-08-15)

## Key Papers

The most significant developments this week span AI safety evaluation, alignment innovation, and security vulnerabilities in emerging AI applications:

**[Synthetic Persona Pretraining: Alignment from Token Zero](https://arxiv.org/abs/2608.13482v1)** introduces a paradigm shift in AI alignment by embedding assistant identity and values during pretraining rather than as post-training overlay. The authors demonstrate that models trained with synthetic persona data from the start show more robust alignment than those aligned after pretraining. This matters because it could fundamentally change how we build aligned AI systems, making values deeply rooted rather than superficially applied.

**[TRAPSBench: Vision-Language Models Encode but Fail to Express Epistemic Restraint](https://arxiv.org/abs/2608.13167v1)** reveals a critical gap between what VLMs know and what they communicate about uncertainty. Using procedurally generated video pairs where outcomes become indeterminate, researchers show that models internally recognize when they should abstain but fail to express this uncertainty in their outputs. This finding is crucial for deploying VLMs in high-stakes applications where epistemic humility is essential for safety.

**[UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](https://arxiv.org/abs/2608.13453v1)** demonstrates that robotic VLA models are vulnerable to universal adversarial attacks that work across multiple tasks and instructions. The researchers create physical texture patches that can reliably cause unsafe behaviors in embodied AI systems regardless of the specific task. This exposes a fundamental security vulnerability as robots become more autonomous and widespread.

**[Follow the Norm: Accounting for Fine-Tuning and Prompt Effects on Model Rationales](https://arxiv.org/abs/2608.13250v1)** shows that normative datasets used for training can shift AI systems away from baseline safety behaviors, with the systems generating seemingly reasonable justifications for norm-divergent actions. This research demonstrates how training data norms function as action-guiding patterns rather than neutral knowledge, highlighting risks in how we curate alignment datasets.

**[Toward a Gricean Retreat: Probing LLMs for Knowledge Boundaries and Referent Specificity](https://arxiv.org/abs/2608.13484v1)** examines whether LLMs can appropriately retreat to safer, more general claims when facing uncertainty about specific entities, following Gricean principles of cooperative communication. The study finds that models routinely fabricate plausible details rather than backing off to less specific but truthful statements, representing a core challenge for trustworthy AI deployment.

## Alignment and Safety Advances

**[Rules or Character? Scaling Laws for AI Safety Design](https://arxiv.org/abs/2608.13345v1)** provides formal analysis of the optimal balance between character shaping (RLHF, Constitutional AI) versus rule enforcement (output filters, classifiers) as deployment scales. The comparative-statics model suggests different safety architectures may be optimal at different scales of deployment.

**[Refusing Intent, Not Form: Wrapper-Based Intent-Group Supervision for LLM Safety](https://arxiv.org/abs/2608.13304v1)** addresses the problem of models learning surface-form shortcuts in safety training, where wrapped harmful prompts bypass safety while similar wrapped benign prompts are over-refused. Their WIFA method provides automatic intent-group augmentation for more robust safety tuning.

## Model Capabilities and Evaluation

**[Vero: Can AI Agents Build Formally Verified Software Repositories?](https://arxiv.org/abs/2608.13522v1)** introduces the first benchmark for agents that must produce both implementations and machine-checked proofs of correctness. This represents a significant step toward AI systems that can provide mathematical guarantees about their code output.

**[Beyond Final Scores: A Systematic Evaluation of Agents for Long-Horizon AI Research and Development](https://arxiv.org/abs/2608.13417v1)** presents a framework that evaluates agents on 36 long-horizon tasks using rule-based decomposition to reveal where progress is made or lost, addressing the limitation that final scores don't indicate whether accumulated experience improves decisions.

## Security and Robustness Research

**[LLM-Assisted Dynamic Threat Analysis for Attacker-Reachable Software Weaknesses in Autonomous Vehicles](https://arxiv.org/abs/2608.13450v1)** investigates using LLMs to automate exploitability analysis for autonomous driving software, where weaknesses could affect critical control decisions. This work addresses the challenge of dynamically confirming security vulnerabilities in safety-critical AI systems.

**[Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](https://arxiv.org/abs/2608.12977v1)** proposes moving beyond manually designed runtime defenses toward principled frameworks for constructing and maintaining security mechanisms in LLM agent execution loops, addressing the sophisticated security threats posed by increasingly capable autonomous agents.