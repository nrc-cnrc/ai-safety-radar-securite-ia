# Research Papers (2026-08-11)

## Key Papers

The most significant developments this week center on AI safety mechanisms, evaluation frameworks, and adversarial robustness across multiple domains.

**[Measuring the Wrong Thing: Internal Harmfulness Scores Anti-Rank Successful Jailbreaks](https://arxiv.org/abs/2608.09624v1)** challenges a fundamental assumption in AI safety filtering. The authors demonstrate that internal safety scores, which measure harmful intent in prompts, systematically fail to identify successful jailbreaks—creating an inverse relationship where the most dangerous attacks score as safest. This reveals a critical misalignment between what safety filters optimize for (prompt harmfulness) versus what they should prevent (actual harmful outputs).

**[Stealing Reasoning Traces from Proprietary LLM APIs](https://arxiv.org/abs/2608.09867v1)** exposes a significant vulnerability in leading AI providers' reasoning concealment mechanisms. Researchers show that encrypted reasoning traces returned by APIs are universally compatible across sessions, enabling attackers to steal complete step-by-step reasoning from any user's interactions. This architectural flaw undermines intellectual property protection and could enable sophisticated prompt injection attacks.

**[Multi-Agent AI Safety as an Institutional Design Problem](https://arxiv.org/abs/2608.09828v1)** reframes AI safety through the lens of institutional governance, examining how deployment rules and resource allocation mechanisms shape collective AI behavior. Using a 5,280-episode study, the research identifies which institutional components produce safety properties and how they interact. This represents a crucial shift from individual model alignment to system-level safety governance.

**[ColluSkill: Adversarial Cross-Skill Composition for Evading Agent Skill Scanners](https://arxiv.org/abs/2608.09732v1)** demonstrates a blind spot in current LLM agent security. While existing scanners effectively detect individual malicious skills, they fail to identify harmful workflows that emerge from combining multiple seemingly benign skills. The research shows how attackers can decompose harmful objectives across multiple skills that individually pass security checks but collectively enable dangerous behaviors.

**[Activation Probes Surface Code-Security Signals that the Model's Output Misses](https://arxiv.org/abs/2608.09643v1)** reveals that AI coding models contain internal representations of security vulnerabilities that don't surface in their outputs. Linear probes on model activations can detect security issues that the same model fails to identify when explicitly asked, suggesting that safety-relevant knowledge exists but isn't properly accessed during generation.

**[SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](https://arxiv.org/abs/2608.09885v1)** addresses the static nature of current AI safety mechanisms by proposing adaptive safety harnesses that evolve based on agent execution trajectories. Unlike fixed safety protocols, this framework continuously updates safety constraints based on observed behaviors and emerging risks, enabling more responsive protection against novel attack vectors.

**[ActBench: Self-Evolving Benchmark of Behavioral Safety in Cowork Agents](https://arxiv.org/abs/2608.09476v1)** introduces a novel evaluation framework that assesses AI agent safety through execution trajectories rather than final outputs. Each benchmark case pairs benign tasks with adversarial variants that preserve surface characteristics while injecting harmful objectives, better capturing real-world deployment risks where agents may accomplish legitimate goals through inappropriate means.

These papers collectively highlight a maturation in AI safety research, moving beyond simple output filtering toward understanding systemic vulnerabilities, institutional design, and adaptive safety mechanisms that can evolve with emerging threats.