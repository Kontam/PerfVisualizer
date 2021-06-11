import { Provider } from 'react-redux';
import { useStore } from '../src/redux/store';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
    (Story) => {
      const store = useStore();
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ];