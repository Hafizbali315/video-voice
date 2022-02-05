import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateVideo from './containers/CreateVideo'
import Layout from './containers/Layout'
import Actors from './containers/Actors'
import Voice from './containers/Voice'
import Alignment from './containers/Alignment'
import BackgroundSelect from './containers/BackgroundSelect'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/create-video" element={<CreateVideo />}>
							<Route index element={<Actors />} />
							<Route path="actor" element={<Actors />} />
							<Route path="voice" element={<Voice />} />
							<Route path="alignment" element={<Alignment />} />
							<Route path="background" element={<BackgroundSelect />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
