"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { readContacts } from "../../lib/contacts.mjs";

export default function ContactDetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- Lê dados locais após a hidratação. */
    try {
      const contacts = readContacts(localStorage.getItem("contatos"));
      setContact(contacts.find((item) => String(item.id) === id) || null);
    } catch {
      setContact(null);
    }
    setLoading(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [id]);

  return (
    <main className="container detail-container">
      <header className="page-header">
        <p className="eyebrow">Lição 9 · React</p>
        <h1>Detalhes do contato</h1>
      </header>
      <section className="card">
        {loading ? <p role="status">Carregando...</p> : !contact ? (
          <p className="empty-state">Contato não encontrado neste navegador.</p>
        ) : (
          <dl className="contact-details">
            <div><dt>Nome</dt><dd>{contact.nome}</dd></div>
            <div><dt>E-mail</dt><dd>{contact.email || "Não informado"}</dd></div>
            <div><dt>Telefone</dt><dd>{contact.telefone || "Não informado"}</dd></div>
          </dl>
        )}
        <Link className="button button-secondary" href="/">← Voltar aos contatos</Link>
      </section>
    </main>
  );
}
