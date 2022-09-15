import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TodoData from "../Data/ApiService";
// import { todoType } from "../Data/useAxios";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const history = useHistory();

    const handletitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(event.target.value);
    };

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(title);
        console.log(body);
        let newData = {
            id: 24,
            title: title,
            body: body,
        };

        TodoData.createTodo(newData);
        history.push("/")
    };

    return (
        <>
            <div className="container my-3" onSubmit={formHandler}>
                <span className="fs-3">Create a New Todo</span>
                <form action="" className="col-sm-5">
                    <div className="my-3">
                        <label htmlFor="title">Title</label>
                        <input onChange={handletitle} value={title} className="form-control " name="title" id="title" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="title">Body</label>
                        <textarea onChange={handleBody} value={body} className="form-control " name="body" id="body" rows={5} />
                    </div>
                    <button type="submit" className="btn btn-success my-3">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateTodo;
