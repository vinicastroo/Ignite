import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from './Router'
import { IssuesProvider } from "./contexts/IssueContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
