import logo from '../../assets/logo.svg'
import effectCode from '../../assets/effect-code.svg'
import effectCode2 from '../../assets/effect-code2.svg'
import { HeaderContainer, FirstCircle, SecondCircle, Content, Rectangle } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <FirstCircle />
      <Content>
        <div>
          <img src={effectCode} alt="" />
        </div>
        <div>
          <img src={logo} alt="" id="logo" />
        </div>
        <div>
          <img src={effectCode2} alt="" />
        </div>
      </Content>
      <Rectangle />
      <SecondCircle />
    </HeaderContainer>
  )
}