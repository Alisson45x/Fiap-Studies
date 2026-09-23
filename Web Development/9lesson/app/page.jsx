"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput";
import { readContacts, filterContacts } from "./lib/contacts.mjs";

export default function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    // O armazenamento só existe no navegador, após a primeira renderização.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      setContacts(readContacts(localStorage.getItem("contatos")));
    } catch {
      setStorageError("O navegador bloqueou o armazenamento. Os contatos ficam apenas nesta sessão.");
    }
    setIsLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    // Evita substituir os dados salvos pela lista vazia inicial.
    if (!isLoaded) return;
    try {
      localStorage.setItem("contatos", JSON.stringify(contacts));
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Informa falha na sincronização com o navegador.
      setStorageError("Não foi possível salvar. As alterações ficam apenas nesta sessão.");
    }
  }, [contacts, isLoaded]);

  const handleRemove = useCallback((id) => {
    setContacts((current) => current.filter((contact) => contact.id !== id));
  }, []);

  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <main className="container">
      <header className="page-header">
        <p className="eyebrow">Lição 9 · React</p>
        <h1>Cadastro de contatos</h1>
        <p>Adicione, encontre e consulte seus contatos em um só lugar.</p>
      </header>
      {storageError && <p className="notice" role="alert">{storageError}</p>}
      <ContactForm setContacts={setContacts} disabled={!isLoaded} />
      <section className="card" aria-labelledby="contacts-title">
        <div className="section-heading">
          <h2 id="contacts-title">Seus contatos</h2>
          <span className="count" aria-live="polite">{filteredContacts.length} de {contacts.length}</span>
        </div>
        <FilterInput value={filter} onChange={handleFilterChange} />
        {!isLoaded ? <p className="empty-state">Carregando contatos...</p> : (
          <ContactList contacts={filteredContacts} onRemove={handleRemove}
            hasFilter={Boolean(filter.trim())} />
        )}
      </section>
      <footer className="page-footer">👍</footer>
    </main>
  );
}
