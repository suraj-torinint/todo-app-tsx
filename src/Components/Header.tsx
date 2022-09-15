import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container my-3">
                    <div className="justify-content-center">
                        <Link to={"/home"} className="text-decoration-none">
                        <span className="navbar-brand mb-0 h1 fs-2 ms-5">Todo App</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <Link to={"/create-todo"}>
                            <i className="bi bi-plus-lg btn btn-outline-success me-5"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
