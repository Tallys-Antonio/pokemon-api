import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Logo from '../../image/pokemon.png'
import { ButtonDarkMode } from '../button-dark-mode/button-dark-mode'

const Header = () => {

    return (
        <HeaderMain>
            <DivContainer>
                <DivLogo>
                    <Link to="/">
                        <ImgLogo src={Logo} alt="Logo do Pokemon" />
                    </Link>
                    <Link to="/">
                        <Home>Home</Home>
                    </Link>
                </DivLogo>

                <DivButton>
                    <ButtonDarkMode />
                </DivButton>
            </DivContainer>
        </HeaderMain>
    )
}

const HeaderMain = styled.header`
    width: 100vw;
    background-color: red;
    padding: 30px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
`

const DivContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 466px) {
        justify-content: center;
    }
`

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgLogo = styled.img`
    width: 120px;
    margin-right: 25px;
`

const Home = styled.h1`
    background-color: #fac705;
    border: solid 4px #3d62b6;
    padding: 5px 8px;
    font-weight: 900;
    font-size: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.12);
    }
`

const DivButton = styled.div`
    margin-left: 25px;

    @media (max-width: 381px) {
        margin-top: 20px;
    }
`

export default Header
