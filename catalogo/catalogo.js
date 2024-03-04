document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os elementos dos filtros
    var marcaSelect = document.getElementById("marca");
    var categoriaSelect = document.getElementById("categoria");
    var corSelect = document.getElementById("cor");
    var tamanhoSelect = document.getElementById("tamanho");
    
    // Selecionar os elementos dos cards
    var cards = document.querySelectorAll(".card");

    // Adicionar um evento de mudança para cada filtro
    [marcaSelect, categoriaSelect, corSelect, tamanhoSelect].forEach(function(select) {
        select.addEventListener("change", function() {
            // Iterar sobre os cards e mostrar/ocultar com base nos filtros selecionados
            cards.forEach(function(card) {
                var mostrar = true;

                // Verificar se o filtro de marca está ativado e corresponde ao card
                if (marcaSelect.value !== "todas" && card.querySelector(".card-local").textContent !== marcaSelect.value) {
                    mostrar = false;
                }

                // Verificar se o filtro de categoria está ativado e corresponde ao card
                if (categoriaSelect.value !== "todas" && !card.classList.contains("card-" + categoriaSelect.value)) {
                    mostrar = false;
                }

                // Verificar se o filtro de cor está ativado e corresponde ao card
                if (corSelect.value !== "todas" && !card.querySelector(".card-texto").textContent.toLowerCase().includes(corSelect.value)) {
                    mostrar = false;
                }

                // Verificar se o filtro de tamanho está ativado e corresponde ao card
                if (tamanhoSelect.value !== "todas" && !card.querySelector(".card-texto").textContent.includes(tamanhoSelect.value)) {
                    mostrar = false;
                }

                // Exibir ou ocultar o card com base no resultado do filtro
                if (mostrar) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});