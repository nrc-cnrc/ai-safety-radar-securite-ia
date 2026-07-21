# Research Papers (2026-07-21)

## Key Papers

### [How Does Alignment Tuning Shape Representations of Sycophancy and Related Cue-Induced Biases in LLMs?](https://arxiv.org/abs/2607.18114v1)
This study investigates how alignment training affects LLM susceptibility to simple prompt manipulations like sycophantic responses and misleading cues. Using probing, ablation, and representation analysis across five model families, the researchers identify specific neural directions encoding these biases and show how alignment tuning reshapes but doesn't eliminate them. This work is crucial for understanding fundamental safety challenges in aligned models and could inform more robust training approaches.

### [The Autonomous Agency Scale: A Behavioral Framework for Measuring Self-Directed Behavior in AI Systems](https://arxiv.org/abs/2607.17947v1)
Introduces a structured 0-5 scale across seven dimensions to measure autonomous agency in AI systems, distinguishing between reactive task completion and self-directed behavior. The framework evaluates persistence, goal-directedness, adaptability, self-reflection, communication, tool use, and social awareness. This provides essential infrastructure for AI governance as models become increasingly agentic and autonomous.

### [Self-State Attacks on Self-Hosted AI Agents: How Far Can OS Defenses Go?](https://arxiv.org/abs/2607.17986v1)
Formalizes a new attack class where AI agents are compromised through corruption of their own memory and configuration files via legitimate system calls. The paper characterizes this threat space across four axes and evaluates OS-level defenses, revealing fundamental structural limits in preventing these attacks. This highlights critical security vulnerabilities in autonomous AI deployments that current security models don't adequately address.

### [Adaptive Adversaries: A Multi-Turn, Multi-LLM Benchmark for LLM Agent Security](https://arxiv.org/abs/2607.18063v1)
Presents the first benchmark for adaptive multi-round attacks where autonomous LLM attackers observe defender responses and pivot strategies across 21 scenarios. Unlike static attack pools, this tests defenses against intelligent adversaries that learn and adapt their approach in real-time. The work reveals significant vulnerabilities in current defense mechanisms when facing adaptive threats.

### [Dynamic Defense Profiling Enables Cognitive Jailbreak of Text-to-Image Models](https://arxiv.org/abs/2607.17779v1)
Demonstrates a sophisticated attack methodology that profiles defense mechanisms in text-to-image models and uses this intelligence to craft more effective jailbreaks for generating harmful content. By analyzing failure modes rather than treating defenses as binary signals, the approach achieves higher success rates. This reveals the inadequacy of current safety measures against intelligent adversaries.

### [An Early Warning of Emerging Biosecurity Risks in Frontier LLMs](https://arxiv.org/abs/2607.18056v1)
Develops Intern-BioBreaker, a specialized red-teaming model for assessing biological risks in frontier LLMs, coupled with wet-lab validation of generated content. The framework tests models' ability to provide dangerous biological information and validates the practical feasibility of AI-generated protocols. This provides crucial early warning capabilities for biosecurity threats as LLMs become more capable.

### [Stress Testing Concept Erasure with Large Language Model Agents](https://arxiv.org/abs/2607.17890v1)
Uses autonomous LLM agents to systematically test the robustness of concept erasure methods in generative models. Rather than relying on static evaluation approaches, the framework employs adaptive agents that explore diverse attack vectors to probe whether targeted concepts have been truly removed. This addresses a critical gap in verifying the effectiveness of safety interventions in AI systems.

### [Hardware Mechanisms to Dynamically Throttle AI Performance](https://arxiv.org/abs/2607.18069v1)
Proposes hardware-level safety mechanisms that can dynamically reduce AI system performance when concerning behavior is detected, providing a last line of defense beyond software safeguards. The approach operates at the silicon level, making it harder for sufficiently capable AI systems to circumvent. This represents an important direction for ensuring AI safety through fail-safe hardware design.

## Additional Notable Work

### Vision-Language and Reasoning Models
[Can We Break LLMs Out of Self-Loops? Fine-Grained Reasoning Control with Activation Steering](https://arxiv.org/abs/2607.18100v1) introduces methods for controlling reasoning trajectories in LLMs through activation steering, addressing problems where models get stuck in repetitive reasoning patterns.

### Agent Security and Privacy
[RT-SHCUA: Real-Time Self-Hosted Computer-Use Agent for UAV Control](https://arxiv.org/abs/2607.17951v1) explores security challenges in deploying computer-use agents for safety-critical applications like UAV control, highlighting the tension between autonomous capability and security requirements.