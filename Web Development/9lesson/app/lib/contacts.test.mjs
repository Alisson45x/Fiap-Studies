import test from "node:test";
import assert from "node:assert/strict";
import { readContacts, filterContacts } from "./contacts.mjs";

const contacts = [
  { id: "abc", nome: "Ana", email: "ana@fiap.com", telefone: "123" },
  { id: 2, nome: "Bruno", email: "bruno@exemplo.com", telefone: "" },
];

test("recupera contatos salvos, incluindo IDs de texto e numéricos", () => {
  assert.deepEqual(readContacts(JSON.stringify(contacts)), contacts);
});

test("dados inválidos não derrubam a página", () => {
  for (const value of [null, "{", "null", "{}", '[null, {"nome": 4}]']) {
    assert.deepEqual(readContacts(value), []);
  }
});

test("busca por nome ou email sem diferenciar maiúsculas e preserva a lista", () => {
  assert.deepEqual(filterContacts(contacts, " ANA "), [contacts[0]]);
  assert.deepEqual(filterContacts(contacts, "EXEMPLO.COM"), [contacts[1]]);
  assert.deepEqual(filterContacts(contacts, "inexistente"), []);
  assert.deepEqual(filterContacts(contacts, ""), contacts);
  assert.equal(contacts.length, 2);
});
