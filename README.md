### Adroid Studio

Projeto feito para estudo de funcionalidades de um aplicativo para controle financeiro, contendo filtro de dados usando data e autenticação de usuario em cunjunto com react navigation.

- Antes de iniciar o projeto é praciso usar o ```yarn -i``` no projeto e dentro da pasta backend, caso haja algum erro, tente instalar as bibliotecas de forma manual, pode ser que o ```yarn -i``` não instale tudo.


Caminho para emulador android no windows:
```~\AppData\Local\Android\Sdk\emulator```
Iniciando emulador:
```./emulator -avd [nome do emulador]```
Gerando arquivo de dados do servidor SQLite local na pasta backend
```npx prisma migrate dev```
Iniciando servidor local
```yarn dev```
Intalando calendartio react native
```yarn add react-native-calendars```
Outra biblioteca usada é o react navigation (stack/drawer) navigation