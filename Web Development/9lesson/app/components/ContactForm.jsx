"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm({ setContacts, disabled }) {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [errors, setErrors] = useState({});
  const nomeInputRef = useRef(null);

  useEffect(() => {
    nomeInputRef.current?.focus();
  }, []);

  function validate() {
    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (disabled) return;

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setContacts((current) => [
      ...current,
      { ...form, nome: form.nome.trim(), id: crypto.randomUUID() },
    ]);
    setForm({ nome: "", email: "", telefone: "" });
    nomeInputRef.current?.focus();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  return (
    <form
      className="contact-form"
      aria-label="Novo contato"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="nome">
            Nome <span className="required-mark">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            ref={nomeInputRef}
            autoComplete="name"
            value={form.nome}
            onChange={handleChange}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? "nome-error" : undefined}
          />
          {errors.nome && (
            <p id="nome-error" className="field-error">
              {errors.nome}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            value={form.telefone}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="button button-primary"
        type="submit"
        disabled={disabled}
      >
        Adicionar Contato
      </button>
    </form>
  );
}
