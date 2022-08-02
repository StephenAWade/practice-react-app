import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { Navigation } from './Navigation'
import React from 'react'
import { AboutUs } from './AboutUs'
import "./App.css"

export const App = () => (
  <>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<FourOhFour/>}/>
        <Route exact path="/about" component={AboutUs}/>
      </Routes>
    </BrowserRouter>
  </>
)