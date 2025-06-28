// Dados das pizzas
const pizzas = [
                {
        id: 1,
        nome: "Margherita",
        descricao: "Molho de tomate, mussarela, manjericão fresco e azeite",
        imagem: "https://img.freepik.com/fotos-gratis/vista-frontal-da-pizza-margherita-com-tomate-e-manjericao_141793-2157.jpg",
        precos: { pequena: 35.90, media: 49.90, grande: 69.90 },
        categoria: "tradicionais"
    },
    {
        id: 2,
        nome: "Pepperoni",
        descricao: "Molho de tomate, mussarela e pepperoni",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-pepperoni-em-uma-tabua-de-madeira_141793-2158.jpg",
        precos: { pequena: 39.90, media: 54.90, grande: 74.90 },
        categoria: "tradicionais"
    },
    {
        id: 3,
        nome: "Quatro Queijos",
        descricao: "Molho de tomate, mussarela, provolone, parmesão e gorgonzola",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-quatro-queijos_140725-173.jpg",
        precos: { pequena: 42.90, media: 59.90, grande: 79.90 },
        categoria: "tradicionais"
    },
    {
        id: 4,
        nome: "Portuguesa",
        descricao: "Molho de tomate, mussarela, presunto, ovo, cebola e azeitonas",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-portuguesa-com-presunto-e-azeitonas_141793-2159.jpg",
        precos: { pequena: 45.90, media: 62.90, grande: 82.90 },
        categoria: "tradicionais"
    },
    {
        id: 5,
        nome: "Frango com Catupiry",
        descricao: "Molho de tomate, mussarela, frango desfiado e catupiry",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-de-frango-com-catupiry_141793-2160.jpg",
        precos: { pequena: 45.90, media: 62.90, grande: 82.90 },
        categoria: "especiais"
    },
    {
        id: 6,
        nome: "Calabresa",
        descricao: "Molho de tomate, mussarela e calabresa fatiada",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-de-calabresa_141793-2161.jpg",
        precos: { pequena: 38.90, media: 52.90, grande: 72.90 },
        categoria: "tradicionais"
    },
    {
        id: 7,
        nome: "Vegetariana",
        descricao: "Molho de tomate, mussarela, berinjela, abobrinha, pimentão e champignon",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-vegetariana_141793-2162.jpg",
        precos: { pequena: 42.90, media: 58.90, grande: 78.90 },
        categoria: "especiais"
    },
    {
        id: 8,
        nome: "Romeu e Julieta",
        descricao: "Mussarela e goiabada cremosa com queijo",
        imagem: "https://img.freepik.com/fotos-gratis/pizza-doce-romeu-e-julieta_141793-2163.jpg",
        precos: { pequena: 39.90, media: 54.90, grande: 74.90 },
        categoria: "especiais"
    }

];

// Carrinho de compras
let carrinho = [];
let contadorCarrinho = 0;

// Elementos DOM
const produtosContainer = document.querySelectorAll('.produtos');
const carrinhoSidebar = document.querySelector('.carrinho-sidebar');
const carrinhoItemsContainer = document.querySelector('.carrinho-items');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const closeCartBtn = document.querySelector('.close-cart');
const totalElement = document.querySelector('.total span:last-child');
const checkoutBtn = document.querySelector('.checkout-btn');
const emptyCartMsg = document.querySelector('.empty-cart');