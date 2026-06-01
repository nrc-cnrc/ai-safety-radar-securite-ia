# Communauté & Outils (2026-06-01)

## Discussions clés

### Les cerveaux humains sont mal alignés, hallucinatoires, des perroquets stochastiques
Cette [discussion Hacker News](https://news.ycombinator.com/item?id=48345414) autour d'un [article Substack](https://substack.com/@samuelfitoussi/p-191268395) a attiré l'attention en appliquant à la cognition humaine elle-même les critiques généralement dirigées contre les systèmes d'IA. L'article soutient que les cerveaux humains présentent bon nombre des mêmes modes de défaillance (hallucination, mauvais alignment avec les objectifs déclarés, reconnaissance de motifs sans véritable compréhension) qui inquiètent les chercheurs concernant les systèmes d'IA. La discussion a exploré si cette comparaison aide à contextualiser les risques de l'IA ou minimise les préoccupations légitimes concernant les systèmes artificiels. Ceci importe car cela remet en question les hypothèses selon lesquelles la cognition humaine servirait de référence fiable pour les normes de sécurité de l'IA.

## Versions GitHub et outils notables

### Qorami SDK v1.0.0
Le [Qorami SDK](https://github.com/loicfontaine-max/qorami-sdk/releases/tag/v1.0.0) a été lancé avec des clients JavaScript et Python, des schémas d'outils OpenAI/Anthropic, et un serveur MCP pour les flux de travail d'approbation d'e-mails avec intervention humaine. Le SDK permet aux agents d'IA de demander une confirmation humaine avant d'envoyer des e-mails, avec trois résultats possibles : envoyer, demander confirmation, ou ne pas envoyer. Ceci importe car cela fournit une implémentation pratique de la supervision humaine pour les actions d'agents d'IA à enjeux élevés.

### Mises à jour du LM Evaluation Harness d'EleutherAI
Plusieurs mises à jour importantes du [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) incluent l'ajout d'[AgentThreatBench](https://github.com/EleutherAI/lm-evaluation-harness/issues/3776) - la première suite d'évaluation opérationnalisant l'OWASP Top 10 pour les applications agentiques en tests de sécurité exécutables, et [prompt_defense_eval](https://github.com/EleutherAI/lm-evaluation-harness/pull/3809) pour tester les vulnérabilités OWASP-LLM02 (Gestion de sortie non sécurisée) en utilisant une notation regex déterministe. Ces ajouts importent car ils fournissent des benchmarks standardisés pour évaluer les risques de sécurité des agents d'IA plutôt que de s'appuyer sur des évaluations théoriques.

### Renforcement de la sécurité du Anthropic Cookbook
L'[Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks/pull/626) a reçu d'importantes améliorations de sécurité pour le cookbook d'agents gérés CMA-MCP, traitant 14 découvertes de sécurité concernant la divulgation d'informations, la validation d'entrée, la limitation du taux et la sécurité des conteneurs. Le renforcement inclut le filtrage des champs sensibles des métadonnées d'agent et la prévention des conditions de course dans la gestion des pods Kubernetes. Ceci importe car cela démontre des pratiques de sécurité proactives pour les modèles de déploiement d'agents d'IA que d'autres sont susceptibles de répliquer.

### Refactorisation de la bibliothèque Bergson
[Bergson d'EleutherAI](https://github.com/EleutherAI/bergson/pull/290) a subi une simplification majeure avant sa sortie, supprimant les chemins de processeur et refactorisant l'estimation hessienne pour utiliser un outil autonome plutôt que des indicateurs de temps de construction. La bibliothèque est également passée à la projection TRAK efficace en mémoire pour réduire les exigences VRAM. Ceci importe car cela rend les outils avancés d'interprétabilité de modèles plus accessibles en réduisant la complexité et les exigences computationnelles.