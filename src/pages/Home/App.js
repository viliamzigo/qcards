import './App.css';

import Header from "../../components/Header"
import Filter from "../../components/Filter"
import Footer from "../../components/Footer"

function App() {
  return (
    <div className="App"> 
      <Header />
      <div class="content">
        <Filter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
