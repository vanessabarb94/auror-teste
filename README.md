# Aurora Growth Lab

Site institucional demonstrativo, estático e fictício.

## Executar localmente

Abra `index.html` diretamente no navegador ou sirva esta pasta com qualquer servidor HTTP estático:

```powershell
python -m http.server 4173
```

Acesse `http://localhost:4173/`.

## Publicação

Hospede o conteúdo desta pasta em um host estático (Netlify, Vercel, GitHub Pages ou servidor próprio). Configure o domínio real no `canonical`, `sitemap.xml`, `robots.txt` e JSON-LD antes do deploy. Ative HTTPS e valide o domínio/DNS no provedor escolhido.

## Analytics e formulário

O formulário é apenas demonstrativo e não envia dados. Antes de conectar backend, definir política de privacidade, consentimento, retenção de dados, provedor de e-mail e mensagens legais. Analytics deve ser consentido e medir cliques no CTA, início do formulário e sucesso.

## Imagem

A imagem do hero usa Unsplash como fonte remota de teste. Para produção, registrar URL, autor quando disponível, licença e data de verificação, ou substituir por asset autorizado. O CSS mantém um fallback cromático quando a imagem não carrega.

## Rollback

Mantenha cada publicação como uma versão imutável no provedor de hospedagem e reverta para a versão anterior caso a checagem de links, formulário, console ou Core Web Vitals falhe.
