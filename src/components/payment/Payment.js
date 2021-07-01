import React from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {addingBankResponse} from '../../actions';

const Payment = ({total, RestoService, addingBankResponse, order}) => {

    const onPay = () => {
        RestoService.getBankRes()
            .then(res => addingBankResponse(res))
            .then(res => {
                if(res.payload.response) {
                    RestoService.postOrders(order)
                }
            })
    }
    return(
        <div className='payment-page'>
            <div>Сумма заказа: <span>{total}$</span></div>
            <button className="cart__btn-pay checkout-page" onClick={onPay}>Оплатить</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.infoReducer.total,
        order: state.infoReducer.postingDatas
    }
}
const mapDispatchToProps = {
    addingBankResponse
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Payment))