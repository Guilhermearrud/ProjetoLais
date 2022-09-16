import { Header } from './../../components/Header/Header';
import { useState, useEffect } from 'react';
import { BASE_URL } from './../../contants/UrlApi';
import axios from "axios"
import { DadosGeraisMainBox, BorderStyle, TransparenciaTextStyle } from './style';

export const TransparenciaPage = () => {

    const [transparencia, setTransparencia] = useState('')

    useEffect(() => {

        const API = () => {
            axios.get(`${BASE_URL}/transparecia`)
                .then((res) => { setTransparencia([res.data]) })
                .catch((er) => console.log(er))
        }

        API()

    }, [])

    const transparenciaList = transparencia && transparencia.map((transparencia) => {
        return (
            <div>
                <div>

                    <BorderStyle>
                        <div>
                            <h1> Dados Gerais</h1>
                        </div>

                        <DadosGeraisMainBox>
                            <div>
                                <div>
                                    <p> Total de usuários registrados </p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.usuarios_registrados}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p> Inscrições realizadas </p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.incricoes_realizadas}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p> Cursos Ativos</p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.cursos_ativos}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p> Direito à Certificação </p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.direito_certificacao}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p> Investimento médio por curso </p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.investimento_medio_curso}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p> Investimento médio por aluno </p>
                                </div>
                                <div>
                                    {transparencia.dados_gerais.investimento_medio_aluno}
                                </div>
                            </div>
                        </DadosGeraisMainBox>
                    </BorderStyle>
                </div>

                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />

            <div>
                <TransparenciaTextStyle>
                    <h1> Transparência </h1>
                </TransparenciaTextStyle>

                <div>
                    {transparenciaList}
                </div>
            </div>
        </div>
    )
}