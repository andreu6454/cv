import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
