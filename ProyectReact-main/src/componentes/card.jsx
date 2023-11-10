import { useState } from 'react';
import card from "../css/card.css"

function Card(props) {
	const [likes, setLikes] = useState(0);
	return (
		<div className="card">
			<h2 className='Titulo'>{props.title}</h2>
			<div className='Descripcion'>
				<p>{props.description}</p>
			</div>
				<img src={props.imageUrl} className='card-img' alt="Card" />
			<h4  >Likes: {likes}</h4>
			<button  onClick={() => setLikes(likes + 1)} >
				Like
			</button>
			<button  onClick={() => props.eliminarCarta(props.id)} >
				Eliminar
			</button>
		</div>
	);
}

export default Card;