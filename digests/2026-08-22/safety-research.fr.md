# Articles de recherche (2026-08-22)

## Articles clés

### Fuite de contexte et risques de confidentialité

[**Inadvertent Context Leakage in Language Models**](https://arxiv.org/abs/2608.19857v1) examine si le contexte utilisateur sensible (identifiants, dossiers médicaux, données financières) dans les fenêtres de contexte des LLM crée des corrélations cachées dans les sorties bénignes qui pourraient permettre des attaques de reconstruction. Les chercheurs démontrent que les adversaires peuvent concevoir des prompts pour amplifier cet effet, utilisant essentiellement le modèle comme un canal dissimulé. Ceci met en évidence une vulnérabilité critique de confidentialité qui pourrait compromettre la sécurité des agents IA traitant des données sensibles.

### Benchmarking et évaluation de la sécurité IA

[**ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models**](https://arxiv.org/abs/2608.20338v1) aborde le défi de supprimer sélectivement les connaissances nuisibles des LLM tout en préservant les capacités bénéfiques. L'article introduit un benchmark complet qui évalue si les modèles peuvent éliminer les comportements nuisibles dans des contextes spécifiques tout en maintenant les mêmes connaissances lorsqu'elles sont utilisées de manière bénéfique. Ce travail est crucial pour développer des systèmes IA plus sûrs qui peuvent distinguer entre les cas d'usage nuisibles et légitimes des mêmes connaissances sous-jacentes.

[**AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement**](https://arxiv.org/abs/2608.20318v1) présente le premier benchmark spécifiquement conçu pour tester si les systèmes IA peuvent améliorer leurs propres algorithmes d'entraînement. Le benchmark isole la capacité à concevoir des algorithmes d'entraînement des autres capacités, fournissant un test direct du potentiel d'auto-amélioration récursive. Cette recherche est essentielle pour comprendre si les systèmes IA actuels possèdent les capacités fondamentales nécessaires à l'auto-amélioration autonome.

### Robustesse et alignment

[**TESTNAV: Pareto-Guided Search for Compositional Robustness Testing**](https://arxiv.org/abs/2608.19882v1) s'attaque au défi de tester les systèmes IA contre plusieurs corruptions simultanées (par exemple, changements de luminosité et flou de mouvement combinés). Les auteurs développent une approche systématique pour naviguer dans l'espace exponentiellement large des combinaisons de corruptions tout en filtrant les cas de test irréalistes. Ce travail est vital pour s'assurer que les systèmes IA restent robustes dans des scénarios réels où plusieurs perturbations se produisent souvent simultanément.

[**Phantom Gains: Auditing Self-Improvement Against a Measured Null**](https://arxiv.org/abs/2608.20290v1) expose les artefacts de mesure qui peuvent créer de fausses impressions d'auto-amélioration de l'IA. En comparant les résultats d'auto-entraînement contre un modèle de contrôle figé poussé à travers des pipelines identiques, les chercheurs identifient sept types d'échecs de mesure qui peuvent inverser les résultats rapportés. Cette contribution méthodologique est cruciale pour évaluer rigoureusement si les systèmes IA s'améliorent véritablement ou exhibent simplement des artefacts de mesure.

### Méthodes de jailbreak et d'attaque

[**TempJail: Temporal Jailbreak Attack against Large Vision-Language Models via Subtitle Scheduling**](https://arxiv.org/abs/2608.19737v1) révèle un nouveau vecteur d'attaque contre les modèles vision-langage à travers la manipulation temporelle des sous-titres vidéo. Contrairement aux approches précédentes qui se concentrent sur le contenu sémantique, cette méthode exploite la façon dont l'information est organisée dans le temps pour contourner les mécanismes de sécurité. Cette recherche souligne l'importance de considérer les dynamiques temporelles dans la sécurité IA, surtout alors que les modèles multimodaux deviennent plus répandus.

### Architecture de sécurité des modèles de fondation

[**Understanding as an Explicit and Assessable Component of Frontier AI Safety Decisions**](https://arxiv.org/abs/2608.19816v1) propose une méthodologie pour rendre la compréhension des systèmes IA explicite et mesurable dans les décisions de sécurité. Les auteurs soutiennent que l'existence de cas de sécurité et de cartes système pourrait ne pas démontrer adéquatement une compréhension suffisante, particulièrement lorsque ces artefacts sont générés par IA sous pression temporelle. Ce travail est essentiel pour maintenir la supervision humaine et la responsabilité dans les décisions de déploiement IA.