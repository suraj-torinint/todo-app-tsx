import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CreateTodo from "./Pages/CreateTodo";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import ErrorBoundaries from "./Components/ErrorBoundaries";

function App() {
    return (
        <>
            <ErrorBoundaries>
                <Header />
                <Switch>
                    <Route exact path={"/home"}>
                        <Home />
                    </Route>
                    <Route exact path={"/"}>
                        <Home />
                    </Route>
                    <Route path={"/create-todo"}>
                        <CreateTodo />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </ErrorBoundaries>
        </>
    );
}

export default App;
