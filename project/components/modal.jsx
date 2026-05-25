// ============================================================
// Diagnóstico Modal — multi-field contact form with validation
// ============================================================

function DiagModal({ open, onClose }) {
  const [form, setForm] = useState({
    nome: '', empresa: '', email: '', telefone: '',
    setor: 'Química', porte: '', mensagem: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Obrigatório';
    if (!form.empresa.trim()) e.empresa = 'Obrigatório';
    if (!form.email.trim()) e.email = 'Obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido';
    if (!form.setor) e.setor = 'Selecione';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className={'modal-overlay' + (open ? ' open' : '')}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
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
                <li><Icon name="check" size={14} /> Mapeamento de licenças e vencimentos</li>
                <li><Icon name="check" size={14} /> Identificação de riscos imediatos</li>
                <li><Icon name="check" size={14} /> Estimativa de prazos regulatórios</li>
                <li><Icon name="check" size={14} /> Recomendações priorizadas</li>
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
                <div className={'form-field' + (errors.nome ? ' error' : '')}>
                  <label>Nome</label>
                  <input value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Maria Almeida" />
                  {errors.nome && <span className="err">{errors.nome}</span>}
                </div>
                <div className={'form-field' + (errors.empresa ? ' error' : '')}>
                  <label>Empresa</label>
                  <input value={form.empresa} onChange={(e) => update('empresa', e.target.value)} placeholder="Indústria Modelo S.A." />
                  {errors.empresa && <span className="err">{errors.empresa}</span>}
                </div>
                <div className={'form-field' + (errors.email ? ' error' : '')}>
                  <label>E-mail corporativo</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="maria@empresa.com.br" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="form-field">
                  <label>Telefone (opcional)</label>
                  <input value={form.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(11) 99999-9999" />
                </div>
                <div className="form-field">
                  <label>Setor</label>
                  <select value={form.setor} onChange={(e) => update('setor', e.target.value)}>
                    <option>Química</option>
                    <option>Metalurgia</option>
                    <option>Logística</option>
                    <option>Mineração</option>
                    <option>Energia</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Porte</label>
                  <select value={form.porte} onChange={(e) => update('porte', e.target.value)}>
                    <option value="">Selecionar...</option>
                    <option>Até 100 colaboradores</option>
                    <option>100–500 colaboradores</option>
                    <option>500–2.000 colaboradores</option>
                    <option>Mais de 2.000 colaboradores</option>
                  </select>
                </div>
                <div className="form-field span-2">
                  <label>Cenário atual (opcional)</label>
                  <textarea value={form.mensagem} onChange={(e) => update('mensagem', e.target.value)}
                            placeholder="Ex: temos uma LO vencendo em 4 meses e estamos com pendência no PGR..." />
                </div>
              </div>

              <div className="form-foot">
                <small>Ao enviar, você concorda com nossa política de privacidade. Não compartilhamos seus dados.</small>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Enviando...' : <>Solicitar diagnóstico <Icon name="arrowRight" size={14} /></>}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="check-ic"><Icon name="check" size={32} /></div>
            <h3>Recebemos sua solicitação.</h3>
            <p>Um especialista da Link Ambiental entrará em contato em até <b>1 dia útil</b> pelo e-mail <b>{form.email}</b> para agendar sua conversa de diagnóstico.</p>
            <button className="btn btn-leaf" onClick={onClose} style={{ marginTop: 16 }}>
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { DiagModal });
