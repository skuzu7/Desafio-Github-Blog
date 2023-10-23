# 🔍 Formulário de Pesquisa de Issues do GitHub

O componente `SearchForm` permite aos usuários pesquisar e visualizar issues do GitHub. Ele usa a API do GitHub para buscar issues baseadas na consulta inserida e, ao clicar em uma issue, o usuário é redirecionado para uma página de detalhes.

## 🌟 Funcionalidades Principais:

- 📝 **Formulário de Pesquisa**: Utiliza `react-hook-form` para coletar a consulta do usuário.
  
- 🌐 **Busca de Issues**: Ao enviar o formulário, issues relacionadas são buscadas na API do GitHub e exibidas através do componente `Content`.

- 🚀 **Navegação**: Ao clicar em uma issue, o usuário é redirecionado para uma página de detalhes usando o `useNavigate` do `react-router-dom`.

## 🎨 Estilização:

Os estilos são definidos através do `SearchFormContainer`, um componente styled, e o componente `Content` exibe os resultados.

## 🛠️ Uso:

Para usar, instale as bibliotecas `react-hook-form`, `axios` e `react-router-dom`. Em seguida, importe e renderize o componente `SearchForm` onde desejar. Personalize conforme necessário.
