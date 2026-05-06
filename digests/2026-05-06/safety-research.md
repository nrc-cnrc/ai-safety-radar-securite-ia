# Research Papers (2026-05-06)

## Key Papers

### AI Safety and Control

**[Steer Like the LLM: Activation Steering that Mimics Prompting](https://arxiv.org/abs/2605.03907v1)** investigates whether activation steering methods can match the effectiveness of prompt-based approaches for controlling large language model behavior. The research reveals that popular activation steering methods often fail to faithfully replicate the mechanics of successful prompts, leading to underperformance compared to direct prompting. This matters because reliable steering mechanisms are crucial for maintaining control over AI systems in deployment, and understanding the gap between different control methods informs better safety interventions.

**[Where Paths Split: Localized, Calibrated Control of Moral Reasoning in Large Language Models](https://arxiv.org/abs/2605.03609v1)** presents Convergent-Divergent Routing, a method for steering LLMs toward desired ethical frameworks while preserving general competence. The approach identifies minimal branch points within transformer blocks where ethical pathways diverge and selectively gates non-target branches to control moral reasoning. This work addresses a critical challenge in AI alignment by enabling fine-grained control over value-laden decisions without compromising model capabilities.

**[Contextual Multi-Objective Optimization: Rethinking Objectives in Frontier AI Systems](https://arxiv.org/abs/2605.03900v1)** argues that frontier AI systems fail in open-ended settings because they lack robust methods for handling ambiguous, context-dependent, or partially observable objectives. The paper proposes contextual multi-objective optimization as a framework for managing competing goals in real-world applications like scientific assistance and autonomous agents. This matters for AI safety because objective misspecification is a fundamental source of AI risks, and better frameworks for handling uncertain objectives are essential for reliable AI deployment.

### AI Risk Assessment and Red Teaming

**[Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours](https://arxiv.org/abs/2605.04019v1)** addresses the inefficiency of current AI red teaming approaches that require weeks of manual workflow construction. The work proposes automated frameworks that can rapidly identify security and safety vulnerabilities in AI systems within hours rather than weeks. This is critical for AI safety because the current pace of AI development outstrips traditional safety evaluation methods, creating dangerous gaps in security assessment.

**[MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents](https://arxiv.org/abs/2605.03952v1)** introduces a benchmark of 199 three-stage attack chains that evaluate how coding agents can be manipulated to produce exploitable code through sequences of innocuous-looking requests. Each attack chain demonstrates how agents that pass individual safety reviews can still compose routine engineering tasks into malicious outcomes. This highlights a structural vulnerability in current AI safety approaches that evaluate requests in isolation rather than considering emergent risks from sequential interactions.

### Trust and Verification

**[Atomic Fact-Checking Increases Clinician Trust in Large Language Model Recommendations for Oncology Decision Support: A Randomized Controlled Trial](https://arxiv.org/abs/2605.03916v1)** demonstrates through a randomized trial of 356 clinicians that atomic fact-checking—decomposing AI recommendations into individually verifiable claims linked to source documents—substantially increases trust compared to traditional explainability methods. The study found atomic fact-checking produced a large effect on trust (Cohen's d = 0.94), increasing clinician trust from 26.9% to 66.5%. This matters for AI safety in high-stakes domains because appropriate calibration of human trust in AI systems is essential for safe human-AI collaboration.

### Emerging Risks and Governance

**[Brainrot: Deskilling and Addiction are Overlooked AI Risks](https://arxiv.org/abs/2605.03512v1)** argues that AI safety research has focused too narrowly on direct harms while overlooking systemic risks from widespread AI dependency. The paper identifies deskilling (loss of human capabilities due to AI reliance) and behavioral addiction to AI systems as significant but understudied risks. This matters because these psychological and social risks could undermine human agency and competence over time, creating long-term vulnerabilities even from seemingly beneficial AI use.

### Technical Safety Advances

**[Safety and accuracy follow different scaling laws in clinical large language models](https://arxiv.org/abs/2605.04039v1)** introduces the SaFE-Scale framework, revealing that clinical LLM safety and accuracy scale differently across model size, evidence quality, and inference strategies. The research shows that increasing model capabilities doesn't necessarily improve safety, and that confident, high-risk errors can matter more than average performance metrics. This finding challenges the assumption that scaling model capabilities automatically improves safety, highlighting the need for safety-specific evaluation and development approaches.

**Note**: Coverage is limited as ArXiv does not publish new submissions on weekends, and this digest covers papers from May 5, 2026 (a Monday).