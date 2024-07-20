import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import './App.css'; 

const Todo = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (input) {
            setItems([...items, input]);
            setInput('');
        }
    };

    const deleteAll = () => {
        setItems([]);
    };

    const deleteSingleItem = (index) => {
        const filterData = items.filter((e, i) => index !== i);
        setItems(filterData);
    };

    return (
        <div className='todo-container'>
            <h1 className='todo-title'>Todo App</h1>
            <div className='input-container'>
                <input
                    value={input}
                    type="text"
                    placeholder='Enter items..'
                    onChange={(e) => setInput(e.target.value)}
                />
                <IoIosAddCircle onClick={addItem} className='icon' />
                <MdDelete onClick={deleteAll} className='icon' />
            </div>
            <ul className='todo-list'>
                {items.map((element, index) => (
                    <li key={index} className='todo-item'>
                        {element}
                        <MdDelete onClick={() => deleteSingleItem(index)} className='delete-icon' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
