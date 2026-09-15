export default function FilterInput({ value, onChange }) {
  return (
    <div className="field search-field">
      <label htmlFor="filter">Buscar contato</label>
      <input id="filter" type="search" placeholder="Digite um nome ou e-mail..."
        value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
