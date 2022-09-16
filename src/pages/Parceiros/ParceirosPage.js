import { Header } from './../../components/Header/Header';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL } from './../../contants/UrlApi';
import { ParceiroImg, ParticipantesBoxList, ParceiroText, ParceirosText, SelectPage, ParceirosBox } from './style';
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'

export const ParceirosPage = () => {

    const [parceiros, setParceiros] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {

        const API = () => {
            axios.get(`${BASE_URL}/parceiros?_page=${page}&_limit=6`)
            .then((res) => {setParceiros(res.data)})
            .catch((er) => console.log(er))
        }

        API()

    }, [page])

    const listaParticipantes = parceiros.slice(0,6).map((parceiros) => {
        return (
            <ParceirosBox>
                <ParceiroImg>
                    <img src={parceiros.capa} alt='Imagem logo'></img>
                </ParceiroImg>

                <ParceiroText>
                    <p> {parceiros.titulo} </p>
                </ParceiroText>
            </ParceirosBox>
        )
    })

    return (
        <div>
            <Header />

            <ParceirosText>
                <h1> Nossos Parceiros </h1>
            </ParceirosText>

            <ParticipantesBoxList>
             {listaParticipantes}
            </ParticipantesBoxList>

            <SelectPage>
                <img src={LeftArrow} onClick={() => {if(page>0) setPage(page-1)} }></img>

                {Array.from(Array(10)).map((_,idx) => {
                    return(
                        <div onClick={() => setPage(idx+1)}>
                            {idx+1}
                        </div>
                    )
                })} 
                
               <img src={RightArrow} onClick={() => setPage(page+1)}></img>
            </SelectPage>

        </div>
    )
}