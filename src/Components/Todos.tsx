import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import TodoData from "../Data/ApiService";
import { todoType } from "../Data/useAxios";

const Todos = () => {
    const [response, setResponse] = useState<todoType[]>([]);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const result = await TodoData.getTodos();
            setResponse(result);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                response.map((todo, i) => (
                    <div className="card mx-5 my-2" key={i}>
                        <div className="card-body">
                            <div className="">
                                <p className="card-title h2">
                                    <u className="fs-3 fw-bold text-muted">Title</u>: {todo.title}
                                </p>
                                <p className="card-subtitle mb-2 fs-5">
                                    <span className="fw-bold text-muted">
                                        <u>Body</u> :{" "}
                                    </span>
                                    {todo.body}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Todos;
