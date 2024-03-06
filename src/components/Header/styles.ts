import styled from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      /* Borda para posteriormente utilizar um :hover e é definida desde agora
      porque caso adicione somente no hover ele iria jogar o item para cima.
      e utilizando a borda top e bottom o item se mantem centralizado. */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-300']};
      }

      /* Propriedade active vem do NavLink que quando a página está selecionada
      irá mudar a cor do ícone */
      &.active {
        color: ${(props) => props.theme['green-300']};
      }
    }
  }
`
