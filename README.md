# levsha

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

Это запустит сборку react и electron в каталог `./build` и запустить electron-builder, собранные файлы будут храниться в `./dist` 

## Структура

    src/
      main // electron app
      renderer //react app
    build //сборка react и electron (js)
    dist //собранное приложение
    js //electron в js для запуска в dev режиме
