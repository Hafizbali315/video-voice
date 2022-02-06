import { Link } from 'react-router-dom'

const Signin = () => {
	return (
		<div className="auth_pages">
			<h1>Sign In</h1>

			<div className="auth_form">
				<div className="input_container">
					<label>Email Address</label>
					<input type="email" placeholder="Enter Your Email" />
				</div>

				<div className="input_container">
					<div className="d-flex justify-content-between align-items-center">
						<label>Password</label>
						<span>Forget?</span>
					</div>
					<input type="password" placeholder="Enter Your Password" />
				</div>

				<div className="button_section">
					<button>Login</button>
				</div>

				<div className="switch_section">
					New here?{' '}
					<Link to="/signup" className="link">
						Signup
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Signin
