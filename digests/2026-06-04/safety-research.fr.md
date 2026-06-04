# Articles de recherche (2026-06-04)

## Articles clés

### Recherche en sécurité, sûreté et alignment

**[Sequential Data Poisoning in LLM Post-Training](https://arxiv.org/abs/2606.04929v1)** introduit un nouveau modèle de menace où plusieurs attaquants se coordonnent à travers différentes étapes du post-entraînement des LLM (SFT, RLHF, DPO). La recherche révèle comment les attaques d'empoisonnement séquentiel peuvent être plus efficaces que les attaques à une seule étape, soulignant les vulnérabilités dans les pipelines d'entraînement multi-étapes. Ce travail est critique pour comprendre les risques de sécurité composés dans les flux de développement modernes des LLM.

**[Be Fair! Can Machine Learning Engineering Agents Adhere to Fairness Constraints?](https://arxiv.org/abs/2606.04971v1)** examine si les agents d'ingénierie ML automatisés peuvent correctement gérer les exigences d'équité dans les domaines sensibles. La recherche identifie un écart préoccupant de responsabilité où les utilisateurs finaux manquent de visibilité sur les choix de conception cruciaux affectant la conformité et l'équité. Ceci souligne le besoin de meilleurs cadres de gouvernance à mesure que l'automation ML progresse vers les domaines réglementés.

**[FoeGlass: Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors](https://arxiv.org/abs/2606.05101v1)** présente la première méthode de red teaming automatisé en boîte noire pour les systèmes de détection de deepfakes audio. En utilisant l'apprentissage en contexte, l'approche peut efficacement découvrir les angles morts dans les modèles de détection sans effort manuel. Ce travail est significatif pour renforcer les défenses contre les technologies de manipulation audio de plus en plus sophistiquées.

### Capacités et robustesse des LLM

**[Caliper: Probing Lexical Anchors versus Causal Structure in LLMs](https://arxiv.org/abs/2606.04915v1)** révèle que les LLM atteignant 50-70% de précision sur les benchmarks de raisonnement causal peuvent s'appuyer davantage sur la correspondance de motifs lexicaux que sur un véritable raisonnement structurel. En remplaçant les noms de variables sémantiques par des marqueurs de position, l'étude montre des chutes de performance significatives à travers neuf modèles. Ceci expose des limitations fondamentales dans les capacités de raisonnement actuelles des LLM qui pourraient affecter la fiabilité dans les applications critiques.

**[Imbuing Large Language Models with Bidirectional Logic for Robust Chain Repair](https://arxiv.org/abs/2606.05030v1)** s'attaque à la propagation d'erreurs dans le raisonnement en chaîne de pensée en introduisant le Teleological Reasoning Infilling (TRI), qui permet aux modèles de réparer les chaînes de raisonnement de manière bidirectionnelle. Le cadre aide à prévenir que des erreurs uniques corrompent des processus de raisonnement entiers. Cette approche pourrait significativement améliorer la fiabilité des LLM dans les tâches de raisonnement multi-étapes où la précision est cruciale.

**[Invariant Gradient Alignment for Robust Reasoning Distillation](https://arxiv.org/abs/2606.05025v1)** s'attaque à l'apprentissage de raccourcis dans les LLM à travers un cadre d'entraînement qui aligne les gradients à travers des exemples sémantiquement divers mais logiquement équivalents. Cette méthode vise à améliorer les performances hors distribution lors du transfert des capacités de raisonnement vers des modèles plus petits. Ce travail aborde un défi clé pour rendre les modèles distillés plus robustes et généralisables.

### Évaluation et benchmarking

**[Agent Planning Benchmark: A Diagnostic Framework for Planning Capabilities in LLM Agents](https://arxiv.org/abs/2606.04874v1)** introduit un benchmark complet avec 4 209 cas multimodaux pour évaluer spécifiquement les capacités de planification séparément des performances d'exécution. Le cadre de diagnostic couvre la décomposition d'objectifs, la sélection d'outils et le raisonnement sous contraintes à travers 22 domaines. Ce benchmark comble un écart critique dans la compréhension de l'origine des échecs des agents et permet des améliorations plus ciblées.

**[M³Eval: Multi-Modal Memory Evaluation through Cognitively-Grounded Video Tasks](https://arxiv.org/abs/2606.05008v1)** présente le premier cadre d'évaluation systématique pour la mémoire dans les modèles multi-modaux, examinant quelles informations sont retenues, comment elles sont préservées fidèlement, et la robustesse sous interférence. Alors que les modèles progressent vers la compréhension de vidéos de forme longue, ce benchmark fournit des perspectives essentielles sur les capacités mémorielles. Ce travail est crucial pour développer des systèmes multi-modaux fiables qui peuvent maintenir le contexte sur des interactions étendues.

*Note : ArXiv ne publie pas de nouvelles soumissions les week-ends, donc ce bulletin couvre les articles soumis le 3 juin 2026.*