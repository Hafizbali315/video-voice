import { Link } from 'react-router-dom'
import ProfileThumbnail from '../assets/ProfileThumbnail.png'
import Logo from '../assets/Logo.png'

import { FaVideo } from 'react-icons/fa'
import { BsCollectionPlay } from 'react-icons/bs'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<div className="logo">
					<Link to="/" className="img_container">
						<img src={Logo} alt="logo" />
					</Link>
				</div>

				<div className="links">
					<Link to="/create-video" className="icon_container active">
						<FaVideo className="icon" />
					</Link>

					<Link to="/saved-videos" className="icon_container">
						<BsCollectionPlay className="icon" />
					</Link>
				</div>
			</div>

			<div className="bottom">
				<Link to="/" className="profile_container">
					<div className="img_contaienr">
						<img src={ProfileThumbnail} alt="ProfileThumbnail" />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Sidebar
