import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favoritev from '../images/gem.jpg';

const Favorite = ({ id }) => {
	return (
		<div className="favContainer" id={id}>
			<h2>Explore Hidden Gem of the world!</h2>

			<div className="favContent">
				<Slide left>
					<img src={favoritev} className="favImage" alt="Veg Platter" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
						Poo, or Pooh, also known as Spuwa (altitude 2,662 metres or 8,736 ft), is a small town in Kinnaur district, Himachal Pradesh, India. The approximate population given within a 7 km radius of the town is 1,192
						</p>
					</div>
				</Slide>
			</div>
		</div>

	);
};

export default Favorite;
