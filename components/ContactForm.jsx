'use client'

import { useState } from 'react'
import Icon from './Icon'
import { CONTACT, whatsappLink } from '@/lib/site'

const EMPTY_FORM = { nome: '', empresa: '', email: '', telefone: '', setor: 'Química', porte: '', mensagem: '' }

function buildMessage(form) {
  const lines = [
    'Olá! Gostaria de solicitar um diagnóstico gratuito.',
    '',
    `Nome: ${form.nome}`,
    `Empresa: ${form.empresa}`,
    `E-mail: ${form.email}`,
  ]
  if (form.telefone) lines.push(`Telefone: ${form.telefone}`)
  lines.push(`Setor: ${form.setor}`)
  if (form.porte) lines.push(`Porte: ${form.porte}`)
  if (form.mensagem) lines.push('', `Cenário atual: ${form.mensagem}`)
  return lines.join('\n')
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)

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
    window.open(whatsappLink(buildMessage(form)), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const mailtoFallback = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Solicitação de diagnóstico gratuito')}&body=${encodeURIComponent(buildMessage(form))}`

  if (submitted) {
    return (
      <div className="form-success">
        <div className="check-ic"><Icon name="check" size={30} /></div>
        <h3 className="title">Quase lá — finalize no WhatsApp.</h3>
        <p style={{ maxWidth: 420 }}>
          Abrimos uma conversa com seus dados preenchidos. É só enviar a mensagem
          e um especialista responde em até <strong>1 dia útil</strong>.
        </p>
        <p style={{ fontSize: 13 }}>
          Preferir e-mail? <a href={mailtoFallback} style={{ color: 'var(--la-forest-700)', textDecoration: 'underline' }}>Envie para {CONTACT.email}</a>
        </p>
        <button className="btn btn-glass" onClick={() => { setSubmitted(false); setForm(EMPTY_FORM) }} style={{ marginTop: 8 }}>
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field id="nome" label="Nome" error={errors.nome}>
          <input id="nome" value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Maria Almeida" autoComplete="name" />
        </Field>
        <Field id="empresa" label="Empresa" error={errors.empresa}>
          <input id="empresa" value={form.empresa} onChange={(e) => update('empresa', e.target.value)} placeholder="Indústria Modelo S.A." autoComplete="organization" />
        </Field>
        <Field id="email" label="E-mail corporativo" error={errors.email}>
          <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="maria@empresa.com.br" autoComplete="email" />
        </Field>
        <Field id="telefone" label="Telefone (opcional)">
          <input id="telefone" value={form.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(11) 99999-9999" autoComplete="tel" />
        </Field>
        <Field id="setor" label="Setor">
          <select id="setor" value={form.setor} onChange={(e) => update('setor', e.target.value)}>
            {['Química','Metalurgia','Logística','Mineração','Energia','Outro'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="porte" label="Porte">
          <select id="porte" value={form.porte} onChange={(e) => update('porte', e.target.value)}>
            <option value="">Selecionar...</option>
            {['Até 100 colaboradores','100–500 colaboradores','500–2.000 colaboradores','Mais de 2.000 colaboradores'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="mensagem" label="Cenário atual (opcional)" className="span-2">
          <textarea id="mensagem" value={form.mensagem} onChange={(e) => update('mensagem', e.target.value)} placeholder="Ex: temos uma LO vencendo em 4 meses e estamos com pendência no PGR…" />
        </Field>
      </div>

      <div className="form-foot">
        <small>Suas informações vão direto para o WhatsApp da nossa equipe técnica — sem mailing, sem repasse a terceiros.</small>
        <button type="submit" className="btn btn-solid">
          <Icon name="whatsapp" size={15} /> Enviar pelo WhatsApp
        </button>
      </div>
    </form>
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
