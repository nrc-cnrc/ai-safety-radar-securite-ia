# Research Papers (2026-06-04)

## Key Papers

### Safety, Security & Alignment Research

**[Sequential Data Poisoning in LLM Post-Training](https://arxiv.org/abs/2606.04929v1)** introduces a novel threat model where multiple attackers coordinate across different stages of LLM post-training (SFT, RLHF, DPO). The research reveals how sequential poisoning attacks can be more effective than single-stage attacks, highlighting vulnerabilities in multi-stage training pipelines. This work is critical for understanding compound security risks in modern LLM development workflows.

**[Be Fair! Can Machine Learning Engineering Agents Adhere to Fairness Constraints?](https://arxiv.org/abs/2606.04971v1)** examines whether automated ML engineering agents can properly handle fairness requirements in sensitive domains. The research identifies a concerning responsibility gap where end-users lack visibility into crucial design choices affecting compliance and fairness. This highlights the need for better governance frameworks as ML automation advances into regulated domains.

**[FoeGlass: Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors](https://arxiv.org/abs/2606.05101v1)** presents the first black-box automated red-teaming method for audio deepfake detection systems. Using in-context learning, the approach can efficiently discover blind spots in detection models without manual effort. This work is significant for strengthening defenses against increasingly sophisticated audio manipulation technologies.

### LLM Capabilities & Robustness

**[Caliper: Probing Lexical Anchors versus Causal Structure in LLMs](https://arxiv.org/abs/2606.04915v1)** reveals that LLMs achieving 50-70% accuracy on causal reasoning benchmarks may rely more on lexical pattern matching than true structural reasoning. By replacing semantic variable names with placeholders, the study shows significant performance drops across nine models. This exposes fundamental limitations in current LLM reasoning capabilities that could affect reliability in critical applications.

**[Imbuing Large Language Models with Bidirectional Logic for Robust Chain Repair](https://arxiv.org/abs/2606.05030v1)** addresses error propagation in chain-of-thought reasoning by introducing Teleological Reasoning Infilling (TRI), which enables models to repair reasoning chains bidirectionally. The framework helps prevent single errors from corrupting entire reasoning processes. This approach could significantly improve the reliability of LLMs in multi-step reasoning tasks where accuracy is crucial.

**[Invariant Gradient Alignment for Robust Reasoning Distillation](https://arxiv.org/abs/2606.05025v1)** tackles shortcut learning in LLMs through a training framework that aligns gradients across semantically diverse but logically equivalent examples. This method aims to improve out-of-distribution performance when transferring reasoning capabilities to smaller models. The work addresses a key challenge in making distilled models more robust and generalizable.

### Evaluation & Benchmarking

**[Agent Planning Benchmark: A Diagnostic Framework for Planning Capabilities in LLM Agents](https://arxiv.org/abs/2606.04874v1)** introduces a comprehensive benchmark with 4,209 multimodal cases to specifically evaluate planning capabilities separate from execution performance. The diagnostic framework covers goal decomposition, tool selection, and constraint reasoning across 22 domains. This benchmark fills a critical gap in understanding where agent failures originate and enables more targeted improvements.

**[M³Eval: Multi-Modal Memory Evaluation through Cognitively-Grounded Video Tasks](https://arxiv.org/abs/2606.05008v1)** presents the first systematic evaluation framework for memory in multi-modal models, examining what information is retained, how faithfully it's preserved, and robustness under interference. As models advance toward long-form video understanding, this benchmark provides essential insights into memory capabilities. This work is crucial for developing reliable multi-modal systems that can maintain context over extended interactions.

*Note: ArXiv does not publish new submissions on weekends, so this digest covers papers submitted on June 3rd, 2026.*