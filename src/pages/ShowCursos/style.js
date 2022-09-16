import styled from "styled-components";
import "@fontsource/montserrat";

// Engloba tudo
export const MainCursoBox = styled.div` 
    max-width: 1336px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        display: flex;
        align-items: center;    
        color: #2F2E41;
    }
`

// O card
export const CursoContainer = styled.div`
    margin-top: 20px;
    margin: 30px;
    height: 450px;     
    width: 350px;     
    display: flex;     
    flex-direction: column;     
     

    h1 {
        font-size: 12px;
    }
`

export const ModulosTextTop = styled.div`
    margin-inline-start: 150px;
    color: red;
`

export const FiltrosStily = styled.div`
    margin-top: 10px;
    margin-inline-start: 150px;
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const SelectPage = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin-bottom: 30px;
`

export const PageMainBox = styled.div`

`

export const CursoBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImgDiv = styled.div`
    
    
    img {
        border-radius: 20px;
        width: 100%;
    }
`

export const DivBoxTitulo = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    h1{
        width: 344px;
        height: 60px;
        font-weight: 600;
        font-size: 15px;
        color: #2F2E41;
    }
`

export const DivBoxParceiro = styled.div`
    p {

        font-weight: 600;
        font-size: 13px;
        color: #F6303F;
    }
`

export const ButtonDiv = styled.div`
    align-self: flex-end;

    button {
        width: 87px;
        height: 22px;
        border: none;
        color: #707070;
    }
`

export const TextIcone = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10px;
`

export const AboutBox = styled.div`
    display: -webkit-box;
    max-width: 350px;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
    height: 90px;
    text-overflow: ellipsis;
    max-width: 350px;
    overflow: hidden;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #2F2E41;
`

export const CursoOptionsContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    p {
        margin-left: 10px;
    }
`