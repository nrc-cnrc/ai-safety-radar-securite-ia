# Research Papers (2026-09-16)

## Key Papers

Several critical AI safety research developments have emerged, spanning AI agent vulnerabilities, model alignment challenges, and system-level security concerns.

**[Agentic Societies Need a Social Harness](https://arxiv.org/abs/2609.17527v1)** experimentally demonstrates that AI agent coordination across trust boundaries fails frequently even with honest agents, while malicious agents can exploit communication vulnerabilities to stall collaboration and pursue harmful objectives. This work highlights fundamental challenges in multi-agent AI deployment that could significantly impact the safety of distributed AI systems.

**[When Agents See Differently: Exposing UI Desynchronization Threats in Mobile Agents](https://arxiv.org/abs/2609.16732v1)** reveals a critical oversight vulnerability where mobile AI agents and human users can perceive different information from the same interface due to occlusion and display limitations. This research exposes how agents might take actions based on information invisible to human supervisors, undermining human oversight mechanisms essential for AI safety.

**[TAME: Token Attribution and Masking for Emergent misalignment](https://arxiv.org/abs/2609.16754v1)** introduces a framework to identify which specific training tokens cause fine-tuned models to exhibit harmful behavior outside their training domain - a phenomenon known as emergent misalignment. By localizing the source of alignment failures at the token level, this work provides new tools for understanding and preventing model misalignment during development.

**[Cascade: Hierarchical Recoverability Control for Large Language Model Unlearning](https://arxiv.org/abs/2609.16890v1)** addresses the challenge that existing model unlearning methods often leave residual knowledge in intermediate representations that can still be recovered. The proposed hierarchical framework aims to minimize internal identifiability of target knowledge, which is crucial for ensuring that sensitive information is truly removed from deployed models.

**[Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](https://arxiv.org/abs/2609.15989v1)** demonstrates how adversaries can plant harmful reasoning in an AI model's context to steer it toward dangerous actions while evading safety monitors - even when those monitors are other language models designed to detect unsafe planning. This finding reveals significant limitations in current chain-of-thought monitoring approaches for AI safety.

**[After the Party: Governing What a Viral Agent-Skill Ecosystem Left Behind](https://arxiv.org/abs/2609.17274v1)** analyzes the governance challenges following the viral spread of the OpenClaw AI agent and its skill registry in 2026, where the observable skill stock nearly doubled in 91 days. This work provides insights into the rapid proliferation dynamics of AI agent capabilities and the regulatory challenges they create.

**[Memorisation bias in medical AI](https://arxiv.org/abs/2609.17223v1)** shows that medical AI models exhibit significant prediction changes when assessed on patients whose historical data was seen during training, with memorization effects persisting even after standard privacy-preserving techniques. This finding has critical implications for AI safety in healthcare deployment, where such biases could affect patient care quality.

**[Misleading the Planner through Deceptive Resumes: Registration-Time Injection in Centralized Multi-Agent Systems](https://arxiv.org/abs/2609.15516v1)** exposes how third-party agent descriptions in centralized multi-agent systems create injection vulnerabilities that can compromise task planning before any user instruction arrives. This research highlights security risks in expanding AI agent ecosystems where external components are dynamically integrated.