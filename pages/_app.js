import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./../components/Navigation";
import Footer from "../components/Footer";
import { ThemeContextProvider } from "../contexts/themeContext";
import ReactDOM from "react-dom";
import {store, persistor} from "../store"
import {Provider} from "react-redux"
import withRedux from 'next-redux-wrapper';
// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {PersistGate} from "redux-persist/integration/react"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}> 
    <React.Fragment>
      <GlobalStyle />
      <ThemeContextProvider>
        <RootContainer>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </RootContainer>
      </ThemeContextProvider>
    </React.Fragment>
    </PersistGate>
  </Provider>
  );
};
// const App = ({ Component, pageProps }) => {
//   return (

//     <React.Fragment>
//       <GlobalStyle />
//       <ThemeContextProvider>
//         <RootContainer>
//           <Navigation />
//           <Component {...pageProps} />
//           <Footer />
//         </RootContainer>
//       </ThemeContextProvider>
//     </React.Fragment>
//   );
// };
// const MyApp = () => {
//   return(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
//   )
// }
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'DM Sans', sans-serif;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;

const RootContainer = styled.div`
  background-color: ${({ theme }) => theme.rootBackground};
  min-height: 100vh;
`;

// makeStore function that returns a new store for every request
const makeStore = () => store;
// const wrapper = createWrapper(makeStore, {debug: true});
// withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(App);
// export default App;
// export default App;
