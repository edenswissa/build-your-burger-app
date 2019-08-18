import React, { Component } from 'react'
import Order from '../../components/Order/Order';

class Orders extends Component {

    state = {
        orders:[],
        loading: false
    }

    componentDidMount() {
        console.log("Orders componentDidMount");
        this.setState({loading:true});
        setTimeout(() => {
            const orders = [];
            for (let i = 0; i < 3; i++) {
                const ingredients = {
                    salad:Math.floor(Math.random() * 10),  
                    bacon:Math.floor(Math.random() * 10),  
                    cheese:Math.floor(Math.random() * 10),  
                    meat:Math.floor(Math.random() * 10),  
                }
                const price = Math.floor(Math.random() * 10) + 4;
                const order = {
                    ingredients : ingredients,
                    price : price,
                    id: i
                }  
                orders.push(order);
            }
            this.setState({orders:orders, loading:false});
        }, 2000);
    }


    render() {

        let orders = this.state.orders.map((order) => {
            return <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
        });

        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default Orders;
