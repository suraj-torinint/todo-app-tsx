import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateTodo2 from "./Pages/CreateTodo2";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import ErrorBoundaries from "./Components/ErrorBoundaries";
import React from "react";

function App() {
    return (
        <>
            <ErrorBoundaries>
                <Header />
                <Routes>
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/create-todo"} element={<CreateTodo2 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ErrorBoundaries>
        </>
    );
}

export default App;
