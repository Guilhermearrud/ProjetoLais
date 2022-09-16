import Router from '../src/router/Router'
import GlobalStyle from "./global/GlobalStyle"
import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import GlobalState from './global/GlobalState';

export const App = () => {

  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
      <Footer />
    </GlobalState>

  )
}
