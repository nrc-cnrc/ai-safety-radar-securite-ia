# Community & Tools (2026-08-08)

## Key Discussions

### 1. "Mythos social engineering AISI INC-2026-07-28-01" - 42 points
[Discussion](https://news.ycombinator.com/item?id=49218707) | [Source](https://web.archive.org/web/20260731053721/http://github.com/ancaferro/myNetwork/pull/3)

Limited details available from the archived GitHub pull request, but this appears to relate to AI Safety Institute (AISI) incident reporting around social engineering vulnerabilities. The discussion highlights ongoing concerns about AI system manipulation and the need for systematic vulnerability disclosure processes.

## Notable GitHub Releases & Tools

### 1. TransformerLens v3.7.0 - Significant Architecture Expansion
[Release](https://github.com/TransformerLensOrg/TransformerLens/releases/tag/v3.7.0)

Major release adding Vision Transformer (ViT) and Audio Spectrogram Transformer (AST) architecture families, plus enhanced Jacobian Lens features for analyzing model internals. Multiple critical bug fixes for OLMo3 and GPT OSS model compatibility were included. This significantly expands TransformerLens's mechanistic interpretability capabilities beyond text-only transformers.

### 2. ShadowShield 0.7.0 - Gateway Mode and Streaming Scanner
[Release](https://github.com/0xsl1m/shadowshield/releases/tag/v0.7.0)

Comprehensive security-focused update introducing zero-code-change gateway mode (`shadowshield proxy --upstream`), streaming detection capabilities, and extensive middleware integrations. The release includes audit remediation where unsigned policy bundles now fail closed by default, representing a significant hardening of the security posture. This enables drop-in AI safety monitoring for existing deployments.

### 3. EleutherAI LM Evaluation Harness - MMLU CoT and ONNX Support
[Multiple PRs](https://github.com/EleutherAI/lm-evaluation-harness/pull/3987)

Fixed critical metric aggregation bug in `mmlu_flan_cot_zeroshot` where group-level results never populated due to metric name mismatch (`acc` vs `exact_match`). Also added raw ONNX runtime backend alongside existing `onnxruntime-genai` support, enabling evaluation of Model Builder exports through direct `onnxruntime.InferenceSession` calls. These fixes ensure reliable evaluation of chain-of-thought reasoning and expand hardware compatibility.

### 4. Arize Phoenix 19.19.0 - Enhanced LLM Span Management
[Release](https://github.com/Arize-ai/phoenix/releases/tag/arize-phoenix-v19.19.0)

UI improvement that collapses all but the last message in LLM spans to reduce visual clutter in trace analysis. Also includes span-level cost filtering via reserved `span.` root in the DSL (`span.total_cost > 0.1`). This addresses the practical challenges of analyzing lengthy conversational AI traces while maintaining cost visibility for optimization workflows.

### 5. OpenAI Evals - Recursive Perspective Integration (RPI) Framework
[PR](https://github.com/openai/evals/pull/1700)

New evaluation implementing the Recursive Perspective Integration framework as a model-graded benchmark for assessing reasoning strategy quality and proportionality. RPI provides structured evaluation of how models integrate multiple viewpoints in complex reasoning tasks, advancing beyond simple correctness metrics to evaluate reasoning process quality.