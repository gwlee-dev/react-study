import { useEffect, useState } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (e) => setKeyword(e.target.value);
    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when 'keyword/counter' changes.");
    }, [keyword, counter]);
    return (
        <div>
            <input
                value={keyword}
                type="text"
                placeholder="Search Here..."
                onChange={onChange}
            ></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}

export default App;
