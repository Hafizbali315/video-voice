import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateVideo from './containers/CreateVideo'
import Layout from './containers/Layout'
import Actors from './containers/Actors'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/create-video" element={<CreateVideo />}>
							<Route index element={<Actors />} />
							<Route path="actor" element={<Actors />} />
							<Route path="voice" element={<Actors />} />
							<Route path="alignment" element={<Actors />} />
							<Route path="background" element={<Actors />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
