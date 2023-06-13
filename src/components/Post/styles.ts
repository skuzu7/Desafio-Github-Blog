import styled from 'styled-components'

// Estilize o componente Header usando o styled-components
export const PostContainer = styled.section`
  width: 864px;
  height: 212px;
  margin: -81px auto;
  padding: 0 1.5rem;
  align-items: center;
  background: #0b1b2b;
  border: 1px solid #1c2f41;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    display: flex;
    color: #3294f8;

    justify-content: space-between;
    align-items: flex-start; /* Alinhar à esquerda */
    padding: 0.5rem 0; /* Adicionar espaçamento interno */
  }
  a {
    color: #3294f8;
  }
`

export const PostStyle = styled.section`
  margin-top: 50px;
  margin-left: 10px;

  span {
    color: #afc2d4;
  }

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-size: 16px;
    color: #afc2d4;
    overflow: hidden;
  }
`
