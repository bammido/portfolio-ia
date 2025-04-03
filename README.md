# portfolio-IA

<div align="center">
    <img src="https://raw.githubusercontent.com/bammido/portfolio-ia/main/.gitassets/portfolio-ia-print.png">
    <div>
        <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
        <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
        <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
        <img src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white">
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
        <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white">
        <img src="">
    </div>
</div>

Aplicação interativa que exibe meus projetos e experiência profissional, oferecendo uma maneira dinâmica de explorar meu trabalho. Além disso, a aplicação conta com um chatbot inteligente, integrado ao ChatGPT, que responde perguntas sobre minha experiência, tecnologias que utilizo, projetos e formas de contato.

A arquitetura do projeto é baseada no n8n, uma ferramenta de automação que gerencia o fluxo de dados entre o Supabase (onde armazeno minhas informações) e o ChatGPT.

<div align="center">
    <img src="https://raw.githubusercontent.com/bammido/portfolio-ia/main/.gitassets/portfolio-ia-n8n-flow.png">
</div>

## 🛠️ Features

✅ Exibição detalhada dos meus projetos e experiência profissional.  
✅ Chatbot integrado para responder dúvidas sobre meu trabalho.  
✅ Integração entre n8n, Supabase e ChatGPT para um fluxo eficiente de informações.  
✅ Interface intuitiva e fácil de navegar.  
✅ Repositórios GitHub Integrados

## ⚙️ Como rodar

1. Clone este repositório:

    ```sh
    git clone https://github.com/bammido/portfolio-ia.git
    ```

2. Acesse o diretório do projeto:

    ```sh
    cd portfolio-ia
    ```

3. Acesse sua conta no [Supabase](https://supabase.com) ou crie uma nova conta.

4. Navegue até o projeto no Supabase e clique no botão `connect`.
   
5. Clique em selecionar ORM e selecione o ORM Prisma.
   
6. Copie as variáveis de ambiente listadas, crie um arquivo `.env` na pasta **portfolio-ia-backend** e preencha com as seguintes informações:
    ```
    DATABASE_URL= [informação vinda do supa base]
    DIRECT_URL= [informação vinda do supa base]
    PORT=
    ```
    **Obs: Caso o valor da porta não seja adicionado, a aplicação rodará por padrão na porta 4000**

7. Dentro da pasta **portfolio-ia-backend** rode os comandos `npm i` e `npx prisma migrate dev` para instalar as dependências e aplicar o esquema do prisma no supabase.

8. Caso queira pode usar os CSVs que estão na pasta ``portlofio-ia-backend/prisma/data`` como base para preencher as tabelas.

9. Crie uma conta no site no [n8n](https://n8n.io), e importe o fluxo definido no arquivo assistente-pessoal que está na pasta workflow-n8n.

10. Você deve criar e conectar o supabase e sua conta da OpenAI para que funcione os fluxos.

11. Após importar o fluxo, clique no primeiro nó, acesse `webhooks url`, clique em `Production URL` e copie o valor dessa URL.
**Obs: Lembre-se de ativar o workflow no n8n**

12. Crie um arquivo `.env` na pasta **portfolio-ia-frontend** e preencha com as seguintes informações, sendo que a URL da API é a URL do backend e a segunda variável deve ter como valor a URL que extraimos no n8n:

    ```
    NEXT_PUBLIC_API_URL= [url da sua api, http://localhost:4000]
    NEXT_PUBLIC_CHAT_WEBHOOK= [Production URL do n8n]
    ```

13. Instale as dependências do **portfolio-ia-frontend** com o comando `npm i`

14. Na raiz do projeto rode o comando `npm run dev`.

## 💻 Tecnologias

* Nest
* Next
* ChatGpt
* Docker
* n8n
* supabase

## Links úteis

-   [Next.js](https://nextjs.org/docs)
-   [NestJS](https://docs.nestjs.com/)
-   [Prisma](https://www.prisma.io/docs)
-   [Supabase](https://supabase.com)
-   [n8n](https://n8n.io/)