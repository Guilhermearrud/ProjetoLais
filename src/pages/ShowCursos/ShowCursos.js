import { CursoContainer, CursoBoxContainer, CursoOptionsContainer, AboutBox, PageMainBox, MainCursoBox, ImgDiv, FiltrosStily, SelectPage, ModulosTextTop, TextIcone, ButtonDiv, DivBoxTitulo, DivBoxParceiro } from './style';
import pessoas from '../../assets/pessoas.png'
import relogio from '../../assets/relogio.png'
import { Header } from './../../components/Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL } from './../../contants/UrlApi';
import axios from 'axios';
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'
import { goToCurso } from './../../router/Coordinator';
import { useNavigate } from 'react-router-dom';

export const ShowCursos = () => {

    const [page, setPage] = useState(1)
    const [cursos, setCursos] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        const API = () => {
            axios.get(`${BASE_URL}/cursos?_page=${page}&_limit=6`)
                .then((res) => { setCursos(res.data) })
                .catch((er) => console.log(er))
        }

        API()

    }, [page])

    const onClickCardCursoEspecifico = (id) => {
        goToCurso(navigate, id)
    }

    const listaCursos = cursos.map((curso) => {
        return (
            <CursoContainer key={curso.id}>

                <ImgDiv>
                    <img src={curso.capa}></img>
                </ImgDiv>

                <CursoBoxContainer>

                    <DivBoxTitulo>
                        <h1> {curso.titulo} </h1>
                    </DivBoxTitulo>

                    <DivBoxParceiro>
                        <p> {curso.parceiros} </p>
                    </DivBoxParceiro>

                    <CursoOptionsContainer>
                        <TextIcone>
                            <img src={pessoas} alt='pessoas' />
                            <p> {curso.matriculados} </p>
                        </TextIcone>
                        <TextIcone>
                            <img src={relogio} alt='relogio' />
                            <p> {curso.duracao} </p>
                        </TextIcone>
                    </CursoOptionsContainer>

                    <AboutBox>
                        <p> {curso.sobre}</p>
                    </AboutBox>

                    <ButtonDiv>
                        <button onClick={() => onClickCardCursoEspecifico(curso.id)}> ver curso </button>
                    </ButtonDiv>

                </CursoBoxContainer>

            </CursoContainer>
        )
    })


    return (
        <PageMainBox>
            <Header />

            <ModulosTextTop>
                <h1> Módulos Educacionais</h1>
            </ModulosTextTop>

            <FiltrosStily>

                <p>Covid 19</p>
                <p>Sífilis e outras Ist's</p>
                <p>Preceptoria</p>
                <p>Doenças raras</p>
                <p>Web Palestras</p>
                <p>Sistemas prisional</p>
                <p>OPAS</p>

            </FiltrosStily>

            <MainCursoBox>
                {listaCursos}
            </MainCursoBox>

            <SelectPage>
                <img src={LeftArrow} onClick={() => { if (page > 0) setPage(page - 1) }}></img>

                {Array.from(Array(10)).map((_, idx) => {
                    return (
                        <div onClick={() => setPage(idx + 1)}>
                            {idx + 1}
                        </div>
                    )
                })}

                <img src={RightArrow} onClick={() => setPage(page + 1)}></img>
            </SelectPage>
        </PageMainBox>
    )
}