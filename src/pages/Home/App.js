import './App.css';

import Header from "../../components/Header"
import FilterContainer from "../../containers/FilterContainer"
import QuestionContainer from "../../containers/QuestionContainer"
import Footer from "../../components/Footer"

function App() {
  return (
    <div className="App"> 
      <Header />
      <div class="content">
        <FilterContainer />
        <QuestionContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
