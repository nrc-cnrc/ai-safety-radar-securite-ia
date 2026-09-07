# Communauté & Outils (2026-09-07)

## Discussions clés

### 1. **Problèmes de compatibilité avec le choix d'outils d'Anthropic Claude**
Le [dépôt des cookbooks d'Anthropic](https://github.com/anthropics/claude-cookbooks/pull/859) traite des problèmes de compatibilité avec Claude Fable 5.1, où `tool_choice: {"type": "tool"}` et `tool_choice: {"type": "any"}` renvoient des erreurs HTTP 400. Le correctif ajoute des alternatives basées sur des prompts pour la sélection d'outils lorsque le modèle ne prend pas en charge ces paramètres. C'est important car cela affecte la manière dont les développeurs peuvent contrôler de manière fiable l'utilisation des outils de Claude à travers différentes versions du modèle.

### 2. **Faux positifs de bannissements pour "distillation" affectant les utilisateurs d'OpenAI**
Plusieurs signalements dans les dépôts d'OpenAI ([cookbook](https://github.com/openai/openai-cookbook/issues/3062) et [evals](https://github.com/openai/evals/issues/1826)) décrivent des abonnés Pro bannis définitivement pour suspicion de "distillation" malgré un usage d'entreprise légitime, les recours automatisés étant rejetés. Les utilisateurs rapportent qu'aucune révision humaine n'est disponible, mettant en évidence des problèmes potentiels avec les systèmes de modération automatisée d'OpenAI pour les cas d'usage avancés.

### 3. **Efforts de formalisation et de vérification de la sécurité de l'IA**
L'[Atlas de formalisation de la sécurité de l'IA](https://github.com/mbrcic/ai-safety-formalization-atlas) formalise activement des théorèmes clés en sécurité de l'IA, incluant des travaux sur les [compromis d'équité de Kleinberg-Mullainathan-Raghavan](https://github.com/mbrcic/ai-safety-formalization-atlas/pull/57) et les [problèmes de l'agenda MAIS](https://github.com/mbrcic/ai-safety-formalization-atlas/pull/62). Cela représente un progrès important pour rendre les concepts de sécurité de l'IA mathématiquement précis et vérifiables par machine.

### 4. **Développement d'outils de red team et de sécurité**
Plusieurs projets font progresser les capacités de red teaming de l'IA, incluant [llm-red-team-cli v0.4.0](https://github.com/MRX-72/llm-red-team-cli/releases/tag/v0.4.0) avec des attaques multi-tours couvrant 95 vecteurs incluant le Top 10 OWASP LLM, et la [version v1.45.0 de Prismor](https://github.com/PrismorSec/prismor/releases/tag/v1.45.0) introduisant une surface d'application basée sur un proxy pour les agents non gouvernés. Ces outils permettent une évaluation systématique des mesures de sécurité des LLM dans des environnements de production.

### 5. **Améliorations d'infrastructure et d'outillage**
Plusieurs dépôts montrent un développement actif dans l'infrastructure de sécurité de l'IA, incluant [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens/pull/1750) ajoutant des capacités d'attribution patching pour l'interprétabilité mécaniste, et [h5i v0.4.1](https://github.com/h5i-dev/h5i/releases/tag/v0.4.1) corrigeant des problèmes critiques du moteur de navigateur qui causaient des faux négatifs dans les tests de sécurité.

## Versions GitHub & Outils notables

### **Prismor v1.45.0 - Plateforme de gouvernance d'agents IA**
[Sortie](https://github.com/PrismorSec/prismor/releases/tag/v1.45.0) d'une mise à jour majeure introduisant `prismor proxy` - une surface d'application qui gouverne les agents IA à travers leur trafic de modèle sans nécessiter la coopération de l'agent, plus des modes de gouvernance qui compilent en policy.yaml pour une configuration plus facile. Cela permet aux organisations de sécuriser des agents IA qui ne supportent pas les hooks, les passerelles MCP, ou les adaptateurs SDK.

### **LLM Red Team CLI v0.4.0 - Vecteurs d'attaque multi-tours**
[Extension](https://github.com/MRX-72/llm-red-team-cli/releases/tag/v0.4.0) de 38 à 95 vecteurs d'attaque avec support de conversations multi-tours, couvrant toutes les dimensions testables du Top 10 OWASP LLM incluant l'injection de prompts, les fuites de données, et la gestion inappropriée des sorties. Cela répond à la lacune critique où les garde-fous s'érodent souvent à travers les tours de conversation plutôt que sur des messages isolés.

### **Moteur de navigateur h5i v0.4.1 - Plateforme de tests de sécurité**
[Correction](https://github.com/h5i-dev/h5i/releases/tag/v0.4.1) de problèmes critiques où les événements de page, la soumission de formulaires, et les identifiants cross-site échouaient silencieusement, causant l'apparition de vraies découvertes de sécurité comme des faux négatifs dans les tests automatisés. Cela permet une détection plus fiable de XSS, CSRF, et d'autres vulnérabilités basées sur le navigateur.

### **ToolTrace Bench v0.3.0 - Évaluation de l'usage d'outils par les agents**
[Sortie](https://github.com/webdevsamran/tooltrace-bench/releases/tag/v0.3.0) de la première version taguée d'un benchmark pour évaluer les capacités d'usage d'outils des agents IA, avec scoring au niveau AST pour les modifications non liées, intervalles de confiance bootstrap, et support des workflows de langages compilés. Cela fournit des métriques standardisées pour évaluer la précision des agents dans les tâches de modification de code.

### **Runback Community v0.1.0 - Enregistrement d'exécution d'agents**
[Lancement](https://github.com/letsRunback/runback-community/releases/tag/v0.1.0) d'un système pour la relecture déterministe avec voyage temporel des exécutions d'agents, permettant aux développeurs de ré-exécuter n'importe quelle étape contre le contexte exact que le modèle a vu, d'effectuer des évaluations, et d'exporter des enregistrements de vérification signés. Cela répond au besoin critique de reproductibilité et d'audit dans les workflows de développement d'agents.