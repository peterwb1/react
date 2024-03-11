import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
           <label htmlFor="addItem">Add an item:</label>
           <input
                autoFocus
                ref={inputRef}
                id ='addItem'
                type="text"
                placeholder="Add an item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)
                }
                
            />
            <button 
                type="submit"
                aria-label="Add item to list"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    );
};

export default AddItem;