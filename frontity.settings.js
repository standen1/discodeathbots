const settings = {
  "name": "disco-death-bots",
  "state": {
    "frontity": {
      "url": "https://discodeathbots.com/",
      "title": "Disco Death Bots"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Events",
              "/events/"
            ],
            [
              "Listen",
              "/listen/"
            ],
            [
              "Store",
              "https://discodeathbots.bandcamp.com/releases"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/discodeathbots.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
