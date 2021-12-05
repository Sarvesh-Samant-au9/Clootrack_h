import { Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import EditPage from "./Pages/EditPage";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/edit" exact={true} component={EditPage} />
      </Switch>
    </div>
  );
}
