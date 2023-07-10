import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import getPokemons from '../../services/get-pokemons';
import getAbilities from '../../services/get-abilities';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { styled } from 'styled-components';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState({
        pokemonData: {}
    })

    const [effect, setEffect] = useState({
        effectData: []
    })

    const { name } = useParams()

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const pokemonD = async () => {
            const pokemonInfo = await getPokemons(name)

            setPokemon({
                pokemonData: pokemonInfo,
            })
        }
        pokemonD()
    }, [])

    useEffect(() => {
        const abilites = async () => {
            const effectInfo = await getAbilities(pokemon.pokemonData.abilities)

            setEffect({
                effectData: effectInfo
            })
        }
        abilites()
    }, [pokemon.pokemonData.abilities])

    return (
        <Main style={{ backgroundColor: theme.background, color: theme.color }}>
            <DivContainer>
                <DivName>
                    <NamePokemon style={{ color: theme.color, borderColor: theme.borderCard, backgroundColor: theme.backgroundCard }}>{pokemon.pokemonData.name}</NamePokemon>
                    <DivTypes style={{ borderColor: theme.borderCard, backgroundColor: theme.backgroundCard }}>
                        <TitleTypes >Types:</TitleTypes>
                        <UlTypes>
                            {
                                pokemon.pokemonData.types?.map((item, index) => {
                                    return (
                                        <LiType key={index} style={{ borderColor: theme.borderSkill, backgroundColor: theme.backgroundSkill }}>{item.type.name}</LiType>
                                    )
                                })
                            }
                        </UlTypes>
                    </DivTypes>
                </DivName>

                <DivImg>
                    <ImgPokemon src={pokemon.pokemonData.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                </DivImg>

                <DivInfo >
                    <DivMoves style={{ borderColor: theme.borderCard, backgroundColor: theme.backgroundCard }}>
                        <TitleMoves >Moves:</TitleMoves>
                        <UlMoves >
                            {
                                pokemon.pokemonData.moves?.slice(0, 4).map((item, index) => {
                                    return (
                                        <LiMoves key={index} style={{ borderColor: theme.borderSkill, backgroundColor: theme.backgroundSkill }}>{item.move.name}</LiMoves>
                                    )
                                })
                            }
                        </UlMoves>
                    </DivMoves>

                    <DivAbilities style={{ borderColor: theme.borderCard, backgroundColor: theme.backgroundCard }}>
                        <TitleAbilities >abilites:</TitleAbilities>
                        <UlAbilities>
                            {
                                pokemon.pokemonData.abilities?.map((item, index) => {
                                    return (
                                        <LiAbilities key={index} style={{ borderColor: theme.borderSkill, backgroundColor: theme.backgroundSkill }}>
                                            <NameAbilities >{item.ability.name}:</NameAbilities>
                                            <InfoAbilities >{effect.effectData[index]}</InfoAbilities>
                                        </LiAbilities>
                                    )
                                })
                            }
                        </UlAbilities>
                    </DivAbilities>
                </DivInfo>
            </DivContainer>
        </Main>
    )
}

const Main = styled.main`
    max-width: 100vw;
    min-height: 100vh;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
`

const DivContainer = styled.div`
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 106.16px;

    @media (max-width: 381px) {
        margin-top: 150.15px;
    }
`

const DivName = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 587px) {
        width: 100%;
        align-items: center;
    }

    @media (max-width: 557px) {
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }

`

const NamePokemon = styled.h1`
    padding: 8px 12px;
    border: solid 5px black;
    border-radius: 15px;
    font-weight: 800;
    font-size: 22px;
`

const DivTypes = styled.div`
    width: 228px;
    padding: 8px;
    margin-top: 15px;
    border: solid 5px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleTypes = styled.h2`
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 8px;
`

const UlTypes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const LiType = styled.li`
    margin: 5px 5px;
    padding: 2px 5px;
    border: solid 3px black;
    border-radius: 5px;
`

const DivImg = styled.div`
    margin: 0 auto;
`

const ImgPokemon = styled.img`
    max-width: 300px;
    padding: 30px;
    
    @media (max-width: 380px) {
        max-width: 100%;
    }
`

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 907px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

const DivMoves = styled.div`
    padding: 8px;
    max-width: 320px;
    border: solid 5px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleMoves = styled.h2`
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 8px;
`

const UlMoves = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const LiMoves = styled.li`
    margin: 5px 5px;
    padding: 2px 5px;
    border: solid 3px black;
    border-radius: 5px;
`

const DivAbilities = styled.div`
    max-width: 320px;
    margin-top: 15px;
    padding: 8px 10px;
    border: solid 5px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleAbilities = styled.h2`
    font-weight: 700;
    font-size: 19px;
`

const UlAbilities = styled.ul`

`

const LiAbilities = styled.li`
    margin: 10px;
    padding: 8px;
    border: solid 3px black;
`

const NameAbilities = styled.h3`
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 8px;
`

const InfoAbilities = styled.p`
    padding: 8px;
    font-weight: 500;
    font-size: 16px;
`

export default Pokemon