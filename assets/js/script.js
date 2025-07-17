// Dados iniciais do sistema
const mesas = [
    { numero: 1, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 2, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 3, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 4, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 5, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 6, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 7, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 8, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 9, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null },
    { numero: 10, status: 'livre', cliente: null, telefone: null, inicio: null, comanda: null }
];

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

let comandas = [];
let carrinho = [];
let contadorCarrinho = 0;
let mesaAtual = null;
let modoEdicao = false;

// Elementos DOM
const mesasContainer = document.querySelector('.mesas-container');
const comandasContainer = document.querySelector('.comandas-container');
const tradicionaisContainer = document.getElementById('tradicionais');
const especiaisContainer = document.getElementById('especiais');
const carrinhoSidebar = document.querySelector('.carrinho-sidebar');
const carrinhoItemsContainer = document.querySelector('.carrinho-items');
const openCartBtn = document.getElementById('open-cart');
const cartCount = document.querySelector('.cart-count');
const closeCartBtn = document.querySelector('.close-cart');
const totalElement = document.querySelector('.total span:last-child');
const checkoutBtn = document.querySelector('.checkout-btn');
const emptyCartMsg = document.querySelector('.empty-cart');
const novaComandaBtn = document.getElementById('nova-comanda');
const comandaModal = document.getElementById('comanda-modal');
const closeModalBtn = document.querySelector('.close-modal');
const cancelarComandaBtn = document.getElementById('cancelar-comanda');
const salvarComandaBtn = document.getElementById('salvar-comanda');
const comandaForm = document.getElementById('comanda-form');
const modalTitle = document.getElementById('modal-title');
const mesaNumeroSelect = document.getElementById('mesa-numero');
const clienteNomeInput = document.getElementById('cliente-nome');
const clienteTelInput = document.getElementById('cliente-tel');
const observacoesTextarea = document.getElementById('observacoes');
const abas = document.querySelectorAll('.aba');
const conteudoAbas = document.querySelectorAll('.conteudo-aba');
const abaLinks = document.querySelectorAll('.aba-link');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderizarMesas();
    renderizarPizzas();
    atualizarCarrinho();
    
    openCartBtn.addEventListener('click', toggleCarrinho);
    closeCartBtn.addEventListener('click', toggleCarrinho);
    checkoutBtn.addEventListener('click', adicionarAComanda);
    novaComandaBtn.addEventListener('click', abrirModalComanda);
    closeModalBtn.addEventListener('click', fecharModal);
    cancelarComandaBtn.addEventListener('click', fecharModal);
    comandaForm.addEventListener('submit', salvarComanda);
    
    // Navegação por abas
    abas.forEach(aba => {
        aba.addEventListener('click', () => {
            const abaId = aba.dataset.aba;
            alternarAba(abaId);
        });
    });
    
    abaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const abaId = link.dataset.aba;
            alternarAba(abaId);
        });
    });
    
    // Inicializar selects de mesas
    atualizarSelectMesas();
});

// Funções
function renderizarMesas() {
    mesasContainer.innerHTML = '';
    
    mesas.forEach(mesa => {
        const mesaElement = document.createElement('div');
        mesaElement.className = `mesa ${mesa.status}`;
        mesaElement.dataset.numero = mesa.numero;
        
        let tempoDecorrido = '';
        if (mesa.inicio) {
            const diff = Math.floor((new Date() - new Date(mesa.inicio)) /(1000 * 60));
            const horas = Math.floor(diff / 60);
            const minutos = Math.floor(diff % 60);
            tempoDecorrido = `${horas > 0 ? horas + 'h ' : ''}${minutos}min`;
        }
        
        mesaElement.innerHTML = `
            <div class="mesa-numero">${mesa.numero}</div>
            <div class="mesa-status">${mesa.status.toUpperCase()}</div>
            ${mesa.status !== 'livre' ? `
                <div class="mesa-cliente">${mesa.cliente || 'Sem nome'}</div>
                <div class="mesa-tempo">${tempoDecorrido}</div>
            ` : ''}
            <div class="mesa-acoes">
                ${mesa.status === 'livre' ? `
                    <button class="mesa-btn primary" data-acao="ocupar">Ocupar</button>
                ` : `
                    <button class="mesa-btn success" data-acao="adicionar">Adicionar</button>
                    <button class="mesa-btn danger" data-acao="liberar">Liberar</button>
                `}
            </div>
        `;
        
        mesasContainer.appendChild(mesaElement);
        
        // Event listeners para os botões da mesa
        const botoes = mesaElement.querySelectorAll('.mesa-btn');
        botoes.forEach(botao => {
            botao.addEventListener('click', (e) => {
                e.stopPropagation();
                const acao = botao.dataset.acao;
                manipularMesa(mesa.numero, acao);
            });
        });
        
        // Event listener para clicar na mesa
        mesaElement.addEventListener('click', () => {
            if (mesa.status !== 'livre') {
                visualizarComanda(mesa.comanda);
            }
        });
    });
}

function manipularMesa(numeroMesa, acao) {
    const mesaIndex = mesas.findIndex(m => m.numero === numeroMesa);
    
    if (mesaIndex === -1) return;
    
    switch(acao) {
        case 'ocupar':
            mesaAtual = numeroMesa;
            abrirModalComanda();
            break;
            
        case 'adicionar':
            mesaAtual = numeroMesa;
            toggleCarrinho();
            break;
            
        case 'liberar':
            // Encontrar a comanda associada
            const comandaIndex = comandas.findIndex(c => c.mesa === numeroMesa && c.status === 'aberta');
            if (comandaIndex !== -1) {
                comandas[comandaIndex].status = 'fechada';
                comandas[comandaIndex].fim = new Date().toISOString();
            }
            
            // Liberar a mesa
            mesas[mesaIndex].status = 'livre';
            mesas[mesaIndex].cliente = null;
            mesas[mesaIndex].telefone = null;
            mesas[mesaIndex].inicio = null;
            mesas[mesaIndex].comanda = null;
            
            renderizarMesas();
            renderizarComandas();
            break;
    }
}

function renderizarPizzas() {
    tradicionaisContainer.innerHTML = '';
    especiaisContainer.innerHTML = '';
    
    pizzas.forEach(pizza => {
        const card = criarCardPizza(pizza);
        
        if (pizza.categoria === 'tradicionais') {
            tradicionaisContainer.appendChild(card);
        } else {
            especiaisContainer.appendChild(card);
        }
    });
}

function criarCardPizza(pizza) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = pizza.id;
    
    card.innerHTML = `
        <img src="${pizza.imagem}" alt="${pizza.nome}">
        <div class="card-content">
            <h3>${pizza.nome}</h3>
            <p class="description">${pizza.descricao}</p>
            <div class="tamanhos">
                <div class="tamanho-btn active" data-tamanho="pequena">P <span>R$ ${pizza.precos.pequena.toFixed(2)}</span></div>
                <div class="tamanho-btn" data-tamanho="media">M <span>R$ ${pizza.precos.media.toFixed(2)}</span></div>
                <div class="tamanho-btn" data-tamanho="grande">G <span>R$ ${pizza.precos.grande.toFixed(2)}</span></div>
            </div>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>
    `;
    
    // Event listeners para os botões de tamanho
    const tamanhoBtns = card.querySelectorAll('.tamanho-btn');
    tamanhoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tamanhoBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Event listener para o botão de adicionar ao carrinho
    const addToCartBtn = card.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => adicionarAoCarrinho(pizza));
    
    return card;
}

function adicionarAoCarrinho(pizza) {
    if (!mesaAtual) {
        alert('Selecione uma mesa antes de adicionar itens ao carrinho!');
        return;
    }
    
    const card = document.querySelector(`.card[data-id="${pizza.id}"]`);
    const tamanhoSelecionado = card.querySelector('.tamanho-btn.active').dataset.tamanho;
    const preco = pizza.precos[tamanhoSelecionado];
    
    // Verificar se o item já está no carrinho
    const itemExistente = carrinho.find(item => 
        item.id === pizza.id && item.tamanho === tamanhoSelecionado
    );
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: pizza.id,
            nome: pizza.nome,
            tamanho: tamanhoSelecionado,
            preco: preco,
            imagem: pizza.imagem,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    
    // Feedback visual
    const addBtn = card.querySelector('.add-to-cart');
    addBtn.textContent = 'Adicionado!';
    addBtn.style.backgroundColor = 'var(--accent-color)';
    setTimeout(() => {
        addBtn.textContent = 'Adicionar ao Carrinho';
        addBtn.style.backgroundColor = 'var(--secondary-color)';
    }, 1000);
}

function atualizarCarrinho() {
    // Atualizar contador
    contadorCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0);
    cartCount.textContent = contadorCarrinho;
    
    // Atualizar itens do carrinho
    carrinhoItemsContainer.innerHTML = '';
    
    if (carrinho.length === 0) {
        emptyCartMsg.style.display = 'block';
    } else {
        emptyCartMsg.style.display = 'none';
        
        carrinho.forEach(item => {
            const carrinhoItem = document.createElement('div');
            carrinhoItem.className = 'carrinho-item';
            carrinhoItem.dataset.id = item.id;
            carrinhoItem.dataset.tamanho = item.tamanho;
            
            carrinhoItem.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="carrinho-item-info">
                    <h4>${item.nome}</h4>
                    <p>Tamanho: ${item.tamanho.toUpperCase()}</p>
                    <p class="preco">R$ ${item.preco.toFixed(2)}</p>
                    <div class="carrinho-item-controle">
                        <button class="diminuir">-</button>
                        <span>${item.quantidade}</span>
                        <button class="aumentar">+</button>
                    </div>
                    <button class="remover-item">Remover</button>
                </div>
            `;
            
            carrinhoItemsContainer.appendChild(carrinhoItem);
            
            // Event listeners para os controles de quantidade
            const diminuirBtn = carrinhoItem.querySelector('.diminuir');
            const aumentarBtn = carrinhoItem.querySelector('.aumentar');
            const removerBtn = carrinhoItem.querySelector('.remover-item');
            
            diminuirBtn.addEventListener('click', () => alterarQuantidade(item, -1));
            aumentarBtn.addEventListener('click', () => alterarQuantidade(item, 1));
            removerBtn.addEventListener('click', () => removerItem(item));
        });
    }
    
    // Atualizar total
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

function alterarQuantidade(item, change) {
    const itemIndex = carrinho.findIndex(i => 
        i.id === item.id && i.tamanho === item.tamanho
    );
    
    if (itemIndex !== -1) {
        carrinho[itemIndex].quantidade += change;
        
        if (carrinho[itemIndex].quantidade < 1) {
            carrinho.splice(itemIndex, 1);
        }
        
        atualizarCarrinho();
    }
}

function removerItem(item) {
    carrinho = carrinho.filter(i => 
        !(i.id === item.id && i.tamanho === item.tamanho)
    );
    atualizarCarrinho();
}

function toggleCarrinho() {
    carrinhoSidebar.classList.toggle('active');
}

function abrirModalComanda() {
    if (mesaAtual) {
        // Modo edição - mesa já existe
        const mesa = mesas.find(m => m.numero === mesaAtual);
        if (mesa) {
            modalTitle.textContent = `Mesa ${mesaAtual}`;
            clienteNomeInput.value = mesa.cliente || '';
            clienteTelInput.value = mesa.telefone || '';
            observacoesTextarea.value = '';
            
            // Verificar se já existe comanda aberta para esta mesa
            const comandaExistente = comandas.find(c => c.mesa === mesaAtual && c.status === 'aberta');
            if (comandaExistente) {
                observacoesTextarea.value = comandaExistente.observacoes || '';
            }
            
            modoEdicao = true;
        }
    } else {
        // Modo nova comanda - selecionar mesa livre
        modalTitle.textContent = 'Nova Comanda';
        clienteNomeInput.value = '';
        clienteTelInput.value = '';
        observacoesTextarea.value = '';
        modoEdicao = false;
    }
    
    comandaModal.style.display = 'flex';
}

function fecharModal() {
    comandaModal.style.display = 'none';
}

function salvarComanda(e) {
    e.preventDefault();
    
    const numeroMesa = modoEdicao ? mesaAtual : parseInt(mesaNumeroSelect.value);
    const cliente = clienteNomeInput.value.trim();
    const telefone = clienteTelInput.value.trim();
    const observacoes = observacoesTextarea.value.trim();
    
    // Encontrar a mesa
    const mesaIndex = mesas.findIndex(m => m.numero === numeroMesa);
    if (mesaIndex === -1) return;
    
    // Atualizar mesa
    mesas[mesaIndex].status = 'ocupada';
    mesas[mesaIndex].cliente = cliente;
    mesas[mesaIndex].telefone = telefone;
    mesas[mesaIndex].inicio = new Date().toISOString();
    
    // Verificar se já existe comanda aberta para esta mesa
    let comandaIndex = comandas.findIndex(c => c.mesa === numeroMesa && c.status === 'aberta');
    
    if (comandaIndex === -1) {
        // Criar nova comanda
        const novaComanda = {
            id: comandas.length + 1,
            mesa: numeroMesa,
            cliente: cliente,
            telefone: telefone,
            observacoes: observacoes,
            itens: [],
            status: 'aberta',
            inicio: new Date().toISOString(),
            fim: null,
            total: 0
        };
        
        comandas.push(novaComanda);
        comandaIndex = comandas.length - 1;
    } else {
        // Atualizar comanda existente
        comandas[comandaIndex].cliente = cliente;
        comandas[comandaIndex].telefone = telefone;
        comandas[comandaIndex].observacoes = observacoes;
    }
    
    // Associar comanda à mesa
    mesas[mesaIndex].comanda = comandas[comandaIndex].id;
    
    // Atualizar UI
    renderizarMesas();
    renderizarComandas();
    fecharModal();
    
    // Se for uma nova comanda (não em modo edição), abrir o carrinho
    if (!modoEdicao) {
        mesaAtual = numeroMesa;
        toggleCarrinho();
    }
}

function adicionarAComanda() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    if (!mesaAtual) {
        alert('Nenhuma mesa selecionada!');
        return;
    }
    
    // Encontrar a comanda aberta para esta mesa
    const comandaIndex = comandas.findIndex(c => c.mesa === mesaAtual && c.status === 'aberta');
    
    if (comandaIndex === -1) {
        alert('Nenhuma comanda aberta para esta mesa!');
        return;
    }
    
    // Adicionar itens do carrinho à comanda
    carrinho.forEach(itemCarrinho => {
        // Verificar se o item já existe na comanda
        const itemExistenteIndex = comandas[comandaIndex].itens.findIndex(
            item => item.id === itemCarrinho.id && item.tamanho === itemCarrinho.tamanho
        );
        
        if (itemExistenteIndex !== -1) {
            // Atualizar quantidade
            comandas[comandaIndex].itens[itemExistenteIndex].quantidade += itemCarrinho.quantidade;
        } else {
            // Adicionar novo item
            comandas[comandaIndex].itens.push({
                id: itemCarrinho.id,
                nome: itemCarrinho.nome,
                tamanho: itemCarrinho.tamanho,
                preco: itemCarrinho.preco,
                quantidade: itemCarrinho.quantidade
            });
        }
    });
    
    // Calcular total da comanda
    comandas[comandaIndex].total = comandas[comandaIndex].itens.reduce(
        (sum, item) => sum + (item.preco * item.quantidade), 0
    );
    
    // Limpar carrinho
    carrinho = [];
    atualizarCarrinho();
    toggleCarrinho();
    
    // Atualizar UI
    renderizarComandas();
    
    alert('Itens adicionados à comanda com sucesso!');
}

function renderizarComandas() {
    comandasContainer.innerHTML = '';
    
    // Ordenar comandas: abertas primeiro, depois por data mais recente
    const comandasOrdenadas = [...comandas].sort((a, b) => {
        if (a.status === 'aberta' && b.status !== 'aberta') return -1;
        if (a.status !== 'aberta' && b.status === 'aberta') return 1;
        return new Date(b.inicio) - new Date(a.inicio);
    });
    
    comandasOrdenadas.forEach(comanda => {
        const comandaElement = document.createElement('div');
        comandaElement.className = 'comanda';
        comandaElement.dataset.id = comanda.id;
        
        // Calcular tempo decorrido
        const inicio = new Date(comanda.inicio);
        const agora = new Date();
        const diff = Math.floor((agora - inicio) / (1000 * 60)); // minutos
        const horas = Math.floor(diff / 60);
        const minutos = Math.floor(diff % 60);
        const tempoDecorrido = `${horas > 0 ? horas + 'h ' : ''}${minutos}min`;
        
        // Calcular total
        const total = comanda.itens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
        
        comandaElement.innerHTML = `
            <div class="comanda-header">
                <div class="comanda-title">Comanda #${comanda.id}</div>
                <div class="comanda-mesa">Mesa ${comanda.mesa}</div>
            </div>
            <div class="comanda-cliente">${comanda.cliente || 'Cliente não informado'}</div>
            <div class="comanda-status ${comanda.status}">
                ${comanda.status === 'aberta' ? 'ABERTA' : 'FECHADA'} • ${tempoDecorrido}
            </div>
            <div class="comanda-items">
                ${comanda.itens.length > 0 ? 
                    comanda.itens.map(item => `
                        <div class="comanda-item">
                            <div class="comanda-item-nome">${item.quantidade}x ${item.nome} (${item.tamanho.toUpperCase()})</div>
                            <div class="comanda-item-preco">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
                        </div>
                    `).join('') : 
                    '<p>Nenhum item adicionado ainda.</p>'
                }
            </div>
            <div class="comanda-total">Total: R$ ${total.toFixed(2)}</div>
            <div class="comanda-acoes">
                ${comanda.status === 'aberta' ? `
                    <button class="comanda-btn primary" data-acao="adicionar">Adicionar Itens</button>
                    <button class="comanda-btn success" data-acao="fechar">Fechar Comanda</button>
                ` : `
                    <button class="comanda-btn danger" data-acao="reabrir">Reabrir</button>
                `}
            </div>
        `;
        
        comandasContainer.appendChild(comandaElement);
        
        // Event listeners para os botões da comanda
        const botoes = comandaElement.querySelectorAll('.comanda-btn');
        botoes.forEach(botao => {
            botao.addEventListener('click', (e) => {
                const acao = botao.dataset.acao;
                manipularComanda(comanda.id, acao);
            });
        });
    });
}

function manipularComanda(comandaId, acao) {
    const comandaIndex = comandas.findIndex(c => c.id === comandaId);
    if (comandaIndex === -1) return;
    
    switch(acao) {
        case 'adicionar':
            // Encontrar a mesa associada
            const mesaIndex = mesas.findIndex(m => m.comanda === comandaId);
            if (mesaIndex !== -1) {
                mesaAtual = mesas[mesaIndex].numero;
                toggleCarrinho();
            }
            break;
            
        case 'fechar':
            comandas[comandaIndex].status = 'fechada';
            comandas[comandaIndex].fim = new Date().toISOString();
            
            // Liberar a mesa associada
            const mesaIndexFechar = mesas.findIndex(m => m.comanda === comandaId);
            if (mesaIndexFechar !== -1) {
                mesas[mesaIndexFechar].status = 'livre';
                mesas[mesaIndexFechar].cliente = null;
                mesas[mesaIndexFechar].telefone = null;
                mesas[mesaIndexFechar].inicio = null;
                mesas[mesaIndexFechar].comanda = null;
            }
            
            renderizarMesas();
            renderizarComandas();
            break;
            
        case 'reabrir':
            comandas[comandaIndex].status = 'aberta';
            comandas[comandaIndex].fim = null;
            
            // Ocupar a mesa associada
            const mesaIndexReabrir = mesas.findIndex(m => m.numero === comandas[comandaIndex].mesa);
            if (mesaIndexReabrir !== -1) {
                mesas[mesaIndexReabrir].status = 'ocupada';
                mesas[mesaIndexReabrir].cliente = comandas[comandaIndex].cliente;
                mesas[mesaIndexReabrir].telefone = comandas[comandaIndex].telefone;
                mesas[mesaIndexReabrir].inicio = comandas[comandaIndex].inicio;
                mesas[mesaIndexReabrir].comanda = comandas[comandaIndex].id;
            }
            
            renderizarMesas();
            renderizarComandas();
            break;
    }
}

function visualizarComanda(comandaId) {
    const comandaIndex = comandas.findIndex(c => c.id === comandaId);
    if (comandaIndex === -1) return;
    
    alternarAba('comandas');
}

function atualizarSelectMesas() {
    mesaNumeroSelect.innerHTML = '';
    
    const mesasLivres = mesas.filter(m => m.status === 'livre');
    
    if (mesasLivres.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhuma mesa disponível';
        option.disabled = true;
        option.selected = true;
        mesaNumeroSelect.appendChild(option);
    } else {
        mesasLivres.forEach(mesa => {
            const option = document.createElement('option');
            option.value = mesa.numero;
            option.textContent = `Mesa ${mesa.numero}`;
            mesaNumeroSelect.appendChild(option);
        });
    }
}

function alternarAba(abaId) {
    // Atualizar abas
    abas.forEach(aba => {
        if (aba.dataset.aba === abaId) {
            aba.classList.add('active');
        } else {
            aba.classList.remove('active');
        }
    });
    
    // Atualizar conteúdo das abas
    conteudoAbas.forEach(conteudo => {
        if (conteudo.id === abaId) {
            conteudo.classList.add('active');
        } else {
            conteudo.classList.remove('active');
        }
    });
    
    // Atualizar links da sidebar
    abaLinks.forEach(link => {
        if (link.dataset.aba === abaId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Atualizar select de mesas se for a aba de mesas
    if (abaId === 'mesas') {
        atualizarSelectMesas();
    }
}