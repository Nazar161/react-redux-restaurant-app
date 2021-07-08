import React, { useState } from 'react';
import './checkout-page.css';
import {connect} from 'react-redux';
import { reduxForm, Field} from 'redux-form';
import {addingOrderInfo} from '../../actions';
import Payment from '../payment/Payment';
import { required, maxLengthCreator} from '../utils/validators';
import nameInput from '../form-components/name-input';

const CheckoutPage = ({addingOrderInfo, datass}) => {
    const [paymentPage, setPaymentPage] = useState('order-form')

    const onAddOrderInfo =  (datas) => {
        addingOrderInfo(datas);
        setPaymentPage('payment');
    }

    let header;
    if (paymentPage === 'order-form') {
        header = 'Оформление заказа:'
    } else {
        header = 'Оплата'
    }

    return(
        <div className='checkout_page'>
            <div className='checkout_block'>
                <div className='checkout_block_header'><span>{header}</span></div>
                {paymentPage === 'order-form' && <OrderReduxForm onSubmit={onAddOrderInfo}/>}
                {paymentPage === 'payment' && <Payment/>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        datass: state.infoReducer.postingDatas,
    }
}

const mapDispatchToProps = {
    addingOrderInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);


const maxLength15 = maxLengthCreator(15);
const maxLength250 = maxLengthCreator(250)

const OrderForm = ({handleSubmit, reset}) => {
    return(
        <form className='checkout_block_form' onSubmit={handleSubmit}>
            <div className='form-style'>
                <label>Ваше имя: *</label>
                <Field  className='form-style-input'
                        type='text'
                        name='name'
                        placeholder='Имя'
                        component={nameInput}
                        validate={[required, maxLength15]}
                        />
            </div>
            <div className='form-style'>
                <label>Ваш номер телефона: *</label>
                <Field className='form-style-input' 
                        type='tel' 
                        name='phone'
                        placeholder='8 (777) 777-77-77'
                        component='input'
                        validate={[required]}
                        />
            </div>
            <div className='form-style'>
                <label>Ваша почта:</label>
                <Field className='form-style-input' 
                        type='email' 
                        name='email'
                        placeholder='example@gmail.com'
                        component='input'
                    />
            </div>
            <div className='form-style'>
                <label>Адрес доставки: *</label>
                <Field className='form-style-input' 
                        type='text' 
                        name='address'
                        placeholder='Ваш адрес ...'
                        component='input'
                        validate={[required]}
                        />
            </div>
            <div className='form-style'>
                <label>Ваши Пожелания:</label>
                <Field className='form-style-input comments' 
                        type='text' 
                        name='comments'
                        placeholder='Ваши Пожелания...'
                        component='textarea'
                        validate={[maxLength250]}
                        />
            </div>
            <button className="cart__btn-pay checkout-page">Подтвердить и перейти к оплате</button>
        </form>
    )
}

const OrderReduxForm = reduxForm({form: 'order'})(OrderForm)
