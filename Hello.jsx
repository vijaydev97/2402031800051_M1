import './App.css';

function Hello() {

    function getName(yourname) {
        return yourname;
    }

    function handleClick() {
        alert("Button was clicked");
    }

    const handleInput = (event) => {
        console.clear();
        console.log("value :", event.target.value);
    };

    const name = "YahuBaba";
    const name1 = "YahuBaba";

    return (
        <>
            <h1>Hello {getName(name)}</h1>

            <h2>Byy {getName(name1)}</h2>

            <p onMouseOver={handleInput} onClick={handleInput}>
                silver oak university
            </p>

            <button onClick={handleClick}>
                Click Me
            </button>

            <button onClick={() => alert("hello from inline function!")}>
                say hello
            </button>

            <br />

            <input
                type="text"
                onChange={handleInput}
                placeholder="Type something"
            />
        </>
    );
}

export default Hello;