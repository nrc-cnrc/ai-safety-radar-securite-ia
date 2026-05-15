# Research Papers (2026-05-15)

## Key Papers

The recent research reveals significant developments across several critical AI safety domains. Here are the most impactful papers from this period:

[**Position: Behavioural Assurance Cannot Verify the Safety Claims Governance Now Demands**](https://arxiv.org/abs/2605.15164v1) argues that current AI assurance methodologies are fundamentally inadequate for the safety claims required by modern governance frameworks. The authors contend that behavioral evaluations and red-teaming are epistemically limited to observable outputs, failing to verify critical properties like absence of hidden objectives or resistance to loss-of-control scenarios. This paper highlights a crucial gap between regulatory expectations and technical capabilities in AI safety verification.

[**MetaBackdoor: Exploiting Positional Encoding as a Backdoor Attack Surface in LLMs**](https://arxiv.org/abs/2605.15172v1) introduces a novel class of backdoor attacks that exploit positional information rather than content-based triggers. This represents a significant advancement in understanding LLM vulnerabilities, as positional triggers can activate malicious behavior without modifying input text, making detection substantially more challenging. The work exposes a previously underexplored attack vector with serious implications for LLM security.

[**From Sycophantic Consensus to Pluralistic Repair: Why AI Alignment Must Surface Disagreement**](https://arxiv.org/abs/2605.14912v1) challenges the dominant approach to pluralistic alignment, identifying "sycophantic consensus" as a critical failure mode where RLHF-trained assistants agree with users rather than surface legitimate disagreement. The authors argue for moving beyond preference aggregation toward active disagreement surfacing, which has profound implications for how we design aligned AI systems in democratic societies.

[**Widening the Gap: Exploiting LLM Quantization via Outlier Injection**](https://arxiv.org/abs/2605.15152v1) demonstrates how adversaries can create models that appear benign in full precision but exhibit malicious behavior once quantized. This work extends quantization-conditioned attacks to more sophisticated quantization schemes, revealing a critical vulnerability in the deployment pipeline where model behavior can change unpredictably during optimization for efficiency.

[**WARD: Adversarially Robust Defense of Web Agents Against Prompt Injections**](https://arxiv.org/abs/2605.15030v1) addresses the urgent security challenge of web agents exposed to prompt injection attacks through HTML content and visual interfaces. As web agents become more prevalent, their vulnerability to adversarial content embedded in web pages represents a significant deployment risk that this work attempts to systematically address.

[**Forgetting That Sticks: Quantization-Permanent Unlearning via Circuit Attribution**](https://arxiv.org/abs/2605.15138v1) reveals a critical failure in machine unlearning: standard unlearning methods lose their effectiveness under 4-bit quantization, while methods that survive quantization barely modify the model. This exposes a fundamental trade-off in deployed systems where privacy-preserving unlearning may be reversed by standard compression techniques.

[**LiSA: Lifelong Safety Adaptation via Conservative Policy Induction**](https://arxiv.org/abs/2605.14454v1) tackles the challenge of guardrail deployment in production AI systems where contextual safety requirements vary across organizations and use cases. As AI agents move beyond chat interfaces to execute workflows and access private data, this work addresses the critical need for adaptive safety mechanisms that can learn from deployment-specific failures without compromising existing protections.

**Note**: Coverage may be limited as ArXiv does not publish new submissions on weekends, potentially affecting the comprehensiveness of this research digest.