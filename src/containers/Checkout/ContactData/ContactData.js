import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import Style from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name:"",
        email: "",
        address:{
            street:"",
            postalCode:""
        }
    }

    onOrderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients, this.props.price);
    }

    render() {
        return (
            <div className={Style.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={Style.Input} type="text" placeholder="email"/>
                    <input className={Style.Input} type="text" placeholder="street"/>
                    <input className={Style.Input} type="text" placeholder="name"/>
                    <input className={Style.Input} type="text" placeholder="postal code"/>
                    <Button on_click={this.onOrderHandler} btnStyle="Success">Continue</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;
