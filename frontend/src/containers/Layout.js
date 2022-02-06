import { Outlet } from 'react-router-dom'
import Sidebar from './../components/Sidebar'

const Layout = () => {
	return (
		<>
			<div className="layout">
				<div className="row">
					<div className="col col-lg-1">
						<Sidebar />
					</div>
					<div className="col col-lg-11">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout
