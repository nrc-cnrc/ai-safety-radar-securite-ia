# Research Papers (2026-06-27)

## Key Papers

**[Inherited Circuits, Learned Semantics: How Fine-Tuning Creates Evasion Vulnerabilities Invisible to Standard Evaluation](https://arxiv.org/abs/2606.27091v1)** reveals a critical safety vulnerability in fine-tuned LLMs for security classification. The research demonstrates that models can learn token-level indicator semantics that preserve accuracy on canonical test sets while failing catastrophically on behavior-preserving transformations like PowerShell alias substitution and command reconstruction. This highlights a fundamental gap between standard evaluation practices and real-world adversarial scenarios that could be exploited by attackers.

**[Paved with True Intents: Intent-Aware Training Improves LLM Safety Classification Across Training Regimes](https://arxiv.org/abs/2606.27210v1)** introduces AIMS, a human-annotated dataset of 1,724 challenging safety prompts with explicit intent descriptions, and shows that modeling user intent as an intermediate signal significantly improves safety classification across multiple training paradigms including supervised fine-tuning and reinforcement learning. This work addresses the critical challenge of distinguishing between benign requests that superficially resemble harmful ones and truly malicious queries.

**[Jailbreaking for the Average Jane: Choosing Optimal Jailbreaks via Bandit Algorithms for Automatically Enhanced Queries](https://arxiv.org/abs/2606.26936v1)** demonstrates that non-expert attackers can effectively exploit LLMs by combining multi-armed bandit algorithms for jailbreak selection with automated query enhancement, achieving success rates of 89% against GPT-3.5-Turbo and 78% against GPT-4. This research quantifies a major democratization risk where sophisticated attack capabilities become accessible to users without technical expertise.

**[Auditing Framing-Sensitive Behavioral Instability in Large Language Models for Mental Health Interactions](https://arxiv.org/abs/2606.26982v1)** exposes concerning inconsistencies in LLM behavior when semantically similar mental health concerns are presented through different contextual framings, with models showing significant variation in response types and perceived user risk assessments. This instability could undermine trust and effectiveness in AI-assisted mental health applications where consistency and reliability are paramount.

**[ShareLock: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP](https://arxiv.org/abs/2606.27027v1)** presents a sophisticated attack against the Model Context Protocol (MCP) that fragments malicious prompts across multiple tools to evade detection while maintaining attack effectiveness, revealing critical vulnerabilities in the expanding ecosystem of LLM-tool integrations. This work highlights emerging security challenges as AI agents become more capable and interconnected with external systems.

**[Chai: Agentic Discovery of Cryptographic Misuse Vulnerabilities](https://arxiv.org/abs/2606.26933v1)** introduces an AI-based system that discovers cryptographic misuse vulnerabilities through naturally occurring signals rather than requiring specific instrumentation, addressing a critical gap in automated vulnerability detection for security-critical codebases. This represents a significant advance in AI-assisted security auditing for vulnerability classes that lack traditional detection mechanisms.

**[RedVox: Safety and Fairness Gaps in Speech Models Across Languages](https://arxiv.org/abs/2606.26968v1)** reveals significant safety and fairness disparities in speech-capable models across different languages, with only 8% of state-of-the-art releases documenting multilingual safety analysis. The benchmark exposes concerning gaps in cross-linguistic safety evaluation that could lead to disparate harms as speech AI systems are deployed globally.

## Interpretability and Understanding

Research into AI system interpretability continues advancing with several notable contributions. **[Beyond the Hard Budget: Sparsity Regularizers for More Interpretable Top-k Sparse Autoencoders](https://arxiv.org/abs/2606.27321v1)** proposes novel sparsity regularizers for Top-k Sparse Autoencoders that improve interpretability of vision foundation model representations while maintaining the architectural benefits of hard sparsity constraints.

**[LMs as Task-Specific Knowledge Bases: An Interpretability Analysis](https://arxiv.org/abs/2606.27237v1)** demonstrates through behavioral and mechanistic analysis that language models encode knowledge in a task-specific manner rather than maintaining consistent factual representations across different query types. This finding challenges the conceptualization of LMs as unified knowledge bases and has implications for knowledge editing and consistency.

**[Forecasting With LLMs: Improved Generalization Through Feature Steering](https://arxiv.org/abs/2606.27199v1)** uses sparse autoencoders to analyze LLM internal states during forecasting tasks, identifying features associated with both generalizable time-aware reasoning and problematic look-ahead bias. The work demonstrates how mechanistic interpretability can guide interventions to improve model performance on temporal reasoning tasks.

## Alignment and Training Methods

**[Automating Potential-based Reward Shaping with Vision Language Model Guidance](https://arxiv.org/abs/2606.27180v1)** addresses the challenge of sparse rewards in reinforcement learning by using vision-language models to automatically generate potential functions for reward shaping, avoiding the reward hacking problems associated with naive shaping approaches. This work bridges the gap between the theoretical guarantees of potential-based reward shaping and practical implementation challenges.

**[Reinforcement Learning without Ground-Truth Solutions can Improve LLMs](https://arxiv.org/abs/2606.27369v1)** introduces the RiVER framework that enables reinforcement learning on optimization tasks without requiring ground-truth solutions, using deterministic execution feedback and group-relative learning to achieve improvements comparable to methods that rely on known optimal solutions.

## Emerging Risks and Governance

**[From Celebrities to Anyone: Characterizing AI Nudification Content, Technology, and Community Dynamics on 4chan](https://arxiv.org/abs/2606.27234v1)** provides the first large-scale empirical analysis of AI-generated non-consensual sexually explicit imagery (SNEACI) in anonymous online communities, identifying 24,105 items and documenting the shift from celebrity targets to ordinary individuals. This research provides crucial data for understanding and addressing the societal harms of AI misuse.

**[AI Healthcare Chatbots as Information Infrastructure: A Large-Scale Study of User-Reported Breakdowns](https://arxiv.org/abs/2606.27302v1)** analyzes over 15,000 user reviews to identify systematic failure modes in AI healthcare chatbots, revealing critical gaps in access, user experience, and clinical accuracy that could impact patient care and health outcomes.

## Technical Advances

Several papers advance core AI capabilities with safety implications. **[Hallucination in World Models is Predictable and Preventable](https://arxiv.org/abs/2606.27326v1)** demonstrates that hallucination in generative world models concentrates in low-coverage regions of the state-action space and can be detected through lightweight data-centric signals, introducing MMBench2 as a comprehensive benchmark for visual world modeling evaluation.

**[Ask, Don't Judge: Binary Questions for Interpretable LLM Evaluation and Self-Improvement](https://arxiv.org/abs/2606.27226v1)** proposes BINEVAL, a framework that decomposes evaluation criteria into atomic binary questions to create more interpretable and debuggable assessment mechanisms for LLM outputs, addressing opacity issues in current evaluation methods.

The research landscape continues to reveal fundamental challenges in AI safety, from evaluation gaps that hide vulnerabilities to inconsistent behavior in high-stakes applications, while also advancing our understanding of model internals and developing more robust training and evaluation methodologies.