import styled from "styled-components";
import "@fontsource/montserrat";

export const ParceirosTextTop = styled.h1`
   
`

export const ParticipantesBoxList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-inline-start: 200px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    
`

export const ParceirosText = styled.div`
 margin-inline-start: 200px;
 margin-bottom: 20px;
    h1{ 

        font-weight: 600;
        font-size: 30px;
        line-height: 49px;
        display: flex;
        align-items: center;
        color: #F6303F;
    }
`

export const ParceirosBox = styled.div`
    margin-bottom: 20px;
`

export const ParceiroImg = styled.div`
    border-radius: 20px;
    width: 250px;
    height: 100px;
    object-fit: contain;
    
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 20px;
    }
`


export const SelectPage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin-bottom: 10px;
`

export const ParceiroText = styled.div`
    text-align: center;
    margin-top: 0;
    margin-right: 50px;
    p {
        margin-top: 5px;
        border: none 0 #ccc;
        border-top: 2px solid red;
        border-radius: 0;
        width: 300px;
        height: 30px;
        font-weight: 600;
        font-size: 13px;
        line-height: 30px;
        color: #2F2E41;
    }
`