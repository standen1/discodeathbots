import { connect, styled, Head } from "frontity";

const contact = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Contact Disco Death Bots for any inquiries.  Disco Death Bots are based out of San Diego, California." />
			</Head>

			<Container>
				<H1>Contact</H1>
				<p>For any inquiries, please reach out via email.</p>
				<A target="_blank" rel="noopener noreferrer" href="mailto:discodeathbots@gmail.com">discodeathbots@gmail.com</A>
			</Container>
		</>
	);
}

export default contact;

const Container = styled.div`
	max-width: 800px;
	margin: 0;
	padding: 10px;
	list-style: none;
`;

const A = styled.a`
	font-size: 1.1em;
	font-weight: 600;
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