import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import store from 'state/store';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    console.log(router)
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ['/signin', '/signup'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/signin',
        query: { returnUrl: path || '/' }
      });
    } else {
      setAuthorized(true);
    }
  }
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>NextJS</title>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <div className="wrapper">
          <Header />
          <Navbar />
          {authorized &&
          <Component {...pageProps} />}
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
