import { BsFillPlayFill } from 'react-icons/bs'
import { BiPause } from 'react-icons/bi'
import PassedSound from '../assets/PassedSound.png'

import { useState } from 'react'

const VoiceCard = () => {
	const [playSound, setPlaySound] = useState(false)

	return (
		<div className={`voice_card ${playSound && 'active'}`}>
			<div className="play_button" onClick={() => setPlaySound(!playSound)}>
				{playSound ? <BiPause className="icon" /> : <BsFillPlayFill className="icon" />}
			</div>
			<div className="sound_name_image">
				<div className="name">Asian</div>
				<div className="img_container">
					<img src={PassedSound} alt="PassedSound" />
				</div>
			</div>
		</div>
	)
}

export default VoiceCard
