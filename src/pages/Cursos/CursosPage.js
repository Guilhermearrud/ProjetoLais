import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './../../contants/UrlApi';
import pessoas from '../../assets/pessoas.png'
import calendario from '../../assets/calendario.png'
import relogio from '../../assets/relogio.png'
import { TituloStyle, CursoDetailsInfo, Icone, ImageCursoStyle, HeaderCursoDetails, CreditosBannerBox, DetailsMainBox, SubTitle, BannerText, BannerParceirosText } from './style';
import { Header } from './../../components/Header/Header';


export const CursosPage = () => {

    const [cursoDetails, setCursoDetails] = useState({})
    const params = useParams()

    const cursoId = params.id - 1

    const getAPICursoDetails = () => {
        axios.get(`${BASE_URL}/cursos`)
            .then((res) => {
                setCursoDetails(res.data[cursoId])
            })
            .catch((er) => {
                console.log(er)
            })
    }

    useEffect(() => {
        getAPICursoDetails()
    }, [])

    const creditos = cursoDetails.creditos && cursoDetails.creditos.map((curso) => {
        return (
            <ImageCursoStyle>
                <img src={curso.capa}></img>
            </ImageCursoStyle>
        )
    })



    return (
        <div>
            <Header />

            <HeaderCursoDetails>
                <BannerText>
                    <p> Início / Cursos / Módulos / {cursoDetails.titulo} </p>
                    <div>
                        <h1>{cursoDetails.titulo}</h1>
                        <BannerParceirosText>{cursoDetails.parceiros}</BannerParceirosText>
                    </div>
                </BannerText>
            </HeaderCursoDetails>

            <DetailsMainBox>
                <TituloStyle> Informações Gerais do Curso</TituloStyle>

                <CursoDetailsInfo>
                    <Icone src={relogio} alt='relogio' />
                    <p> {cursoDetails.duracao}oras</p>
                    <Icone src={calendario} alt='calendario' />
                    <p> Desde {cursoDetails.criado_em} </p>
                    <Icone src={pessoas} alt='pessoas' />
                    <p> {cursoDetails.matriculados} alunos matriculados </p>
                    <p> {cursoDetails.avaliacao} </p>
                    <p> ({cursoDetails.numero_avaliacoes} avaliações)</p>
                </CursoDetailsInfo>

                <div>
                    <TituloStyle> Sobre o Curso </TituloStyle>
                    <div>
                        {cursoDetails.sobre}
                    </div>
                </div>

                <div>
                    <TituloStyle> Objetivos </TituloStyle>
                    <div>
                        <SubTitle> Objetivos </SubTitle>
                        <p> {cursoDetails.objetivo_geral} </p>
                    </div>
                </div>

                <div>
                    <SubTitle> Objetivos Específicos </SubTitle>
                    {cursoDetails.objetivo_especifico}
                </div>

                <div>
                    <TituloStyle> Recursos Educacionais</TituloStyle>
                    <p>  Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos. </p>
                </div>

                <div>
                    <TituloStyle> Créditos </TituloStyle>
                    <CreditosBannerBox>
                        {creditos}
                    </CreditosBannerBox>
                </div>
            </DetailsMainBox>
        </div>
    )
}