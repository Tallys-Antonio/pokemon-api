import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemons from './pokemons';
import PokemonDetails from './pokemonDetails';
import Header from '../components/header/header';
import { ThemeProvider } from '../contexts/theme-context';
import { createGlobalStyle } from 'styled-components';
import Pokemon_GB  from '../font/Pokemon_GB.ttf'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <GlobalStyle />
            <ThemeProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Pokemons />} />
                    <Route path='/pokemon/:name' element={<PokemonDetails />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'pokemon';
        src: url(${Pokemon_GB});
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'pokemon', sans-serif;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    
::-webkit-scrollbar {
  width: 10px; 
}

::-webkit-scrollbar-thumb {
  background-color: #3d62b6;
  border-radius: 2px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #3d62b6; 
}

::-webkit-scrollbar-track {
  background-color: #fac705; 
}

`

export default AppRoutes