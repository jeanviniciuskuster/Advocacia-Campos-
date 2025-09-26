// Mapeamento das páginas/seções
const pages = {
    "sobre nós": "#sobre-nos", 
    sobre: "#sobre-nos",
    contato: "#contato",
    "fale conosco": "#contato",
    blog: "blog.html", // Manteve link externo, se for o caso
    "área de atuação": "#areas-atuacao", 
    "especialidades": "#areas-atuacao",
    "direito de família": "area-atuacao.html", // Manteve link externo
    empresarial: "area-atuacao.html",
    extrajudicial: "area-atuacao.html",
    civil: "area-atuacao.html"
};

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");
const searchIcon = document.getElementById("searchIcon");

// --- Funcionalidade de Auto-sugestão (Se houver searchInput no HTML) ---
if (searchInput && suggestionsList) {
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
}

// --- Função de Redirecionamento ---
function redirectToPage() {
    if (!searchInput) return; 
    
    const input = searchInput.value.toLowerCase().trim();

    if (pages[input]) {
        window.location.href = pages[input]; 
    } else {
        alert(
            "Termo não encontrado. Tente 'Sobre', 'Contato' ou 'Especialidades'."
        );
    }
}

// --- Event Listeners (Se houver elementos de busca no HTML) ---
if (searchIcon) {
    searchIcon.addEventListener("click", redirectToPage);
}

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            redirectToPage();
        }
    });
}
 
/*Copyright (C) [2025] [Cesar Augusto Schiebel De Campos]*/