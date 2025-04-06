// Mapeamento das páginas

const pages = {
  "sobre nós": "sobre.html",
  sobre: "sobre.html",
  contato: "contato.html",
  "fale conosco": "contato.html",
  blog: "blog.html",
  "área de atuação": "area-atuacao.html",
  "áreas de atuação": "area-atuacao.html",
  "direito de família": "area-atuacao.html",
  empresarial: "area-atuacao.html",
  extrajudicial: "area-atuacao.html",
  civil: "area-atuacao.html"
  };
  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestions");
  
  searchInput.addEventListener("input", function () {
    const input = this.value.toLowerCase().trim();
    suggestionsList.innerHTML = "";
  
    if (input.length === 0) return;
  
    const suggestions = Object.keys(pages).filter((key) =>
      key.includes(input)
    );
  
    suggestions.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", () => {
        searchInput.value = suggestion;
        suggestionsList.innerHTML = "";
        redirectToPage();
      });
      suggestionsList.appendChild(li);
    });
  });
  



  // Função para redirecionar com base na pesquisa
  function redirectToPage() {
    const input = document
      .getElementById("searchInput")
      .value.toLowerCase()
      .trim();
  
    if (pages[input]) {
      window.location.href = pages[input]; // Redireciona para a página correspondente
    } else {
      alert(
        "Página não encontrada. Tente termos como 'Sobre Nós', 'Contato', 'Blog' ou 'Área de Atuação'."
      );
    }
  }
  
  // Adiciona evento de clique ao ícone de pesquisa
  document.getElementById("searchIcon").addEventListener("click", redirectToPage);
  
  // Adiciona evento de pressionar "Enter" no campo de pesquisa
  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        redirectToPage();
      }
    });


    
  /*Copyright (C) [2025] [Cesar Augusto Schiebel De Campos]*/