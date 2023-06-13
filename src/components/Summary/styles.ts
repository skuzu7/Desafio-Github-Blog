import styled from 'styled-components'

// Estilize o componente Header usando o styled-components
export const SummaryContainer = styled.section`
  width: 864px;
  height: 212px;
  display: flex;
  margin: -81px auto;
  padding: 0 1.5rem;
  align-items: center;
  background: #0b1b2b;
  border: 1px solid #1c2f41;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const ProfileImage = styled.div`
  img {
    width: 148px;
    width: 148px;
    display: flex;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.section`
  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px;

  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #e7edf4;
  }
  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #afc2d4;
  }

  .additional-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .additional-info p {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
`
