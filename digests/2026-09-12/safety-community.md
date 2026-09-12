# Community & Tools (2026-09-12)

## Key Discussions

### 1. AI Safety Evaluation Tools Under Active Development

The [EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) repository shows active bug fixing and improvement work, with several critical evaluation correctness issues being addressed. Notable fixes include preventing few-shot examples from contaminating evaluation data (#4146), fixing CLI argument parsing to allow braces in values (#4144), and correcting math normalization that was mangling mathematical expressions (#4142). This matters because reliable evaluation is fundamental to measuring AI safety progress and these fixes ensure evaluation results are scientifically valid.

### 2. TransformerLens 3.9.0 Release with Advanced Analysis Tools

[TransformerLens v3.9.0](https://github.com/TransformerLensOrg/TransformerLens/releases/tag/v3.9.0) introduces significant new mechanistic interpretability capabilities including Backward Lens (for projecting gradient factors into vocabulary space), SVD Circuits (for decomposing attention heads into subfunctions), and k-sparse probing tools. The release also fixes several bugs in dataset handling and lens caching that could have led to incorrect analysis results. This matters because mechanistic interpretability is crucial for understanding how AI systems work internally and identifying potential safety issues.

### 3. Hermes Jailbench Security Testing Framework Gets Major Updates  

The [hermes-jailbench](https://github.com/hermes-labs-ai/hermes-jailbench) project received substantial improvements including support for OpenAI-compatible endpoints (#17), JSON output for CI integration (#18), regression detection (#19), and a composite GitHub Action for automated security testing (#22). The tool now works with local models via Ollama/vLLM and includes proper credential handling fixes. This matters because automated jailbreak testing is essential for maintaining AI system security as models are deployed more widely.

## Notable GitHub Releases & Tools

### EleutherAI Bergson v0.26.3
[Bergson v0.26.3](https://github.com/EleutherAI/bergson/releases/tag/v0.26.3) introduces contrastive queries for influence function analysis, allowing researchers to score training data by the gradient difference between behavior evaluation and general capability control. The release also adds TRAK support for efficient gradient projections and fixes memory issues in model training. This enables more sophisticated analysis of what training data influences specific model behaviors, which is critical for understanding potential safety risks.

### Aider v0.86.2 Unicode Fix
[Aider's latest update](https://github.com/Aider-AI/aider/pull/5700) addresses Unicode console output crashes on legacy Windows systems by implementing safe fallback printing. While seemingly minor, this type of robustness improvement matters for AI coding assistants because crashes during code generation can lead to incomplete or corrupted outputs that might introduce security vulnerabilities.

### MLflow AI Gateway Provider Fixes
Multiple PRs in [MLflow](https://github.com/mlflow/mlflow) address critical issues with AI gateway providers, including Gemini function calling failures (#25806), token usage tracking in Codex integration (#25613), and Vertex AI header forwarding problems (#25792). This matters because reliable AI gateway functionality is essential for safely routing and monitoring AI model usage in production environments.