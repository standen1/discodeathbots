import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from './footer';
import Events from './events';
import Listen from './listen';
import Contact from './contact';
import Logo from '../static/images/logo/death-bot_large-opaque.png';

//Animated Background
import AnimatedBg from "react-animated-bg";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
    <AnimatedBg
      colors={["#f887ff", "#ff9760", "#6a7e6a", "#4cb489", "#ff00a0", "#65dc98"]}
      duration={4}
      delay={1}
      timingFunction="linear"
      randomMode
    >

    <Wrapper>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content="Disco Death Bots are an alternative, electro rock band based out of San Diego, California." />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&display=swap" rel="stylesheet" />

      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      
      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      
      <Image src={Logo} />
      


        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
            <Events when={data.isEventsPage} />
            <Listen when={data.isListenPage} />
            <Contact when={data.isContactPage} />
          </Switch>
        </Main>

      
      
      

      {/*Footer*/}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
    </AnimatedBg>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    color: #0c112b;
    font-family: "Orbitron", "Roboto",
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    
  }

  p {
    font-size: 1.1em;
    font-weight: 500;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  root {
    padding: 0;
    margin: 0;
  }

  body::-webkit-scrollbar {
    width: 1em;
  }
  body::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
  }
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  max-width: 600px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  position: relative;
  display: block;
  width: 400px;
  height: auto;
  right: 0
  left: 0;
  margin: 40px auto 0;
  z-index: 5;
  opacity: 0.5;
  padding: 0;
  clear: none;
`;

const HeadContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  text-align: center;
  z-index: 100;
`;

const Main = styled.div`
  position: absolute;
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 800px;
  padding: 25px 0;
  margin: auto;
  z-index: 50;
  clear: none;
  @media (max-width: 500px) {
    width: 100%;
    padding: 25px 10px;
  }
`;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100;
`;
