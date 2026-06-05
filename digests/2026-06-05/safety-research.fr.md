# Articles de recherche (2026-06-05)

## Articles clés

### Attaques adverses et vulnérabilités

[**Safety Paradox: How Enhanced Safety Awareness Leaves LLMs Vulnerable to Posterior Attack**](https://arxiv.org/abs/2606.05614v1) révèle une vulnérabilité fondamentale dans les LLM alignés sur la sécurité : leur capacité améliorée à reconnaître le contenu dangereux peut être exploitée par une « Attaque Postérieure », où les modèles sont incités à générer exactement la réponse nuisible que leur classificateur interne signalerait. La recherche démontre que la conscience sécuritaire elle-même crée de nouveaux vecteurs d'attaque, nécessitant de repenser la façon dont nous équilibrons l'entraînement sécuritaire avec la robustesse.

[**SlotGCG: Exploiting the Positional Vulnerability in LLMs for Jailbreak Attacks**](https://arxiv.org/abs/2606.05609v1) va au-delà des attaques de jailbreak traditionnelles basées sur les suffixes en étudiant l'insertion de tokens adverses à diverses positions dans les prompts. Le travail révèle que différents « emplacements » d'insertion ont une efficacité variable pour contourner les mesures de sécurité. Cela souligne le besoin de mécanismes de sécurité agnostiques à la position qui peuvent se défendre contre les attaques indépendamment de l'endroit où le contenu adverse apparaît dans l'entrée.

[**Steering Vectors are an Adversarial Attack Surface**](https://arxiv.org/abs/2606.05958v1) démontre comment le steering d'activation—une technique populaire pour contrôler le comportement des LLM—peut être compromis par des attaques d'empoisonnement de données furtives. En substituant seulement 4-6% des tokens dans les jeux de données de steering, les attaquants peuvent créer des vecteurs qui paraissent bénins mais qui jailbreakent en réalité les modèles. Cette recherche expose les vulnérabilités dans la pratique de plus en plus populaire de partager des vecteurs de steering précalculés à travers la communauté.

### Mécanismes de défense et entraînement sécuritaire

[**Membrane: A Self-Evolving Contrastive Safety Memory for LLM Agent Defense**](https://arxiv.org/abs/2606.05743v1) introduit un système de garde-fou adaptatif qui utilise la Mémoire de Sécurité Contrastive pour distinguer entre les requêtes nuisibles et celles bénignes superficiellement similaires. Le système évolue en stockant des exemples appariés de ce qu'il faut bloquer versus ce qu'il faut permettre, abordant le problème de sur-refus commun dans les défenses existantes basées sur la mémoire. Cette approche offre une direction prometteuse pour maintenir la sécurité sans sacrifier l'utilité à mesure que les attaques évoluent.

[**GuardNet: Ensemble Strategies of Shallow Neural Networks for Robust Prompt Injection and Jailbreak Detection**](https://arxiv.org/abs/2606.05566v1) propose d'utiliser des ensembles de réseaux BiLSTM légers pour détecter les prompts adverses, étudiant si des modèles plus simples pourraient être plus robustes contre les attaques sophistiquées. Le système de 47 millions de paramètres offre une alternative computationnellement efficace aux approches de détection basées sur de grands modèles. Ce travail est significatif pour son exploration de la question de savoir si la simplicité architecturale peut fournir des avantages de robustesse inhérents.

### Alignment et entraînement de cohérence

[**Consistency Training Along the Transformer Stack**](https://arxiv.org/abs/2606.05817v1) étend l'entraînement de cohérence au-delà des approches traditionnelles en introduisant l'Entraînement de Cohérence MLP et l'Entraînement de Cohérence d'Attention, qui correspondent aux états internes du modèle à travers différents contextes. La méthode est appliquée à plusieurs menaces sécuritaires incluant la cohérence de persona et la fiabilité d'utilisation d'outils. Ce travail fait progresser notre compréhension de comment aligner le comportement du modèle au niveau mécanistique, offrant potentiellement des garanties de sécurité plus robustes.

### Sécurité de la mémoire et personnalisation

[**Beyond Similarity: Trustworthy Memory Search for Personal AI Agents**](https://arxiv.org/abs/2606.06054v1) aborde les lacunes critiques de sécurité dans la façon dont les agents d'IA personnels récupèrent et utilisent la mémoire à long terme, allant au-delà de la simple similarité sémantique pour considérer l'appropriation contextuelle. La recherche identifie des menaces comme la fuite inter-domaines et les jailbreaks induits par la mémoire qui émergent des systèmes naïfs de récupération de mémoire. Ce travail est crucial alors que les agents d'IA deviennent plus persistants et personnalisés, nécessitant de nouveaux cadres pour une gestion sécurisée de la mémoire.