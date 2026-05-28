// Lista de produtos do catálogo
let produtos = [
    // Camisas
    {
        id: 1,
        nome: "Camisa Brasil 2026",
        categoria: "Camisas",
        descricao: "Camisa amarela temática para torcer pelo Brasil na Copa do Mundo 2026.",
        preco: 249.90,
        tamanho: "P, M, G, GG",
        cor: "Amarela",
        imagem: "img/camisa-brasil.png",
        quantidadeDisponivel: 30
    },
    {
        id: 2,
        nome: "Camisa Argentina 2026",
        categoria: "Camisas",
        descricao: "Camisa azul e branca para torcedores da seleção argentina.",
        preco: 149.90,
        tamanho: "P, M, G, GG",
        cor: "Azul e branca",
        imagem: "img/camisa-argentina.png",
        quantidadeDisponivel: 20
    },
    {
        id: 3,
        nome: "Camisa Espanha 2026",
        categoria: "Camisas",
        descricao: "Camisa vermelha para torcedores da seleção espanhola.",
        preco: 349.90,
        tamanho: "P, M, G, GG",
        cor: "Vermelha e azul",
        imagem: "img/espanha.png",
        quantidadeDisponivel: 15
    },
    {
        id: 4,
        nome: "Camisa França 2026",
        categoria: "Camisas",
        descricao: "Camisa azul para torcedores da seleção francesa.",
        preco: 249.90,
        tamanho: "P, M, G, GG",
        cor: "Azul",
        imagem: "img/franca.png",
        quantidadeDisponivel: 15
    },
    {
        id: 5,
        nome: "Camisa Uruguai 2026",
        categoria: "Camisas",
        descricao: "Camisa azul para torcedores da seleção uruguaia.",
        preco: 149.90,
        tamanho: "P, M, G, GG",
        cor: "Azul e preta",
        imagem: "img/uruguai.png",
        quantidadeDisponivel: 10
    },
    {
        id: 6,
        nome: "Camisa Inglaterra 2026",
        categoria: "Camisas",
        descricao: "Camisa branca para torcedores da seleção inglesa.",
        preco: 219.90,
        tamanho: "P, M, G, GG",
        cor: "Branca",
        imagem: "img/inglaterra.png",
        quantidadeDisponivel: 15
    },
    {
        id: 7,
        nome: "Camisa Portugal 2026",
        categoria: "Camisas",
        descricao: "Camisa vermelha e verde para torcedores da seleção portuguesa.",
        preco: 289.90,
        tamanho: "P, M, G, GG",
        cor: "Vermelha e verde",
        imagem: "img/portugal.png",
        quantidadeDisponivel: 15
    },

    // Bonés
    {
        id: 8,
        nome: "Boné Brasil Copa 2026",
        categoria: "Bonés",
        descricao: "Boné personalizado da seleção brasileira com tema da Copa do Mundo 2026.",
        preco: 49.90,
        tamanho: "Único",
        cor: "Amarelo",
        imagem: "img/bone-copa.png",
        quantidadeDisponivel: 10
    },
    {
        id: 9,
        nome: "Boné Argentina Copa 2026",
        categoria: "Bonés",
        descricao: "Boné personalizado da seleção argentina com tema da Copa do Mundo 2026.",
        preco: 39.90,
        tamanho: "Único",
        cor: "Azul",
        imagem: "img/bone-argentina.png",
        quantidadeDisponivel: 10
    },
    {
        id: 10,
        nome: "Boné Portugal Copa 2026",
        categoria: "Bonés",
        descricao: "Boné personalizado da seleção portuguesa com tema da Copa do Mundo 2026.",
        preco: 49.90,
        tamanho: "Único",
        cor: "Vermelha e verde",
        imagem: "img/boneportugal.png",
        quantidadeDisponivel: 10
    },

    // Chuteiras
    {
        id: 11,
        nome: "Chuteira Campo Verde",
        categoria: "Chuteiras",
        descricao: "Chuteira confortável para jogar futebol em campo.",
        preco: 229.90,
        tamanho: "38 ao 43",
        cor: "Verde",
        imagem: "img/chuteirabrasil.png",
        quantidadeDisponivel: 20
    },

    // Acessórios
    {
        id: 12,
        nome: "Bandeira do Brasil",
        categoria: "Acessórios",
        descricao: "Bandeira temática para torcer pelo Brasil na Copa do Mundo 2026.",
        preco: 39.90,
        tamanho: "Médio",
        cor: "Verde e amarelo",
        imagem: "img/bandeira.png",
        quantidadeDisponivel: 40
    },
    {
        id: 13,
        nome: "Pulseira Portugal Copa 2026",
        categoria: "Acessórios",
        descricao: "Pulseira esportiva personalizada com tema da seleção portuguesa.",
        preco: 19.90,
        tamanho: "Único",
        cor: "Preta, vermelha e verde",
        imagem: "img/pulseiraportugal.png",
        quantidadeDisponivel: 18
    },
    {
        id: 14,
        nome: "Pulseira Brasil Copa 2026",
        categoria: "Acessórios",
        descricao: "Pulseira esportiva personalizada com tema da seleção brasileira.",
        preco: 19.90,
        tamanho: "Único",
        cor: "Verde e amarela",
        imagem: "img/pulseirabrasil.png",
        quantidadeDisponivel: 30
    },

    // Outros
    {
        id: 15,
        nome: "Mochila Brasil Copa 2026",
        categoria: "Outros",
        descricao: "Mochila esportiva personalizada com tema da Copa.",
        preco: 119.90,
        tamanho: "Único",
        cor: "Preta",
        imagem: "img/mochila.png",
        quantidadeDisponivel: 18
    },
    {
        id: 16,
        nome: "Bola Brasil Copa 2026",
        categoria: "Outros",
        descricao: "Bola de futebol personalizada com tema da Copa.",
        preco: 79.90,
        tamanho: "Único",
        cor: "Azul",
        imagem: "img/bola-brasil.png",
        quantidadeDisponivel: 10
    }
];

// Carrinho carregado do LocalStorage
let carrinho = JSON.parse(localStorage.getItem("carrinhoCopa2026")) || [];

// Mostra os produtos na tela
function mostrarProdutos(lista = produtos) {
    let listaProdutos = document.getElementById("listaProdutos");

    if (!listaProdutos) {
        console.log("Erro: div listaProdutos não encontrada no HTML.");
        return;
    }

    listaProdutos.innerHTML = "";

    if (lista.length === 0) {
        listaProdutos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning">
                    Nenhum produto encontrado.
                </div>
            </div>
        `;
        return;
    }

    lista.forEach(function(produto) {
        let card = document.createElement("article");
        card.className = "col-md-4 col-sm-6 col-12";

        card.innerHTML = `
            <div class="card card-produto h-100">
                <img src="${produto.imagem}" class="card-img-top imagem-produto" alt="${produto.nome}">

                <div class="card-body d-flex flex-column">
                    <span class="categoria">${produto.categoria}</span>

                    <h3 class="card-title h5 mt-2">${produto.nome}</h3>

                    <p class="card-text">${produto.descricao}</p>

                    <p class="preco">R$ ${produto.preco.toFixed(2)}</p>

                    <p><strong>Tamanho:</strong> ${produto.tamanho}</p>
                    <p><strong>Cor:</strong> ${produto.cor}</p>
                    <p><strong>Quantidade disponível:</strong> ${produto.quantidadeDisponivel}</p>

                    <div class="mt-auto">
                        <button class="btn btn-info w-100 mb-2" onclick="verDetalhes(${produto.id})">
                            Ver detalhes
                        </button>

                        <button class="btn btn-success w-100" onclick="adicionarAoCarrinho(${produto.id})">
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        `;

        listaProdutos.appendChild(card);
    });
}

// Filtra produtos por pesquisa e categoria
function filtrarProdutos() {
    let campoPesquisa = document.getElementById("campoPesquisa");
    let filtroCategoria = document.getElementById("filtroCategoria");

    if (!campoPesquisa || !filtroCategoria) {
        return;
    }

    let textoPesquisa = campoPesquisa.value.toLowerCase();
    let categoriaSelecionada = filtroCategoria.value;

    let produtosFiltrados = produtos.filter(function(produto) {
        let nomeCombina = produto.nome.toLowerCase().includes(textoPesquisa);
        let categoriaCombina = categoriaSelecionada === "todos" || produto.categoria === categoriaSelecionada;

        return nomeCombina && categoriaCombina;
    });

    mostrarProdutos(produtosFiltrados);
}

// Mostra detalhes do produto
function verDetalhes(idProduto) {
    let produto = produtos.find(function(item) {
        return item.id === idProduto;
    });

    if (produto) {
        alert(
            "Detalhes do produto:\n\n" +
            "Nome: " + produto.nome + "\n" +
            "Categoria: " + produto.categoria + "\n" +
            "Descrição: " + produto.descricao + "\n" +
            "Preço: R$ " + produto.preco.toFixed(2) + "\n" +
            "Tamanho: " + produto.tamanho + "\n" +
            "Cor: " + produto.cor + "\n" +
            "Quantidade disponível: " + produto.quantidadeDisponivel
        );
    }
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    let produto = produtos.find(function(item) {
        return item.id === idProduto;
    });

    if (!produto) {
        alert("Produto não encontrado.");
        return;
    }

    let itemCarrinho = carrinho.find(function(item) {
        return item.id === idProduto;
    });

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    salvarCarrinho();
    mostrarCarrinho();

    alert("Produto adicionado ao carrinho!");
}

// Mostra o carrinho na tela
function mostrarCarrinho() {
    let listaCarrinho = document.getElementById("listaCarrinho");
    let totalCarrinho = document.getElementById("totalCarrinho");

    if (!listaCarrinho || !totalCarrinho) {
        console.log("Erro: área do carrinho não encontrada no HTML.");
        return;
    }

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
        totalCarrinho.innerHTML = "0.00";
        return;
    }

    let total = 0;

    carrinho.forEach(function(item) {
        let subtotal = item.preco * item.quantidade;
        total += subtotal;

        let div = document.createElement("div");
        div.className = "item-carrinho";

        div.innerHTML = `
            <h4>${item.nome}</h4>
            <p>Preço: R$ ${item.preco.toFixed(2)}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>

            <div class="botoes-carrinho">
                <button class="btn btn-sm btn-success" onclick="aumentarQuantidade(${item.id})">+</button>
                <button class="btn btn-sm btn-warning" onclick="diminuirQuantidade(${item.id})">-</button>
                <button class="btn btn-sm btn-danger" onclick="removerProduto(${item.id})">Remover</button>
            </div>
        `;

        listaCarrinho.appendChild(div);
    });

    totalCarrinho.innerHTML = total.toFixed(2);
}

// Aumenta quantidade do produto
function aumentarQuantidade(idProduto) {
    let item = carrinho.find(function(produto) {
        return produto.id === idProduto;
    });

    if (item) {
        item.quantidade++;
    }

    salvarCarrinho();
    mostrarCarrinho();
}

// Diminui quantidade do produto
function diminuirQuantidade(idProduto) {
    let item = carrinho.find(function(produto) {
        return produto.id === idProduto;
    });

    if (item) {
        item.quantidade--;

        if (item.quantidade <= 0) {
            removerProduto(idProduto);
            return;
        }
    }

    salvarCarrinho();
    mostrarCarrinho();
}

// Remove produto do carrinho
function removerProduto(idProduto) {
    carrinho = carrinho.filter(function(item) {
        return item.id !== idProduto;
    });

    salvarCarrinho();
    mostrarCarrinho();
}

// Salva carrinho no LocalStorage
function salvarCarrinho() {
    localStorage.setItem("carrinhoCopa2026", JSON.stringify(carrinho));
}

// Calcula o total do carrinho
function calcularTotalCarrinho() {
    let total = 0;

    carrinho.forEach(function(item) {
        total += item.preco * item.quantidade;
    });

    return total.toFixed(2);
}

// Carrega botão do PayPal
function carregarPayPal() {
    let containerPayPal = document.getElementById("paypal-button-container");

    if (!containerPayPal) {
        return;
    }

    if (typeof paypal === "undefined") {
        containerPayPal.innerHTML = "<p>PayPal não carregado.</p>";
        return;
    }

    paypal.Buttons({
        createOrder: function(data, actions) {
            let total = calcularTotalCarrinho();

            if (Number(total) <= 0) {
                alert("Adicione produtos ao carrinho antes de pagar.");
                return false;
            }

            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total
                    }
                }]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("Pagamento aprovado por " + details.payer.name.given_name + "!");

                carrinho = [];
                salvarCarrinho();
                mostrarCarrinho();
            });
        },

        onCancel: function() {
            alert("Pagamento cancelado pelo usuário.");
        },

        onError: function(err) {
            console.log(err);
            alert("Ocorreu um erro durante o pagamento.");
        }
    }).render("#paypal-button-container");
}

// Quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    mostrarProdutos();
    mostrarCarrinho();
    carregarPayPal();
});