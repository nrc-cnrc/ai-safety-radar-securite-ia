# Research Papers (2026-06-18)

## Key Papers

**[PhantomSkill: Malicious Code Injection in Agent Skill Ecosystems](https://arxiv.org/abs/2606.19191v1)** introduces a supply-chain attack framework targeting LLM-based coding agents that hides malicious behavior in auxiliary skill resources rather than textual descriptions. The VulMask technique rewrites overt malicious scripts into vulnerability-shaped implementations activated only under attacker-controlled conditions. This work is critical as agent skill ecosystems become more prevalent, highlighting a significant new attack surface that bypasses current security scanning approaches.

**[TRAP: Benchmark for Task-completion and Resistance to Active Privacy-extraction](https://arxiv.org/abs/2606.18996v1)** addresses a fundamental tension in AI agent deployment where systems must use private information to complete tasks while never exposing it in responses. The benchmark evaluates agents across 30 document types containing sensitive data like passport numbers, testing both task completion accuracy and resistance to privacy extraction attacks. This work matters because it formalizes the privacy-utility trade-off that will be central to deploying capable agents in document-intensive workflows.

**[CodeSentinel: A Three-Layer Defense Against Indirect Prompt Injection in Code Contexts](https://arxiv.org/abs/2606.19235v1)** proposes an inference-time sanitizer that uses Tree-sitter to extract high-risk model-facing nodes from code, then applies syntax-guided pre-filtering, dynamic scoring, and node prioritization to defend against injections hidden in comments, strings, and identifiers. This addresses a critical vulnerability as code LLMs increasingly retrieve external context from repositories and documentation where attackers can embed malicious instructions.

**[Detecting Hidden ML Training With Zero-Overhead Telemetry](https://arxiv.org/abs/2606.19262v1)** evaluates the adversarial robustness of GPU workload classification using only privacy-preserving NVML telemetry signals that observe physical computation effects without accessing model weights or training data. Across 5 rounds of monitor-evader iteration, the study demonstrates potential for hardware-enabled AI compute governance while revealing evasion strategies. This research is essential for AI governance proposals that rely on monitoring GPU workloads to detect unauthorized training.

**[Beyond Safe Data: Pretraining-Stage Alignment with Regular Safety Reflection](https://arxiv.org/abs/2606.19168v1)** argues that pretraining-stage safety alignment should go beyond filtering unsafe data, since LLMs can compose benign knowledge into unsafe behaviors. The proposed Safety Reflection Pretraining method regularly injects safety reflection tasks during pretraining to reinforce safety reasoning throughout the learning process. This work addresses a fundamental limitation of current safety approaches that focus primarily on data filtering rather than embedding safety reasoning capabilities.

**[OpenAnt: LLM-Powered Vulnerability Discovery Through Code Decomposition, Adversarial Verification, and Dynamic Testing](https://arxiv.org/abs/2606.19149v1)** presents an automated vulnerability discovery system that decomposes large codebases into analyzable units, uses LLMs for semantic reasoning about program behavior, and employs adversarial verification to reduce false positives. The approach addresses limitations of traditional static analysis tools while providing repository-scale security analysis capabilities. This matters as organizations seek to scale security analysis beyond manual code review and signature-based detection.

**[Giskard: Byzantine Robust and Confidential Aggregation for Large-Scale Decentralized Learning](https://arxiv.org/abs/2606.19129v1)** tackles the challenging problem of simultaneously ensuring confidentiality and Byzantine robustness in decentralized learning systems. While confidentiality requires hiding model parameters through cryptographic techniques, Byzantine fault tolerance typically requires inspecting those same parameters. The framework provides a solution for federated learning scenarios where both privacy and adversarial robustness are critical requirements.

**[UBP2: Uncertainty-Balanced Preference Planning for Efficient Preference-based Reinforcement Learning](https://arxiv.org/abs/2606.19328v1)** introduces a model-based approach that addresses poor sample efficiency in preference-based RL by actively directing exploration through joint reasoning over uncertainties in reward, dynamics, and value functions. This work is significant because preference-based RL offers a path to learning from human feedback without explicit reward design, but current methods suffer from inefficient data collection that limits practical deployment.

## Emerging Threats and Vulnerabilities

Several papers reveal new attack vectors in AI systems. **[Seeing Is Not Screening: Multimodal Hidden Instruction Attacks on Agent Skill Scanners](https://arxiv.org/abs/2606.18198v1)** demonstrates that current skill security scanners focus on textual analysis while missing harmful instructions embedded in images, creating practical blind spots in agent ecosystems.

**[Image Prompt Reconstruction Attacks on Distributed MLLM Inference Frameworks](https://arxiv.org/abs/2606.18710v1)** shows that intermediate embeddings in distributed multimodal LLM inference can leak private image prompts, extending privacy risks beyond text to rich visual information. **[The Gate Is Only as Honest as Its Contracts: ContractGuard for the Contract Layer of Risk-Aware Causal Gating](https://arxiv.org/abs/2606.18550v1)** argues that Risk-Aware Causal Gating relocates rather than eliminates trust assumptions into tool contract integrity.

## Robustness and Reliability

Multiple papers address system robustness across different dimensions. **[Some Complexity Results for Robustness Verification for Binarized Neural Networks](https://arxiv.org/abs/2606.18918v1)** provides theoretical foundations by proving BNN satisfiability is NP-complete and demonstrating polynomial-time algorithms for uniform occlusion robustness checking.

**[Quantification of Uncertainty with Adversarial Models in Medical Image Segmentation](https://arxiv.org/abs/2606.18860v1)** tackles miscalibration in medical AI by using adversarial training to improve uncertainty quantification at pathological boundaries. **[Machine Unlearning for the XGBoost Model with Network Intrusion Datasets](https://arxiv.org/abs/2606.19220v1)** extends unlearning research to tabular data and cybersecurity applications, addressing a gap in existing research.

## AI Safety Research Infrastructure

**[SciRisk-Bench: A Risk-Dimension-Aware Benchmark for AI4Science Safety](https://arxiv.org/abs/2606.18936v1)** provides essential evaluation infrastructure by creating the first comprehensive benchmark for AI safety in scientific contexts, covering biosafety, cybersecurity, chemical safety, and misinformation across multiple disciplines and task formats.

**[Externalizing Research Synthesis and Validation in AI Scientists through a Research Harness](https://arxiv.org/abs/2606.18874v1)** addresses transparency in AI-driven research by externalizing the reasoning that links evidence, ideas, experiments, and claims into inspectable artifacts rather than keeping them implicit in model inference.

## Governance and Control Mechanisms

**[AI Sandboxes: A Threat Model, Taxonomy, and Measurement Framework](https://arxiv.org/abs/2606.18532v1)** develops an assurance-oriented framework for AI testing environments, particularly important for physical AI systems where safety failures have real-world consequences. The work provides structured approaches to controlled testing, evaluation, and validation of AI systems.

**[Quantifying Compromise Risk in Exceptional Access Architectures Under Sparse and Indirect Evidence](https://arxiv.org/abs/2606.19106v1)** applies quantitative risk assessment to lawful exceptional access systems, distinguishing between transmission-layer and over-the-top architectures using sparse evidence from security incidents rather than theoretical analysis.