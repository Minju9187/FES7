import reset from "styled-reset";
import styles from "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Modal from "./components/Modal"
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
      font-family: 'GmarketSansMedium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    span {
      font-size: 12px;
    }

    p{
      font-family: "GmarketSansMedium";
    }

    a{
        text-decoration : none;
        color : inherit;
    }
    
    input{
        border : none;
    }

    button{
        border : none;
        cursor : pointer;
    }

    *{
      box-sizing: border-box;
      font-size: 24px;
      font-family: "GmarketSansMedium";
      margin : 0px;
      padding : 0px;
    }
`;

function App() {
  return (
      <div className = "article">
        <GlobalStyle />
        <Header/>
        <Main/>
        <Footer/>
        <Modal/>
      </div>
  );
}
export default App;
