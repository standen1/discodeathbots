import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

/************************************************
    Event Handlers that handle page routing for 
    custom components built in the app and not
    coming from Worpress API.
*************************************************/
const eventsPageHandler = {
  pattern: "/events/",
  func: ({ route, state }) => {
    state.source.data["/events/"].isEventsPage = true;
  }
} 

const listenPageHandler = {
  pattern: "/listen/",
  func: ({ state }) => {
    state.source.data["/listen/"].isListenPage = true;
  }
}

const contactPageHandler = {
  pattern: "/contact/",
  func: ({ state }) => {
    state.source.data["/contact/"].isContactPage = true;
  }
}

/************************************************
    Main theme Setup information, functions, etc.
    Base theme is Mars Theme but I have made 
    many changes.
*************************************************/

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {              
        libraries.source.handlers.push(eventsPageHandler);
        libraries.source.handlers.push(listenPageHandler);
        libraries.source.handlers.push(contactPageHandler);
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
