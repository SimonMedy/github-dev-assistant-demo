export const capabilities = [
  ['Repository intelligence', 'Inspecte l’architecture, la stack, les scripts, l’historique et les conventions avant toute modification.'],
  ['Safe branch workflow', 'Crée une branche de travail depuis un SHA vérifié, sans jamais écrire directement sur la branche principale.'],
  ['Atomic code changes', 'Prépare des modifications cohérentes, y compris des commits multi-fichiers atomiques avec contrôle de concurrence.'],
  ['CI as execution layer', 'Utilise GitHub Actions pour installer, lint, typecheck, build, tester et exécuter les validations adaptées au projet.'],
  ['CI diagnosis & repair', 'Localise le run, le job et l’étape en échec, lit les logs, corrige puis relance jusqu’à validation ou blocage externe.'],
  ['Pull requests', 'Crée ou met à jour une PR non destructive avec un récapitulatif clair des changements et des validations.'],
  ['Tags & releases', 'Prépare de nouveaux tags et releases après vérification du commit cible, de la CI et des versions existantes.'],
  ['External repositories', 'Analyse des dépôts GitHub publics externes et les utilise comme référence sans les altérer.'],
] as const

export const forbiddenActions = [
  'Écrire sur main, master ou default_branch',
  'Force-push ou réécrire l’historique',
  'Supprimer fichiers, branches, repos, tags ou releases',
  'Modifier ou exposer secrets et credentials',
  'Contourner protections, rulesets ou required checks',
  'Augmenter arbitrairement les permissions GitHub',
] as const

export const workflow = [
  ['01', 'Analyse', 'Repo, stack, scripts, CI'],
  ['02', 'Branche', 'SHA source vérifié'],
  ['03', 'Code', 'Changements ciblés'],
  ['04', 'Commit', 'Atomique et traçable'],
  ['05', 'CI', 'Lint, test, build'],
  ['06', 'Corrections', 'Diagnostic puis itération'],
  ['07', 'PR', 'Diff lisible et validé'],
  ['08', 'Merge', 'Confirmation explicite'],
] as const

export const guardrails = [
  ['Read before write', 'Le dépôt, la branche, les SHA et les identifiants sont relus avant chaque opération sensible.'],
  ['Fast-forward only', 'Une branche de travail n’avance que si son HEAD n’a pas changé ; aucun force-push n’est autorisé.'],
  ['Least privilege', 'Permissions minimales, runners GitHub-hosted par défaut, aucune manipulation de secrets.'],
  ['Human gate for merge', 'Le merge reste une opération explicitement confirmée après relecture de la PR et de ses checks.'],
] as const
