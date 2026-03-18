## Interaction Timeline (Resumo)

Durante o desenvolvimento, a IA foi utilizada de forma incremental para acelerar decisões pontuais e refinamentos técnicos.

A sequência de uso seguiu aproximadamente:

1. Estruturação inicial da arquitetura e organização da store
2. Refatoração de formulários e tipagem
3. Ajustes de UI e componentização
4. Implementação de comportamentos interativos (filtros, modal)
5. Melhorias de responsividade e acessibilidade
6. Estruturação e refinamento da documentação técnica

Esse fluxo evidencia o uso da IA como suporte progressivo, e não como gerador de solução completa.

# AI Assistance Log — prompts.md

Este documento descreve como ferramentas de IA foram utilizadas durante o desenvolvimento do projeto. O objetivo é dar transparência ao processo, evidenciando que a IA foi utilizada como suporte de produtividade, revisão e refinamento — enquanto as decisões de engenharia, arquitetura, modelagem e implementação principal foram conduzidas de forma autoral.

---

## 📌 Diretrizes de Uso da IA

A utilização da IA seguiu os seguintes princípios:

- Apoio à produtividade e aceleração de tarefas
- Validação de abordagens técnicas
- Refinamento de código e documentação
- Suporte em dúvidas pontuais

**Não foi utilizada para geração automática de solução completa**, nem para definição de arquitetura principal do sistema.

---

## 🧠 1. Arquitetura e Modelagem

### Prompt utilizado

> Como posso melhorar a organização da minha store com Zustand?

### Uso da IA

A IA foi utilizada para:

- Validar a separação de responsabilidades da store
- Sugerir boas práticas de organização modular
- Refinar nomenclaturas e responsabilidades

### Decisão final

A arquitetura (store modular, service layer, validation layer) foi definida e implementada manualmente, sendo apenas refinada com apoio da IA.

---

## ⚙️ 2. Refatoração de Código

### Prompt utilizado

> "Preciso refatorar meu handleChange para lidar com diferentes tipos (number, date, string)"

### Uso da IA

- Sugestão de centralização de parsing (`parseValue`)
- Melhoria de legibilidade e manutenção

### Decisão final

A lógica de controle de formulário, tipagem e integração com a entidade foi implementada manualmente.

---

## 🎨 3. Componentização e UI

### Prompt utilizado

> "Como posso melhorar a organização dos meus componentes mantendo reutilização e baixo acoplamento?"

### Uso da IA

- Sugestões de separação entre UI e lógica
- Ajustes na estrutura de componentes (Form, Modal, Filter)

### Decisão final

A estrutura de componentes e fluxo da aplicação foram definidos manualmente, com refinamentos incrementais.

---

## 📱 4. Responsividade e UX

### Prompt utilizado

> "Meu modal não está responsivo em telas menores, como ajustar sem quebrar o layout?"

### Uso da IA

- Sugestão de uso de `max-width`, `w-full`, `overflow`
- Ajustes para melhorar comportamento em mobile

### Prompt adicional

> "Como implementar outside click para fechar o modal?"

### Uso da IA

- Implementação de `useRef` + `useEffect`
- Boas práticas de cleanup de eventos

### Decisão final

As decisões de UX e comportamento foram conduzidas manualmente, com apoio técnico na implementação.

---

## 🧩 5. Interatividade e Estado (UI Behavior)

### Prompt utilizado

> "Meu botão de filtro não muda visualmente quando clicado"

### Uso da IA

- Identificação de ausência de estado reativo no componente
- Sugestão de uso de função para estilo dinâmico

### Decisão final

A lógica de filtro e integração com estado global já estava implementada; a IA auxiliou apenas no binding visual.

---

## 🖼️ 6. Upload e Manipulação de Imagem

### Prompt utilizado

> "Preciso fazer upload de imagem e salvar a URL no form"

### Uso da IA

- Sugestão de uso de base64 via FileReader
- Implementação de preview de imagem

### Decisão final

A escolha da abordagem (sem backend, com simulação local) foi feita considerando o escopo do desafio.

---

## 🧪 7. Estrutura de Testes

### Prompt utilizado

> "Como posso organizar meus testes para cobrir regras de negócio?"

### Uso da IA

- Sugestão de foco em regras críticas (validação, versionamento, cálculo)

### Decisão final

Os testes foram escritos manualmente com base nas regras implementadas.

---

## 📝 8. Documentação (decisions.md)

### Prompt utilizado

> "Me ajude a melhorar meu decisions.md para refletir melhor decisões de engenharia"

### Uso da IA

- Refinamento de linguagem técnica
- Estruturação de seções (Optimistic UI, Concurrency, Synchronization)
- Clareza na explicação de trade-offs

### Decisão final

O conteúdo foi baseado na implementação real do projeto; a IA auxiliou na comunicação e clareza.

---

## 🧠 9. Boas Práticas e Semântica

Durante o desenvolvimento, a IA foi utilizada para:

- Tirar dúvidas sobre nomenclatura
- Melhorar clareza de funções
- Refinar separação entre camadas (UI, store, service)

---

## 📎 Exemplo de Interação Real

Abaixo um exemplo mais próximo da interação real durante o desenvolvimento:

**Pergunta:**

> "Meu botão de filtro não muda visualmente quando clico, mesmo atualizando o estado global. O que pode estar faltando?"

**Direcionamento recebido:**

- Necessidade de tornar o componente reativo ao estado atual do filtro
- Sugestão de aplicar estilo condicional baseado no valor ativo

**Aplicação:**

- Integração do estado `filter` no componente
- Criação de função utilitária para classes dinâmicas

---

Esse exemplo ilustra como a IA foi utilizada para destravar problemas específicos, sem delegar a implementação completa.

## 📊 Conclusão

A IA foi utilizada como uma ferramenta de apoio para:

- Aumentar produtividade
- Validar decisões
- Refinar código e documentação

As decisões principais de engenharia — incluindo arquitetura, modelagem de dados, controle de concorrência, estratégia de estado e implementação das regras de negócio — foram conduzidas de forma autoral.

---

## ✅ Resumo do Papel da IA

| Área           | Papel da IA             |
| -------------- | ----------------------- |
| Arquitetura    | Validação e refinamento |
| Código         | Refatoração pontual     |
| UI/UX          | Ajustes e melhorias     |
| Responsividade | Suporte técnico         |
| Documentação   | Clareza e estrutura     |
| Engenharia     | Decisão autoral         |

---

Este documento garante transparência no uso da ferramenta e evidencia domínio técnico sobre as soluções implementadas.
