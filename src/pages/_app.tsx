import '../styles/reset.css';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { store } from '@/context/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
