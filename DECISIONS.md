# Architecture & Engineering Decisions

Este documento descreve as principais decisões arquiteturais tomadas durante o desenvolvimento do desafio.

O objetivo é demonstrar o raciocínio de engenharia aplicado para resolver os problemas de concorrência, sincronização de estado e regras de negócio do sistema de gestão de ofertas relâmpago.

---

## Type Modeling

### Contexto

    A aplicação vai gerenciar ofertas relâmpagos, com restrição de tempo, limite de estoque e concorrência de edição por usuários distintos.

### Decisão

    O Type Offer foi modelada considerando o contexto e regras de negócio do problema:

    - Id: identificador da oferta
    - Title: nome da oferta
    - Price: preço original da oferta
    - Discount: percentual de desconto oferecido
    - Stock: quantidade disponível no estoque
    - Version: versão atual para controle de atualizações concorrentes
    - StartDate e EndDate: janela de tempo da oferta disponibilizada
    - UpdateAt: Informações sobre a data da ultima atualização realizada
    - Status: situação da oferta, para evitar o recálculo

### Trade-offs

    Utilizando o versionamento (version) a  cada atualização esse valor será incrementado e permitirá a identificação de conflitos entre diferentes usuários editando o mesmo recurso, sem a necessidade de bloqueio
