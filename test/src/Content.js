import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item:"One half pound of ground beef"
        },
        {
            id: 2,
            checked: true,
            item:"Item Two"
        },
        {
            id: 3,
            checked: false,
            item:"Item Three"
        }
    ]);
    
    const handleCheck = (id) => {
        const listItems = items.map((item) => {
            if (item.id === id) {
                item.checked = !item.checked;
            }
            return item;
        });
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input 
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? {textDecoration: "line-through"} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                                role="button" 
                                tabIndex="0" 
                            />

                        </li>
                    ))
                    }
                </ul>
            ) : (
                <p style={{ marginTop: '2rem'}}>No items in the list</p>
            )}
        </main>
    );
};


export default Content