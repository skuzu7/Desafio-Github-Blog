import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 864px;
  margin: 100px auto;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 864px) {
    padding: 20px; /* Ajustando o espaçamento para telas menores */
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px); /* Divide em duas colunas com espaçamento lateral */
  max-height: 260px;
  overflow: hidden;
  color: whitesmoke;
  background: #112131;
  border-radius: 6px;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-size: 16px;
    color: #afc2d4;
    overflow: hidden;
  }

  header {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #e7edf4;
    margin-bottom: 20px;
  }

  @media (max-width: 864px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
