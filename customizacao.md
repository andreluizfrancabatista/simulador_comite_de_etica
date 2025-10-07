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

**Cenário 1: IA para Seleção de Emprego**
- Descrição: Sistema que analisa currículos e entrevistas em vídeo
- Contexto: Grande empresa quer implementar RH automatizado
- Dilema: Eficiência vs. Viés discriminatório

**Cenário 2: Aplicativo de Saúde Mental com IA**
- Descrição: App que monitora humor e prevê crises
- Contexto: Sistema público de saúde considera adotar
- Dilema: Saúde mental vs. Privacidade de dados sensíveis

**Cenário 3: Carros Autônomos na Cidade**
- Descrição: Frota de táxis sem motorista
- Contexto: Prefeitura avalia autorização
- Dilema: Inovação vs. Desemprego e responsabilidade por acidentes

**Cenário 4: Reconhecimento Facial em Escolas**
- Descrição: Sistema para controle de frequência e segurança
- Contexto: Secretaria de Educação propõe implementação
- Dilema: Segurança escolar vs. Vigilância de menores

**Cenário 5: Moderação de Conteúdo por IA em Redes Sociais**

- Descrição: Algoritmo que remove automaticamente posts considerados ofensivos ou desinformação
- Contexto: Plataforma social brasileira precisa cumprir novas regulamentações
- Dilema: Liberdade de expressão vs. Combate ao discurso de ódio e fake news
- Valores em conflito: Autonomia individual, segurança coletiva, censura vs. moderação

**Cenário 6: Gamificação em Aplicativos de Delivery**

- Descrição: Sistema de pontos, rankings e recompensas para entregadores
- Contexto: Empresa de delivery quer aumentar produtividade
- Dilema: Eficiência operacional vs. Exploração do trabalho e saúde mental
- Valores em conflito: Lucratividade, direitos trabalhistas, bem-estar

**Cenário 7: Vigilância por Drones em Comunidades**

- Descrição: Drones com câmeras para patrulhamento em áreas de alta criminalidade
- Contexto: Secretaria de Segurança propõe projeto-piloto
- Dilema: Segurança pública vs. Privacidade e discriminação territorial
- Valores em conflito: Ordem pública, direitos civis, estigmatização social

**Cenário 8: Assistente Virtual na Educação Infantil**

- Descrição: IA que interage com crianças, conta histórias e auxilia no aprendizado
- Contexto: Escola particular quer adotar para complementar ensino
- Dilema: Inovação pedagógica vs. Desenvolvimento socioemocional e coleta de dados infantis
- Valores em conflito: Eficiência educacional, proteção da infância, interação humana

**Cenário 9: Blockchain para Registro de Diplomas**

- Descrição: Sistema descentralizado para certificação acadêmica
- Contexto: Ministério da Educação avalia implementação nacional
- Dilema: Transparência e combate à fraude vs. Exclusão digital e custos
- Valores em conflito: Acessibilidade, segurança, inovação tecnológica

**Cenário 10: Aplicativo de Namoro com Análise de Compatibilidade por IA**

- Descrição: Sistema que sugere parceiros usando dados psicológicos e comportamentais
- Contexto: Startup busca investimento para lançamento
- Dilema: Otimização de relacionamentos vs. Redução da diversidade e manipulação emocional
- Valores em conflito: Eficiência afetiva, autonomia, discriminação algorítmica

**Cenário 11: Smart City com Sensores Urbanos**

- Descrição: Rede de IoT para monitorar trânsito, poluição, ruído e movimento de pessoas
- Contexto: Cidade de médio porte recebe financiamento para se tornar "inteligente"
- Dilema: Gestão urbana eficiente vs. Vigilância em massa e segurança dos dados
- Valores em conflito: Sustentabilidade, privacidade, transparência governamental

**Cenário 12: IA Geradora de Notícias Locais**

- Descrição: Sistema que produz automaticamente reportagens sobre eventos locais
- Contexto: Jornal regional em crise financeira considera automatização
- Dilema: Sobrevivência do jornalismo vs. Qualidade editorial e desemprego
- Valores em conflito: Sustentabilidade econômica, integridade jornalística, trabalho humano

**Cenário 13: Plataforma de Crowdfunding para Tratamentos Médicos**

- Descrição: Site onde pessoas arrecadam dinheiro para cirurgias e medicamentos
- Contexto: Sistema já existe, mas debate sobre regulamentação aumenta
- Dilema: Solidariedade social vs. Privatização da saúde e desigualdade no acesso
- Valores em conflito: Empatia coletiva, direito à saúde, justiça social

**Cenário 14: Algoritmo de Precificação Dinâmica em Transporte Público**

- Descrição: Sistema que ajusta tarifas conforme demanda e horário
- Contexto: Prefeitura estuda modelo para reduzir déficit do transporte
- Dilema: Sustentabilidade financeira vs. Direito à mobilidade urbana
- Valores em conflito: Eficiência econômica, equidade social, acessibilidade

**Cenário 15: Deepfakes para Preservação de Memória**

- Descrição: Tecnologia que recria voz e imagem de pessoas falecidas
- Contexto: Empresa oferece serviço para famílias em luto
- Dilema: Conforto emocional vs. Ética da manipulação digital e consentimento póstumo
- Valores em conflito: Luto, dignidade, autenticidade

**Cenário 16: Rastreamento de Celulares para Controle de Epidemias**

- Descrição: App governamental que monitora localização para identificar contatos
- Contexto: Nova doença infecciosa surge e governo propõe medida emergencial
- Dilema: Saúde pública vs. Privacidade e potencial uso autoritário
- Valores em conflito: Bem coletivo, liberdades individuais, confiança no Estado

**Cenário 17: Criptomoedas em Comunidades Rurais**

- Descrição: Projeto de moeda digital local para economia solidária
- Contexto: Cooperativa agrícola quer independência do sistema bancário tradicional
- Dilema: Autonomia financeira vs. Volatilidade e exclusão de não-alfabetizados digitalmente
- Valores em conflito: Empoderamento econômico, segurança financeira, inclusão

**Cenário 18: Algoritmo de Triagem em Pronto-Socorro**

- Descrição: IA que prioriza atendimento baseada em sintomas e histórico médico
- Contexto: Hospital público sobrecarregado busca otimizar atendimento
- Dilema: Eficiência no atendimento vs. Viés algorítmico e decisão médica humana
- Valores em conflito: Rapidez, equidade no cuidado, responsabilidade profissional

**Cenário 19: E-sports e Apostas Online**

- Descrição: Plataforma de competições de jogos com sistema de apostas integrado
- Contexto: Legislação brasileira sobre jogos está sendo revisada
- Dilema: Entretenimento e economia criativa vs. Vício e exploração de jovens
- Valores em conflito: Liberdade de escolha, proteção de vulneráveis, regulação estatal

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
