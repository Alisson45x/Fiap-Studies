document.getElementById("btn-buscar").onclick = function () {
  const username = document.getElementById("input-usuario").value.trim();
  const info = document.getElementById("info-usuario");
  if (!username) {
    info.innerHTML = "<span class=\"text-danger\">Digite um usuário!</span>";
    return;
  }
  info.innerHTML = "Carregando...";
  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("Usuário não encontrado");
      return res.json();
    })
    .then(data => {
      info.innerHTML = `
        <p><strong>Nome:</strong> ${data.name || "(sem nome)"}</p>
        <img src="${data.avatar_url}" width="100" />
        <p><strong>Repositórios públicos:</strong> ${data.public_repos}</p>
      `;
    })
    .catch(() => {
      info.innerHTML = "<span class=\"text-danger\">Usuário não encontrado!</span>";
    });
};