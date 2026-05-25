'use client'

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import Icon from './Icon'

const ModalContext = createContext(null)

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openModal  = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <DiagModal open={open} onClose={closeModal} />
    </ModalContext.Provider>
  )
}

function DiagModal({ open, onClose }) {
  const [form, setForm] = useState({
    nome: '', empresa: '', email: '', telefone: '', setor: 'Química', porte: '', mensagem: '',
  })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
      setErrors({})
      setForm({ nome: '', empresa: '', email: '', telefone: '', setor: 'Química', porte: '', mensagem: '' })
      setSubmitting(false)
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.nome.trim())    e.nome    = 'Obrigatório'
    if (!form.empresa.trim()) e.empresa = 'Obrigatório'
    if (!form.email.trim())   e.email   = 'Obrigatório'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 900)
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {!submitted ? (
          <>
            <aside className="modal-side">
              <div className="la-eyebrow-rule" style={{ color: 'var(--la-leaf-solid)' }}>Diagnóstico gratuito</div>
              <h3 id="modal-title">
                Conte seu cenário.
                <span className="light">Te respondemos em 1 dia útil.</span>
              </h3>
              <p>Conversa de 30 minutos. Sem compromisso. Você sai com clareza sobre exposições, prazos críticos e próximos passos — independente de contratar a Link.</p>
              <ul>
                {['Mapeamento de licenças e vencimentos','Identificação de riscos imediatos','Estimativa de prazos regulatórios','Recomendações priorizadas'].map((item) => (
                  <li key={item}><Icon name="check" size={14} /> {item}</li>
                ))}
              </ul>
            </aside>

            <form className="modal-form" onSubmit={submit} noValidate>
              <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar">
                <Icon name="close" size={18} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="la-eyebrow-rule">Solicitar diagnóstico</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0, color: 'var(--fg-1)' }}>
                  Comece com uma conversa.
                </h3>
              </div>

              <div className="form-grid">
                <Field id="nome" label="Nome" error={errors.nome}>
                  <input value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Maria Almeida" autoComplete="name" />
                </Field>
                <Field id="empresa" label="Empresa" error={errors.empresa}>
                  <input value={form.empresa} onChange={(e) => update('empresa', e.target.value)} placeholder="Indústria Modelo S.A." autoComplete="organization" />
                </Field>
                <Field id="email" label="E-mail corporativo" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="maria@empresa.com.br" autoComplete="email" />
                </Field>
                <Field id="telefone" label="Telefone (opcional)">
                  <input value={form.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(11) 99999-9999" autoComplete="tel" />
                </Field>
                <Field id="setor" label="Setor">
                  <select value={form.setor} onChange={(e) => update('setor', e.target.value)}>
                    {['Química','Metalurgia','Logística','Mineração','Energia','Outro'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field id="porte" label="Porte">
                  <select value={form.porte} onChange={(e) => update('porte', e.target.value)}>
                    <option value="">Selecionar...</option>
                    {['Até 100 colaboradores','100–500 colaboradores','500–2.000 colaboradores','Mais de 2.000 colaboradores'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field id="mensagem" label="Cenário atual (opcional)" className="span-2">
                  <textarea value={form.mensagem} onChange={(e) => update('mensagem', e.target.value)} placeholder="Ex: temos uma LO vencendo em 4 meses e estamos com pendência no PGR…" />
                </Field>
              </div>

              <div className="form-foot">
                <small>Ao enviar, você concorda com nossa política de privacidade. Não compartilhamos seus dados.</small>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Enviando…' : <><span>Solicitar diagnóstico</span> <Icon name="arrowRight" size={14} /></>}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="check-ic"><Icon name="check" size={32} /></div>
            <h3>Recebemos sua solicitação.</h3>
            <p>
              Um especialista da Link Ambiental entrará em contato em até <strong>1 dia útil</strong> pelo
              e-mail <strong>{form.email}</strong> para agendar sua conversa de diagnóstico.
            </p>
            <button className="btn btn-leaf" onClick={onClose} style={{ marginTop: 16 }}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ id, label, error, children, className }) {
  return (
    <div className={`form-field${error ? ' error' : ''}${className ? ` ${className}` : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="err">{error}</span>}
    </div>
  )
}
