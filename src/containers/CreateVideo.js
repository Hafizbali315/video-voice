import { RiArrowDropDownLine } from 'react-icons/ri'
import Background2 from '../assets/backgrounds/Background4.png'

import Actor2 from '../assets/actors/Actor1.png'
import { Link, Outlet, useLocation } from 'react-router-dom'

const CreateVideo = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}

	return (
		<>
			<div className="create_video">
				<div className="main_header">
					<h1>
						Saying Hi to my customers <RiArrowDropDownLine className="icon" />
					</h1>

					<div className="buttons">
						<button>Cancel</button>
						<button>Save</button>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-7">
						<div className="image_section">
							<div className="img_container">
								<img className="background_img" src={Background2} alt="BackgroundImg" />
								<img className="actor_img" src={Actor2} alt="ActorImg" />
							</div>

							<div className="text_area">
								<textarea placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"></textarea>{' '}
								<button>Listen</button>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="setting_header">
							<ul>
								<li>
									<Link className={`link ${isActive('/create-video') || isActive('/create-video/actor')}`} to="actor">
										Actor
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/voice')}`} to="voice">
										Voice
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/alignment')}`} to="alignment">
										Alignment
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/background')}`} to="background">
										Background
									</Link>
								</li>
							</ul>
						</div>

						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateVideo
