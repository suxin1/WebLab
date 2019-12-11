import React, {useState, useLayoutEffect, useEffect, useReducer, useRef} from "react";
import ReactDOM from "react-dom";


function LessText({text, maxLength}) {
    const [hidden, setHidden] = useState(true);
    if (text.length <= maxLength) {
        return <span>{text}</span>
    }
    return (
        <span>
            {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
            {hidden ? (
                <a onClick={() => setHidden(false)}>read more</a>
            ) : (<a onClick={() => setHidden(true)}>read less</a>)}
        </span>
    )
}


function BlinkyComponent() {
    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200)
        }
    }, [value]);
    console.log('value:', value);
    return (
        <div onClick={() => setValue(0)}>
            value: {value}
        </div>
    )
}


function Counter() {
    const [sum, increment] = useReducer((state, action) => {
        return state + action;
    }, BigInt(0));
    return (
        <div>
            {sum.toString()}
            <button onClick={() => increment(sum || BigInt(1))}>increment</button>
        </div>
    )
}


function ShoppingList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add': {
                return {
                    list: [...state.list, {id: state.id_count, desc: action.value}],
                    id_count: state.id_count + 1,
                }
            }
            case 'remove': {
                return {
                    ...state,
                    list: state.list.filter(i => i.id !== action.id),
                }
            }
            case 'clear': {
                return {list: [], id_count: 0}
            }
            default:
                return state;
        }
    }, {list: [], id_count: 0});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add',
            value: inputRef.current.value
        });
        inputRef.current.value = '';
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef}/>
            </form>
            <ul>
                {items.list.map(i => {
                    return (
                        <li key={i.id}>
                            {i.desc}
                            <strong
                                style={{color: "red", marginLeft: "10px"}}
                                onClick={() => dispatch({type: 'remove', id: i.id})}
                            >x</strong>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => dispatch({type: 'clear'})}>清除</button>
        </>
    )
}

ReactDOM.render(
    <ShoppingList/>,
    document.querySelector('#root')
);