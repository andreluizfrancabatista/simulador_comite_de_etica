# Comitê de Ética em Tecnologia - Jogo de Simulação

Aplicação web interativa para simulação de um Comitê de Ética em Tecnologia, desenvolvida para uso em sala de aula na disciplina **Computação e Sociedade**.

## 📋 Sobre o Projeto

Este jogo de simulação coloca os alunos no papel de diferentes stakeholders que devem avaliar se uma inovação tecnológica controversa deve ser aprovada. 

## 🎯 Objetivos Pedagógicos

- Compreender diferentes perspectivas sobre tecnologias controversas
- Identificar conflitos entre valores (segurança vs. privacidade, eficiência vs. direitos humanos)
- Desenvolver pensamento crítico sobre implicações éticas da tecnologia
- Praticar argumentação e tomada de decisão em grupo
- Explorar questões de viés algorítmico, vigilância e justiça tecnológica

## 🎮 Como Jogar

### 1. **Preparação (Antes da Aula)**
- O professor acessa a aplicação e se familiariza com o cenário e personagens
- Prepara o ambiente (projetor, computadores individuais ou impressão dos materiais)

### 2. **Introdução (5-10 minutos)**
- Apresentar o contexto da simulação
- Explicar que cada aluno interpretará um personagem com objetivos específicos

### 3. **Leitura do Cenário (10 minutos)**
- Alunos leem sobre o cenário simulado
- Conhecem os benefícios e riscos do sistema

### 4. **Seleção de Personagens (5 minutos)**
- Cada aluno escolhe ou recebe um personagem
- Personagens podem se repetir em turmas grandes
- Alunos leem objetivos e argumentos de seus personagens

### 5. **Debate do Comitê (40-60 minutos)**
- Simula uma reunião do Comitê de Ética
- Cada participante apresenta sua posição
- Discussão aberta com argumentação
- Professor pode moderar e fazer perguntas provocativas

### 6. **Votação (5 minutos)**
- Cada membro vota: Aprovar, Aprovar com ressalvas ou Rejeitar
- Professor anuncia resultado da votação

### 7. **Debriefing (15-20 minutos)**
- Discussão guiada pelas questões reflexivas
- Análise dos argumentos apresentados
- Conexão com conceitos teóricos da disciplina
- Análise de possíveis melhorias para as próximas implementações
- Feedback dos alunos sobre a dinâmica (O que pode ser melhorado?)

## 📂 Estrutura do Projeto

```
cenario-simulado/
│
├── index.html              # Estrutura HTML da aplicação
├── estilos.css             # Estilos e design responsivo
├── scripts.js              # Lógica da aplicação
├── README.md               # Este arquivo
├── guia_professor.md       # Guia do professor
├── customizacao.md         # Guia de customização da atividade
├── atividade_<num>.md      # Detalhes específicos de um cenário simulado
├── rubrica_avaliacao.md    # Avaliação da participação do aluno
├── .gitignore              # Arquivos ignorados pelo Git
└── imagens/                # Imagens dos personagens

```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Clone ou baixe este repositório
2. Adicione as imagens dos personagens na pasta `imagens/` (ou crie a pasta se necessário)
3. Abra o arquivo `index.html` em um navegador moderno

### Opção 2: Servidor Local (Recomendado)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Depois acesse: http://localhost:8000
```

### Opção 3: Deploy Online
- Faça upload para GitHub Pages, Netlify, Vercel ou similar
- Compartilhe o link com os alunos

**Dica:** Se você não tiver imagens, a aplicação exibirá um ícone padrão (👤) automaticamente.

## 💡 Sugestões de Uso

### Variações Pedagógicas

1. **Modo Individual:** Cada aluno usa a aplicação em seu dispositivo
2. **Modo Colaborativo:** Projetar na tela e conduzir discussão coletiva
3. **Modo Híbrido:** Grupos de 3-4 alunos interpretam um personagem juntos

### Adaptações

- **Turmas Pequenas (< 12 alunos):** Cada aluno um personagem diferente
- **Turmas Grandes (> 12 alunos):** Personagens podem se repetir ou criar subcomitês
- **Ensino Remoto:** Compartilhar tela via videoconferência ou enviar link individual

### Extensões

- Criar novos cenários tecnológicos (IA em saúde, carros autônomos, etc.)
- Adicionar fase de negociação para construir consenso
- Simular audiência pública com "população" votando
- Criar relatório final em grupo

## 📄 Licença

Este projeto é educacional e de código aberto. Sinta-se livre para usar, modificar e compartilhar com fins pedagógicos.