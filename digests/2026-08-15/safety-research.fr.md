# Articles de recherche (2026-08-15)

## Articles clés

Les développements les plus significatifs cette semaine couvrent l'évaluation de la sécurité de l'IA, l'innovation en alignment, et les vulnérabilités de sécurité dans les applications émergentes d'IA :

**[Synthetic Persona Pretraining: Alignment from Token Zero](https://arxiv.org/abs/2608.13482v1)** introduit un changement de paradigme dans l'alignment de l'IA en intégrant l'identité de l'assistant et ses valeurs pendant le pretraining plutôt que comme une couche post-entraînement. Les auteurs démontrent que les modèles entraînés avec des données de persona synthétiques depuis le début montrent un alignment plus robuste que ceux alignés après le pretraining. Ceci est important car cela pourrait fondamentalement changer la façon dont nous construisons des systèmes d'IA alignés, en enracinant profondément les valeurs plutôt que de les appliquer superficiellement.

**[TRAPSBench: Vision-Language Models Encode but Fail to Express Epistemic Restraint](https://arxiv.org/abs/2608.13167v1)** révèle un écart critique entre ce que les VLM savent et ce qu'ils communiquent concernant l'incertitude. En utilisant des paires de vidéos générées procéduralement où les résultats deviennent indéterminés, les chercheurs montrent que les modèles reconnaissent intérieurement quand ils devraient s'abstenir mais échouent à exprimer cette incertitude dans leurs sorties. Cette découverte est cruciale pour le déploiement des VLM dans des applications à enjeux élevés où l'humilité épistémique est essentielle pour la sécurité.

**[UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](https://arxiv.org/abs/2608.13453v1)** démontre que les modèles VLA robotiques sont vulnérables aux attaques adversariales universelles qui fonctionnent à travers multiples tâches et instructions. Les chercheurs créent des patchs de texture physiques qui peuvent de façon fiable causer des comportements dangereux dans les systèmes d'IA incarnée indépendamment de la tâche spécifique. Cela expose une vulnérabilité de sécurité fondamentale alors que les robots deviennent plus autonomes et répandus.

**[Follow the Norm: Accounting for Fine-Tuning and Prompt Effects on Model Rationales](https://arxiv.org/abs/2608.13250v1)** montre que les jeux de données normatifs utilisés pour l'entraînement peuvent détourner les systèmes d'IA des comportements de sécurité de base, les systèmes générant des justifications apparemment raisonnables pour des actions divergentes des normes. Cette recherche démontre comment les normes des données d'entraînement fonctionnent comme des modèles guidant l'action plutôt que comme des connaissances neutres, soulignant les risques dans la façon dont nous organisons les jeux de données d'alignment.

**[Toward a Gricean Retreat: Probing LLMs for Knowledge Boundaries and Referent Specificity](https://arxiv.org/abs/2608.13484v1)** examine si les LLM peuvent se replier de manière appropriée vers des affirmations plus sûres et plus générales quand ils font face à l'incertitude concernant des entités spécifiques, suivant les principes gricéens de communication coopérative. L'étude trouve que les modèles fabriquent routinièrement des détails plausibles plutôt que de reculer vers des déclarations moins spécifiques mais véridiques, représentant un défi central pour le déploiement d'IA digne de confiance.

## Avancées en alignment et sécurité

**[Rules or Character? Scaling Laws for AI Safety Design](https://arxiv.org/abs/2608.13345v1)** fournit une analyse formelle de l'équilibre optimal entre façonnage du caractère (RLHF, Constitutional AI) versus application de règles (filtres de sortie, classificateurs) selon l'échelle de déploiement. Le modèle de statique comparative suggère que différentes architectures de sécurité peuvent être optimales à différentes échelles de déploiement.

**[Refusing Intent, Not Form: Wrapper-Based Intent-Group Supervision for LLM Safety](https://arxiv.org/abs/2608.13304v1)** aborde le problème des modèles apprenant des raccourcis de forme de surface dans l'entraînement de sécurité, où les prompts nuisibles enveloppés contournent la sécurité tandis que les prompts bénins enveloppés similaires sont sur-refusés. Leur méthode WIFA fournit une augmentation automatique de groupe d'intention pour un réglage de sécurité plus robuste.

## Capacités des modèles et évaluation

**[Vero: Can AI Agents Build Formally Verified Software Repositories?](https://arxiv.org/abs/2608.13522v1)** introduit le premier benchmark pour des agents qui doivent produire à la fois des implémentations et des preuves vérifiées par machine de leur exactitude. Ceci représente un pas significatif vers des systèmes d'IA qui peuvent fournir des garanties mathématiques sur leur sortie de code.

**[Beyond Final Scores: A Systematic Evaluation of Agents for Long-Horizon AI Research and Development](https://arxiv.org/abs/2608.13417v1)** présente un cadre qui évalue les agents sur 36 tâches à long horizon utilisant une décomposition basée sur des règles pour révéler où le progrès est fait ou perdu, abordant la limitation que les scores finaux n'indiquent pas si l'expérience accumulée améliore les décisions.

## Recherche en sécurité et robustesse

**[LLM-Assisted Dynamic Threat Analysis for Attacker-Reachable Software Weaknesses in Autonomous Vehicles](https://arxiv.org/abs/2608.13450v1)** étudie l'utilisation des LLM pour automatiser l'analyse d'exploitabilité pour les logiciels de conduite autonome, où les faiblesses pourraient affecter les décisions de contrôle critiques. Ce travail aborde le défi de confirmer dynamiquement les vulnérabilités de sécurité dans les systèmes d'IA critiques pour la sécurité.

**[Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](https://arxiv.org/abs/2608.12977v1)** propose de dépasser les défenses d'exécution conçues manuellement vers des cadres principiels pour construire et maintenir des mécanismes de sécurité dans les boucles d'exécution d'agents LLM, abordant les menaces de sécurité sophistiquées posées par des agents autonomes de plus en plus capables.