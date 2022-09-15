import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import TodoData from "../Data/ApiService";
import classes from "../App.module.css";
import { Link } from "react-router-dom";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [touchedTitle, setTouchedTitle] = useState(false);
    const [touchedBody, setTouchedBody] = useState(false);
    // const navigateTo = useNavigate();

    // check valid
    const titleIsValid = title.trim() !== "";
    const bodyIsValid = body.trim() !== "";
    // check Invalid
    let titleInputIsInvalid = !titleIsValid && touchedTitle;
    let bodyInputIsInvalid = !bodyIsValid && touchedBody;

    const handletitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
        setTouchedTitle(true);
    };

    const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(event.target.value);
        setTouchedBody(true);
    };

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setTouchedTitle(true);
        setTouchedBody(true);
        if (!titleIsValid || !bodyIsValid) {
            return;
        }

        let newData = {
            title: title,
            body: body,
        };

        console.log(newData);
        TodoData.createTodo(newData);
        setTitle("");
        setBody("");
        setTouchedTitle(false);
        setTouchedBody(false);
        // navigateTo("/");
    };

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
                    <button type="submit" className="btn btn-success my-3" disabled={titleInputIsInvalid || bodyInputIsInvalid ? true : false}>
                        <Link className="text-light text-decoration-none" to={"/home"}>
                            Submit
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateTodo;
