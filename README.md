## Sumário

- [Instalação](#install)
- [Executando](#run)
- [Testes](#tests)
- [Folder Structure](#folder-structure)

## Install

Para executar o projeto é necessário ter instalado na máquina  [NodeJs](https://nodejs.org/en/).
Com o Nodejs instalado na máquina deve-se executar o seguinte comando no terminal da máquina:
```sh
npm i
```
Ou
```sh
npm install
```
Esse comando instala todas as dependências do projeto.

## Run

Para executar o projeto basta abrir o terminal, navegar até a pasta raiz do projeto e executar o comando:
```sh
npm start
```
Para executar uma Build de produção:
```sh
npm run build
```

## Tests

Para executar os testes do projeto basta abrir o terminal, navegar até a pasta raiz do projeto e executar o comando:
```sh
npm test
```

## Folder Structure

O projeto está estruturado da seguinte forma:

```
portal-academico/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    main/
      App.js
      authOrApp.js
      routes.js
    pages/
      auth/
        auth.css
        authActions.js
        authReducer.js
        LoginPage.js
        RegisterPage.js
      dashboard/
        components/
          historyTab.js
          infoTable.css
          infoTable.js
          subjectsContentTab.js
          subjectsItens.js
          tableSubject.js
        dashBoardActions.js
        DashboardPage.js
        dashboardReducer.js
      errors
        permissionDenied.js
      registerSubject/
        registerActions.js
        registerPage.js
        registerReducer.js
      subject/
        components/
          studentsTable.js
          subjectOptions.js
        subjectActions.js
        subjectPage.js
        subjectReducer.js
    services/
      FirebaseService.js
    shared/
      loadingActions.js
      loadingComponent.js
      loadingReducer.js
      navbar.js
    tests/
      auth/
        LoginPage.test.js
        RegisterPage.test.js
      dashboard/
        subjectsItens.test.js
        tableSubjects.test.js
      registerSubject/
        registerPage.test.js
      subjects/
        studentsTable.test.js
        subjectOptions.test.js
    utils/
      actionsTypes.js
      collections.js
      firebaseConfigs.js
      subjectsStatus.js
    index.css
    index.js
    reducers.js
    registerServiceWorker.js
```
