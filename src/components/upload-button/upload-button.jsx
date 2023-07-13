import React from "react";
import { styled } from "styled-components";

const UploadButton = ({toLoad, setToLoad}) => {
    return (
        <ButtonUpload onClick={() => setToLoad( toLoad + 10)}>Veja mais</ButtonUpload>
    )
}

const ButtonUpload = styled.button`
    font-family: 'pokemon', sans-serif;
    background-color: #fac705;
    border: solid 5px #3d62b6;
    margin: 30px 0;
    padding: 8px 10px;
    font-weight: 900;
    font-size: 25px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.12);
        cursor: pointer;
    }
`

export default UploadButton