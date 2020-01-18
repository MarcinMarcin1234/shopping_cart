import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    state = {
        maat: '',
    }

    selectedFunction = (e) => {
        this.setState({maat: e.target.value})
        const maat = this.props.cart.find(i => i.maat_schoen  === this.props.selected.maat_schoen && i.id === this.props.selected.id)
        if(e.target.value){
           maat.maat_schoen = e.target.value
        }
    }

    sortFunc = items => {
        return items.sort((a,b) => {
            if(a.id < b.id){
                return 1
            }
            else if(a.id > b.id){
                return -1
            }else{
                return 0
            }
        })
    }

    sortFuncMaat = items => {
        return items.sort((a,b) => {
            if(a > b){
                return 1
            }
            else if(a < b){
                return -1
            }else{
                return 0
            }
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">

                {
                    this.sortFunc(this.props.cart).map((item,index) => 
                        <div className="row mt-5 mb-5" key={index}>
                            <div className="col-md-2">
                                <img className="img-fluid" src={item.img} alt={item.name} />
                            </div>
                            <div className="col-md-2 flex">
                                <ul>
                                    <li>
                                        {item.name}
                                    </li>
                                    <li>
                                        {item.title}
                                    </li>
                                    <li>
                                        {item.geslachd}
                                    </li>
                                    <li>
                                        {item.price} / Euro
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 flex">
                                <ul>
                                    <li>
                                        {item.qty} / Stuck
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 flex">
                                <ul>
                                    <li>
                                        Subtotal: {item.price * item.qty} / Euro
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 flex">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Maat</label>
                                    <select class="form-control" onChange={e => this.selectedFunction(e)}
                                        onMouseOver={() => this.props.select_product(item)}
                                        onMouseOut={() => this.props.select_product(item)}
                                    >
                                    <option>{item.maat_schoen}</option>
                                    {
                                        this.sortFuncMaat(item.maat).map((items,index) => 
                                            <option key={index} value={items}>
                                                {items}
                                            </option>
                                        )
                                    }
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                
                            </div>
                        </div>
                    )
                }

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        cart: state.cart,
        selected: state.selected
    }
}

const mapDispatchToProps = dispatch => {
    return{
        add_maat: item => {
            dispatch({type: 'ADD_MAAT', payload: item})
        },
        select_product: item => {
            dispatch({type: 'SELECT_PRODUCT', payload: item})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)