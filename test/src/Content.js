const Content = () => {
    const handleNameChange = ()=> { 
        const names = ['bob','fatima','peter'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log('clicked');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('Peter')}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click me</button>
        </main>
    );
};


export default Content