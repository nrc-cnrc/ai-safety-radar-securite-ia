# Articles de recherche (2026-07-23)

## Articles clés

### [Defense Against LLM Backdoors using Critical Neuron Isolation Pruning](https://arxiv.org/abs/2607.19894v1)
Yuxi Li et al. proposent une nouvelle défense contre les attaques par porte dérobée dans les grands modèles de langage en identifiant et élaguant les neurones critiques qui réagissent aux déclencheurs malveillants. Leur méthode traite à la fois les portes dérobées basées sur le fine-tuning et les attaques d'édition de modèle plus sophistiquées qui peuvent contourner les pipelines d'entraînement traditionnels. Ceci est important car cela fournit un mécanisme de défense pratique contre une classe croissante d'attaques qui pourrait compromettre la sécurité des LLM en déploiement.

### [OPIUM: Mitigating Steering Externalities and Over-Refusal via Dual Objective Latent Optimization](https://arxiv.org/abs/2607.19806v1)
Kavin Aravindan et al. introduisent une méthode sans entraînement pour assainir les vecteurs de pilotage d'activation qui causent des effets secondaires non désirés dans les LLM. OPIUM aborde le problème où les vecteurs d'amélioration de l'utilité affaiblissent les comportements de sécurité et les vecteurs de sécurité causent un sur-refus sur les invites bénignes grâce à l'optimisation de correspondance de représentation. Ceci est significatif pour la sécurité de l'IA car cela permet un contrôle plus précis du comportement des LLM sans compromettre ni les capacités ni la sécurité.

### [Sound Probabilistic Safety Bounds for Large Language Models](https://arxiv.org/abs/2607.20286v1)
Mahdi Nazeri et al. développent un cadre pour calculer des bornes rigoureuses sur la probabilité qu'un LLM génère une sortie nuisible en utilisant les intervalles de confiance de Clopper-Pearson et les caractéristiques de l'espace latent pour prioriser l'exploration des chemins de génération dangereux. Cela fournit la première approche mathématiquement solide pour quantifier les risques de sécurité des LLM avec des garanties probabilistes, ce qui est crucial pour déployer les LLM dans des applications critiques pour la sécurité.

### [Integrity of peer-to-peer distributed LLM inference under malicious nodes](https://arxiv.org/abs/2607.19490v1)
Mert Cihangiroglu et Antonino Nocera étudient les vulnérabilités de sécurité dans l'inférence distribuée des LLM où les couches de modèle sont réparties sur plusieurs nœuds non fiables. Ils analysent comment les parties malveillantes peuvent altérer les sorties de couche pour corrompre les résultats finaux et évaluent le coût computationnel des méthodes de vérification. Ce travail est important car l'inférence distribuée devient plus commune, mettant en évidence les hypothèses de confiance critiques qui doivent être adressées pour un déploiement sécurisé.

### [OpenSkillRisk: Benchmarking Agent Safety When Using Real-World Risky Third-Party Skills](https://arxiv.org/abs/2607.20121v1)
Qiyuan Liu et al. construisent un benchmark de sécurité évaluant à quel point les agents basés sur LLM reconnaissent et évitent les risques de sécurité latents dans les compétences tierces qui n'émergent que pendant l'exécution. Leur investigation systématique révèle des lacunes dans la capacité des systèmes d'agents actuels à identifier des compétences apparemment inoffensives qui contiennent des dangers cachés. Ceci aborde un défi de sécurité critique car les agents s'appuient de plus en plus sur des outils et compétences externes pour des capacités améliorées.

### [JANUS: Foreseeing Latent Risk for Long-Horizon Agent Safety](https://arxiv.org/abs/2607.19913v1)
Yuan Xiong et al. proposent un cadre qui entraîne des gardes de sécurité à anticiper les risques retardés à partir de trajectoires d'agent partielles en utilisant la simulation multi-agent et des tâches d'anticipation-adjudication couplées. Ceci fait passer la sécurité des agents de la modération de contenu réactive à la prévention proactive des risques avant que des actions nuisibles ne se produisent. Le travail est significatif car il aborde le défi de prévenir les défaillances opérationnelles dans les systèmes autonomes à long horizon où les risques peuvent ne pas être immédiatement apparents.

### [The Ethics of Autonomous AI Agents for Offensive Security](https://arxiv.org/abs/2607.20255v1)
Andreas Happe et al. examinent les implications éthiques des agents autonomes pilotés par LLM dans la sécurité offensive, mettant en évidence trois dimensions d'indétermination : politiques non-déterministes, impact ouvert, et portée opérationnelle illimitée. Ils soutiennent que ces propriétés créent des défis éthiques nouveaux au-delà des outils traditionnels de test de pénétration. Cette analyse est cruciale car les outils de sécurité autonomes deviennent plus répandus, nécessitant de nouveaux cadres pour un développement et déploiement responsables.

### [Don't Trust the Label: License Laundering in AI Supply Chains](https://arxiv.org/abs/2607.20300v1)
James Jewitt et al. tracent 232 270 chaînes jeu de données→modèle→application sur les plateformes d'IA, quantifiant le « blanchiment de licence » où les obligations légales sont supprimées lorsque les artefacts se déplacent à travers la chaîne d'approvisionnement. Ils trouvent des modèles systématiques où les licences restrictives sont remplacées par des licences permissives, violant potentiellement les termes de licence originaux. Cette recherche met en évidence des lacunes de gouvernance critiques dans les flux de travail de développement d'IA qui pourraient mener à des violations légales et éthiques dans le déploiement d'IA.

## Interprétabilité et explication

### [Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations](https://arxiv.org/abs/2607.20379v1)
Hiskias Dingeto révèle des défauts fondamentaux dans les approches d'auto-encodeur en langage naturel pour expliquer les activations neuronales, montrant que les tests de fidélité basés sur la reconstruction peuvent passer tout en faisant des affirmations incorrectes sur les caractéristiques individuelles. Ce travail remet en question une méthode d'interprétabilité populaire et appelle à des cadres d'évaluation plus robustes.

### [Reading and Steering Representations of Materials-Science Mechanisms in an Open-Weight Language Model](https://arxiv.org/abs/2607.20058v1)
Markus J. Buehler démontre que les concepts de science des matériaux dans le modèle Gemma existent sous trois formes séparables : états individuels lisibles, transformations contrôlables entre états, et représentations internes causalement influentes. Cela fournit une preuve que les LLM développent des connaissances internes structurées qui peuvent être à la fois interprétées et manipulées pour des applications scientifiques.

## Entraînement et optimisation

### [Reinforcement Learning for Large Language Model Selective Evidence Adoption from Contaminated Retrieval Results](https://arxiv.org/abs/2607.20090v1)
Yanyu Chen et al. introduisent SelectBench et des méthodes d'entraînement pour aider les LLM à adopter sélectivement des informations pertinentes tout en rejetant le contenu trompeur dans les contextes de récupération. Ceci aborde un défi critique pour les modèles augmentés par récupération qui doivent gérer des sources de preuves de qualité mixte sans refus global ou adoption non critique.

### [Co-Evolving LLM Evaluators and Policies via DynamicRubric](https://arxiv.org/abs/2607.20083v1)
Beining Wang et al. proposent une méthode pour aborder les écarts de score d'évaluateur effondrés pendant l'optimisation de politique en co-faisant évoluer à la fois la politique et l'évaluateur. Leur approche maintient des signaux de supervision significatifs à mesure que les modèles s'améliorent, résolvant un goulot d'étranglement clé dans les méthodes d'entraînement basées sur la récompense.

## Robustesse et sécurité

### [Adversarial Frontiers: Minimum-Norm Attack Ensembles for Robustness Evaluation](https://arxiv.org/abs/2607.19855v1)
Luca Scionis et al. soutiennent que l'évaluation actuelle de robustesse adversariale utilisant des budgets de perturbation uniques est fondamentalement limitée et proposent des ensembles d'attaques à norme minimale qui fournissent une preuve d'optimalité. Ceci remet en question les pratiques d'évaluation standard et fournit des méthodes d'évaluation de robustesse plus rigoureuses.

### [GhostPrompt: Cross-Image Adversarial Prompt for Vision-Language Models](https://arxiv.org/abs/2607.19683v1)
Li Zeng et al. introduisent des invites adversariales transférables entre images qui fonctionnent sur différentes images, révélant une nouvelle classe de vulnérabilité dans les modèles vision-langage. Ceci s'étend au-delà des attaques spécifiques aux images vers des menaces plus généralisables qui pourraient affecter les systèmes VLM déployés.