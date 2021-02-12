import { connect, styled } from "frontity";
import facebookIcon from '../static/images/icons/facebook-icon.png';
import bandcampIcon from '../static/images/icons/bandcamp-icon.png';

const footer = () => {
	

	return (
		<>
			<CopyrightContainer>
				<Copyright>{'\u00A9'}Disco Death Bots 2021</Copyright>
			</CopyrightContainer>
			<LinkContainer>
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/discodeathbots" ><Link src={facebookIcon} /></a>
				<a target="_blank" rel="noopener noreferrer" href="https://discodeathbots.bandcamp.com/releases" ><Link src={bandcampIcon} /></a>
			</LinkContainer>
		</>
	);
};

export default footer;

const CopyrightContainer = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0;
	display: flex;
	width: 500px;
	height: 50px;
	float: left;
	justify-content: left;
	align-content: center;
`;

const Copyright = styled.p`
	font-size: 1.3em;
	padding-left: 25px;

	@media (max-width: 500px) {
	    padding-left: 20px;
	    font-size: 0.9em;
	    padding-top: 10px;
	  }
`;

const LinkContainer = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	float: right;
	flex-direction: row;
	justify-content: right;
	align-content: center;
	
`;

const Link = styled.img`
	width: 40px;
	height: auto;
	padding-right: 25px;
	transition: transform 0.2s ease-in-out;

	&:hover,
	&:focus {
	  cursor: pointer;
	  transform: scale(1.1);
	}

	@media (max-width: 500px) {
	    padding-right: 20px;
	  }

`;