export default function ContactForm({ form, handleChange, handleSubmit, disabled }) {
  return (
    <section className="card" aria-labelledby="form-title">
      <h2 id="form-title">Novo contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="nome">Nome *</label>
            <input id="nome" name="nome" autoComplete="name" placeholder="Nome completo"
              value={form.nome} onChange={handleChange} required pattern=".*\S.*" />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email"
              placeholder="nome@exemplo.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" autoComplete="tel"
              placeholder="(11) 99999-9999" value={form.telefone} onChange={handleChange} />
          </div>
        </div>
        <button className="button button-primary" type="submit" disabled={disabled}>Adicionar contato</button>
      </form>
    </section>
  );
}
