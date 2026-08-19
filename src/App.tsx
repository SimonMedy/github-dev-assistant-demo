import { capabilities, forbiddenActions, guardrails, workflow } from './data'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44v-1.8c-2.56.56-3.1-1.09-3.1-1.09-.42-1.07-1.03-1.35-1.03-1.35-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.76.08-.6.32-1 .59-1.23-2.04-.23-4.19-1.02-4.19-4.57 0-1.01.36-1.83.95-2.48-.1-.23-.41-1.17.09-2.45 0 0 .78-.25 2.54.95A8.8 8.8 0 0 1 12 7.14a8.8 8.8 0 0 1 2.32.31c1.76-1.2 2.53-.95 2.53-.95.5 1.28.19 2.22.1 2.45.59.65.95 1.47.95 2.48 0 3.56-2.16 4.33-4.21 4.56.33.29.62.84.62 1.7v2.65c0 .24.17.53.63.44A9.25 9.25 0 0 0 12 2.75Z" />
      </svg>
    </span>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="GitHub Dev Assistant — accueil">
          <BrandMark />
          <span>GitHub Dev Assistant</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#capabilities">Capacités</a>
          <a href="#workflow">Workflow</a>
          <a className="nav-cta" href="#safety">Sécurité</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="status-pill"><span /> GitHub-native development agent</div>
            <h1>Du dépôt à la PR,<br /><em>avec des garde-fous.</em></h1>
            <p className="hero-lede">GitHub Dev Assistant transforme un brief en changements vérifiés : il analyse le repo, travaille sur une branche isolée, code, lance la CI, corrige les échecs et prépare une pull request traçable.</p>
            <div className="hero-actions">
              <a className="button primary" href="#workflow">Voir le workflow <span aria-hidden="true">→</span></a>
              <a className="button secondary" href="#safety">Explorer les garde-fous</a>
            </div>
            <div className="trust-row" aria-label="Principes clés">
              <span>✓ Branch-first</span><span>✓ CI-driven</span><span>✓ No force push</span>
            </div>
          </div>

          <div className="terminal-card" aria-label="Exemple de workflow GitHub Dev Assistant">
            <div className="terminal-bar"><div><i /><i /><i /></div><span>dev-assistant / run</span><b>•••</b></div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> inspect repository</p>
              <p className="terminal-ok"><span>✓</span> stack detected <b>React · TypeScript</b></p>
              <p className="terminal-ok"><span>✓</span> source ref verified <b>e2d8c61</b></p>
              <div className="terminal-divider" />
              <p><span className="prompt">$</span> create branch</p>
              <p className="terminal-ok"><span>✓</span> <b>gpt/feature</b> created</p>
              <p><span className="prompt">$</span> validate</p>
              <p className="terminal-ok"><span>✓</span> lint <small>passed</small></p>
              <p className="terminal-ok"><span>✓</span> typecheck <small>passed</small></p>
              <p className="terminal-ok"><span>✓</span> tests <small>passed</small></p>
              <p className="terminal-ok"><span>✓</span> build <small>passed</small></p>
              <div className="terminal-pr"><span>Pull request ready</span><strong>#42</strong></div>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Caractéristiques du système">
          <div><strong>REST API</strong><span>GitHub officiel</span></div>
          <div><strong>Atomic</strong><span>commits multi-fichiers</span></div>
          <div><strong>CI-first</strong><span>validation automatisée</span></div>
          <div><strong>Auditable</strong><span>SHA vérifiés</span></div>
        </section>

        <section className="section" id="capabilities">
          <SectionHeading eyebrow="Capacités" title="Un workflow d’ingénierie complet." description="Pensé pour intervenir dans un vrai dépôt sans sacrifier la lisibilité, la validation ni la sécurité des opérations Git." />
          <div className="capability-grid">
            {capabilities.map(([title, description], index) => (
              <article className="capability-card" key={title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section workflow-section" id="workflow">
          <SectionHeading eyebrow="Workflow automatique" title="Une boucle disciplinée, pas une boîte noire." description="Chaque étape réduit l’incertitude avant la suivante. Une CI en échec déclenche un diagnostic et une nouvelle itération sur la même branche." />
          <ol className="workflow-list">
            {workflow.map(([number, title, detail]) => (
              <li key={number}>
                <span className="step-number">{number}</span>
                <div><strong>{title}</strong><span>{detail}</span></div>
              </li>
            ))}
          </ol>
          <div className="workflow-note"><span className="pulse" /><p><strong>La boucle continue tant que les validations pertinentes ne passent pas.</strong> Si un secret, un service externe ou une décision humaine bloque la CI, le blocage est explicité au lieu d’être contourné.</p></div>
        </section>

        <section className="section safety-section" id="safety">
          <div className="safety-layout">
            <div>
              <SectionHeading eyebrow="Limites absolues" title="Certaines opérations restent hors limites." description="L’autonomie ne signifie jamais accès illimité. Ces contraintes sont des invariants du système." />
              <ul className="forbidden-list">
                {forbiddenActions.map((action) => <li key={action}><span aria-hidden="true">×</span>{action}</li>)}
              </ul>
            </div>
            <aside className="shield-panel">
              <div className="shield-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3 5.5 5.7v5.1c0 4.4 2.8 8.4 6.5 10.2 3.7-1.8 6.5-5.8 6.5-10.2V5.7L12 3Zm0 3.1 3.5 1.45v3.25c0 2.88-1.6 5.7-3.5 7.17-1.9-1.47-3.5-4.29-3.5-7.17V7.55L12 6.1Z" /></svg>
              </div>
              <p className="eyebrow">Safety by design</p>
              <h3>Les garde-fous sont dans le workflow, pas dans une checklist finale.</h3>
              <p>Lecture avant écriture, branches isolées, contrôle des SHA, permissions minimales et confirmation humaine avant merge.</p>
            </aside>
          </div>

          <div className="guardrail-grid">
            {guardrails.map(([title, description]) => (
              <article key={title}><span className="guardrail-dot" /><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">GitHub Dev Assistant</p>
          <h2>Autonome sur l’exécution.<br />Conservateur sur le risque.</h2>
          <p>Un assistant de développement conçu pour produire des changements propres, vérifiés et faciles à auditer — sans prendre de raccourcis avec votre dépôt.</p>
          <a className="button primary" href="#top">Revenir en haut <span aria-hidden="true">↑</span></a>
        </section>
      </main>

      <footer><div className="brand"><BrandMark /><span>GitHub Dev Assistant</span></div><p>Built around branches, CI & safety guardrails.</p></footer>
    </div>
  )
}

export default App
