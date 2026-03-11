# Architecture & Engineering Decisions

Este documento descreve as principais decisões arquiteturais tomadas durante o desenvolvimento do desafio.

O objetivo é demonstrar o raciocínio de engenharia aplicado para resolver os problemas de concorrência, sincronização de estado e regras de negócio do sistema de gestão de ofertas relâmpago.

---

## Offer Entity Modeling

### Contexto

    A aplicação vai gerenciar ofertas relâmpagos, com restrição de tempo, limite de estoque e concorrência de edição por usuários distintos.

### Decisão

    A Entity Offer foi modelada considerando o contexto e regras de negócio do problema:

    - id: identificador da oferta
    - title: nome da oferta
    - price: preço original da oferta
    - discountPercentage: percentual de desconto oferecido
    - stock: quantidade disponível no estoque
    - version: versão atual para controle de atualizações concorrentes
    - startDate e endDate: janela de tempo da oferta disponibilizada
    - updatedAt: Informações sobre a data da ultima atualização realizada
    - status: situação da oferta, para evitar o recálculo durante a renderização da interface

### Trade-offs

    Utilizando o versionamento (version) a  cada atualização esse valor será incrementado e permitirá a identificação de conflitos entre diferentes usuários editando o mesmo recurso, sem a necessidade de bloqueio

## Offer Service Modelling

    Arquivo criado para centralizar as regras de negócio da entity Offer, funções implementadas:
        - calculo do preço final da oferta considerando o valor do percentual de desconto
        - verificação de conflitos das versões
        - incremento da versão após as modificações válidas
        

        
## Offer Validation Modelling

    Arquivo criado para centralizar as regras de validação da entity Offer, funções implementadas:
        - validação da situação do estoque 
        - validação se existe determinado um valor de desconto
        - validação se as datas iniciais e finais são diferentes
        