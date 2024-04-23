import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import router from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
