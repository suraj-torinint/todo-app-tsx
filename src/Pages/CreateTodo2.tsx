import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import TodoData from "../Data/ApiService";
import classes from "../App.module.css";
import { Link } from "react-router-dom";

interface initialStateType {
    title: string;
    body: string;
    titleTouched: boolean;
    bodyTouched: boolean;
}

interface actionType {
    type: string;
    payload?: any;
}

let initialState: initialStateType = {
    title: "",
    body: "",
    titleTouched: false,
    bodyTouched: false,
};

const reducer = (state: initialStateType, action: actionType) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "body":
            return { ...state, body: action.payload };
        case "titleTouched":
            return { ...state, titleTouched: action.payload };
        case "bodyTouched":
            return { ...state, bodyTouched: action.payload };
        default:
            throw new Error();
    }
};

const CreateTodo2 = () => {
    const navigateTo = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    // check valid
    const titleIsValid = state.title.trim() !== "";
    const bodyIsValid = state.body.trim() !== "";
    // // check Invalid
    let titleInputIsInvalid = !titleIsValid && state.titleTouched;
    let bodyInputIsInvalid = !bodyIsValid && state.bodyTouched;

    const handletitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: "title", payload: event.target.value });
        dispatch({ type: "titleTouched", payload: true });
    };

    const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch({ type: "body", payload: event.target.value });
        dispatch({ type: "bodyTouched", payload: true });
    };

    const formHandler = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch({ type: "titleTouched", payload: true });
        dispatch({ type: "bodyTouched", payload: true });
        if (!titleIsValid || !bodyIsValid) {
            return;
        }

        let newData = {
            title: state.title,
            body: state.body,
        };

        console.log(newData);
        TodoData.createTodo(newData);
        navigateTo("/");
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
                        <input onBlur={handletitle} onChange={handletitle} value={state.title} className={titleclass} name="title" id="title" />
                        {titleInputIsInvalid && <p className="text-danger">Title cannot be Empty</p>}
                    </div>
                    <div className="my-3">
                        <label htmlFor="title">Body</label>
                        <textarea onBlur={handleBody} onChange={handleBody} value={state.body} className={bodyclass} name="body" id="body" rows={5} />
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

export default CreateTodo2;
