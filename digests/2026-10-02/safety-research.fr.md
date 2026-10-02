# Articles de recherche (2026-10-02)

## Articles clés

### Avancées en sécurité et sûreté

**[External Observers May See More Clearly: Cross-Model Span-Level Hallucination Detection in Large Language Models via Hidden State Probing](https://arxiv.org/abs/2610.02066v1)** présente un cadre pour détecter les hallucinations au niveau des segments en analysant les états cachés internes à travers différents modèles. L'approche va au-delà de la simple classification par token pour capturer la dérive sémantique structurée dans les sorties des LLM. Cela représente une étape importante vers des systèmes de détection d'hallucinations plus granulaires et fiables.

**[Walking the Embedding Space: Datastore Extraction from Multimodal RAG](https://arxiv.org/abs/2610.01871v1)** démontre une nouvelle attaque contre les systèmes RAG multimodaux qui peut extraire des informations privées des datastores d'embeddings grâce à des stratégies de requête adaptatives. Le travail expose de nouvelles vulnérabilités de confidentialité dans les systèmes à récupération augmentée qui traitent à la fois le texte et les images. Cela souligne des considérations de sécurité critiques pour le déploiement de systèmes RAG avec des données sensibles.

**[A Safe Prototype Is Not a Safety Direction: Reference Dependence and Prompt Confounds in Response-Safety Embeddings](https://arxiv.org/abs/2610.01801v1)** remet en question les méthodes existantes pour évaluer la sécurité des réponses via la similarité cosinus avec des embeddings "sûrs", montrant que de telles approches souffrent de dépendance de référence et de biais de prompt. L'analyse révèle des limitations fondamentales dans les mécanismes actuels de détection de sécurité. Ce travail est crucial pour développer des méthodes d'évaluation de la sécurité plus robustes.

### Alignment et gouvernance

**[Can AI Oversight Be Zero Knowledge?](https://arxiv.org/abs/2610.01995v1)** explore si les systèmes d'IA peuvent être vérifiés pour leur exactitude sans révéler les données confidentielles sous-jacentes qu'ils traitent. Le travail étudie les preuves interactives et les mécanismes de débat pour le calcul assisté par oracle où l'exactitude dépend d'informations privées. Cela aborde un défi fondamental dans la supervision de l'IA où la vérification doit préserver la confidentialité.

**[TRACE: Trajectory Return Attribution and Contrastive Erasure for Multi-Turn Safety](https://arxiv.org/abs/2610.01323v1)** fournit une analyse théorique de l'alignment de sécurité dans les conversations multi-tours, montrant comment l'entraînement de sécurité à un tour peut borner le risque de trajectoire multi-tours. Le travail offre des conditions suffisantes et caractérise les modes de défaillance dans les scénarios de sécurité séquentiels. Cela est essentiel pour comprendre comment les propriétés de sécurité se transfèrent à travers les contextes de conversation.

### Interprétabilité mécaniste

**[Beyond Linear Concepts: Discovering and Aligning Non-Linear Concept Manifolds in Large Language Models](https://arxiv.org/abs/2610.01821v1)** étend l'interprétabilité mécaniste au-delà de l'hypothèse standard de linéarité en adaptant les méthodes de découverte de concepts non linéaires aux représentations de tokens des LLM. L'approche révèle que de nombreux concepts dans les modèles de langage sont organisés comme des variétés non linéaires plutôt que des directions linéaires. Cela remet en question les hypothèses fondamentales de la recherche actuelle en interprétabilité et ouvre de nouvelles directions pour comprendre les mécanismes internes des modèles.

**[Every Ablation Is a Dose: Counterweights and the Semblance of Self-Repair](https://arxiv.org/abs/2610.02173v1)** fournit une explication mécaniste du phénomène d'"auto-réparation" observé dans les modèles de langage, montrant qu'il résulte de gains préexistants plutôt que d'une compensation adaptative. Le travail recadre les études d'ablation à travers une lentille géométrique qui révèle comment les interventions interagissent avec la structure existante du modèle. Cela résout des questions persistantes sur la question de savoir si les modèles s'adaptent vraiment aux interventions ou révèlent simplement des mécanismes existants.

### Capacités des modèles fondamentaux

**[Are We Recovering Mechanisms? Objective-Level Recovery Gaps in Mechanistic Interpretability](https://arxiv.org/abs/2610.02098v1)** démontre que les métriques de fidélité en interprétabilité mécaniste peuvent préférer des circuits qui reproduisent moins bien le comportement du modèle, créant des écarts systématiques entre les objectifs d'évaluation et la véritable récupération de mécanismes. L'analyse révèle des limitations fondamentales dans les méthodes actuelles de découverte de circuits. Ce travail est critique pour s'assurer que les méthodes d'interprétabilité identifient réellement les mécanismes qu'elles prétendent trouver.

**[The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in Large Language Models](https://arxiv.org/abs/2610.02191v1)** introduit les "Primitives Mathématiques" pour diagnostiquer systématiquement la compréhension structurelle dans le raisonnement mathématique des LLM, allant au-delà des métriques de performance superficielles. Le cadre permet des améliorations ciblées en post-entraînement en identifiant des lacunes spécifiques de raisonnement. Cela fournit une approche principielle pour améliorer les capacités mathématiques dans les modèles fondamentaux.