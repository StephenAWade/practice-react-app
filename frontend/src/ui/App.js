import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from '../../../../pothole-finder/frontend/src/ui/Home'
import { FourOhFour } from '../../../../../../CNM DeepDive Bootcamp/git/pothole-finder/frontend/src/ui/FourOhFour'
import React from 'react'

export const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route  path='/' element={<Home />} />
				<Route path="*" element={<FourOhFour />} />
			</Routes>
		</BrowserRouter>

	</>
)
