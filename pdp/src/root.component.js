import React from 'react'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import PdpContainer from './components/pdpView'
import PdpProvider from './pdp-provider'
import { createTheme, generateClassName } from './theme'

export default function Root(props) {
  const [darkMode, setDarkMode] = React.useState(false)
  const theme = React.useMemo(() => createTheme(darkMode), [darkMode])

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side-pdp')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    // window.addEventListener('mode-event', handleThemeEvent)
    // return () => {
    //   window.removeEventListener('mode-event', handleThemeEvent)
    // }
  }, [])

  // const handleThemeEvent = e => {
  //   if (typeof e.detail !== 'undefined') {
  //     setDarkMode(e.detail)
  //   }
  // }

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <PdpProvider product={props.product}>
          <PdpContainer />
        </PdpProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}
