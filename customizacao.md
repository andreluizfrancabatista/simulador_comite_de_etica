# Guia de Customização

Este documento explica como adaptar a aplicação para criar novos cenários e personagens.

## 🎨 Personalizando o Visual

### Alterando Cores

Edite as variáveis CSS no início do arquivo `estilos.css`:

```css
:root {
    --cor-primaria: #2563eb;      /* Azul principal */
    --cor-secundaria: #64748b;    /* Cinza secundário */
    --cor-sucesso: #10b981;       /* Verde (aprovar) */
    --cor-alerta: #f59e0b;        /* Laranja (condicional) */
    --cor-perigo: #ef4444;        /* Vermelho (rejeitar) */
    --cor-fundo: #f8fafc;         /* Fundo da página */
    --cor-card: #ffffff;          /* Fundo dos cards */
    --cor-texto: #1e293b;         /* Texto principal */
    --cor-texto-claro: #64748b;   /* Texto secundário */
}
```

### Alterando Fontes

No `estilos.css`, linha 15:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Altere para a fonte desejada */
}
```

## 🆕 Criando Novos Cenários

### Passo 1: Editar o Cenário em `index.html`

Localize a seção `<div id="tela-cenario">` e modifique:

```html
<h2>Seu Novo Título do Cenário</h2>

<div class="secao">
    <h3>Descrição da Inovação</h3>
    <p>Descreva a nova tecnologia...</p>
</div>

<!-- Mantenha a mesma estrutura de seções -->
```

### Passo 2: Template de Cenário

Use esta estrutura como guia:

```
1. Título da Tecnologia
2. Descrição da Inovação
   - O que é?
   - Como funciona?
   - Especificações técnicas relevantes
3. Contexto de Aplicação
   - Onde será usada?
   - Quem está propondo?
   - Que acordo está sendo feito?
4. Possíveis Benefícios (4-6 itens)
5. Riscos e Dilemas Éticos (6-9 itens)
```

### Exemplos de Cenários Alternativos

**Cenário 2: IA para Seleção de Emprego**
- Descrição: Sistema que analisa currículos e entrevistas em vídeo
- Contexto: Grande empresa quer implementar RH automatizado
- Dilema: Eficiência vs. Viés discriminatório

**Cenário 3: Aplicativo de Saúde Mental com IA**
- Descrição: App que monitora humor e prevê crises
- Contexto: Sistema público de saúde considera adotar
- Dilema: Saúde mental vs. Privacidade de dados sensíveis

**Cenário 4: Carros Autônomos na Cidade**
- Descrição: Frota de táxis sem motorista
- Contexto: Prefeitura avalia autorização
- Dilema: Inovação vs. Desemprego e responsabilidade por acidentes

**Cenário 5: Reconhecimento Facial em Escolas**
- Descrição: Sistema para controle de frequência e segurança
- Contexto: Secretaria de Educação propõe implementação
- Dilema: Segurança escolar vs. Vigilância de menores

## 👥 Criando Novos Personagens

### Passo 1: Definir o Personagem

Preencha esta ficha:

```
Nome do Papel: _______________________
Imagem: _______________________
Resumo (1 linha): _______________________
Objetivo Principal: _______________________
Argumentos (5-6 itens):
- _______________________
- _______________________
- _______________________
- _______________________
- _______________________
- _______________________
```

### Passo 2: Adicionar ao Código

No arquivo `scripts.js`, adicione ao array `personagens`:

```javascript
{
    id: 'nome_do_arquivo_da_imagem_sem_extensao',
    nome: 'Nome Completo do Personagem',
    imagem: 'nome_arquivo.png',
    resumo: 'Breve descrição do objetivo (uma linha)',
    objetivo: 'Descrição detalhada do objetivo principal',
    argumentos: [
        'Primeiro argumento típico deste personagem',
        'Segundo argumento',
        'Terceiro argumento',
        'Quarto argumento',
        'Quinto argumento',
        'Sexto argumento (opcional)'
    ]
},
```

### Passo 3: Adicionar Imagem

Salve a imagem na pasta `imagens/` com o nome exato usado no código.

**Formato:** PNG ou JPG  
**Tamanho recomendado:** 400x400px ou maior  
**Proporção:** Quadrada (1:1)

### Tipos de Personagens Úteis

**Defensores da Tecnologia:**
- Empreendedor/Investidor
- Engenheiro/Desenvolvedor
- Executivo de empresa
- Consultor de inovação

**Críticos/Cautelosos:**
- Ativista de direitos humanos/digitais
- Acadêmico/Pesquisador
- Advogado especializado
- Filósofo/Eticista

**Afetados Diretamente:**
- Cidadão comum
- Trabalhador do setor impactado
- Membro de grupo vulnerável
- Familiar/Cuidador

**Mediadores/Reguladores:**
- Político/Legislador
- Servidor público
- Juiz/Promotor
- Representante de agência reguladora

**Observadores:**
- Jornalista
- Analista de mercado
- Consultor de risco
- Representante de consumidores

## 🔧 Funcionalidades Avançadas

### Adicionando Novo Tipo de Votação

Se quiser adicionar uma quarta opção de voto, edite:

1. **HTML (`index.html`):** Adicione novo `.opcao-voto`
2. **CSS (`estilos.css`):** Crie estilo `.icone-voto.novo-tipo`
3. **JavaScript (`scripts.js`):**

```javascript
// No objeto app.votos
votos: {
    aprovar: 0,
    condicional: 0,
    rejeitar: 0,
    novo_tipo: 0  // Adicione aqui
}

// Na função criarBarra, adicione:
${criarBarra('novo_tipo', 'Rótulo do Novo Tipo', 'cor')}
```

### Adicionando Múltiplas Rodadas de Votação

Para implementar revotação após debate adicional:

```javascript
// Adicione ao objeto app
rodadaAtual: 1,
historicoVotos: [],

// Modifique registrarVoto para salvar histórico
registrarVoto(tipoVoto) {
    if (!this.votoRegistrado) {
        this.votos[tipoVoto]++;
        this.votoRegistrado = true;
        this.historicoVotos.push({...this.votos});
    }
    // ... resto do código
}
```

### Exportando Resultados

Para adicionar função de exportar votação:

```javascript
exportarResultados() {
    const dados = {
        cenario: 'SMCP-Urban',
        data: new Date().toISOString(),
        personagem: this.personagemSelecionado?.nome,
        votos: this.votos,
        vencedor: this.determinarVencedor()
    };
    
    const json = JSON.stringify(dados, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultados-votacao.json';
    a.click();
}
```

Adicione botão no HTML:
```html
<button class="btn btn-secondary" onclick="app.exportarResultados()">
    Exportar Resultados
</button>
```

## 📱 Tornando PWA (Progressive Web App)

Para que alunos possam "instalar" a aplicação:

### 1. Criar `manifest.json`

```json
{
    "name": "Comitê de Ética em Tecnologia",
    "short_name": "Comitê Ética",
    "description": "Jogo de simulação para sala de aula",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#f8fafc",
    "theme_color": "#2563eb",
    "icons": [
        {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

### 2. Adicionar ao `index.html`

```html
<head>
    <!-- ... outras tags ... -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
```

### 3. Criar Service Worker (opcional)

Para funcionar offline, crie `service-worker.js` e registre no `scripts.js`.

## 🌐 Tradução para Outros Idiomas

### Estrutura para Internacionalização

Crie `traducoes.js`:

```javascript
const traducoes = {
    'pt-BR': {
        titulo: 'Comitê de Ética em Tecnologia',
        comecar: 'Começar',
        // ... outros textos
    },
    'en': {
        titulo: 'Technology Ethics Committee',
        comecar: 'Start',
        // ... outros textos
    },
    'es': {
        titulo: 'Comité de Ética en Tecnología',
        comecar: 'Comenzar',
        // ... outros textos
    }
};

// Função para trocar idioma
function mudarIdioma(codigo) {
    const textos = traducoes[codigo];
    document.querySelector('h1').textContent = textos.titulo;
    // ... aplicar outros textos
}
```

## 🎮 Gamificação (Expansão Futura)

Ideias para tornar mais interativo:

### Sistema de Pontos
- Pontos por argumentos bem construídos
- Bonificações por ouvir outros pontos de vista
- Badges por participação

### Fases Múltiplas
- Fase 1: Pesquisa e preparação
- Fase 2: Debate inicial
- Fase 3: Negociação
- Fase 4: Votação final

### Modo Competitivo
- Times defendendo posições
- Júri popular votando
- Pontuação por persuasão

## 📊 Analytics (Opcional)

Para coletar dados agregados de uso (sempre respeitando privacidade):

```javascript
// Exemplo com Google Analytics ou similar
function registrarEvento(categoria, acao, rotulo) {
    if (typeof gtag !== 'undefined') {
        gtag('event', acao, {
            'event_category': categoria,
            'event_label': rotulo
        });
    }
}

// Usar em pontos estratégicos
registrarEvento('Personagem', 'Selecionado', personagem.nome);
registrarEvento('Votacao', 'Registrada', tipoVoto);
```

## 🐛 Debug e Testes

### Modo Debug

Adicione ao `scripts.js`:

```javascript
const DEBUG = true; // false em produção

function log(...args) {
    if (DEBUG) console.log('[Comitê Ética]', ...args);
}

// Usar em vez de console.log
log('Personagem selecionado:', personagem.nome);
```

### Testes Manuais

Checklist antes de usar em aula:

- [ ] Todas as imagens carregam corretamente
- [ ] Navegação entre telas funciona
- [ ] Votação registra e exibe resultados
- [ ] Responsive em mobile
- [ ] Funciona em diferentes navegadores
- [ ] Textos sem erros ortográficos

## 💾 Backup e Versionamento

### Git Básico

```bash
# Inicializar repositório
git init
git add .
git commit -m "Versão inicial"

# Criar branch para novo cenário
git checkout -b cenario-saude-mental

# Após mudanças
git add .
git commit -m "Adiciona cenário de saúde mental"
```

## 📞 Suporte Técnico

### Problemas Comuns

**Imagens não aparecem:**
- Verifique nomes dos arquivos (case-sensitive)
- Confirme que estão na pasta `imagens/`
- Teste com imagem padrão (ícone 👤 aparece?)

**Votação não funciona:**
- Abra Console do navegador (F12)
- Procure erros em vermelho
- Verifique se JavaScript está habilitado

**Layout quebrado:**
- Teste em navegador atualizado
- Limpe cache (Ctrl+Shift+Del)
- Verifique CSS carregou (F12 > Network)

---

**Precisa de ajuda?** Abra uma issue no repositório com:
- Descrição do problema
- Navegador e versão
- Screenshot do erro (se houver)
- Código que você modificou