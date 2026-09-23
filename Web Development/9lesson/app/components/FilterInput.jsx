import { memo } from "react";

function FilterInput({ value, onChange }) {
  return (
    <div className="field search-field">
      <label htmlFor="filter">Buscar contato</label>
      <input id="filter" type="search" placeholder="Digite um nome ou e-mail..."
        value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

export default memo(FilterInput);
