# Communauté et outils (2026-08-08)

## Discussions clés

### 1. "Mythos social engineering AISI INC-2026-07-28-01" - 42 points
[Discussion](https://news.ycombinator.com/item?id=49218707) | [Source](https://web.archive.org/web/20260731053721/http://github.com/ancaferro/myNetwork/pull/3)

Les détails disponibles de cette pull request GitHub archivée sont limités, mais cela semble concerner le signalement d'incidents de l'AI Safety Institute (AISI) autour des vulnérabilités d'ingénierie sociale. La discussion met en évidence les préoccupations persistantes concernant la manipulation des systèmes d'IA et la nécessité de processus systématiques de divulgation de vulnérabilités.

## Sorties GitHub et outils notables

### 1. TransformerLens v3.7.0 - Expansion architecturale significative
[Release](https://github.com/TransformerLensOrg/TransformerLens/releases/tag/v3.7.0)

Version majeure ajoutant les familles d'architectures Vision Transformer (ViT) et Audio Spectrogram Transformer (AST), plus des fonctionnalités Jacobian Lens améliorées pour analyser les éléments internes des modèles. Plusieurs corrections de bugs critiques pour la compatibilité des modèles OLMo3 et GPT OSS ont été incluses. Cela étend considérablement les capacités d'interprétabilité mécaniste de TransformerLens au-delà des transformeurs textuels uniquement.

### 2. ShadowShield 0.7.0 - Mode passerelle et scanner en streaming
[Release](https://github.com/0xsl1m/shadowshield/releases/tag/v0.7.0)

Mise à jour complète axée sur la sécurité introduisant le mode passerelle sans modification de code (`shadowshield proxy --upstream`), des capacités de détection en streaming et des intégrations middleware étendues. La version inclut une remédiation d'audit où les bundles de politique non signés échouent désormais de manière fermée par défaut, représentant un durcissement significatif de la posture de sécurité. Cela permet un monitoring de sécurité IA plug-and-play pour les déploiements existants.

### 3. EleutherAI LM Evaluation Harness - Support MMLU CoT et ONNX
[Multiple PRs](https://github.com/EleutherAI/lm-evaluation-harness/pull/3987)

Correction d'un bug critique d'agrégation de métriques dans `mmlu_flan_cot_zeroshot` où les résultats au niveau groupe ne se remplissaient jamais en raison d'une incompatibilité de noms de métriques (`acc` vs `exact_match`). Ajout également d'un backend ONNX runtime brut aux côtés du support `onnxruntime-genai` existant, permettant l'évaluation des exports Model Builder via des appels directs `onnxruntime.InferenceSession`. Ces corrections assurent une évaluation fiable du raisonnement chaîne-de-pensée et étendent la compatibilité matérielle.

### 4. Arize Phoenix 19.19.0 - Gestion améliorée des spans LLM
[Release](https://github.com/Arize-ai/phoenix/releases/tag/arize-phoenix-v19.19.0)

Amélioration de l'interface utilisateur qui réduit tous les messages sauf le dernier dans les spans LLM pour réduire l'encombrement visuel dans l'analyse de traces. Inclut également le filtrage des coûts au niveau des spans via la racine réservée `span.` dans le DSL (`span.total_cost > 0.1`). Cela répond aux défis pratiques d'analyse des traces d'IA conversationnelle longues tout en maintenant la visibilité des coûts pour les workflows d'optimisation.

### 5. OpenAI Evals - Framework d'intégration de perspective récursive (RPI)
[PR](https://github.com/openai/evals/pull/1700)

Nouvelle évaluation implémentant le framework Recursive Perspective Integration comme benchmark évalué par modèle pour mesurer la qualité et la proportionnalité des stratégies de raisonnement. RPI fournit une évaluation structurée de la façon dont les modèles intègrent plusieurs points de vue dans des tâches de raisonnement complexes, progressant au-delà des simples métriques de justesse pour évaluer la qualité du processus de raisonnement.