'use client'

import { useState, useEffect, useRef } from 'react'

function useCountUp(target, inView, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return value
}

export default function StatsSection() {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const yrs  = useCountUp(8, inView, 1400)
  const team = useCountUp(1, inView, 1200)

  return (
    <section className="stats section-pad on-dark" id="numeros" ref={ref}>
      <div className="la-container stats-content">
        <div className="stats-header reveal">
          <span className="la-eyebrow-rule">A Link em números</span>
          <h2>
            Credibilidade que aparece <span className="light">antes do primeiro relatório.</span>
          </h2>
        </div>

        <div className="stats-grid">
          <div className="stat reveal" data-delay="1">
            <div className="stat-eyebrow">Operação</div>
            <div className="stat-num">+{yrs}<span className="unit"> anos</span></div>
            <div className="stat-label">no mercado de consultoria SSMA, desde 2017.</div>
          </div>

          <div className="stat reveal" data-delay="2">
            <div className="stat-eyebrow">Atuação</div>
            <div className="stat-num">SP<span className="unit"> · ABC</span></div>
            <div className="stat-label">cobertura regional com presença em planta cliente.</div>
          </div>

          <div className="stat reveal" data-delay="3">
            <div className="stat-eyebrow">Setores</div>
            <div className="stat-num" style={{ fontSize: 'clamp(32px, 4vw, 64px)', lineHeight: 1.05 }}>
              Quím.<br />Metal. Log.
            </div>
            <div className="stat-label">indústrias químicas, metalúrgicas e logísticas.</div>
          </div>

          <div className="stat reveal" data-delay="4">
            <div className="stat-eyebrow">Equipe</div>
            <div className="stat-num">{team}<span className="unit"> equipe</span></div>
            <div className="stat-label">do diagnóstico à aprovação — mesmo time, ponta a ponta.</div>
          </div>
        </div>

        <p className="stats-footnote reveal">
          Esses são os dados disponíveis hoje. À medida que ampliamos o histórico público de licenças aprovadas, clientes ativos e taxa de renovação, substituiremos os indicadores por números específicos — prova social genuína vale mais que cifra inflada.
        </p>
      </div>
    </section>
  )
}
