import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Welcome: {
            screens: {
              WelcomeScreen: 'welcome',
            },
          },
          Blockchain: {
            screens: {
              BlockchainScreen: 'blockchain',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
