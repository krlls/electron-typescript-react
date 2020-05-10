# Electron TypeScript React

[Electron](https://electron.atom.io/) application using [Typescript](https://www.typescriptlang.org/) and [React](https://facebook.github.io/react/).

### Установка

Установить зависимости:

    yarn

---

### Development

При разработке необходимо запустить webpack-dev-server (localhost:3000) и приложение electron:

    yarn electron:start  
    yarn renderer:start

### Production

Для сборки приложения необходимо выполнить:

    yarn build

Это запустит сборку react и electron в каталог `./build` и electron-builder, собранное приложение будет храниться в `./dist` 

## Структура

    src/
      main // electron app
      renderer //react app
    build //сборка react и electron (js)
    dist //собранное приложение
    js //electron в js для запуска в dev режиме
