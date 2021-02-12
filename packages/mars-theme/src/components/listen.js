import { connect, styled, Head } from "frontity";

const listen = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Listen to Disco Death Bots music on all major streaming platforms." />
			</Head>

			<Container>
				<H1>Listen</H1>
				<A target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/4JxNYEq59yxw9hkH7TgiAC?si=ZKwOm-DAS-aDmZIuAyddTQ">
					Spotify</A>
				<A target="_blank" rel="noopener noreferrer" href="https://discodeathbots.bandcamp.com/releases">
					Bandcamp</A>
				<A target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/artist/disco-death-bots/1077470069">
					Apple Music</A>
				<A target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Attack-Disco-Death-Bots-Explicit/dp/B01AXXXH0S/ref=sr_1_1?dchild=1&keywords=Disco+Death+Bots&qid=1612984444&s=dmusic&search-type=ss&sr=1-1">
					Amazon Music</A>
			</Container>
		</>
	);
}

export default listen;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	max-width: 800px;
	padding: 10px;
	margin: 0;
`;

const A = styled.a`
	font-size: 1.1em;
	font-weight: 600;
	padding: 15px 0;
	transition: color 0.2s ease-in-out;

	&:hover,
	 &:focus {
	  color: #8B008B;
	  cursor: pointer;
	}
`;

const H1 = styled.h1`
	text-align: center;
`;