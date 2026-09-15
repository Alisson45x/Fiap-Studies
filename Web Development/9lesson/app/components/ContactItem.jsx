import Link from "next/link";

export default function ContactItem({ contact, onRemove }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <Link className="contact-name" href={`/contact/${encodeURIComponent(contact.id)}`}>{contact.nome}</Link>
        <p>{[contact.email, contact.telefone].filter(Boolean).join(" · ") || "Sem informações adicionais"}</p>
      </div>
      <button className="button button-danger" type="button"
        aria-label={`Excluir ${contact.nome}`} onClick={() => onRemove(contact.id)}>Excluir</button>
    </li>
  );
}
