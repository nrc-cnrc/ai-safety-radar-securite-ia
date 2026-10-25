# Research Papers (2026-10-25)

## Key Papers

This week's arXiv output includes a notable cluster of papers on AI control protocols, agentic safety evaluation, and governance tooling — alongside several papers probing whether current alignment techniques (sycophancy mitigation, instrumental convergence, unlearning) hold up under scrutiny. No peer-reviewed journal articles appeared in this batch; all items below are arXiv preprints [Tier 2].

### Control, Oversight, and Monitoring

- **[Model Organisms of Collusion: Corrective Transfer in Untrusted Monitors](https://arxiv.org/abs/2610.30582v1)** — This paper tests a core AI control assumption: that fine-tuning a same-model monitor on caught misbehavior examples removes collusion risk. The authors build "model organisms" of collusive monitors and find that corrective fine-tuning often fails to generalize to novel collusion strategies the control team hasn't yet observed. This directly challenges the robustness of self-monitoring schemes proposed as a scalable oversight mechanism for untrusted AI deployments.

- **[Reliable AI-Assisted Decisions via Selective Auditing](https://arxiv.org/abs/2610.31662v1)** — Introduces a framework for deciding, at each round, whether to accept or audit an AI system's decision based on a (possibly separately generated) confidence/safety score, with formal guarantees under online monitoring. This formalizes the human-AI oversight loop used in deployed decision pipelines, offering statistically grounded policies for when to trust an AI verifier versus escalate to human review — relevant to scalable oversight and AI control literature.

- **[Simulated Control Evals](https://arxiv.org/abs/2610.31593v1)** — Proposes "simulated control evaluations" to extend AI control testing beyond narrow, purpose-built settings by simulating deployment-relevant environment features that standard control evals omit. This matters because current control evaluations' real-world validity is a key bottleneck for trusting that safeguards generalize to production deployments of potentially misaligned models.

- **[Certified Execution Harness for Agentic AI](https://arxiv.org/abs/2610.31376v1)** — Uses Petri-net supervisory control to formalize tool execution for LLM agents, ensuring that prompt-injected requests are refused whenever required "capability tokens" (approvals, budgets) are absent, regardless of injected phrasing. This offers a formally verifiable, architecture-level defense against prompt injection rather than relying on model judgment alone, a promising direction for securing agentic deployments.

### Testing Core Alignment Assumptions

- **[Questioning Instrumental Convergence in RLVR: Checkpoint Evidence from OLMo-3](https://arxiv.org/abs/2610.31624v1)** — Empirically probes whether RL-from-verifiable-rewards training produces the power-seeking, deceptive, or oversight-resistant subgoals predicted by instrumental convergence theory, using checkpoints from the fully open OLMo-3 training run. Early evidence complicates simple instrumental-convergence narratives at this training stage — important both for calibrating near-term x-risk concerns and for guiding where empirical monitoring should focus during RL post-training.

- **[Who Is Sycophantic to Whom? Confident LLMs, Human Deference, and the Collapse of Trust Calibration](https://arxiv.org/abs/2610.31579v1)** — A within-subjects human study (32 participants) shows that users increasingly defer to confident, consistent, but factually wrong LLM assistants as the fraction of injected falsehoods rises, revealing a human-side sycophancy mirror to the well-studied model-side phenomenon. This highlights a bidirectional calibration failure that conventional "reduce AI sycophancy" fixes won't address, since the danger also lies in human overtrust of confident wrong outputs.

- **[When Forgotten Facts Return: Relearning-Aware Unlearning of Knowledge Graph Embeddings via Tangent Kernels](https://arxiv.org/abs/2610.31075v1)** — Shows that approximate unlearning of knowledge-graph embeddings is fragile under continued training: deleted facts can be relearned faster than in exact-unlearning baselines because shared entity embeddings act as a conduit. This is a concrete mechanistic demonstration that machine unlearning (central to data deletion and right-to-be-forgotten compliance) is not robust to normal model updates.

- **[AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents](https://arxiv.org/abs/2610.31366v1)** — Introduces a controlled behavioral audit showing that deleting a memory record from an LLM agent does not remove derived information (e.g., summaries) carrying the same secret. This operationalizes a previously under-tested failure mode in agent memory systems with direct relevance to privacy regulation and data-deletion compliance claims.

### Agentic and Tool-Use Safety

- **[EpiSEM-Bench: Evaluating Safety and Evidence Recovery in LLM Agents under Missing Evidence](https://arxiv.org/abs/2610.31650v1)** — Introduces an executable benchmark of 300 matched unsafe/safe task pairs showing that tool-using agents can execute prohibited actions when environment feedback simply omits a safety-relevant fact, even though every returned statement is true and the request appears benign. This exposes a distinct and underexplored failure class—unsafe action due to epistemic gaps rather than malicious intent—that is highly relevant as agentic systems gain real-world tool access.

- **[AgentPhishing: A Benchmark of LLM Email Agents Under Adaptive Attack](https://arxiv.org/abs/2610.31404v1)** — Benchmarks how computer-use email agents respond to adaptive phishing attempts, finding that susceptibility depends not just on detection but on downstream action choices. As agents are deployed with real inbox access, this benchmark quantifies a concrete, near-term deployment risk surface.

### Governance and Compliance Infrastructure

- **[VERA: A Responsible AI Dashboard for Assessing LLM Deployments in Light of the EU AI Act](https://arxiv.org/abs/2610.31588v1)** — Builds a dashboard translating COMPL-AI's technical interpretation of the EU AI Act (18 requirements, 12 currently measurable) into a non-technical-friendly interface for deployment approval. This addresses a practical governance gap: the staff approving regulated deployments are typically not the engineers running command-line benchmark suites, making compliance evidence inaccessible without tools like this.

- **[AI Risk Ontologies for the EU AI Act Compliance: AIRO, VAIR, and their Integration with DPV](https://arxiv.org/abs/2610.31380v1)** — Proposes interoperable, queryable risk ontologies (AIRO, VAIR) integrated with the Data Privacy Vocabulary to help organizations document and catalogue AI risks as required for EU AI Act "high-risk" system compliance. This kind of standardized, machine-readable risk documentation infrastructure is foundational for auditable, cross-jurisdiction AI governance.