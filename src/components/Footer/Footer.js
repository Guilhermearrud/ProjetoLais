import { FooterMainBox, ContactBox, RealizacaoBox, LaisLogo, UfrnLogo, RealizacaoStyled, LogoDivBox, FlexFooter, Options, SocialMediaIcons, TextDesignFooter, FooterTextEnd } from "./style";
import LAISLogo from '../../assets/LAISLogo.png'
import UFRNLogo from '../../assets/UFRNLogo.png'
import FaceBookLogo from '../../assets/FaceBookLogo.png'
import InstagramLogo from '../../assets/InstagramLogo.png'
import TwitterLogo from '../../assets/TwitterLogo.png'

export const Footer = () => {

    return (
        <FooterMainBox>
            <RealizacaoBox>
                <RealizacaoStyled>  
                    <p> Realização </p>
                </RealizacaoStyled>
                
                <LogoDivBox>
                    <LaisLogo src={LAISLogo} alt='LAIS Logo' />
                    <UfrnLogo src={UFRNLogo} alt='UFRN Logo' />
                </LogoDivBox>
            </RealizacaoBox>

            <ContactBox>
                <FlexFooter>
                    <Options>
                        <img src={LAISLogo} alt='LAIS Logo' />
                        <p> Laboratório de Inovação <br></br>
                            Tecnológica em Saúde. </p>
                    </Options>
                    <Options>
                        <h1> Links Úteis </h1>
                        <TextDesignFooter>
                            <p> Início </p>
                            <p> Sobre Nós </p>
                            <p> Módulos </p>
                            <p> Parceiros </p>
                            <p> Transparência </p>
                        </TextDesignFooter>
                    </Options>
                    <Options>
                        <h1> Redes Sociais </h1>
                        <div>
                            <SocialMediaIcons src={FaceBookLogo} alt="FaceBook Logo" />
                            <SocialMediaIcons src={InstagramLogo} alt="Twitter Logo" />
                            <SocialMediaIcons src={TwitterLogo} alt="Instagram Logo" />
                        </div>
                    </Options>
                </FlexFooter>

                <div>
                    <FooterTextEnd> 2022 © LAIS (HUOL). Todos os direitos reservados </FooterTextEnd>
                </div>

            </ContactBox>
        </FooterMainBox >
    )
}