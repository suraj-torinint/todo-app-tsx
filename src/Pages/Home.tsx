import React from "react";
import Todos from "../Components/Todos";

const Home = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="mx-5">
                    <Todos />
                </div>
            </div>
        </>
    );
};

export default Home;
