'use client'

import { useState, useEffect } from 'react'
import Icon from './Icon'

const SOLUTIONS = [
  {
    key: 'lic',
    label: 'Licenciamento e Conformidade',
    num: '01',
    icon: 'fileCheck',
    title: ['Licenciamento e', 'Conformidade'],
    desc: 'Condução técnica e estratégica de licenças, alvarás e documentos junto a órgãos municipais, estaduais e federais — sem você abrir um único protocolo.',
    tags: ['LP', 'LI', 'LO', 'CETESB', 'IBAMA', 'CONAMA'],
  },
  {
    key: 'amb',
    label: 'Gestão Ambiental e Sustentabilidade',
    num: '02',
    icon: 'leaf',
    title: ['Gestão Ambiental', 'e Sustentabilidade'],
    desc: 'Estruturação de práticas e processos que posicionam a indústria além da conformidade mínima — alinhados a frameworks internacionais de reporte.',
    tags: ['ESG', 'GRI', 'SASB', 'SBTi', 'TCFD'],
  },
  {
    key: 'res',
    label: 'Gerenciamento de Resíduos',
    num: '03',
    icon: 'recycle',
    title: ['Gerenciamento', 'de Resíduos'],
    desc: 'Gestão integrada da origem ao destino certificado, com rastreabilidade documental completa e conformidade com a legislação ambiental vigente.',
    tags: ['MTR', 'CDF', 'PGRS', 'CADRI'],
  },
  {
    key: 'sst',
    label: 'Saúde e Segurança do Trabalho',
    num: '04',
    icon: 'shieldCheck',
    title: ['Saúde e Segurança', 'do Trabalho'],
    desc: 'Rigor técnico e execução ágil que respeita sua operação — ASO, PGR e AVCB conduzidos por especialistas, sem parar a planta.',
    tags: ['PGR', 'AVCB', 'ASO', 'LTCAT', 'PCMSO'],
  },
]

export default function SolutionsCarousel() {
  const [idx, setIdx]       = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIdx((i) => (i + 1) % SOLUTIONS.length), 4200)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel">
        {SOLUTIONS.map((s, i) => (
          <div
            key={s.key}
            className={`carousel-card${i === idx ? ' active' : ''}`}
            role="tabpanel"
            aria-label={s.label}
            aria-hidden={i !== idx}
          >
            <div className="cc-visual">
              <div className="cc-visual-ghost" aria-hidden="true">{s.num}</div>

              <div className="cc-visual-top">
                <div className="cc-visual-icon">
                  <Icon name={s.icon} size={24} />
                </div>
                <span className="cc-visual-num">Solução {s.num}</span>
              </div>

              <div>
                <div className="cc-visual-rule" />
                <h4 className="cc-visual-title" style={{ marginTop: 10 }}>
                  {s.title[0]}<br />{s.title[1]}
                </h4>
              </div>

              <p className="cc-visual-desc">{s.desc}</p>

              <div className="cc-visual-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-label" aria-live="polite">
        {SOLUTIONS[idx].label}
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Soluções">
        {SOLUTIONS.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === idx}
            aria-label={s.label}
            className={i === idx ? 'active' : ''}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  )
}
