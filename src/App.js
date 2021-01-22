import React from 'react'
import './App.css';
import Create from './components/Create';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import Pokemon from "./components/Pokemon";
import List from "./components/List";

function App() {


  return (
    <div className="App">
        <Router>
            <div className="header">
                <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png" alt=""/></Link>
                <div className="nav">
                    <Link to="/">Главная</Link>
                    <Link to="/list">Список</Link>
                    <Link to="/">Контакты</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/" component={Create} />
                <Route path="/list" component={List} />
                <Route path="/:id" component={Pokemon} />
            </Switch>
        </Router>
    </div>
  );
}
export default App;
