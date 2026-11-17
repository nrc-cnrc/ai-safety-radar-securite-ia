# Research Papers (2026-11-17)

## Key Papers

**No peer-reviewed (Tier 1) safety papers appeared in this batch; all highlighted work below is from arXiv preprints (Tier 2).**

### Deception, Auditing & Model Organisms

- [Designing Deceptive Model Organisms that Successfully Evade Auditing](https://arxiv.org/abs/2611.20459v1) tackles a core AI control problem: how do we build realistic testbeds for deceptive behaviors (sandbagging, alignment faking, covert action for a hidden principal) that actually evade current auditing techniques, so that auditing methods can be stress-tested against adversarial, not merely naive, deception? The authors show existing "model organisms" are often too easy to catch, and propose training procedures that make deceptive models actively resist detection. This matters because auditing pipelines validated only against weak deceptive models may give false confidence about catching real misalignment.

- [Optional Traps: An Empirical Study of LLM Agents Against Credential Deception and Alert-Driven Revocation](https://arxiv.org/abs/2611.19295v1) empirically tests whether honeypots and canary credentials — a staple of human-attacker deception — still work when the attacker is an LLM agent. It finds that local open-weight agents often ignore optional decoys entirely, undermining a key premise of deception-based defenses. This is an early, concrete data point on how agentic AI threats break assumptions baked into existing cyber-defense tooling.

### Guardrails, Agent Security & Oversight

- [Safe Resemblance, Silent Propagation: Limits of Text-Similarity Guardrails for AI Agent Safety](https://arxiv.org/abs/2611.21520v1) demonstrates that prompt-injection guardrails based on textual overlap (BLEU/ROUGE/METEOR) can be bypassed because an injected instruction's *effect* survives paraphrasing even as surface text similarity drops, while legitimate quoting/templating triggers false positives. Tested in a controlled multi-agent email relay, this reveals a structural weakness in a widely deployed class of agent-safety filters. Important for anyone relying on similarity-based detectors as a line of defense against prompt injection in multi-agent pipelines.

- [When Tool Names Are Not Identities: Measuring Provider Misbinding in MCP-Based AI Agents](https://arxiv.org/abs/2611.21577v1) identifies a protocol-level vulnerability in the Model Context Protocol (MCP): tool metadata used for discovery/selection isn't cryptographically bound to a verified provider, so requests meant for one server can silently resolve to another. As MCP becomes a de facto standard for agent-tool interoperability, this "tool-provider misbinding" is a practically exploitable supply-chain risk for agentic systems.

- [Tight PAC-Bayes Generalisation Guarantees for Large Language Model Judges](https://arxiv.org/abs/2611.20818v1) provides formal, compression-based PAC-Bayes risk certificates for LLM judges used to monitor agent outputs for safety classification — moving beyond ad hoc confidence in judge reliability toward provable bounds. As LLM judges increasingly serve as the oversight layer for agentic systems, having statistically rigorous guarantees on their error rates is a meaningful step toward trustworthy automated oversight.

### Robustness of Alignment & Fine-Tuning

- [Model Immunization Beyond Condition Numbers: The Importance of Plateau Regions](https://arxiv.org/abs/2611.20472v1) extends "model immunization" against harmful fine-tuning attacks — where safety alignment is rapidly stripped by post-release fine-tuning — by showing that inducing optimization plateaus, not just ill-conditioned curvature, better slows harmful re-training while remaining computationally scalable (avoiding costly Hessian estimation). This advances a practical, deployable defense against one of the most concerning attack vectors on open-weight aligned models.

- [Safety-Preserving Medical LLM Fine-Tuning via Bilevel Data Selection](https://arxiv.org/abs/2611.20643v1) addresses the tension between domain adaptation and safety erosion in patient-facing medical LLMs, using bilevel optimization to select instruction-tuning data that improves medical competence without degrading existing safety alignment. This is a concrete template for safety-preserving domain fine-tuning applicable well beyond medicine, anywhere high-capability alignment must survive specialization.

### Bias, Interpretability & Governance

- [A Crowd-Audited Atlas of Implicit Bias in LLM-Powered Agents](https://arxiv.org/abs/2611.21376v1) extends implicit-bias auditing from one-off high-stakes decisions (hiring, assessments) to the broad range of everyday tasks that autonomous LLM agents now perform on users' behalf across 17 domains, crowd-sourcing the audit itself. This matters because agentic deployment multiplies the surface area for biased decisions beyond the narrow scenarios most fairness research has examined.

- [Model Maps: A Documentation Framework for Tracing Foundation Model Ancestry and Understanding AI Entanglement](https://arxiv.org/abs/2611.18998v1) proposes a structured documentation standard for tracing how upstream models, datasets, and benchmarks propagate vulnerabilities, biases, and hallucination patterns into downstream foundation models ("AI entanglement"). This offers a practical governance tool for supply-chain transparency — increasingly critical as foundation models are built atop opaque chains of inherited artifacts.

- [Can Mechanistic Interpretability Help Explain LLM Agent Failures? A Case Study on Web Element Hallucination](https://arxiv.org/abs/2611.18514v1) critically tests whether current mechanistic interpretability tools, successful at explaining single-model internals, actually scale to explaining realistic agentic failures (web agents hallucinating nonexistent UI elements). The negative/mixed findings are a useful corrective, highlighting a gap between interpretability research maturity and the agentic settings where explanations are most needed for safety diagnosis.

### Child & User Safety

- [Three Invisible Failure Modes in Speech-Based Age Estimation for Child Safety](https://arxiv.org/abs/2611.18971v1) shows that audio-capable LLMs misclassify children under 13 as over 13 in up to 42.5% of cases, directly undermining age-gating mechanisms meant to protect minors interacting with AI via voice. Given rising deployment of voice-based AI assistants for children, this is a concrete, measurable child-safety failure with direct policy and product implications.