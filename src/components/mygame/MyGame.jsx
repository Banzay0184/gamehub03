import React, {useState} from "react";
import Nav from "../nav/Nav";
import starsvg from "../../img/star-svgrepo-com.svg";

function MyGame() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('games')) || [])

    function handleRemove(id) {
        const newData = cart.filter(item => item.id !== id)
        localStorage.setItem('games', JSON.stringify(newData))
        setCart(newData)
    }

    return (
        <div>
            <Nav co={cart.length}/>
            <div className='container'>
                <h1 className='text'>My Game</h1>
                <div className="cards-game">
                    {cart.map(item => (
                        <div key={item.id} className="card-game">
                            <img className='card-game-img' src={item.img} alt=""/>
                            <h1 className='card-game-text'>{item.title}</h1>
                            <button className='btnDel' onClick={() => handleRemove(item.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyGame;