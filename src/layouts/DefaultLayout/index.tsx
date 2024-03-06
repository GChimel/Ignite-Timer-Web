import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/* Espaço para inserir "componente/tela"  */}
    </LayoutContainer>
  )
}
