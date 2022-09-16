import axios from "axios"
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToCurso, goToParceiros, goToShowCursos } from "../../router/Coordinator";
import { BASE_URL } from './../../contants/UrlApi';
import { MenuCursos, CursoContainer, CursoTituloContainer, CursoBoxContainer, SliderBox, CursoOptionsContainer, ShowMoreButton, ModuleButton, Icone, IconeCurso, ParceirosBox, ParceirosMainBox, BoxModulo, CursosBox } from './style';
import GlobalStateContext from './../../global/GlobalStateContext';
import pessoas from '../../assets/pessoas.png'
import slide from '../../assets/slide1.jpg'
import relogio from '../../assets/relogio.png'
import { Header } from './../../components/Header/Header';

export const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)
    const { cursos } = states
    const { setCursos } = setters

    const navigate = useNavigate()

    const getAPICurso = () => {
        axios.get(`${BASE_URL}/cursos`)
            .then((res) => {
                setCursos(res.data)
            })
            .catch((er) => {
                console.log(er)
            })
    }

    const onClickCardCursoEspecifico = (id) => {
        goToCurso(navigate, id)
    }

    const onClickCardCurso = (id) => {
        goToShowCursos(navigate)
    }

    useEffect(() => {
        getAPICurso()
    }, [])

    const listaCursos = cursos.slice(0, 3).map((curso) => {
        return (
            <CursoContainer key={curso.id}>
                <IconeCurso onClick={() => onClickCardCursoEspecifico(curso.id)} src={curso.capa} alt='capa do curso' />

                <CursoBoxContainer>
                    <CursoTituloContainer>
                        <h1> {curso.titulo} </h1>
                        <p> {curso.parceiros} </p>
                    </CursoTituloContainer>

                    <CursoOptionsContainer>

                        <Icone src={pessoas} alt='pessoas' />
                        <p> {curso.matriculados} </p>
                        <Icone src={relogio} alt='relogio' />
                        <p> {curso.duracao} </p>
                        <p> estrelas </p>
                        <ModuleButton onClick={() => onClickCardCursoEspecifico(curso.id)}> <p> Ver módulo </p> </ModuleButton>

                    </CursoOptionsContainer>

                </CursoBoxContainer>

            </CursoContainer>
        )
    })

    return (
        
        <div>
            <Header />

            <SliderBox>
                <img src={slide}></img>
            </SliderBox>

            <BoxModulo>
                <h1> Módulos Educacionais </h1>

                <MenuCursos>
                    <p> Mais populares </p>
                    <p> Mais bem avaliados </p>
                    <p> Mais recentes </p>
                </MenuCursos>
            </BoxModulo>

            <CursosBox>
                <div>
                    {listaCursos}
                </div>
                <ShowMoreButton onClick={() => onClickCardCurso(navigate)}> <p> Ver Mais </p> </ShowMoreButton>
            </CursosBox>

            <ParceirosMainBox>
                <h1 onClick={() => goToParceiros(navigate)}> Parceiros </h1>
                <ParceirosBox>
                    <div>
                        <p> Governo do RN </p>
                        <p> Governo do Estado do Rio Grande do Norte.</p>
                    </div>
                    <div>
                        <p> SESAP </p>
                        <p> Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
                    </div>
                    <div>
                        <p> UFRN </p>
                        <p> Universidade Federal do Rio Grande do Norte. </p>
                    </div>
                    <div>
                        <p> HUOL </p>
                        <p> Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).</p>
                    </div>
                </ParceirosBox>
            </ParceirosMainBox>
        </div>
    )
}