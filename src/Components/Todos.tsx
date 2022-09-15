// import axios, { AxiosResponse } from "axios";
// import React, { useEffect, useState } from "react";
import useAxios from "../Data/useAxios";

const Todos = () => {
    // console.log(process.env.REACT_APP_BASE_URL);
    const { response, error, loading } = useAxios({
        method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}${"/todos"}`,
    });

    return (
        <>
            {loading && (
                <>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
            )}
            {error && (
                <>
                    <br />
                    <br />
                    <div className="my-5 container">
                        <div className="text-content">
                            <span className="text-danger fs-1">{error as any}</span>
                        </div>
                    </div>
                </>
            )}
            {!loading &&
                response?.slice(0, 10).map((todo, i) => (
                    <div className="card mx-5 my-2" key={i}>
                        <div className="card-body">
                            <div className="">
                                <p className="card-title h2">{todo.title}</p>
                                <p className="card-subtitle mb-2 text-muted">Completed : {todo.completed === true ? "yes" : "no"}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Todos;
