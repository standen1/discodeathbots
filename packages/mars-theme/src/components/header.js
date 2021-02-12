import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import deathBotLogo from '../static/images/logo/death-bot-small-white.png';

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Image src={deathBotLogo} />
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Image = styled.img`
  width: 75px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 600;
  padding-top: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
