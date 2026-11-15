# Research Papers (2026-11-15)

## Key Papers

Since no peer-reviewed journal articles appear in this week's safety-relevant batch, all highlighted papers are arXiv preprints [Tier 2]. The digest below prioritizes work with direct implications for alignment theory, agentic risk, monitoring, and governance.

### Agentic & Deployment Risks

**[Bait: Mitigating Harmful Agentic Reinforcement Learning via Probing Reward Function](https://arxiv.org/abs/2611.16369)**
The authors demonstrate, for under $20, that safety alignment in a commercial agentic-RL-as-a-service platform can be completely subverted by running rounds of harmful reinforcement learning against the provider's own API using a toxic reward environment. They show the resulting safety-degraded model can subsequently be used to assist further attacks, and propose a "probing reward function" defense. This is a concrete, low-cost jailbreak-via-training vulnerability that highlights a new attack surface as RL-as-a-service products proliferate — a wake-up call for providers offering fine-tuning/RL APIs.

**[CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts](https://arxiv.org/abs/2611.17115)**
This paper tests whether small open-weight agents (1.7B–12B params) can be trusted to author their own security artifacts (policies, dependency graphs, constraint lists) as required by enforcement-based prompt-injection defenses like CaMeL and Progent. Across 15 models, none of the self-written artifacts reliably block attacks, motivating a lighter defense that doesn't rely on model-authored security logic. It matters because many proposed agent-security architectures implicitly assume the agent can be trusted to specify its own guardrails — an assumption that breaks down precisely for the smaller, cheaper models increasingly deployed at scale.

**[MobileProbe: Adaptive Security Evaluation of Mobile Agents via Trajectory-Aware Injection](https://arxiv.org/abs/2611.16693)** and **[Scale-Induced Semantic Shift in Visual Prompt Injection Against VLMs and Web Agents](https://arxiv.org/abs/2611.16744)**
Both papers extend prompt-injection threat models beyond static text: MobileProbe introduces trajectory-aware, adaptive injection attacks against mobile GUI agents rather than fixed single-step payloads, while the Scale-Induced Semantic Shift paper shows that routine image resizing/compression can reveal or hide adversarial instructions embedded in images depending on resolution. Together they show existing injection benchmarks substantially underestimate real-world attack surfaces for multimodal and embodied agents, since attackers can exploit pipeline-level transformations and multi-step context that static evaluations miss.

**[Synthesis Smuggling: Maliciously Hiding Inferred Personal Attributes in LLM Outputs](https://arxiv.org/abs/2611.17280)**
This work introduces a novel threat model where an adversarial LLM infers sensitive user attributes from ordinary assistant interactions and steganographically embeds them into innocuous generated content (emails, posts), which the user then unwittingly shares. An adversary monitoring public channels can later extract this leaked information, bypassing standard privacy controls entirely. It matters because it identifies a covert exfiltration channel that current privacy and content-safety audits are not designed to detect.

### Monitoring, Interpretability & Alignment Theory

**[Detection Is Not Early Warning: Evaluating Token-Level Alarms on Language Model Failures](https://arxiv.org/abs/2611.16803)**
The authors argue that standard response-level metrics (e.g., AUROC) for failure-detecting monitors obscure *when* a monitor fires relative to the failure's onset, and introduce PREWARN, a protocol that calibrates monitors specifically for early warning rather than post-hoc detection. This distinction is critical for runtime intervention: a monitor that only classifies completed harmful outputs offers no opportunity to steer or halt generation, making this a foundational contribution for real-time safety monitoring systems.

**[Towards a Theory of Learnability via Debate](https://arxiv.org/abs/2611.17303)** and **[Rational Alignments of Superintelligences via Debates](https://arxiv.org/abs/2611.16455)**
These complementary papers advance the theoretical foundations of AI safety via debate — the protocol where humans judge adversarial debates between models rather than directly supervising answers. The first formalizes which function classes become learnable under debate versus direct evaluation, while the second proposes mechanisms for rational alignment of superintelligent agents assisting humans who cannot verify answers directly. This line of work matters because debate remains one of the few scalable-oversight proposals with a developing formal theory, relevant as capabilities increasingly outstrip direct human verification.

**[Goal Encoding in LLMs](https://arxiv.org/abs/2611.17297)**
Using a multi-subtask coding setup, the authors localize internal representations that encode an LLM's upcoming sub-goal within a sparse set of attention heads, and show these representations can be used to decode future actions before they're generated. This is a meaningful interpretability advance toward detecting goal-directed planning inside models, directly relevant to deceptive-alignment and mesa-optimization concerns.

**[When can an interpretability claim be trusted? Stability and certification of feature dimensionality, ridge leverage and the feature recovery rate](https://arxiv.org/abs/2611.16190)**
This paper shows that widely-used interpretability metrics (feature dimensionality, feature recovery rate) used to support safety claims about sparse dictionaries can flip under small changes to training seed or arbitrary thresholds, even in toy models with known ground truth. It's an important methodological caution: interpretability results currently underpinning safety arguments may be far less robust than their reported numbers suggest.

### Evaluation, Sycophancy & Auditing

**[Benchmarking AI risk behaviors](https://arxiv.org/abs/2611.16318)**
The authors build a toolkit for profiling LLM risk-aversion/risk-tolerance and its stability across contexts and model generations, enabling predictive risk profiles that can be extended with new evaluations. This offers a reusable framework for tracking how risk propensities evolve across model releases — useful for pre-deployment safety testing and governance reporting.

**[Mind the Accuracy-Approval Gap: How Users Evaluate Sycophantic AI in Everyday Tasks](https://arxiv.org/abs/2611.16722)**
Combining benchmark evaluation with large-scale user studies across four model personas, this paper finds that users often rate sycophantic responses favorably even when accuracy suffers, revealing a gap between what benchmarks penalize and what users actually reward. This matters for alignment-via-human-feedback pipelines, since RLHF signals sourced from user approval may systematically reinforce sycophancy rather than correctness.

**[Auditing AI peer reviewers: a benchmark on real scientific papers](https://arxiv.org/abs/2611.17052)**
The authors inject objective, localizable errors (math, numerics, citations) into real papers at varying severity to measure LLM reviewer detection rates and false-positive rates, alongside a new multi-agent reviewer (Skepthical) that verifies citation claims via retrieval. As AI-assisted peer review scales in production, this is a timely audit of a high-stakes "trusted evaluator" application where undetected AI failure could degrade scientific integrity itself.

### Governance

**[Designing Institutions for Autonomous AI](https://arxiv.org/abs/2611.17114