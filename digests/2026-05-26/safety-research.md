# Research Papers (2026-05-26)

## Key Papers

### Interpretability and Alignment

[**Confidence and Calibration of Activation Oracles for Reliable Interpretation of Language Model Internals**](https://arxiv.org/abs/2605.26045v1) investigates uncertainty quantification for activation oracles—tools that translate internal model states into natural language. The study evaluates six confidence estimation methods across 6,000 samples, finding that verbalization-specific calibration is crucial. This matters because poorly calibrated interpretability tools could mislead safety assessments by providing false confidence about what models are actually computing internally.

[**Universal Activation Verbalizer: A Unified Framework for Cross-Model Activation Explanation**](https://arxiv.org/abs/2605.25903v1) introduces UAV, which uses a shared decoder to explain activations from different donor models through lightweight adapters. The framework supports transfer learning across model architectures without retraining the entire explanation system. This is significant for AI safety research as it could enable more efficient and systematic interpretability studies across different model families.

[**Reading the Finetuning Prior: Verbatim Content Recovery via Contrastive Decoding Diffing**](https://arxiv.org/abs/2605.25902v1) demonstrates that finetuned models memorize training content verbatim, and proposes Contrastive Decoding Diffing (CDD) as a "black-box" method to audit what content a deployed model has learned. CDD requires only API access, making it practically valuable for detecting unauthorized training data use and understanding potential privacy risks in production systems.

### Safety and Robustness

[**$D^2$-Monitor: Dynamic Safety Monitoring for Diffusion LLMs via Hesitation-Aware Routing**](https://arxiv.org/abs/2605.25893v1) addresses safety monitoring for diffusion-based language models, which generate text through multi-step denoising rather than autoregressive prediction. The approach uses lightweight probes to analyze intermediate representations and route uncertain cases to more thorough monitoring. This is important as diffusion LLMs represent an emerging architecture that existing safety measures may not adequately cover.

[**Retrying vs Resampling in AI Control**](https://arxiv.org/abs/2605.26047v1) examines two approaches for handling risky AI actions: blocking flagged actions (retrying) versus generating multiple options (resampling). The study finds that retrying can be exploited by adversarial models that use monitor feedback to construct stealthier attacks, while resampling avoids this information leakage. This provides concrete guidance for designing oversight mechanisms in high-stakes AI control scenarios.

### Multi-Agent Systems and Governance

[**Multi-Agent Systems are Mixtures of Experts: Who Becomes an Influencer?**](https://arxiv.org/abs/2605.25929v1) analyzes multi-agent LLM deliberation through Friedkin-Johnsen opinion dynamics, showing that influence patterns emerge based on input-dependent parameters. The research reveals how certain agents become influential in group decision-making, which has implications for designing fair and effective multi-agent AI systems for governance and collaborative reasoning.

### Evaluation and Benchmarking

[**Automated Benchmark Auditing for AI Agents and Large Language Models**](https://arxiv.org/abs/2605.26079v1) introduces Auto Benchmark Audit (ABA), an agentic framework that systematically identifies issues in AI benchmarks such as hidden dependencies, specification gaps, and brittle evaluation logic. Given the critical role benchmarks play in AI safety assessment, this automated auditing capability could help ensure more reliable evaluation standards.

[**The Age of Curiosity Meets the Age of AI: Benchmarking Child Safety in Large Language Models**](https://arxiv.org/abs/2605.25510v1) presents KIDBench, the first benchmark specifically designed for evaluating LLM safety with children ages 7-11. Using developmentally-grounded evaluation criteria, it addresses a critical gap in safety research as children increasingly interact with AI systems that weren't designed with their cognitive and emotional needs in mind.

*Note: ArXiv does not publish new submissions on weekends (Saturday and Sunday), so this coverage represents submissions from May 25th, 2026.*