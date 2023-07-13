import { useEffect, useState, React, useContext } from "react";
import UploadButton from "../upload-button/upload-button"
import { Link } from 'react-router-dom'
import getListPokemon from "../../services/get-list-pokemon";
import { ThemeContext } from "../../contexts/theme-context";
import { styled } from "styled-components";

const Home = () => {
  const [dataPokemon, setDataPokemon] = useState({
    pokemonsList: []
  })

  const [toLoad, setToLoad] = useState(0)

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const pokemonWs = async () => {
      const pokemons = await getListPokemon(toLoad)

      setDataPokemon({
        pokemonsList: [...dataPokemon.pokemonsList, ...pokemons]
      })
    }
    pokemonWs()
  }, [toLoad])

  return (
    <>
      <Main style={{ backgroundColor: theme.background }}>
        <ListPokemon>
          {
            dataPokemon.pokemonsList.map((pokemon, index) => {
              return (
                <Link key={index} to={`/pokemon/${pokemon.name}`}>
                  <Pokemons key={index} style={{ backgroundColor: theme.backgroundCard, borderColor: theme.borderCard }}>
                    <NamePokemon style={{ color: theme.color }} >{pokemon.name}</NamePokemon>
                    <ImgPokemon key={index} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                  </Pokemons>
                </Link>
              )
            })
          }
        </ListPokemon>

        <DivButton>
          <UploadButton setToLoad={setToLoad} toLoad={toLoad} />
        </DivButton>
      </Main>
    </>
  )
}

const Main = styled.main`
  min-height: 100vh;
`

const ListPokemon = styled.ul`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 106.16px;
`

const Pokemons = styled.li`
  width: 190px;
  height: 210px;
  margin: 12px;
  padding: 10px;
  border: solid 5px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: transform 0.5s ease-in-out;

  &:hover{
    transform: scale(1.08);
  }
`

const ImgPokemon = styled.img`
  width: 120px;
  height: 138px;
`

const NamePokemon = styled.h3`
  font-size: 16px;
  margin-bottom: auto;
`

const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Home
