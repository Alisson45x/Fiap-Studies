import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onRemove, hasFilter }) {
  if (contacts.length === 0) {
    return <p className="empty-state">{hasFilter
      ? "Nenhum contato corresponde à busca."
      : "Nenhum contato cadastrado. Adicione o primeiro acima."}</p>;
  }
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onRemove={onRemove} />
      ))}
    </ul>
  );
}
