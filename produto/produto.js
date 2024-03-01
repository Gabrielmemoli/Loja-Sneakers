document.addEventListener("DOMContentLoaded", function() {
    // Obtenha o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Defina os dados do produto com base no ID
    const products = [
        {
            id: 1,
            titulo: "Nike Air Force 1",
            imagem: "../assets/imagens/imagem1.jpg",
            descricao: "Lançado em 1982, o Air Force 1 é um ícone da cultura sneaker. Conhecido pelo seu design simples e confortável, é usado tanto nas ruas quanto nas quadras de basquete.",
            marca: "NIKE",
            sexo: "MASCULINO",
            preco: "RS499,00"
        },
        {
            id: 2,
            titulo: "Nike Air Max 90",
            imagem: "../assets/imagens/imagem2.jpg",
            descricao: "Introduzido em 1990, o Air Max 90 é famoso pelo seu amortecimento Air Max visível e estilo atemporal. É um calçado de lifestyle versátil e confortável.",
            marca: "NIKE",
            sexo: "MASCULINO",
            preco: "RS599,00"
        },
        {
            id: 3,
            titulo: "Adidas Stan Smith",
            imagem: "../assets/imagens/imagem3.jpg",
            descricao: "Lançado em 1965 como um calçado de tênis, o Stan Smith tornou-se um ícone da moda casual. Reconhecido por sua silhueta limpa e minimalista, é um dos tênis mais vendidos da Adidas.",
            marca: "ADIDAS",
            sexo: "MASCULINO",
            preco: "RS350,00"
        },
        {
            id: 4,
            titulo: "Puma Suede Classic",
            imagem: "../assets/imagens/imagem4.jpg",
            descricao: "Lançado em 1968, o Puma Suede Classic é um ícone da cultura sneaker, famoso por sua camurça e design simples, oferecendo estilo e conforto duradouros.",
            marca: "PUMA",
            sexo: "MASCULINO",
            preco: "RS289,00"
        },
        {
            id: 5,
            titulo: "Fila Disruptor",
            imagem: "../assets/imagens/imagem5.jpg",
            descricao: "Lançado nos anos 90, o Fila Disruptor é um ícone retro reinventado para as tendências contemporâneas. Reconhecido por sua sola robusta e silhueta volumosa, tornou-se um símbolo da moda streetwear.",
            marca: "FILA",
            sexo: "FEMININO",
            preco: "RS310,00"
        },
        {
            id: 6,
            titulo: "Nike React Element 55",
            imagem: "../assets/imagens/imagem6.jpg",
            descricao: "Inovador e moderno, o React Element 55 é reconhecido por sua entressola React que oferece amortecimento responsivo. Combina estilo urbano com tecnologia de ponta.",
            marca: "NIKE",
            sexo: "MASCULINO",
            preco: "RS759,90"
        },
        {
            id: 7,
            titulo: "Adidas Superstar",
            imagem: "../assets/imagens/imagem7.jpg",
            descricao: "Introduzido em 1969 como um tênis de basquete, o Superstar ganhou destaque nas ruas e na cultura hip-hop nos anos 80. Sua característica distintiva é a concha de borracha na frente.",
            marca: "ADIDAS",
            sexo: "MASCULINO",
            preco: "RS399,00"
        },
        {
            id: 8,
            titulo: "Nike Dunk Low",
            imagem: "../assets/imagens/imagem8.jpg",
            descricao: "Originalmente lançado em 1985, o Dunk Low é um clássico do skate e da moda urbana. Com diversas colaborações e colorways, é um dos tênis mais populares da Nike.",
            marca: "NIKE",
            sexo: "MASCULINO",
            preco: "RS899,00"
        },
        {
            id: 9,
            titulo: "Fila Ray Tracer",
            imagem: "../assets/imagens/imagem9.jpg",
            descricao: "Inspirado nos arquivos da Fila dos anos 90, o Ray Tracer combina estilo vintage com elementos modernos. Apresenta uma estética esportiva e uma construção leve, tornando-o adequado para o dia a dia.",
            marca: "FILA",
            sexo: "FEMININO",
            preco: "RS250,80"
        },
        {
            id: 10,
            titulo: "Adidas Ultraboost",
            imagem: "../assets/imagens/imagem10.jpg",
            descricao: "Conhecido por seu conforto e desempenho, o Ultraboost é equipado com a tecnologia de amortecimento Boost da Adidas. Oferece retorno de energia responsivo e é popular entre corredores e entusiastas da moda.",
            marca: "ADIDAS",
            sexo: "MASCULINO",
            preco: "RS999,00"
        },
        {
            id: 11,
            titulo: "Vans Old Skool",
            imagem: "../assets/imagens/imagem11.jpg",
            descricao: "Lançado em 1977, o Vans Old Skool é um clássico da cultura skate e moda urbana. Reconhecido por sua icônica listra lateral e sola de borracha waffle, é um símbolo de estilo casual e autêntico, amado por skatistas e aficionados por moda de rua em todo o mundo.",
            marca: "VANS",
            sexo: "MASCULINO",
            preco: "RS299,00"
        },
        {
            id: 12,
            titulo: "Asics Gel-Lyte III",
            imagem: "../assets/imagens/imagem12.jpg",
            descricao: "Introduzido em 1990, o Asics Gel-Lyte III é reconhecido por sua estabilidade e conforto. Com a tecnologia de amortecimento Gel, oferece suporte excepcional e é apreciado tanto por corredores quanto por entusiastas da moda.",
            marca: "ASICS",
            sexo: "MASCULINO",
            preco: "RS699,99"
        },
        // Adicione mais objetos de produto conforme necessário
    ];

    const produto = products.find(p => p.id === productId);

    // Exibir dados do produto na página
    if (produto) {
        document.getElementById("produto-titulo").textContent = produto.titulo;
        document.getElementById("produto-imagem").src = produto.imagem;
        document.getElementById("produto-descricao").textContent = produto.descricao;
        document.getElementById("produto-marca").textContent = produto.marca;
        document.getElementById("produto-sexo").textContent = produto.sexo;
        document.getElementById("produto-preco").textContent = produto.preco;
    } else {
        // Produto não encontrado, redirecionar para uma página de erro ou fazer outra ação
        window.location.href = "pagina_de_erro.html";
    }
});