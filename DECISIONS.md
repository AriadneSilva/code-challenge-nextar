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


---

## State Management Strategy

### Contexto
    A aplicação precisa controlar as re-renderizações da interface considerando que as ofertas:
    - Podem sofrer atualizações frequente por diferentes usuários
    - Sofrem alterações no estoque a medida que vão saindo
    - Expiram depois de determinado tempo

    Para isso, há a necessidade de gerenciar corretamente o estado global de ofertas de maneira que os componentes consigam ler e modificar os dados de forma dinâmica e consistente

### Decisão

    Foi utilizado o Zustand como biblioteca de gerenciamento de estado global, conforme solicitado diretamente no documento do desafio

---

## Store Architecture

### Contexto

    A arquitetura escolhida foi uma arquitetura modular,facilitando a compreensão do estado da aplicação e o funcionamento da biblioteca, além de garantir melhor escalabilidade e facilidade em manutenções futuras.

### Decisão

A store foi dividida em diferentes arquivos com responsabilidades específicas:

- **store**: definição do estado global e integração das actions
- **actions**: funções responsáveis por modificar o estado
- **selectors**: funções utilizadas para leitura otimizada do estado
- **types**: definição dos tipos utilizados pela store

A estrutura adotada agora segue o princípio de responsabilidade única e engloba a testabilidade e escalabilidade da aplicação.


## Custom Hooks Strategy

### Contexto

    Os componentes da interface precisarão ter acesso aos estados e também realizar as ações necessárias para funcionamento da aplicação.
    
    O hook da aplicação foi criado para encapslular o acesso aos estados das variaveis e manter as ações que a aplicação precisará realizar. Dessa forma evita que os componentes acessem ou alteraem diretamente a store global.

### Decisão

Foi implementado o hook `useOffers` para realizar o controle, permitindo que a aplicação fique mais organizada, reduza o acoplamento entre UI e o gerencimento implementado com o Zustand, e facilite testes e manutenções futuras

---

## API Layer Simulation Strategy

### Contexto

    Entre as regras do desafio, é citado a necessidade de lidar com a sincronização de dados e atualizações considerando uma integração com o AWS Amplify.

    Mesmo não sendo disponibilizado nenhum endpoint para ser utilizado o backend, optei por criar a estrutura completa de comunicação com backend caso haja integração futura.
        

### Decisão

    Foi criada uma pasta `api` responsável por simular uma camada de comunicação com backend, contendo funções assíncronas responsáveis por manipular os dados das ofertas, simulando chamadas de rede com possíveis delays inclusive.

    Funções implementadas:

    - fetchAllOffers
    - cancelOfferAPI
    - deleteOfferAPI
    - createOfferAPI
    - updateOfferAPI
    
    Essas funções utilizam os dados mockados da aplicação, retornando Promises e simulando latência de rede assim a aplicação interage com os dados como se estivesse consumindo um backend real.

### Trade-offs

    A api foi criada para manter a separação clara entre a interface do usuário, o gerenciamento dos estados e o acesso aos dados.
    Dessa forma seguindo todas as decisões anteriormente tomadas no projeto, fica garantido a organização e facilidade em futuras modificações do projeto e até mesmo adaptação de back end com o AWS Amplify.

## Concurrency & Version Control

    De acordo com a necessidade do projeto de evitar sobrescrita de dados quando vários usuários atualizam o mesmo dado, foi adotado um controle de concorrência baseado em versionamento através do campo `version`.
    Sendo assim a atualização segue o fluxo:

    - A versão atual é comparada com a versão armazenada
    - Caso haja divergência a operação é rejeitada evitando sobrescrita em dados desatualizados
    - Caso seja válido, a atualização é aplicada e o campo é incrementado

    Assim as alterações não sobrescrevem dados inconsistentes, a validação e o incremento da versão estão na camada service

## Optimistic UI Strategy

   A estratégia do Optimisc UI foi adotada nas ações de modificação de estado.

   Sendo assim nas funções que alteram a lista de ofertas (adição, atualização, cancelamento e exclusão) o fluxo acontece seguinte forma:
    
    - O estado atual da lista é salvo antes de qualquer ação
    - A lógica da função é implementada e a interface atualizada imediatamente
    - A operação assíncrona é realizada
    - Em caso de falha, o estado salvo no primeiro passo, é restaurado realizando o rollback

  Esse fluxo permite que a aplicação se mantenha responsiva mesmo com delay de rede e principalmente reduz a latência percebida pelo usuário.

### Trade-offs:
   Possibilidade de inconsistência temporária, utilizando o rollback

## Data Synchronization Strategy

   A camada de api mockada anteriormente criada, é utilizada para tratar um ambiente com várias fontes de atualização e comportamento assíncrono.

   A sincronização dos dados é baseada em:

    - Atualizações otimistas para responsividade
    - Controle de versão para consistência
    - Simulação de latência para representar chamadas reais

   Essa abordagem simula cenários reais de concorrência e prepara a aplicação para ambientes distribuídos.  

## Testing Strategy

Foram implementados testes unitários cobrindo as principais regras de negócio da aplicação.

Os testes incluem:

- Validações da entidade Offer
- Regras de cálculo de desconto
- Controle de versionamento
- Atualizações da store

Essa abordagem garante confiabilidade e reduz riscos de regressão nas partes críticas do sistema.