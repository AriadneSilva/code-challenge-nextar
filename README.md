# 🚀 Code Challenge — Nextar

Aplicação desenvolvida como solução para o desafio técnico de Frontend, com foco em arquitetura, gerenciamento de estado, regras de negócio e experiência do usuário.

---

## 📌 Visão Geral

O projeto consiste em um sistema de gerenciamento de ofertas, permitindo:

* Criação de ofertas
* Edição de ofertas existentes
* Cancelamento com rollback
* Filtros por status
* Feedback visual de ações (toast)

A aplicação foi construída com foco em **separação de responsabilidades**, **previsibilidade de estado** e **boas práticas de engenharia frontend**.

---

## 🧠 Arquitetura

A estrutura foi organizada seguindo princípios de domínio e separação de camadas:

```
src/
 ├── api/                # Comunicação externa (simulada)
 ├── components/         # Componentes de UI
 ├── domain/             # Regras de negócio (entity, service, validation)
 ├── hooks/              # Hooks customizados
 ├── pages/              # Páginas da aplicação
 ├── store/              # Estado global (Zustand)
 ├── tests/              # Testes unitários
 └── types/              # Tipagens compartilhadas
```

### 🔹 Decisões principais

* **Zustand** para gerenciamento de estado global
* Separação entre:

  * UI (components)
  * Regras de negócio (domain)
  * Estado (store)
* Uso de **ActionResult** para padronização de respostas das ações

---

## ⚙️ Funcionalidades

### ✅ CRUD de Ofertas

* Criação e edição via modal
* Cancelamento com controle de estado

### 🔄 Optimistic UI + Rollback

* Atualização imediata da UI
* Reversão em caso de erro na operação

### 🧩 Filtros

* All / Ativas / Agendadas / Expiradas
* Controle visual do estado ativo

### 📣 Feedback ao usuário

* Toast para sucesso e erro
* UX reativa às ações

### 📱 Responsividade

* Modal adaptado para telas menores
* Layout flexível

---

## 🧪 Testes

Foram implementados testes unitários para:

* Regras de negócio (`offer.service`)
* Validações (`offer.validation`)
* Store (`offer.store`)

Objetivo:

* Garantir previsibilidade
* Cobrir regras críticas do domínio

---

## 🧠 Padrões de Engenharia

### 🔹 Separação de responsabilidades

* **FormOffer** → coleta dados
* **Modal** → estrutura visual
* **Dashboard** → orquestra fluxo
* **useOffer** → regra de negócio

---

### 🔹 ActionResult Pattern

Padronização de retorno das ações:

```ts
type ActionResult = {
  success: boolean;
  message: string;
};
```

Permite:

* Desacoplamento entre UI e lógica
* Facilidade de integração com feedback (toast)
* Testabilidade

---

### 🔹 Controle de estado

* Zustand para estado global
* Hooks customizados para abstração (`useOffer`, `useToast`)
* Evita prop drilling desnecessário

---

## 📄 Documentação

* `DECISIONS.md` → decisões técnicas e trade-offs
* `Prompt.md` → uso de IA como ferramenta de produtividade

---

## 🤖 Uso de IA

A IA foi utilizada como suporte para:

* Refinamento de arquitetura
* Sugestões de boas práticas
* Ajustes de UI/UX e responsividade
* Estruturação de documentação

Todas as decisões de engenharia, modelagem e implementação foram conduzidas de forma autoral.

---

## 🚀 Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar projeto
npm run dev
```

---

## 🛠️ Tecnologias

* React
* TypeScript
* Zustand
* TailwindCSS
* Vite
* Jest / Testing Library

---

## 📌 Considerações finais

O foco principal desta implementação foi:

* Clareza arquitetural
* Separação de responsabilidades
* Previsibilidade de estado
* Experiência do usuário

A solução foi pensada para ser facilmente escalável e adaptável para integração com APIs reais.

---

## 👩‍💻 Autor

Desenvolvido por Ariadne Silva
