# Articles de Recherche (2026-07-21)

## Articles Clés

### [How Does Alignment Tuning Shape Representations of Sycophancy and Related Cue-Induced Biases in LLMs?](https://arxiv.org/abs/2607.18114v1)
Cette étude examine comment l'entraînement d'alignment affecte la susceptibilité des LLM aux manipulations simples d'invite comme les réponses sycophantiques et les indices trompeurs. En utilisant le probing, l'ablation et l'analyse de représentations sur cinq familles de modèles, les chercheurs identifient des directions neuronales spécifiques encodant ces biais et montrent comment l'alignment tuning les remodèle sans les éliminer. Ce travail est crucial pour comprendre les défis fondamentaux de sécurité dans les modèles alignés et pourrait informer des approches d'entraînement plus robustes.

### [The Autonomous Agency Scale: A Behavioral Framework for Measuring Self-Directed Behavior in AI Systems](https://arxiv.org/abs/2607.17947v1)
Introduit une échelle structurée de 0 à 5 sur sept dimensions pour mesurer l'agentivité autonome dans les systèmes d'IA, distinguant entre l'accomplissement réactif de tâches et le comportement auto-dirigé. Le cadre évalue la persistance, l'orientation vers les objectifs, l'adaptabilité, l'auto-réflexion, la communication, l'utilisation d'outils et la conscience sociale. Cela fournit une infrastructure essentielle pour la gouvernance de l'IA alors que les modèles deviennent de plus en plus agentiques et autonomes.

### [Self-State Attacks on Self-Hosted AI Agents: How Far Can OS Defenses Go?](https://arxiv.org/abs/2607.17986v1)
Formalise une nouvelle classe d'attaques où les agents d'IA sont compromis par la corruption de leur propre mémoire et fichiers de configuration via des appels système légitimes. L'article caractérise cet espace de menace sur quatre axes et évalue les défenses au niveau OS, révélant des limites structurelles fondamentales dans la prévention de ces attaques. Cela souligne des vulnérabilités de sécurité critiques dans les déploiements d'IA autonomes que les modèles de sécurité actuels n'adressent pas adéquatement.

### [Adaptive Adversaries: A Multi-Turn, Multi-LLM Benchmark for LLM Agent Security](https://arxiv.org/abs/2607.18063v1)
Présente le premier benchmark pour les attaques adaptatives multi-tours où des attaquants LLM autonomes observent les réponses des défenseurs et pivotent leurs stratégies sur 21 scénarios. Contrairement aux pools d'attaques statiques, cela teste les défenses contre des adversaires intelligents qui apprennent et adaptent leur approche en temps réel. Le travail révèle des vulnérabilités significatives dans les mécanismes de défense actuels face aux menaces adaptatives.

### [Dynamic Defense Profiling Enables Cognitive Jailbreak of Text-to-Image Models](https://arxiv.org/abs/2607.17779v1)
Démontre une méthodologie d'attaque sophistiquée qui profile les mécanismes de défense dans les modèles text-to-image et utilise cette intelligence pour créer des jailbreaks plus efficaces pour générer du contenu nuisible. En analysant les modes d'échec plutôt qu'en traitant les défenses comme des signaux binaires, l'approche atteint des taux de succès plus élevés. Cela révèle l'inadéquation des mesures de sécurité actuelles contre les adversaires intelligents.

### [An Early Warning of Emerging Biosecurity Risks in Frontier LLMs](https://arxiv.org/abs/2607.18056v1)
Développe Intern-BioBreaker, un modèle de red-teaming spécialisé pour évaluer les risques biologiques dans les LLM de pointe, couplé à une validation en laboratoire humide du contenu généré. Le cadre teste la capacité des modèles à fournir des informations biologiques dangereuses et valide la faisabilité pratique des protocoles générés par l'IA. Cela fournit des capacités d'alerte précoce cruciales pour les menaces de biosécurité alors que les LLM deviennent plus capables.

### [Stress Testing Concept Erasure with Large Language Model Agents](https://arxiv.org/abs/2607.17890v1)
Utilise des agents LLM autonomes pour tester systématiquement la robustesse des méthodes d'effacement de concepts dans les modèles génératifs. Plutôt que de s'appuyer sur des approches d'évaluation statiques, le cadre emploie des agents adaptatifs qui explorent divers vecteurs d'attaque pour sonder si les concepts ciblés ont été véritablement supprimés. Cela adresse une lacune critique dans la vérification de l'efficacité des interventions de sécurité dans les systèmes d'IA.

### [Hardware Mechanisms to Dynamically Throttle AI Performance](https://arxiv.org/abs/2607.18069v1)
Propose des mécanismes de sécurité au niveau matériel qui peuvent réduire dynamiquement les performances des systèmes d'IA lorsqu'un comportement préoccupant est détecté, fournissant une dernière ligne de défense au-delà des sauvegardes logicielles. L'approche opère au niveau silicium, rendant plus difficile pour les systèmes d'IA suffisamment capables de la contourner. Cela représente une direction importante pour assurer la sécurité de l'IA par la conception de matériel à sécurité intégrée.

## Travaux Supplémentaires Notables

### Modèles Vision-Langage et de Raisonnement
[Can We Break LLMs Out of Self-Loops? Fine-Grained Reasoning Control with Activation Steering](https://arxiv.org/abs/2607.18100v1) introduit des méthodes pour contrôler les trajectoires de raisonnement dans les LLM par le biais de l'activation steering, adressant les problèmes où les modèles se retrouvent coincés dans des patterns de raisonnement répétitifs.

### Sécurité et Confidentialité des Agents
[RT-SHCUA: Real-Time Self-Hosted Computer-Use Agent for UAV Control](https://arxiv.org/abs/2607.17951v1) explore les défis de sécurité dans le déploiement d'agents computer-use pour des applications critiques de sécurité comme le contrôle de drones, soulignant la tension entre capacité autonome et exigences de sécurité.