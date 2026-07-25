# Research Papers (2026-07-25)

## Key Papers

### Boundaries of Automation and Human-AI Collaboration

[The Boundaries of Automation: A Theory of Persistent Human Participation](https://arxiv.org/abs/2607.21547v1) challenges the conventional assumption that humans remain in AI systems only due to current technical limitations. The authors argue that human participation may persist even with highly capable AI systems for fundamental conceptual reasons beyond mere technological constraints. This work is crucial for AI safety as it provides a theoretical framework for understanding when and why human oversight may remain necessary, informing decisions about automation boundaries in safety-critical applications.

### AI Alignment and Safety Mechanisms

[V-DEAL: Diagnosing Video Safety De-Calibration as an Understanding-Refusal Coupling Failure](https://arxiv.org/abs/2607.21151v1) reveals a counterintuitive vulnerability where harmful videos paired with benign queries achieve higher attack success rates than the same videos with explicitly harmful queries. The paper introduces a three-level diagnostic framework analyzing this failure across model behavior, understanding, and internal representations. This finding highlights critical gaps in current safety alignment approaches for multimodal models and demonstrates how safety mechanisms can fail in unexpected ways.

[Beyond Sycophancy: Structured Resistance and Compliance in LLM Moral Reasoning](https://arxiv.org/abs/2607.21558v1) examines how language models revise their moral judgments when exposed to others' perspectives, finding that judgment revision follows three dimensions paralleling classical social psychology theories. The research shows models must distinguish when to incorporate others' perspectives from when to maintain well-grounded moral positions. This work is essential for developing socially calibrated AI systems that can learn from feedback without compromising their ethical reasoning capabilities.

### Agent Safety and Governance

[Regulating autonomous and agentic AI](https://arxiv.org/abs/2607.21345v1) addresses the fundamental challenge that traditional regulatory frameworks fail when applied to autonomous AI systems, as assumptions about human knowledge and control no longer hold. The authors argue for bringing the entire AI supply chain within regulatory scope and developing fresh governance approaches beyond retrospective oversight. This paper provides critical insights for policymakers grappling with how to effectively govern increasingly autonomous AI systems.

[Same Dangerous Objective, Opposite Advice: Direct Exposure versus Multi-Agent Mediation](https://arxiv.org/abs/2607.21518v1) demonstrates that AI models can appear safer when shown dangerous objectives directly compared to when other agents transform and relay the same objectives. Using OpenAI's gpt-5.6-sol model, the study shows how multi-agent mediation can paradoxically increase safety risks. This finding reveals critical vulnerabilities in multi-agent AI systems and highlights the need for careful design of agent interaction protocols.

### Detection and Evaluation Methods

[QuantiBias: Benchmarking Quantization-Induced Bias in LLMs](https://arxiv.org/abs/2607.21063v1) reveals that model quantization—a standard efficiency optimization assumed to be harmless—significantly increases bias in language models while standard safety evaluations miss this effect. The research shows quantized models still refuse harmful requests and avoid over-refusing benign prompts, yet exhibit increased demographic bias in subtle ways. This work is vital for AI safety as it exposes hidden risks in widely deployed optimization techniques.

[Detecting LLM-Generated Tokens in Human--LLM Coauthored Text](https://arxiv.org/abs/2607.21458v1) introduces a novel method for token-level detection of AI-generated content in mixed-authorship documents, operating at the natural unit of modern language models rather than document-level classification. The method addresses the growing need for fine-grained detection as human-AI collaborative writing becomes more prevalent. This capability is essential for maintaining transparency and accountability in AI-assisted content creation.

### Training and Alignment Techniques

[Training Large Language Models for Self-Explanation Faithfulness](https://arxiv.org/abs/2607.21090v1) proposes a reinforcement learning approach to directly optimize the faithfulness of AI self-explanations—ensuring generated reasoning accurately reflects internal decision-making processes. While existing work focuses on evaluating faithfulness, this provides the first mechanism to directly optimize model parameters for faithful self-explanations. This research is crucial for developing interpretable AI systems where the reasoning provided to users genuinely represents the model's decision process.

[Token Budget Saturation and Mechanistic Early Detection of Reasoning Non-Convergence in Chain-of-Thought Models](https://arxiv.org/abs/2607.21433v1) characterizes a bimodal pattern in chain-of-thought models where generations either converge within a token budget (achieving 90.3% accuracy) or fail to converge (achieving only 6.6% accuracy). The research demonstrates this outcome can be detected early in generation, potentially enabling more efficient allocation of computational resources. This work addresses a key efficiency challenge in reasoning systems and provides insights into the failure modes of extended reasoning processes.

## Governance and Risk Assessment

Several papers address critical governance challenges for AI deployment. [White Box Evidence Packages for Policy Audit Reports](https://arxiv.org/abs/2607.21462v1) tackles how reviewers can verify whether LLM-generated audit reports are actually supported by evidence, introducing a controlled evaluation framework for passage-anchored policy audits. [Toward Continuous Assurance for the Democratization of AI Agent Creation in Industry](https://arxiv.org/abs/2607.21495v1) addresses the reliability gap created when non-engineering users create AI agents through low-code environments, highlighting how these systems can experience silent degradation long after deployment.