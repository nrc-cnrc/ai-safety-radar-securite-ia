# Research Papers (2026-07-23)

## Key Papers

### [Defense Against LLM Backdoors using Critical Neuron Isolation Pruning](https://arxiv.org/abs/2607.19894v1)
Yuxi Li et al. propose a novel defense against backdoor attacks in large language models by identifying and pruning critical neurons that respond to malicious triggers. Their method addresses both fine-tuning-based backdoors and more sophisticated model-editing attacks that can bypass traditional training pipelines. This matters because it provides a practical defense mechanism against a growing class of attacks that could compromise LLM safety in deployment.

### [OPIUM: Mitigating Steering Externalities and Over-Refusal via Dual Objective Latent Optimization](https://arxiv.org/abs/2607.19806v1)
Kavin Aravindan et al. introduce a training-free method to sanitize activation steering vectors that cause unintended side effects in LLMs. OPIUM addresses the problem where utility-enhancing vectors weaken safety behaviors and safety vectors cause over-refusal on benign prompts through representation matching optimization. This is significant for AI safety as it enables more precise control over LLM behavior without compromising either capability or safety.

### [Sound Probabilistic Safety Bounds for Large Language Models](https://arxiv.org/abs/2607.20286v1)
Mahdi Nazeri et al. develop a framework for computing rigorous bounds on the probability that an LLM generates harmful output using Clopper-Pearson confidence intervals and latent space features to prioritize exploration of dangerous generation paths. This provides the first mathematically sound approach to quantifying LLM safety risks with probabilistic guarantees, which is crucial for deploying LLMs in safety-critical applications.

### [Integrity of peer-to-peer distributed LLM inference under malicious nodes](https://arxiv.org/abs/2607.19490v1)
Mert Cihangiroglu and Antonino Nocera investigate security vulnerabilities in distributed LLM inference where model layers are spread across multiple untrusted nodes. They analyze how malicious parties can tamper with layer outputs to corrupt final results and evaluate the computational cost of verification methods. This work is important as distributed inference becomes more common, highlighting critical trust assumptions that must be addressed for secure deployment.

### [OpenSkillRisk: Benchmarking Agent Safety When Using Real-World Risky Third-Party Skills](https://arxiv.org/abs/2607.20121v1)
Qiyuan Liu et al. construct a safety benchmark evaluating how well LLM-based agents recognize and avoid latent safety risks in third-party skills that only emerge during execution. Their systematic investigation reveals gaps in current agent systems' ability to identify seemingly harmless skills that contain hidden dangers. This addresses a critical safety challenge as agents increasingly rely on external tools and skills for enhanced capabilities.

### [JANUS: Foreseeing Latent Risk for Long-Horizon Agent Safety](https://arxiv.org/abs/2607.19913v1)
Yuan Xiong et al. propose a framework that trains safety guards to anticipate delayed risks from partial agent trajectories using multi-agent simulation and coupled anticipation-adjudication tasks. This shifts agent safety from reactive content moderation to proactive risk prevention before harmful actions occur. The work is significant because it addresses the challenge of preventing operational failures in long-horizon autonomous systems where risks may not be immediately apparent.

### [The Ethics of Autonomous AI Agents for Offensive Security](https://arxiv.org/abs/2607.20255v1)
Andreas Happe et al. examine the ethical implications of LLM-driven autonomous agents in offensive security, highlighting three dimensions of indeterminacy: non-deterministic policies, open-ended impact, and unlimited operational scope. They argue these properties create novel ethical challenges beyond traditional penetration testing tools. This analysis is crucial as autonomous security tools become more prevalent, requiring new frameworks for responsible development and deployment.

### [Don't Trust the Label: License Laundering in AI Supply Chains](https://arxiv.org/abs/2607.20300v1)
James Jewitt et al. trace 232,270 dataset→model→application chains across AI platforms, quantifying "license laundering" where legal obligations are stripped as artifacts move through the supply chain. They find systematic patterns where restrictive licenses are replaced with permissive ones, potentially violating original licensing terms. This research highlights critical governance gaps in AI development workflows that could lead to legal and ethical violations in AI deployment.

## Interpretability and Explanation

### [Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations](https://arxiv.org/abs/2607.20379v1)
Hiskias Dingeto reveals fundamental flaws in natural-language autoencoder approaches to explaining neural activations, showing that reconstruction-based faithfulness tests can pass while making incorrect claims about individual features. This work challenges a popular interpretability method and calls for more robust evaluation frameworks.

### [Reading and Steering Representations of Materials-Science Mechanisms in an Open-Weight Language Model](https://arxiv.org/abs/2607.20058v1)
Markus J. Buehler demonstrates that materials science concepts in the Gemma model exist in three separable forms: readable individual states, controllable transformations between states, and causally influential internal representations. This provides evidence that LLMs develop structured internal knowledge that can be both interpreted and manipulated for scientific applications.

## Training and Optimization

### [Reinforcement Learning for Large Language Model Selective Evidence Adoption from Contaminated Retrieval Results](https://arxiv.org/abs/2607.20090v1)
Yanyu Chen et al. introduce SelectBench and training methods to help LLMs selectively adopt relevant information while rejecting deceptive content in retrieval contexts. This addresses a critical challenge for retrieval-augmented models that must handle mixed-quality evidence sources without blanket refusal or uncritical adoption.

### [Co-Evolving LLM Evaluators and Policies via DynamicRubric](https://arxiv.org/abs/2607.20083v1)
Beining Wang et al. propose a method to address collapsed evaluator score gaps during policy optimization by co-evolving both the policy and evaluator. Their approach maintains meaningful supervision signals as models improve, solving a key bottleneck in reward-based training methods.

## Robustness and Security

### [Adversarial Frontiers: Minimum-Norm Attack Ensembles for Robustness Evaluation](https://arxiv.org/abs/2607.19855v1)
Luca Scionis et al. argue that current adversarial robustness evaluation using single perturbation budgets is fundamentally limited and propose minimum-norm attack ensembles that provide evidence of optimality. This challenges standard evaluation practices and provides more rigorous robustness assessment methods.

### [GhostPrompt: Cross-Image Adversarial Prompt for Vision-Language Models](https://arxiv.org/abs/2607.19683v1)
Li Zeng et al. introduce cross-image transferable adversarial prompts that work across different images, revealing a new class of vulnerability in vision-language models. This extends beyond image-specific attacks to more generalizable threats that could affect deployed VLM systems.