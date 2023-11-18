import Logo from "./Componets/Logo/index";
import Header from "./Componets/Header/index";
import Count from "./Componets/Count/index";
import Paragraph from "./Componets/ParaGraph/index";
import Footer from "./Componets/Footer/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Logo.propTypes가 number로선언되있어서 아래와같이 문자열로 props을 넘기면
     console을 열어보면 error가 발생한걸 알수있음  */}
      <Logo size="150px" />
      <Logo />
      <Logo size={100} />
      <Header />
      <div className="card">
        <Count />
        <Paragraph />
      </div>
      <Footer />
    </div>
  );
}

export default App;
