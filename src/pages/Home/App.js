import './App.css';

import Header from "../../components/Header"
import Question from "../../components/Question"
import Footer from "../../components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <div class="content">
        <Question />
      </div>
      <Footer />
    </div>
  );
}

export default App;
