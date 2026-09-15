export function readContacts(value) {
  try {
    const contacts = JSON.parse(value || "[]");
    if (!Array.isArray(contacts)) return [];
    return contacts.filter((contact) =>
      contact &&
      ["string", "number"].includes(typeof contact.id) &&
      typeof contact.nome === "string" &&
      typeof contact.email === "string" &&
      typeof contact.telefone === "string"
    );
  } catch {
    return [];
  }
}

export function filterContacts(contacts, filter) {
  const query = filter.trim().toLowerCase();
  return contacts.filter((contact) =>
    contact.nome.toLowerCase().includes(query) ||
    contact.email.toLowerCase().includes(query)
  );
}
