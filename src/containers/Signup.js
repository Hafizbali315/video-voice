import { Link } from 'react-router-dom'

const Signup = () => {
	return (
		<div className="auth_pages">
			<h1>Create an account</h1>

			<div className="auth_form">
				<div className="input_container">
					<label>Full name</label>
					<input type="text" placeholder="Enter Your Name" />
				</div>

				<div className="input_container">
					<label>Email Address</label>
					<input type="email" placeholder="Enter Your Email" />
				</div>

				<div className="input_container">
					<div className="d-flex justify-content-between align-items-center">
						<label>Password</label>
					</div>
					<input type="password" placeholder="Enter Your Password" />
				</div>

				<div className="button_section">
					<button>Signup</button>
				</div>

				<div className="switch_section">
					Already user?{' '}
					<Link to="/signin" className="link">
						Signin
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Signup
