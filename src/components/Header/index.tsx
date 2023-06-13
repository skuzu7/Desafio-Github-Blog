import { HeaderContainer, HeaderContent } from './styles'
import logo from '../../assets/Logo.svg'
// import react from '../../assets/react.svg';  Importe a imagem do logo

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="react" />
      </HeaderContent>
    </HeaderContainer>
  )
}
