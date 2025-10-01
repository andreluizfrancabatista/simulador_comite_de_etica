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