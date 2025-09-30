# Comitê de Ética em Tecnologia - Jogo de Simulação

Aplicação web interativa para simulação de um Comitê de Ética em Tecnologia, desenvolvida para uso em sala de aula na disciplina **Computação e Sociedade**.

## 📋 Sobre o Projeto

Este jogo de simulação coloca os alunos no papel de diferentes stakeholders que devem avaliar se uma inovação tecnológica controversa deve ser aprovada. O cenário apresentado é o **Sistema de Monitoramento Comportamental Preditivo em Ambientes Urbanos (SMCP-Urban)**, um sistema de vigilância com IA que levanta questões éticas importantes sobre privacidade, segurança, discriminação algorítmica e liberdades civis.

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
- Alunos leem sobre a tecnologia SMCP-Urban
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
- Cada membro vota: Aprovar, Aprovar com Condições ou Rejeitar
- Sistema exibe resultados em tempo real

### 7. **Debriefing (15-20 minutos)**
- Discussão guiada pelas questões reflexivas
- Análise dos argumentos apresentados
- Conexão com conceitos teóricos da disciplina

## 📂 Estrutura do Projeto

```
comite-etica-tech/
│
├── index.html          # Estrutura HTML da aplicação
├── estilos.css         # Estilos e design responsivo
├── scripts.js          # Lógica da aplicação
├── README.md           # Este arquivo
├── .gitignore          # Arquivos ignorados pelo Git
│
└── imagens/            # Imagens dos personagens
    ├── ceo.png
    ├── prefeito.png
    ├── representante_ong.png
    ├── delegado.png
    ├── pai_mae.png
    ├── pesquisador.png
    ├── comerciante.png
    ├── ativista.png
    ├── jornalista.png
    ├── vereador.png
    ├── representante_periferia.png
    └── advogado.png
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

## 👥 Personagens Disponíveis

1. **CEO da TechGuard Solutions** - Defensor da tecnologia
2. **Prefeito(a) Municipal** - Equilibrando interesses políticos
3. **Representante de ONG de Direitos Digitais** - Defensor de privacidade
4. **Delegado(a) de Polícia** - Perspectiva operacional
5. **Mãe/Pai de Adolescente** - Preocupações familiares
6. **Pesquisador(a) em IA e Ética** - Análise técnica
7. **Comerciante do Centro** - Segurança para negócios
8. **Ativista de Movimentos Sociais** - Defesa de comunidades vulneráveis
9. **Jornalista Investigativo(a)** - Transparência e questionamento
10. **Vereador(a) de Oposição** - Fiscalização e alternativas
11. **Representante de Comunidade Periférica** - Voz das margens
12. **Advogado(a) Constitucionalista** - Análise legal

## 🎨 Sobre as Imagens dos Personagens

As imagens devem ser nomeadas exatamente como indicado abaixo e colocadas na pasta `imagens/`:

- `ceo.png`
- `prefeito.png`
- `representante_ong.png`
- `delegado.png`
- `pai_mae.png`
- `pesquisador.png`
- `comerciante.png`
- `ativista.png`
- `jornalista.png`
- `vereador.png`
- `representante_periferia.png`
- `advogado.png`

**Formato recomendado:** PNG ou JPG, 400x400px mínimo, fundo transparente ou sólido

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

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (Vanilla)** - Lógica e interatividade
- **Design Responsivo** - Funciona em desktop, tablet e mobile

## 📖 Temas Abordados

- Ética em Inteligência Artificial
- Vigilância e Privacidade
- Viés Algorítmico e Discriminação
- Segurança Pública vs. Liberdades Civis
- Transparência e Accountability em Tecnologia
- Justiça Social e Tecnologia
- Governança de Dados
- Participação Democrática em Decisões Tecnológicas

## 🤝 Contribuindo

Contribuições são bem-vindas! Você pode:

- Reportar bugs ou problemas
- Sugerir novos personagens ou cenários
- Melhorar a interface ou usabilidade
- Traduzir para outros idiomas
- Compartilhar experiências de uso em sala de aula

## 📄 Licença

Este projeto é educacional e de código aberto. Sinta-se livre para usar, modificar e compartilhar com fins pedagógicos.

## ✉️ Contato e Suporte

Para dúvidas, sugestões ou compartilhar sua experiência usando esta ferramenta:
- Abra uma issue no repositório
- Entre em contato com o desenvolvedor

## 🎓 Referências e Leituras Recomendadas

- **Noble, S. U.** (2018). *Algorithms of Oppression: How Search Engines Reinforce Racism*
- **O'Neil, C.** (2016). *Weapons of Math Destruction*
- **Zuboff, S.** (2019). *The Age of Surveillance Capitalism*
- **Eubanks, V.** (2018). *Automating Inequality*
- **Benjamin, R.** (2019). *Race After Technology*

---

**Versão:** 1.0  
**Data:** 2025  
**Desenvolvido para:** Disciplina Computação e Sociedade