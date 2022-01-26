import './App.css';
import { Header } from './components/Header';
import { Photos } from './components/Photos';
import { Cart } from './components/Cart';
import { Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>

    </div>
  );
}
export default App;
