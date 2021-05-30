import React from 'react';
import './checkout-page.css';
import {connect} from 'react-redux';
import {nameInput, telInput, emailInput, addressInput} from '../../actions';


const CheckoutPage = ({name, tel, email, address}) => {

    return(
        <div className='checkout_page'>
            <div className='checkout_block'>
                <div className='checkout_block_header'><span>Оформление заказа:</span></div>
                <form className='checkout_block_form'>
                    <div className='form-style'>
                        <label>Ваше имя:</label>
                        <input className='form-style-input' 
                                type='text' 
                                placeholder='Имя'
                                onChange={(e) => nameInput(e.target.value)}
                                />
                    </div>
                    <div className='form-style'>
                        <label>Ваш номер телефона:</label>
                        <input className='form-style-input' 
                                type='tel' 
                                placeholder='8 (777) 777-77-77'
                                onChange={(e) => telInput(e.target.value)}
                                />
                    </div>
                    <div className='form-style'>
                        <label>Ваша почта:</label>
                        <input className='form-style-input' 
                            type='email' 
                            placeholder='example@gmail.com'
                            onChange={(e) => emailInput(e.target.value)}
                            />
                    </div>
                    <div className='form-style'>
                        <label>Адрес доставки:</label>
                        <input className='form-style-input' 
                                type='text' 
                                placeholder='Ваш адрес ...'
                                onChange={(e) => addressInput(e.target.value)}
                                />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({name, tel, email, address}) => {
    return {
        name,
        tel,
        email,
        address
    }
}

const mapDispatchToProps = {
    nameInput, 
    telInput, 
    emailInput, 
    addressInput
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);