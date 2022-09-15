import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TodoData from "../Data/ApiService";
import classes from "../App.module.css";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [titleIsValid, setTitleIsValid] = useState(false);
    const [body, setBody] = useState("");
    const [bodyIsValid, setBodyIsValid] = useState(false);
    const [touchedTitle, setTouchedTitle] = useState(false);
    const [touchedBody, setTouchedBody] = useState(false);
    const history = useHistory();

    const handletitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
        if (event.target.value.trim() !== "") {
            setTitleIsValid(true);
        }
        setTouchedTitle(true);
        if (title.trim() === "") {
            setTitleIsValid(false);
        }
    };

    const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(event.target.value);
        if (event.target.value.trim() !== "") {
            setBodyIsValid(true);
        }
        setTouchedBody(true);
        if (body.trim() === "") {
            setBodyIsValid(false);
        }
    };

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setTouchedTitle(true);
        setTouchedBody(true);
        if (title.trim().length === 0 || body.trim().length === 0) {
            setTitleIsValid(false);
            setBodyIsValid(false);
            return;
        }
        let newData = {
            title: title,
            body: body,
        };

        TodoData.createTodo(newData);
        history.push("/");
    };

    // check valid
    let titleInputIsInvalid = !titleIsValid && touchedTitle;
    let bodyInputIsInvalid = !bodyIsValid && touchedBody;

    const titleclass = titleInputIsInvalid ? `form-control ${classes.invalid}` : `form-control`;
    const bodyclass = bodyInputIsInvalid ? `form-control ${classes.invalid}` : `form-control`;

    return (
        <>
            <div className="container my-3">
                <span className="fs-3">Create a New Todo</span>
                <form onSubmit={formHandler} className="col-sm-5">
                    <div className="my-3">
                        <label htmlFor="title">Title</label>
                        <input onBlur={handletitle} onChange={handletitle} value={title} className={titleclass} name="title" id="title" />
                        {titleInputIsInvalid && <p className="text-danger">Title cannot be Empty</p>}
                    </div>
                    <div className="my-3">
                        <label htmlFor="title">Body</label>
                        <textarea onBlur={handleBody} onChange={handleBody} value={body} className={bodyclass} name="body" id="body" rows={5} />
                        {bodyInputIsInvalid && <p className="text-danger">Body cannot be Empty</p>}
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
