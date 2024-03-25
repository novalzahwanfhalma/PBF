import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from '../redux/store/store';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
   return (
     <Provider store={store}>
       <Component {...pageProps} />
     </Provider>
   );
}

export default MyApp;