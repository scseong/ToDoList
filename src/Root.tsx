import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const Root = () => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Main />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default Root;
