import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateVideo from './containers/CreateVideo'
import Layout from './containers/Layout'
import Actors from './containers/Actors'
import Voice from './containers/Voice'
import Alignment from './containers/Alignment'
import BackgroundSelect from './containers/BackgroundSelect'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import SavedVideos from './containers/SavedVideos'
import MyAccount from './containers/MyAccount'
import Profile from './containers/Profile'
import MyPlan from './containers/MyPlan'
import Billing from './containers/Billing'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="signin" element={<Signin />} />
						<Route path="signup" element={<Signup />} />
					</Route>

					<Route element={<Layout />}>
						<Route path="/create-video" element={<CreateVideo />}>
							<Route index element={<Actors />} />
							<Route path="actor" element={<Actors />} />
							<Route path="voice" element={<Voice />} />
							<Route path="alignment" element={<Alignment />} />
							<Route path="background" element={<BackgroundSelect />} />
						</Route>

						<Route path="/saved-videos" element={<SavedVideos />} />

						<Route path="/my-account" element={<MyAccount />}>
							<Route index element={<Profile />} />
							<Route path="profile" element={<Profile />} />
							<Route path="my-plan" element={<MyPlan />} />
							<Route path="billing" element={<Billing />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
