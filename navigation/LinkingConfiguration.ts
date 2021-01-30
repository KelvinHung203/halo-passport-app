import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Welcome: {
        screens: {
          WelcomeScreen: "welcome",
        },
      },
      Blockchain: {
        screens: {
          BlockchainScreen: "blockchain",
        },
      },
      Passport: {
        screens: {
          PassportQRCodeScreen: "passport",
        },
      },
      NotFound: "*",
    },
  },
};
