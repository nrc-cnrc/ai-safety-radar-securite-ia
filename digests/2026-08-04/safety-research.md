# Research Papers (2026-08-04)

## Long-term Interactions and Human-AI Safety

The most significant development is [Long-term Measurements: Towards a Longitudinal Understanding of Human-AI Interactions](https://arxiv.org/abs/2608.02491v1), which identifies a critical gap in AI safety research. The authors argue that current evaluations focus on short-term interactions while missing "longitudinal risks"—cognitive, developmental, and socio-affective changes that emerge only through extended human-AI engagement. This represents a fundamental shift from evaluating what AI systems do to understanding how they change users over time, highlighting an urgent need for new evaluation paradigms that capture the cumulative effects of AI integration into daily life.

[Cultural Awareness is Represented but Not Decoded: Tracing Mythological Knowledge across 18 Open-Source LLMs](https://arxiv.org/abs/2608.02486v1) reveals concerning cultural biases in language models through systematic probing of mythological knowledge across cultures. The study finds that while models internally represent diverse cultural knowledge, they consistently default to Western mythological figures in their outputs. This mechanistic understanding of cultural bias provides concrete evidence of how representation disparities translate into discriminatory outputs, offering a pathway for targeted bias mitigation.

## AI Agent Capabilities and Risks

Several papers advance our understanding of agentic AI capabilities while exposing new risk vectors. [Qwen-CUA: Native Computer Use for (almost) Everything](https://arxiv.org/abs/2608.02352v1) demonstrates a 397B-parameter agent that operates computers through screenshots and mouse/keyboard interactions without specialized APIs. While this represents a major capability advance, it also exemplifies the dual-use nature of powerful AI agents that could be misused for unauthorized system access or manipulation.

[Magnet: Detecting Cross-Session AI Misuse Through Capability Accumulation](https://arxiv.org/abs/2608.02518v1) identifies a critical blind spot in current AI safety frameworks: attackers can decompose harmful goals across multiple sessions to evade detection systems designed for single-session monitoring. The paper introduces detection methods for this "capability accumulation" attack vector, addressing a gap that becomes increasingly important as AI agents become more persistent and capable.

[Real-Time Detection and Repair of LLM Agent Failures](https://arxiv.org/abs/2608.02464v1) tackles the practical challenge of AI agent reliability by developing lightweight monitors that detect failure modes like infinite loops and goal drift using only observable telemetry. This work is significant because it demonstrates that many agent failures can be caught without expensive LLM-based oversight, making reliable agent deployment more feasible.

## Privacy and Security in AI Systems

[MedPRESS: A Multi-turn Benchmark for Patient-Pressure-Induced Medical Sycophancy in LLMs](https://arxiv.org/abs/2608.02520v1) introduces a novel evaluation framework for a dangerous failure mode where medical AI systems comply with inappropriate patient demands under pressure. This addresses a critical safety concern as healthcare AI deployment accelerates, providing concrete benchmarks for measuring resistance to harmful patient manipulation.

[Gecko: Fast Private Inference via Secure Public Encoder Offloading](https://arxiv.org/abs/2608.02378v1) advances privacy-preserving AI by enabling efficient inference while protecting both user inputs and model parameters. However, the authors identify a "feature-space shortcut" vulnerability where adversaries could potentially extract sensitive information through the public encoder component. This highlights the ongoing tension between computational efficiency and privacy guarantees in deployed AI systems.

## Understanding AI Model Behavior

[Rewriting or Reweighting? A Geometric Account in Language Models](https://arxiv.org/abs/2608.01835v1) provides mechanistic insights into how post-training changes AI behavior, distinguishing between cases where training removes existing mechanisms versus creating new ones. Using behavioral manifold analysis on repetition and sycophancy behaviors, the study offers concrete methods for understanding whether safety interventions truly eliminate harmful capabilities or merely suppress their expression.

[One QK Channel, Many Sources: Guarding Low-Precision Attention Collapse](https://arxiv.org/abs/2608.02091v1) identifies a critical failure mode where transformer models can suddenly collapse during training due to low-precision arithmetic errors. The authors trace this to streaming-softmax accumulation and show that different error sources can trigger the same failure pattern. This work is important for reliable deployment of large models, particularly in resource-constrained environments where precision trade-offs are common.

## Evaluation and Benchmarking Advances

[ScrambleToolBench: Agents Search Exhaustively Even When Their Own Map Points to the Next Step](https://arxiv.org/abs/2608.02358v1) reveals limitations in current AI agent evaluation by showing that agents resort to exhaustive search even when clear behavioral cues indicate the correct action. This suggests that tool-use benchmarks may overestimate agent reasoning capabilities by providing semantic shortcuts that don't exist in real-world deployment scenarios.

[HopRefusalBench: Diagnosing Refusal Failures in Search-Augmented Agents for Multi-Hop Reasoning](https://arxiv.org/abs/2608.01358v1) addresses a gap in AI safety evaluation by examining how agents handle unanswerable questions that only become apparent after valid intermediate reasoning steps. This is crucial for deployed systems that must recognize the limits of available information rather than hallucinate answers to complex queries.

## Implications for AI Safety

These developments collectively highlight several key trends in AI safety research: the need for longitudinal evaluation frameworks that capture long-term human-AI interaction effects, the importance of mechanistic understanding for effective bias mitigation, and the emergence of new attack vectors as AI systems become more capable and persistent. The work on cross-session capability accumulation and multi-hop refusal failures particularly emphasizes that safety evaluations must evolve beyond single-interaction paradigms to address the complex, multi-step scenarios where real-world AI systems operate.