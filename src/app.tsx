import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './global-styles'
import BacheloretteQuiz from '@components/BacheloretteQuiz'

import './fonts.css';

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <BacheloretteQuiz />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
