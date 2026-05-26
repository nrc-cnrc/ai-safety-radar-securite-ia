# Articles de recherche (2026-05-26)

## Articles clés

### Interprétabilité et alignment

[**Confidence and Calibration of Activation Oracles for Reliable Interpretation of Language Model Internals**](https://arxiv.org/abs/2605.26045v1) examine la quantification d'incertitude pour les oracles d'activation—des outils qui traduisent les états internes des modèles en langage naturel. L'étude évalue six méthodes d'estimation de confiance sur 6 000 échantillons, révélant que la calibration spécifique à la verbalisation est cruciale. Ceci importe car des outils d'interprétabilité mal calibrés pourraient induire en erreur les évaluations de sécurité en fournissant une fausse confiance sur ce que les modèles calculent réellement en interne.

[**Universal Activation Verbalizer: A Unified Framework for Cross-Model Activation Explanation**](https://arxiv.org/abs/2605.25903v1) présente UAV, qui utilise un décodeur partagé pour expliquer les activations de différents modèles donneurs via des adaptateurs légers. Le framework prend en charge l'apprentissage par transfert entre architectures de modèles sans réentraîner l'ensemble du système d'explication. Ceci est significatif pour la recherche en sécurité de l'IA car cela pourrait permettre des études d'interprétabilité plus efficaces et systématiques à travers différentes familles de modèles.

[**Reading the Finetuning Prior: Verbatim Content Recovery via Contrastive Decoding Diffing**](https://arxiv.org/abs/2605.25902v1) démontre que les modèles fine-tunés mémorisent le contenu d'entraînement mot pour mot, et propose Contrastive Decoding Diffing (CDD) comme méthode « boîte noire » pour auditer le contenu qu'un modèle déployé a appris. CDD ne nécessite qu'un accès API, le rendant pratiquement utile pour détecter l'utilisation non autorisée de données d'entraînement et comprendre les risques potentiels de confidentialité dans les systèmes de production.

### Sécurité et robustesse

[**$D^2$-Monitor: Dynamic Safety Monitoring for Diffusion LLMs via Hesitation-Aware Routing**](https://arxiv.org/abs/2605.25893v1) traite de la surveillance de sécurité pour les modèles de langage basés sur la diffusion, qui génèrent du texte via un débruitage multi-étapes plutôt qu'une prédiction autorégressive. L'approche utilise des sondes légères pour analyser les représentations intermédiaires et router les cas incertains vers une surveillance plus approfondie. Ceci est important car les LLM de diffusion représentent une architecture émergente que les mesures de sécurité existantes pourraient ne pas couvrir adéquatement.

[**Retrying vs Resampling in AI Control**](https://arxiv.org/abs/2605.26047v1) examine deux approches pour gérer les actions d'IA risquées : bloquer les actions signalées (retry) versus générer plusieurs options (resampling). L'étude révèle que le retry peut être exploité par des modèles adverses qui utilisent le retour du moniteur pour construire des attaques plus furtives, tandis que le resampling évite cette fuite d'information. Ceci fournit des conseils concrets pour concevoir des mécanismes de supervision dans des scenarios de contrôle d'IA à enjeux élevés.

### Systèmes multi-agents et gouvernance

[**Multi-Agent Systems are Mixtures of Experts: Who Becomes an Influencer?**](https://arxiv.org/abs/2605.25929v1) analyse la délibération de LLM multi-agents à travers la dynamique d'opinion de Friedkin-Johnsen, montrant que des patterns d'influence émergent basés sur des paramètres dépendants des entrées. La recherche révèle comment certains agents deviennent influents dans la prise de décision de groupe, ce qui a des implications pour concevoir des systèmes d'IA multi-agents équitables et efficaces pour la gouvernance et le raisonnement collaboratif.

### Évaluation et benchmarks

[**Automated Benchmark Auditing for AI Agents and Large Language Models**](https://arxiv.org/abs/2605.26079v1) présente Auto Benchmark Audit (ABA), un framework agentique qui identifie systématiquement les problèmes dans les benchmarks d'IA tels que les dépendances cachées, les lacunes de spécification et la logique d'évaluation fragile. Étant donné le rôle critique que jouent les benchmarks dans l'évaluation de la sécurité de l'IA, cette capacité d'audit automatisé pourrait aider à assurer des standards d'évaluation plus fiables.

[**The Age of Curiosity Meets the Age of AI: Benchmarking Child Safety in Large Language Models**](https://arxiv.org/abs/2605.25510v1) présente KIDBench, le premier benchmark spécifiquement conçu pour évaluer la sécurité des LLM avec des enfants âgés de 7 à 11 ans. Utilisant des critères d'évaluation fondés sur le développement, il comble une lacune critique dans la recherche en sécurité alors que les enfants interagissent de plus en plus avec des systèmes d'IA qui n'ont pas été conçus en tenant compte de leurs besoins cognitifs et émotionnels.

*Note : ArXiv ne publie pas de nouvelles soumissions le week-end (samedi et dimanche), donc cette couverture représente les soumissions du 25 mai 2026.*