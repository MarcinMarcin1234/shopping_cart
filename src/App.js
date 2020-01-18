import React, { Component } from 'react';
import './styles/style.scss';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_products } from './reducers/reducersProducts';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import Heren from './pages/Heren';
import Dames from './pages/Dames';
import Cart from './pages/Cart';

class App extends Component {

    componentDidMount(){
        this.props.get_products()
    }

    render(){
        return(
            <>
            <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/heren" component={Heren} />
                        <Route path="/dames" component={Dames} />
                        <Route path="/cart" component={Cart} />
                                
                        {
                            this.props.products.map((item,index) => 
                                <Route key={index} exact path={`/${item.name}/${item.geslachd}/${item.id}`} component={ProductPage} />
                            )
                        }
                    </Switch>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps, { get_products })(App);