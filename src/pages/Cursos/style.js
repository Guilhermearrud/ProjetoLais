import styled from "styled-components";
import planoFundo from '../../assets/BackGroundCurso.png'

export const TituloStyle = styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    color: #F6303F;
    
`

export const HeaderCursoDetails = styled.div`
    width: 100%;
    height: 270px;
    background: url(${planoFundo});
`

export const CursoDetailsInfo = styled.div`
justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

export const DetailsMainBox = styled.div`
    margin-inline-end: 200px;
    margin-inline-start: 200px;
`

export const Icone = styled.img`
    width: 25px;
    height: 25px;
`

export const ImageCursoStyle = styled.div`
    width: 200px;

    img {
        width: 100%;
    }
`

export const SubTitle = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #2F2E41;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const CreditosBannerBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
`

export const BannerText = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 50px;
    margin-inline-end: 200px;
    margin-inline-start: 200px;
    
    >div {
        
    }

  h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #FFFFFF;
  }

  P {
    color: white;
  }
`

export const BannerHeaderText = styled.p`
position: absolute;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #E0E0E0;
    top: -60%;
`

export const BannerParceirosText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #FFFFFF;
`

export const CreditosBanner = styled.img`
    width: 170px;
    height: 125px;
`