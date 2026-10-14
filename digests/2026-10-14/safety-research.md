# Research Papers (2026-10-14)

## Key Papers

[**SkillScreen: High-Recall Screening of Malicious Agent Skills with Decision Models**](https://arxiv.org/abs/2610.17727v1) presents a critical tool for detecting malicious agent skills before deployment. The system achieves 99% recall while flagging only 20-25% of benign skills, using a single forward pass to analyze skill descriptions. This high-precision screening is essential as AI agents become more powerful and the potential for misuse grows.

[**Kairos: Transactional Security Enforcement at the System Boundary for LLM Agents**](https://arxiv.org/abs/2610.18457v1) introduces a novel security framework that monitors LLM agent interactions at the system level, treating security violations as transactions that can be rolled back. This approach addresses the critical vulnerability of indirect prompt injection attacks by providing enforceable boundaries around agent actions rather than relying solely on the model's internal alignment.

[**Trust Before Autonomy: Rethinking Agentic Remote Sensing for Crisis Response**](https://arxiv.org/abs/2610.18789v1) challenges the assumption that AI agents should be granted broad autonomy from the start, arguing instead that autonomy should be earned through demonstrated reliability. The paper proposes that Earth observation agents should prove their epistemic honesty and verifiability before being trusted with critical crisis response decisions, directly addressing safety concerns in high-stakes applications.

[**On the Monitorability of Natural Language Autoencoders: Identification vs Discrimination**](https://arxiv.org/abs/2610.18727v1) examines the theoretical foundations of using Natural Language Autoencoders for AI oversight. The research reveals fundamental limitations in human monitors' ability to distinguish true from false explanations of model activations, raising important questions about the viability of this interpretability approach for safety-critical applications.

[**The Singularity Has a Distribution: Exact Timing Laws and Detection Limits for a Stochastic Intelligence Explosion**](https://arxiv.org/abs/2610.18445v1) provides the first rigorous mathematical treatment of AI capability explosion timing under realistic stochastic conditions. The paper derives explicit probability distributions for when capability thresholds might be reached, offering crucial insights for AI safety timelines and preparedness planning.

[**Holding Agents Accountable with Verifiable Agent Insurance**](https://arxiv.org/abs/2610.18230v1) proposes a novel accountability mechanism using smart contracts to create financial incentives for safe agent behavior. The system allows agent providers to commit financially to programmatic safety policies, creating market-based incentives for responsible AI deployment and providing recourse when agents cause harm.

[**FedGraph: Defending Federated Large Language Model Fine-Tuning Against Backdoor Attacks via Graph-Based Aggregation**](https://arxiv.org/abs/2610.18430v1) addresses critical security vulnerabilities in federated learning of LLMs by detecting malicious clients through consistency analysis. The method identifies backdoor attacks by examining how different clients' updates cluster together, providing a defense mechanism for collaborative AI training scenarios.

[**DPOison-VL: Clean Preference Poisoning in Vision-Language Direct Preference Optimization**](https://arxiv.org/abs/2610.18609v1) demonstrates a new class of attack against vision-language model alignment that uses imperceptible image modifications to corrupt preference learning. This work reveals how alignment processes themselves can be compromised, highlighting the need for more robust preference optimization methods.

## Safety and Alignment Research

Several papers advance our understanding of AI alignment challenges. [**Imprinting: Knowledge Distillation Can Shift Student Behavior**](https://arxiv.org/abs/2610.18517v1) reveals how knowledge distillation can unintentionally transfer behavioral biases beyond the intended capabilities, suggesting that alignment properties may transfer through seemingly neutral training processes. [**Empathy Is Not the Scapegoat for Declines in Factuality and Reliability**](https://arxiv.org/abs/2610.18541v1) challenges assumptions about trade-offs between model empathy and factual accuracy, finding that empathetic fine-tuning doesn't necessarily reduce reliability when properly controlled.

[**How Safe Is ChatGPT Health Advice? Evidence from Real User Conversations in Four Global South Countries**](https://arxiv.org/abs/2610.18465v1) provides the first demographically grounded safety evaluation of real-world health conversations with ChatGPT, revealing concerning disparities in advice quality across different populations and highlighting the need for more inclusive safety evaluation.

## Governance and Risk Assessment

[**AgentStripes: An Evidence-Graded Maturity Model for AI Agents**](https://arxiv.org/abs/2610.18603v1) introduces a systematic framework for assessing AI agent readiness across 40 capabilities and 12 process areas. The model establishes evidence-based gates that prevent agents from being deployed at higher capability levels without demonstrating appropriate safety controls.

[**Towards Safe Autonomy for Computer Use**](https://arxiv.org/abs/2610.18508v1) addresses safety challenges unique to computer-using agents, which interact with systems through visual interfaces rather than structured APIs. The work identifies how existing safety frameworks fail in this context and proposes new approaches for maintaining security boundaries.

## Technical Advances with Safety Implications

[**Readout Scaling Shapes Sparse Feature Recovery**](https://arxiv.org/abs/2610.18462v1) provides new insights into how sparse autoencoders learn interpretable features, with implications for mechanistic interpretability efforts. [**From Relation-Specific Heads to Shared Interventions: Contextual Entrainment in Language Models**](https://arxiv.org/abs/2610.18674v1) reveals that mechanisms behind contextual bias are more universal than previously thought, suggesting broader applicability of intervention techniques for controlling model behavior.

These developments collectively advance multiple fronts of AI safety research, from practical security tools to theoretical frameworks for understanding and managing AI risks. The emphasis on empirical evaluation, real-world testing, and systematic approaches to safety assessment reflects the field's maturation toward more rigorous safety science.