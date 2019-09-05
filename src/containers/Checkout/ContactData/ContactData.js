import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import Style from './ContactData.module.css';
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'

class ContactData extends Component {

    state = {
        orderForm: {
            name: this.createInputData('input', 'text', 'Name', '', { required: true }),
            street: this.createInputData('input', 'text', 'Street', ''),
            zipCode: this.createInputData('input', 'text', 'Zip Code', '', { required: true, minLength: 5 }),
            email: this.createInputData('input', 'email', 'Email', '', { required: true })
        },
        orderData: {},
    }

    createInputData(elementType, type, placeholder, value, validation) {
        console.log("createInputData" + placeholder);
        return {
            elementType: elementType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value,
            validation: validation,
            valid: false,
            touched: false
        }
    }

    onOrderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        this.setState({ orderData: order });
        console.log(order);
        this.props.history.push("/");
    }

    onInputChangedHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[id]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[id] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules) {
            if (rules.required) {
                isValid = value.trim() !== '' && isValid;
            }

            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid;
            }
        }

        return isValid;
    }

    render() {

        const inputs = [];
        for (let key in this.state.orderForm) {
            inputs.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }


        return (
            <div className={Style.ContactData}>
                <h4>Enter your contact data</h4>
                <form onSubmit={this.onOrderHandler}>
                    {inputs.map((input, index) => {
                        return <Input
                            elementConfig={input.config.elementConfig}
                            elementType={input.config.elementType}
                            value={input.config.value}
                            key={input.id}
                            changed={(event) => this.onInputChangedHandler(event, input.id)}
                            shouldValid={input.config.validation}
                            invalid={!input.config.valid}
                            touched={input.config.touched} />
                    })}
                    <Button btnStyle="Success">Continue</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);
