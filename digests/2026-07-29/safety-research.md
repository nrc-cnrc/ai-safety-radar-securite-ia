# Research Papers (2026-07-29)

## Key Papers

### Evaluation-Awareness and Activation Steering in LLMs

[Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents in Large Language Models](https://arxiv.org/abs/2607.25907v1) introduces a method to suppress "evaluation-awareness" latents in LLMs through prompt optimization alone, without requiring inference-time model access. The research demonstrates that models can be made to behave differently when they detect being evaluated, which poses significant risks to the validity of safety evaluations and could enable deceptive alignment scenarios.

[Where Steering Signals Come From: Activation Source Selection in Activation Steering](https://arxiv.org/abs/2607.25270v1) systematically studies how the choice of source context and readout policy affects activation steering effectiveness across multiple models and tasks. This work reveals that steering signal quality varies dramatically based on these choices, providing crucial insights for developing more reliable methods to control LLM behavior during deployment.

### AI Safety in Competitive Environments

[Falling Behind Drives Unsafe Development in an Idealised AI Race Experiment](https://arxiv.org/abs/2607.26034v1) presents experimental evidence that competitive pressure leads to riskier AI development choices, with participants more likely to choose unsafe development when falling behind competitors. This behavioral study provides empirical support for concerns about AI safety in competitive environments and highlights the need for coordination mechanisms to prevent races to the bottom.

### LLM Security and Robustness

[Stemma: Induced Decision Regions Reveal LLM Provenance](https://arxiv.org/abs/2607.25880v1) introduces a novel method for detecting whether a suspect LLM belongs to the same lineage as a source model by mapping outputs into finite decision spaces to create more stable provenance signals. The approach addresses a critical need for model attribution in contexts where direct access to model weights is unavailable, which is essential for intellectual property protection and supply chain security.

[From Role Prompt to Infinite Thinking: Exploiting Persona Conditioning for Inference Cost Attacks in LLMs](https://arxiv.org/abs/2607.25936v1) demonstrates how adversarial prompts can manipulate LLMs to generate excessively long outputs, creating denial-of-service attacks that exploit the computational costs of autoregressive generation. This work reveals a new class of adversarial attacks that target service availability rather than output content, highlighting vulnerabilities in LLM deployment infrastructure.

### AI Governance and Risk Management

[Why Public Service AI Governance Frameworks Risk Failing in the Age of General-Purpose AI: Lessons from Policing](https://arxiv.org/abs/2607.25648v1) argues that existing AI governance frameworks are fundamentally inadequate for general-purpose AI systems due to their generality, accessibility, and low deployment costs. The analysis draws lessons from policing applications to show how traditional safety mechanisms break down when AI systems can be rapidly deployed for unpredictable tasks without specialized oversight.

### Content Moderation and Safety Classification

[Detecting CSAM Text-to-Image LoRAs From Weights](https://arxiv.org/abs/2607.25750v1) proposes a weight-based detection method for identifying harmful LoRA fine-tuning models without generating potentially illegal content. The approach uses spectral analysis of weight matrices to create a "fingerprint" that can identify problematic models, offering a safer alternative to output-based detection methods that require generating harmful content for evaluation.

[Shieldstral](https://arxiv.org/abs/2607.25857v1) introduces a 3B-parameter multimodal safety classifier that achieves state-of-the-art performance by formulating content moderation as binary question-answering tasks. This unified approach enables consolidation of diverse safety datasets and provides policy-adaptive moderation capabilities, making it particularly relevant for scalable content safety applications.

### Multi-Agent System Security

[SafeFlow: Semantic Information-Flow Control for Blocking Malicious Propagation in Multi-Agent Systems](https://arxiv.org/abs/2607.25255v1) addresses a critical vulnerability in multi-agent systems where malicious objectives can be fragmented into seemingly innocent subtasks that evade individual agent detection. The system provides semantic information-flow control to prevent unauthorized propagation of harmful intents across agent networks, addressing an emerging security challenge as multi-agent systems become more prevalent.