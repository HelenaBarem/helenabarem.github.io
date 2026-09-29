# Helena Barem Beauty

Landing page editorial, responsiva e exportável como site estático. A página usa fotos publicadas no perfil oficial, apresenta os serviços informados no cartão e direciona o agendamento ao WhatsApp.

## Executar

Requer Node.js 20.9 ou mais recente e npm.

```powershell
npm install
npm run optimize:images
npm run dev
```

Para validar e gerar os arquivos estáticos:

```powershell
npm run lint
npm run typecheck
npm run build
```

O site estático fica na pasta `out/`. Não é necessário manter um servidor Node.js em produção.

## Domínio e indexação

O domínio de produção é `https://helenabarem.github.io/`. O workflow do GitHub Pages define `NEXT_PUBLIC_SITE_URL` durante o build, sem guardar configuração ou credenciais em arquivos `.env`. Para gerar localmente os arquivos com os metadados de produção:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://helenabarem.github.io"
npm run build
```

Esse valor define as URLs canônicas, os metadados sociais, o `robots.txt` e o sitemap. Sem ele, o site bloqueia a indexação para evitar publicar URLs incompletas.

## Publicação no GitHub Pages

O projeto usa `output: "export"` e `trailingSlash: true`; como o repositório é o site de usuário `helenabarem.github.io`, os arquivos são publicados na raiz do domínio e não precisam de `basePath`. O workflow em `.github/workflows/deploy.yml` valida e compila o site, depois publica `out/` no GitHub Pages quando há push em `main`. Nas configurações do repositório, selecione **Settings → Pages → Build and deployment → GitHub Actions** como origem.

## Fotos

As imagens em `assets/source/` são cópias locais de fotos publicadas pelo perfil oficial do Instagram. `npm run optimize:images` gera variantes AVIF e WebP em `public/images/` para telas de diferentes tamanhos. A página carrega as imagens abaixo sem embed pesado do Instagram.

Fontes verificadas durante a pesquisa:

- [Perfil oficial @helenabarem.beauty](https://www.instagram.com/helenabarem.beauty/)
- [Efeito Ultra, Fio U](https://www.instagram.com/p/DdrvFTzsZIP/)
- [Nanoblading](https://www.instagram.com/p/DcUwmhslTe1/)
- [Efeito Gatinho](https://www.instagram.com/p/Db6nBN2tz5_/)
- [Brow Lamination + Volume 6D](https://www.instagram.com/p/DcuIr1nm8Hb/)
- [Legenda sobre respeitar a individualidade de cada rosto](https://www.instagram.com/p/DbbqojglRRP/)

O endereço, telefone e nomes dos serviços vieram do cartão de divulgação fornecido. O perfil confirma Campo Grande/MS, cílios, sobrancelhas e Hydragloss. Não foram encontradas descrições técnicas públicas de Hydragloss, Hydracollor ou Lash Lifting, nem valores, horários ou qualificações. A página não afirma esses dados e orienta a consulta direta pelo WhatsApp.

## Medição

A página emite eventos locais `helena:analytics` no navegador para cliques, visualizações das áreas de serviços e portfólio e progresso de rolagem. Para enviar esses eventos a uma plataforma, conecte um listener em `components/page-analytics.tsx` depois de escolher e configurar o provedor.
