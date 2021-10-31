import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux'
import Header from "../components/Header"
import FilterContainer from "./FilterContainer"
import QuestionContainer from "./QuestionContainer"
import Footer from "../components/Footer"
import About from "../components/About"


export class App extends Component {
  render() {
    const { activeFilter } = this.props
    let content;
    if (activeFilter === null) {
      content = <div><FilterContainer /><About /></div>;
    } else {
      content = <QuestionContainer />;
    }
    return (
      <div className="App"> 
        <Header />
        <div className="content">
          {content}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeFilter: state.questions.category
})

export default connect(mapStateToProps)(App)

