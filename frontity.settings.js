const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Pako Herrera",
      "description": "Software Engineer, javascript enthusiast. I blog about tech and quote books."
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
              "About me",
              "/about-me"
            ],
            [
              "Get in touch",
              "/contact"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/pakman198.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
