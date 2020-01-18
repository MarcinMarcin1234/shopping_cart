import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { select_product } from '../reducers/reducersMaat';

const Home = props => {
    return(
        <>
            
            <div className="row" style={{justifyContent:'space-between',margin:0}}>
                {
                    props.products.map((item,index) => 
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
export default connect(mapStateToProps, { select_product })(Home);