import React from 'react'

function Cart(props) {
    return (
        <div>
            {
                props.cart.map((cart) => {
                    return (
                        <ul>
                            <li>{cart.total}</li>
                            
                        </ul>
                    )
                })
           } 
        </div>
    )
}

export default Cart
