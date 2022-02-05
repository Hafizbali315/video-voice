import BackgroundSelectCard from '../components/BackgroundSelectCard'
import Background1 from '../assets/backgrounds/Background1.png'

const BackgroundSelect = () => {
	return (
		<div className="background_select">
			<div className="row">
				<div className="col-lg-4" style={{ paddingLeft: '0' }}>
					<BackgroundSelectCard image={Background1} name="Office" />
				</div>
			</div>
		</div>
	)
}

export default BackgroundSelect
