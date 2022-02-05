import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateVideo from './containers/CreateVideo'
import Layout from './containers/Layout'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<CreateVideo />} />
						<Route path="/create-video" element={<CreateVideo />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
