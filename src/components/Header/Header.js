import AvaSusLogo from '../../assets/AvaSusLogo.png'
import lupa from '../../assets/lupa.png'
import { HeaderBox, LoginButton, SignUpButton, HeaderOptions, AvasusLogo, InputHeader, PHover } from './style';
import { useNavigate } from 'react-router-dom';
import { goToHome, goToParceiros, goToShowCursos, goToTransparencia } from './../../router/Coordinator';

export const Header = () => {

    const navigate = useNavigate()

    return (
        <HeaderBox>

            <HeaderOptions>
                <AvasusLogo src={AvaSusLogo} alt="AvaSus Logo" />
                <PHover onClick={() => goToHome(navigate)}> Início </PHover>
                <p> Sobre Nós </p>
                <PHover onClick={() => goToShowCursos(navigate)}> Cursos </PHover>
                <PHover onClick={() => goToParceiros(navigate)}> Parceiros </PHover>
                <PHover onClick={() => goToTransparencia(navigate)}> Transparência </PHover>
                <p> Contato </p>
                <InputHeader src={lupa} />
                <LoginButton> Entrar </LoginButton>
                <SignUpButton> Cadastrar </SignUpButton>
            </HeaderOptions>

        </HeaderBox>
    )
}