import React from "react";

const CreateTodo = () => {
    return (
        <>
            <div className="container my-3">
                <span className="fs-3">Create a New Todo</span>
                <form action="" className="col-sm-5">
                    <div className="my-3">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" id="title" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="description">Title</label>
                        <textarea className="form-control " name="description" id="description" rows={5} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateTodo;
