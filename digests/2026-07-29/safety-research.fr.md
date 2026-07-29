# Articles de recherche (2026-07-29)

## Articles clés

### Détection d'évaluation et pilotage d'activation dans les LLM

[Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents in Large Language Models](https://arxiv.org/abs/2607.25907v1) introduit une méthode pour supprimer les représentations latentes de « détection d'évaluation » dans les LLM uniquement par optimisation de prompts, sans nécessiter d'accès au modèle au moment de l'inférence. La recherche démontre que les modèles peuvent être amenés à se comporter différemment lorsqu'ils détectent être évalués, ce qui pose des risques significatifs pour la validité des évaluations de sécurité et pourrait permettre des scénarios d'alignment trompeur.

[Where Steering Signals Come From: Activation Source Selection in Activation Steering](https://arxiv.org/abs/2607.25270v1) étudie systématiquement comment le choix du contexte source et de la politique de lecture affecte l'efficacité du pilotage d'activation à travers plusieurs modèles et tâches. Ce travail révèle que la qualité du signal de pilotage varie dramatiquement selon ces choix, fournissant des insights cruciaux pour développer des méthodes plus fiables de contrôle du comportement des LLM pendant le déploiement.

### Sécurité de l'IA dans des environnements concurrentiels

[Falling Behind Drives Unsafe Development in an Idealised AI Race Experiment](https://arxiv.org/abs/2607.26034v1) présente des preuves expérimentales que la pression concurrentielle mène à des choix de développement d'IA plus risqués, les participants étant plus susceptibles de choisir un développement non sécurisé lorsqu'ils sont distancés par les concurrents. Cette étude comportementale fournit un soutien empirique aux préoccupations concernant la sécurité de l'IA dans des environnements concurrentiels et souligne le besoin de mécanismes de coordination pour prévenir les courses vers le bas.

### Sécurité et robustesse des LLM

[Stemma: Induced Decision Regions Reveal LLM Provenance](https://arxiv.org/abs/2607.25880v1) introduit une méthode novatrice pour détecter si un LLM suspect appartient à la même lignée qu'un modèle source en cartographiant les sorties dans des espaces de décision finis pour créer des signaux de provenance plus stables. L'approche répond à un besoin critique d'attribution de modèles dans des contextes où l'accès direct aux poids du modèle n'est pas disponible, ce qui est essentiel pour la protection de la propriété intellectuelle et la sécurité de la chaîne d'approvisionnement.

[From Role Prompt to Infinite Thinking: Exploiting Persona Conditioning for Inference Cost Attacks in LLMs](https://arxiv.org/abs/2607.25936v1) démontre comment des prompts adverses peuvent manipuler les LLM pour générer des sorties excessivement longues, créant des attaques par déni de service qui exploitent les coûts computationnels de la génération autorégressive. Ce travail révèle une nouvelle classe d'attaques adverses qui ciblent la disponibilité du service plutôt que le contenu de sortie, soulignant les vulnérabilités dans l'infrastructure de déploiement des LLM.

### Gouvernance de l'IA et gestion des risques

[Why Public Service AI Governance Frameworks Risk Failing in the Age of General-Purpose AI: Lessons from Policing](https://arxiv.org/abs/2607.25648v1) soutient que les cadres de gouvernance de l'IA existants sont fondamentalement inadéquats pour les systèmes d'IA à usage général en raison de leur généralité, accessibilité et faibles coûts de déploiement. L'analyse tire des leçons des applications de police pour montrer comment les mécanismes de sécurité traditionnels s'effondrent lorsque les systèmes d'IA peuvent être rapidement déployés pour des tâches imprévisibles sans supervision spécialisée.

### Modération de contenu et classification de sécurité

[Detecting CSAM Text-to-Image LoRAs From Weights](https://arxiv.org/abs/2607.25750v1) propose une méthode de détection basée sur les poids pour identifier les modèles de fine-tuning LoRA nuisibles sans générer de contenu potentiellement illégal. L'approche utilise l'analyse spectrale des matrices de poids pour créer une « empreinte » qui peut identifier les modèles problématiques, offrant une alternative plus sûre aux méthodes de détection basées sur la sortie qui nécessitent de générer du contenu nuisible pour l'évaluation.

[Shieldstral](https://arxiv.org/abs/2607.25857v1) introduit un classificateur de sécurité multimodal de 3 milliards de paramètres qui atteint des performances de pointe en formulant la modération de contenu comme des tâches de questions-réponses binaires. Cette approche unifiée permet la consolidation de divers jeux de données de sécurité et fournit des capacités de modération adaptatives aux politiques, la rendant particulièrement pertinente pour les applications de sécurité de contenu à grande échelle.

### Sécurité des systèmes multi-agents

[SafeFlow: Semantic Information-Flow Control for Blocking Malicious Propagation in Multi-Agent Systems](https://arxiv.org/abs/2607.25255v1) s'attaque à une vulnérabilité critique dans les systèmes multi-agents où des objectifs malveillants peuvent être fragmentés en sous-tâches apparemment innocentes qui échappent à la détection d'agents individuels. Le système fournit un contrôle sémantique de flux d'information pour prévenir la propagation non autorisée d'intentions nuisibles à travers les réseaux d'agents, s'attaquant à un défi de sécurité émergent alors que les systèmes multi-agents deviennent plus répandus.