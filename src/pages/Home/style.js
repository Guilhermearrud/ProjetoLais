import styled from "styled-components";
import "@fontsource/montserrat";

export const MenuCursos = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 200px;
    gap: 30px;
    margin-top: 30px;

    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #2F2E41;
    }
`

export const ParceirosMainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
`

export const BoxModulo = styled.div`
    text-align: center;
    color: red;
    margin-bottom: 30px;
`

export const ParceirosBox = styled.div`
border-radius: 20px;
    display: flex;
    flex-direction: row;
    inline-size: 1000px;
    overflow-wrap: break-word;
    background: #F5F5F7;
    margin: 30px;
    
    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #000000;
        text-align: center;
        margin-right: 10px;
    }
`

export const CursosBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CursoOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    button {
        background: #707070;
        border: 1px solid #707070;
        border-radius: 20px;
    }
`

export const CursoTituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    overflow-wrap: break-word;

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: #F6303F;
        inline-size: 150px;
        overflow-wrap: break-word;
    }
`

export const CursoBoxContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  
`

export const Icone = styled.img`
    width: 25px;
    height: 25px;
`

export const ModuleButton = styled.button`
    background: #707070;
    border: 1px solid #707070;
    border-radius: 20px;
    margin: 10px;

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        margin: 7px;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #FFFFFF; 
    }
`

export const SliderBox = styled.div`
    margin-bottom: 20px;
    img {
        width: 100%;
        background: #000000;
        
}
`

export const ShowMoreButton = styled.button`
    background: #707070;
    border-radius: 20px;
    width: 300px;
    height: 60px;
    align-items: center;
    margin-bottom: 30px;

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;
        align-items: center;
    }
`

export const CursoContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 160px;
    background: #F5F5F7;
    border-radius: 20px;
    margin-bottom: 30px;
    align-items: center;

    h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #2F2E41;
        inline-size: 400px;
        overflow-wrap: break-word;
    }

`

export const IconeCurso = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 20px;
    margin-left: 10px;
`   