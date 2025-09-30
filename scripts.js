// Dados dos Personagens
const personagens = [
    {
        id: 'ceo',
        nome: 'CEO da TechGuard Solutions',
        imagem: 'imagens/ceo.png',
        resumo: 'Defender a tecnologia e garantir aprovação do contrato',
        objetivo: 'Aprovar o contrato e demonstrar que a tecnologia é segura, lucrativa e benéfica para todos.',
        argumentos: [
            'Nossa tecnologia já reduziu crimes em 40% nas cidades-piloto',
            'Investimos milhões em pesquisa e desenvolvimento; somos líderes globais',
            'O sistema só alerta autoridades; a decisão de agir é sempre humana',
            'Temos certificações internacionais de segurança e ética em IA',
            'Estamos oferecendo isso gratuitamente; é um investimento social',
            'Empresas concorrentes já estão negociando com outras cidades'
        ]
    },
    {
        id: 'prefeito',
        nome: 'Prefeito(a) Municipal',
        imagem: 'imagens/prefeito.png',
        resumo: 'Equilibrar segurança pública com responsabilidade política',
        objetivo: 'Equilibrar demandas por segurança com responsabilidade política, pensando em reeleição e legado.',
        argumentos: [
            'A população cobra ações contra a violência todos os dias',
            'Precisamos de soluções inovadoras; os métodos tradicionais não funcionam mais',
            'Qual o custo político se isso der errado? E se não fizer nada?',
            'Como isso afeta diferentes bairros e grupos da cidade?',
            'Posso perder votos tanto aprovando quanto rejeitando isso',
            'Há garantias legais suficientes no contrato?'
        ]
    },
    {
        id: 'representante_ong',
        nome: 'Representante de ONG de Direitos Digitais',
        imagem: 'imagens/representante_ong.png',
        resumo: 'Proteger privacidade e prevenir discriminação algorítmica',
        objetivo: 'Proteger privacidade, liberdades civis e prevenir discriminação algorítmica.',
        argumentos: [
            'Vigilância em massa é incompatível com democracia',
            'Estudos mostram que IAs de reconhecimento facial erram mais com pessoas negras',
            'Quem vigia os vigilantes? Quem audita esses algoritmos?',
            'Dados biométricos são irreversíveis; se vazarem, o dano é permanente',
            'Isso cria efeito inibidor: pessoas deixam de se expressar livremente',
            'Existem alternativas que não sacrificam direitos fundamentais'
        ]
    },
    {
        id: 'delegado',
        nome: 'Delegado(a) de Polícia',
        imagem: 'imagens/delegado.png',
        resumo: 'Avaliar efetividade operacional no combate ao crime',
        objetivo: 'Avaliar efetividade operacional e impactos no trabalho policial.',
        argumentos: [
            'Precisamos de ferramentas modernas para combater o crime organizado',
            'Minha equipe está sobrecarregada; tecnologia pode ajudar',
            'Preocupa-me a dependência de sistemas que não controlamos',
            'Como isso afeta a relação polícia-comunidade?',
            'E os falsos positivos? Não posso prender pessoas com base apenas em algoritmos',
            'Precisamos de treinamento adequado para usar essa tecnologia'
        ]
    },
    {
        id: 'pai_mae',
        nome: 'Mãe/Pai de Adolescente',
        imagem: 'imagens/pai_mae.png',
        resumo: 'Proteger filhos, mas preocupado com discriminação',
        objetivo: 'Proteger filhos e família, mas com preocupações sobre privacidade e discriminação.',
        argumentos: [
            'Meu filho volta tarde da escola; quero que ele esteja seguro',
            'Mas e se o sistema achar meu filho "suspeito" só pela aparência?',
            'Adolescentes merecem privacidade para crescer e errar sem serem vigiados',
            'Li sobre jovens negros sendo mais perseguidos por esses sistemas',
            'Segurança é importante, mas não a qualquer custo',
            'Quero que a cidade seja segura para todos, não só para alguns'
        ]
    },
    {
        id: 'pesquisador',
        nome: 'Pesquisador(a) em IA e Ética',
        imagem: 'imagens/pesquisador.png',
        resumo: 'Analisar tecnicamente e alertar sobre limitações científicas',
        objetivo: 'Analisar tecnicamente o sistema e alertar sobre limitações e riscos científicos.',
        argumentos: [
            'IAs preditivas não preveem o futuro; apenas reproduzem padrões do passado',
            'Se o passado é discriminatório, a IA aprende e amplifica essa discriminação',
            'Não há IA perfeitamente neutra; toda tecnologia reflete valores de quem a cria',
            'Precisamos de transparência total: código aberto, dados de treinamento, taxa de erros',
            'Sistemas assim criam loops de feedback: bairros mais policiados geram mais dados de "crime"',
            'Há literatura científica robusta mostrando os perigos dessas tecnologias'
        ]
    },
    {
        id: 'comerciante',
        nome: 'Comerciante do Centro da Cidade',
        imagem: 'imagens/comerciante.png',
        resumo: 'Aumentar segurança para proteger o comércio',
        objetivo: 'Aumentar sensação de segurança para atrair clientes e proteger comércio.',
        argumentos: [
            'Já fui assaltado três vezes este ano; perdemos clientes por medo',
            'Câmeras podem inibir crimes e ajudar a identificar criminosos',
            'Meu negócio está quebrando; preciso de soluções agora',
            'Não me importo de ser filmado se isso me protege',
            'Mas e se o sistema espantar clientes honestos também?',
            'Quero segurança, mas também movimento nas ruas'
        ]
    },
    {
        id: 'ativista',
        nome: 'Ativista de Movimentos Sociais',
        imagem: 'imagens/ativista.png',
        resumo: 'Defender comunidades vulneráveis contra opressão tecnológica',
        objetivo: 'Defender comunidades vulneráveis e protestar contra tecnologias opressivas.',
        argumentos: [
            'Essa tecnologia será usada para perseguir negros, pobres e manifestantes',
            'Já vivemos em um estado policial nas periferias; isso vai piorar',
            'Quem decide o que é "comportamento suspeito"? Baseado em quais valores?',
            'Vigilância é uma forma de controle social e silenciamento',
            'Empresas lucram com nossos dados enquanto nossas comunidades sofrem',
            'Existem formas de promover segurança investindo em educação, saúde e emprego'
        ]
    },
    {
        id: 'jornalista',
        nome: 'Jornalista Investigativo(a)',
        imagem: 'imagens/jornalista.png',
        resumo: 'Questionar, investigar e informar o público',
        objetivo: 'Questionar, investigar contradições e informar o público sobre todos os lados.',
        argumentos: [
            'Quem financia essa empresa? Há conflitos de interesse?',
            'Quais cidades "testaram" isso? Posso verificar os dados de sucesso?',
            'Como a população será informada sobre isso? Haverá consulta pública?',
            'O que dizem especialistas independentes?',
            'Há cláusulas secretas no contrato?',
            'Meu papel é expor riscos que outros preferem esconder'
        ]
    },
    {
        id: 'vereador',
        nome: 'Vereador(a) de Oposição',
        imagem: 'imagens/vereador.png',
        resumo: 'Fiscalizar governo e propor alternativas',
        objetivo: 'Fiscalizar o governo, proteger interesses eleitorais e propor alternativas.',
        argumentos: [
            'Por que não investir em mais policiais humanos em vez de vigilância?',
            'Esse contrato beneficia empresas privadas às custas do interesse público',
            'Cadê o debate público? Isso está sendo aprovado às pressas',
            'E a legalidade? Isso não fere a Constituição?',
            'Queremos segurança, mas com justiça social',
            'Proponho investir em iluminação, transporte e oportunidades de emprego'
        ]
    },
    {
        id: 'representante_periferia',
        nome: 'Representante de Comunidade Periférica',
        imagem: 'imagens/representante_periferia.png',
        resumo: 'Garantir que tecnologia não prejudique comunidades marginalizadas',
        objetivo: 'Garantir que tecnologia não prejudique ainda mais comunidades marginalizadas.',
        argumentos: [
            'Nossa comunidade já é sobre-policiada; isso vai piorar o assédio',
            'Jovens daqui são parados pela polícia só pela cor da pele',
            'Essa tecnologia vai rotular nossos filhos como criminosos antes de fazerem qualquer coisa',
            'Ninguém nos perguntou se queremos isso',
            'Segurança pra quem? No nosso bairro, a polícia é o perigo',
            'Invistam em escola, hospital e emprego, não em câmeras'
        ]
    },
    {
        id: 'advogado',
        nome: 'Advogado(a) Constitucionalista',
        imagem: 'imagens/advogado.png',
        resumo: 'Analisar legalidade e constitucionalidade',
        objetivo: 'Analisar legalidade e constitucionalidade da implementação.',
        argumentos: [
            'Isso pode violar direitos fundamentais: privacidade, imagem, presunção de inocência',
            'A Lei Geral de Proteção de Dados (LGPD) permite isso? Há base legal adequada?',
            'Coleta de dados biométricos requer consentimento; como fica em espaço público?',
            'Quem responde judicialmente por erros? A empresa? O município?',
            'Precisamos de marco regulatório específico antes de implementar',
            'Cidadãos terão direito de acessar, contestar e deletar seus dados?'
        ]
    }
];

// Estado da Aplicação
const app = {
    personagemSelecionado: null,
    votos: {
        aprovar: 0,
        condicional: 0,
        rejeitar: 0
    },
    votoRegistrado: false,

    // Inicializar aplicação
    init() {
        this.mostrarTela('tela-inicial');
    },

    // Gerenciamento de Telas
    mostrarTela(idTela) {
        document.querySelectorAll('.tela').forEach(tela => {
            tela.classList.remove('ativa');
        });
        document.getElementById(idTela).classList.add('ativa');
        window.scrollTo(0, 0);
    },

    mostrarCenario() {
        this.mostrarTela('tela-cenario');
    },

    mostrarPersonagens() {
        this.renderizarPersonagens();
        this.mostrarTela('tela-personagens');
    },

    mostrarDetalhes(idPersonagem) {
        const personagem = personagens.find(p => p.id === idPersonagem);
        if (personagem) {
            this.personagemSelecionado = personagem;
            this.renderizarDetalhes(personagem);
            this.mostrarTela('tela-detalhes');
        }
    },

    voltarDetalhes() {
        if (this.personagemSelecionado) {
            this.mostrarTela('tela-detalhes');
        } else {
            this.mostrarPersonagens();
        }
    },

    mostrarVotacao() {
        this.mostrarTela('tela-votacao');
    },

    mostrarDebriefing() {
        this.mostrarTela('tela-debriefing');
    },

    // Renderização de Personagens
    renderizarPersonagens() {
        const grid = document.getElementById('grid-personagens');
        grid.innerHTML = '';

        personagens.forEach(personagem => {
            const card = document.createElement('div');
            card.className = 'card-personagem';
            card.onclick = () => this.mostrarDetalhes(personagem.id);
            
            card.innerHTML = `
                <img src="${personagem.imagem}" alt="${personagem.nome}" class="imagem-personagem" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><rect width=%22120%22 height=%22120%22 fill=%22%232563eb%22/><text x=%2250%%22 y=%2250%%22 fill=%22white%22 font-size=%2248%22 text-anchor=%22middle%22 dy=%22.3em%22>👤</text></svg>'">
                <h3>${personagem.nome}</h3>
                <p>${personagem.resumo}</p>
            `;
            
            grid.appendChild(card);
        });
    },

    // Renderização de Detalhes
    renderizarDetalhes(personagem) {
        const container = document.getElementById('detalhes-personagem');
        
        const argumentosHTML = personagem.argumentos.map(arg => 
            `<li>${arg}</li>`
        ).join('');

        container.innerHTML = `
            <div class="cabecalho-personagem">
                <img src="${personagem.imagem}" alt="${personagem.nome}" class="imagem-personagem-grande" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22><rect width=%22180%22 height=%22180%22 fill=%22%232563eb%22/><text x=%2250%%22 y=%2250%%22 fill=%22white%22 font-size=%2272%22 text-anchor=%22middle%22 dy=%22.3em%22>👤</text></svg>'">
                <div class="info-personagem">
                    <h2>${personagem.nome}</h2>
                    <p>${personagem.resumo}</p>
                </div>
            </div>

            <div class="objetivo-principal">
                <h3>Objetivo Principal</h3>
                <p>${personagem.objetivo}</p>
            </div>

            <div class="argumentos">
                <h3>Argumentos e Preocupações Típicas</h3>
                <ul>
                    ${argumentosHTML}
                </ul>
            </div>
        `;
    },

    // Sistema de Votação
    registrarVoto(tipoVoto) {
        // Remover seleção anterior
        document.querySelectorAll('.opcao-voto').forEach(opcao => {
            opcao.classList.remove('selecionado');
        });

        // Adicionar seleção ao voto atual
        event.currentTarget.classList.add('selecionado');

        // Registrar voto
        if (!this.votoRegistrado) {
            this.votos[tipoVoto]++;
            this.votoRegistrado = true;
            
            // Mostrar resultados após 1 segundo
            setTimeout(() => {
                this.mostrarResultados();
            }, 1000);
        } else {
            // Se já votou, apenas mostra os resultados atualizados
            this.mostrarResultados();
        }
    },

    mostrarResultados() {
        const resultadosDiv = document.getElementById('resultados-votacao');
        const btnDebriefing = document.getElementById('btn-debriefing');
        
        resultadosDiv.style.display = 'block';
        btnDebriefing.style.display = 'inline-block';

        const total = this.votos.aprovar + this.votos.condicional + this.votos.rejeitar;
        
        const graficoDiv = document.getElementById('grafico-resultados');
        graficoDiv.innerHTML = '<div class="grafico-barras"></div>';
        
        const grafico = graficoDiv.querySelector('.grafico-barras');

        // Criar barras
        const criarBarra = (tipo, label, cor) => {
            const porcentagem = total > 0 ? (this.votos[tipo] / total * 100).toFixed(1) : 0;
            return `
                <div class="barra-voto">
                    <div class="label-barra">
                        <span>${label}</span>
                        <span>${this.votos[tipo]} voto(s) - ${porcentagem}%</span>
                    </div>
                    <div class="barra-progresso">
                        <div class="barra-preenchimento ${tipo}" style="width: ${porcentagem}%">
                            ${porcentagem > 10 ? porcentagem + '%' : ''}
                        </div>
                    </div>
                </div>
            `;
        };

        grafico.innerHTML = `
            ${criarBarra('aprovar', 'Aprovar', 'sucesso')}
            ${criarBarra('condicional', 'Aprovar com Condições', 'alerta')}
            ${criarBarra('rejeitar', 'Rejeitar', 'perigo')}
        `;

        // Estatísticas
        const statsDiv = document.getElementById('estatisticas-votos');
        const vencedor = this.determinarVencedor();
        
        statsDiv.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-numero">${total}</div>
                    <div class="stat-label">Total de Votos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-numero">${vencedor.label}</div>
                    <div class="stat-label">Decisão Majoritária</div>
                </div>
            </div>
            <p style="margin-top: 1.5rem; text-align: center; font-size: 1.1rem;">
                <strong>Resultado:</strong> ${vencedor.descricao}
            </p>
        `;
    },

    determinarVencedor() {
        const votos = this.votos;
        const max = Math.max(votos.aprovar, votos.condicional, votos.rejeitar);
        
        if (votos.aprovar === max) {
            return {
                label: 'Aprovado',
                descricao: 'O sistema SMCP-Urban foi aprovado para implementação conforme proposto.'
            };
        } else if (votos.condicional === max) {
            return {
                label: 'Aprovado com Condições',
                descricao: 'O sistema foi aprovado, mas requer alterações no contrato e implementação de salvaguardas adicionais.'
            };
        } else if (votos.rejeitar === max) {
            return {
                label: 'Rejeitado',
                descricao: 'A implementação do sistema foi rejeitada devido aos riscos éticos considerados inaceitáveis.'
            };
        } else {
            return {
                label: 'Empate',
                descricao: 'Não houve consenso. É necessário mais debate e discussão.'
            };
        }
    },

    // Reiniciar simulação
    reiniciar() {
        this.personagemSelecionado = null;
        this.votos = {
            aprovar: 0,
            condicional: 0,
            rejeitar: 0
        };
        this.votoRegistrado = false;
        
        // Limpar seleções
        document.querySelectorAll('.opcao-voto').forEach(opcao => {
            opcao.classList.remove('selecionado');
        });
        
        // Ocultar resultados
        document.getElementById('resultados-votacao').style.display = 'none';
        document.getElementById('btn-debriefing').style.display = 'none';
        
        this.mostrarTela('tela-inicial');
    }
};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});