import React from 'react';
import { connect } from 'react-redux';
import { select_product } from '../reducers/reducersMaat';
import Card from '../components/Card';

const Dames = props => {

    const heren = props.products.filter(i => i.geslachd === 'dames')

    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    <h1 align="center">Dames</h1>
                </div>
            </div>
            <div className="row" style={{justifyContent:'space-between',margin:0}}>
                {
                    heren.map((item,index) => 
                        <Card item={item} key={index} select_product={props.select_product} />
                    )
                }
            </div>
        </>
    );
}
const mapStateToProps = state => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps, { select_product })(Dames);