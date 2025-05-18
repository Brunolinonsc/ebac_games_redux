import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../sevices/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto
            key={game.id}
            game={game}
            aoComprar={function (jogo: Game): void {
              throw new Error('Function not implemented.')
            }}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
