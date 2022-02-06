import React from 'react'
import Actor1 from '../assets/actors/Actor3.png'

const Actors = () => {
	return (
		<div className="actors">
			<div className="row gx-5">
				<div className="col-lg-4 single_actor active">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div className="col-lg-4 single_actor">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div className="col-lg-4 single_actor">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div className="col-lg-4 single_actor">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div className="col-lg-4 single_actor">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div className="col-lg-4 single_actor">
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
			</div>
		</div>
	)
}

export default Actors
