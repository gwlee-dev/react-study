import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDos((currentArray) => [toDo, ...currentArray]);
    };
    console.log(toDos);
    return (
        <div className="container mt-3">
            <h2 className="mb-4">My To Dos ({toDos.length})</h2>
            <form className="d-flex gap-2" onSubmit={onSubmit}>
                <input
                    className="form-control w-auto"
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button className="btn btn-primary">Add To Do</button>
            </form>
            <hr />
            <ul className="list-group">
                {toDos.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
