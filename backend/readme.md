# Backend finanças App

1) Primeiro clone o repositório
2) Baixe as dependencias, abra o cmd até a pasta onde está o projeto e rode: ```yarn``` ou ```npm install```
3) Sincronize o banco abrindo seu cmd dentro da pasta do projeto e rodando:
```cmd
npx prisma migrate dev
```
- Após rodar o passo prisma migrate dev você pode olhar dentro da pasta prisma ele deve ter gerado um arquovo com nome `dev.db`

4) Agora pode rodar o projeto com ```yarn dev``` ou ```npm run dev```

* Sempre a api vai tentar rodar na porta ```3333```, exemplo: ```http://localhost:3333/login```

sincronizar com banco de dados
```npx prisma migrate dev```

Hi @CarmeloDascola and thanks for your report! Could you please check if installing Microsoft Visual C++ Redistributable fixes the issue?


beekeeper:
https://github.com/beekeeper-studio/beekeeper-studio/releases/tag/v3.7.10
