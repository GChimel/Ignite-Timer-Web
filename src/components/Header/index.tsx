import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'
import { HeaderComponent } from './styles'

import logoIgnite from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderComponent>
  )
}
