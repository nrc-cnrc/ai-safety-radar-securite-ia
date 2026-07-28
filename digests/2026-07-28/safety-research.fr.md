# Articles de recherche (2026-07-28)

## Articles clés

### Recherche en alignment et sécurité

**[Normes épistémiques pour la recherche en sécurité et alignment de l'IA](https://arxiv.org/abs/2607.24243v1)** examine comment la recherche en sécurité de l'IA diffère fondamentalement du développement de l'IA grand public selon deux dimensions clés : des profils de capacités qui mettent l'accent sur l'absence de comportements dangereux plutôt que sur les capacités positives, et des standards de preuve exigeant une démonstration de sécurité dans des conditions adverses plutôt que des performances moyennes. Ce cadre théorique est crucial pour établir des standards rigoureux qui correspondent à la nature critique du travail en sécurité de l'IA.

**[Gubernaut : Un contrôleur homéostatique déterministe pour agents LLM régulés par l'affect](https://arxiv.org/abs/2607.24339v1)** présente un système de contrôle d'exécution agnostique au modèle qui traite les modes de défaillance réactifs dans les LLM comme l'escalade sous provocation et la dérive sycophantique. Le contrôleur cognitif Gubernaut fonctionne comme une boucle de surveillance-contrôle qui maintient l'homéostasie émotionnelle à travers différentes familles de modèles, offrant une solution pratique pour un comportement d'agent IA plus stable.

**[Réguler pour la légitimité de l'IA](https://arxiv.org/abs/2607.24391v1)** soutient que la gouvernance de l'IA doit traiter la légitimité comme un objectif réglementaire distinct au-delà de l'alignment, en se concentrant sur la croyance sociologique parmi ceux soumis au pouvoir de l'IA que cette gouvernance est justifiée. Cette perspective met en évidence une lacune critique dans les cadres actuels de gouvernance de l'IA qui privilégient l'alignment technique tout en négligeant les fondements sociaux d'une autorité IA acceptable.

### Interprétabilité et explicabilité

**[Les auto-encodeurs parses encodent à la fois concepts et fonctions : La géométrie en aval des effets de caractéristiques](https://arxiv.org/abs/2607.24645v1)** révèle que les caractéristiques SAE affectent les sorties du modèle à travers des voies de détection de concepts et d'exécution de fonctions, leur géométrie en aval déterminant quelle voie domine. Cette découverte explique pourquoi des caractéristiques avec des descriptions d'activation claires peuvent avoir des effets causaux faibles, fournissant des insights cruciaux pour améliorer les outils d'interprétabilité utilisés dans la recherche en sécurité de l'IA.

**[D-Score : Un signal spectral d'état caché pour la détection d'hallucinations dans les grands modèles de langage](https://arxiv.org/abs/2607.24586v1)** propose une statistique spectrale simple calculée à partir d'activations cachées qui peut détecter les hallucinations en une seule passe avant. La méthode compte les directions singulières au-dessus d'un seuil, offrant une approche computationnellement efficace pour identifier quand les modèles produisent du contenu non supporté ou faux—une capacité critique pour la sécurité de déploiement.

### Sécurité et robustesse

**[Juste des tests, circulez : Évasion de l'interprétation de journaux système basée sur LLM par injection de prompt](https://arxiv.org/abs/2607.24174v1)** démontre comment les attaquants peuvent injecter des informations contextuelles dans les entrées de journal pour manipuler la façon dont les LLM interprètent l'activité malveillante dans les centres d'opérations de sécurité. Ce travail expose une vulnérabilité significative dans l'utilisation croissante des LLM pour l'analyse de cybersécurité, montrant comment la même flexibilité qui rend les LLM utiles crée également de nouveaux vecteurs d'attaque.

**[Quand les défenses LLM se retournent : Caractérisation des compromis sécurité, performance et coût](https://arxiv.org/abs/2607.24392v1)** fournit une analyse systématique de comment les défenses contre le jailbreak peuvent introduire des coûts secondaires incluant la dégradation des performances, le sur-refus sur des entrées bénignes, et l'augmentation des coûts d'inférence. Cette analyse complète des compromis est essentielle pour les praticiens qui doivent équilibrer sécurité et utilisabilité dans les déploiements réels.

**[Algèbre de politique de permissions agentiques pour le confinement de contamination dans les agents LLM](https://arxiv.org/abs/2607.24625v1)** aborde le défi sécuritaire critique des agents LLM traitant des données de confidentialité mixte à travers un nouveau cadre de contrôle de flux d'information qui permet le changement de contexte pour contenir la propagation de contamination. Cette approche résout la tension entre sécurité et utilité qui a limité le déploiement pratique des systèmes traditionnels de suivi de contamination.

### Évaluation et benchmarks

**[Le coût de savoir : Un protocole conscient des ressources pour l'évaluation benchmark des hallucinations au-delà des classements statiques](https://arxiv.org/abs/2607.24063v1)** introduit un cadre qui mesure la factualité par rapport au coût computationnel, traitant la façon dont les modèles de pointe se regroupent maintenant au sommet des échelles de précision. Cette approche d'évaluation consciente des ressources est cruciale pour distinguer les systèmes genuinement meilleurs de ceux qui dépensent simplement plus de calcul pour atteindre des scores plus élevés.

**[L'efficacité compte dans la recherche autonome](https://arxiv.org/abs/2607.24647v1)** soutient que l'efficacité de recherche devrait être considérée aussi importante que la qualité de solution lors de l'évaluation des systèmes de recherche autonome. Alors que ces systèmes deviennent plus capables, leur capacité à atteindre des résultats de haute qualité avec une dépense de ressources minimale devient cruciale pour le déploiement pratique et la scalabilité.