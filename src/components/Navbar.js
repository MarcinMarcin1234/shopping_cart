import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    state = {
        scroll: false
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            if(window.pageYOffset === 0){
                this.setState({scroll: !this.state.scroll})
            }else{
                this.setState({scroll: false})
            }
        })
    }

    render(){
        return(
            <>
                <nav className="main-navbar" style={{height: this.state.scroll ? '65px' : '50px', lineHeight: this.state.scroll ? '65px' : '50px'}}>
                    <ul className="main-navbar__ul">
                        <li className="main-navbar__ul__li float-left">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="main-navbar__ul__li float-left">
                            <Link to="/heren">Heren</Link>
                        </li>
                        <li className="main-navbar__ul__li float-left">
                            <Link to="/dames">Dames</Link>
                        </li>
                        <li className="main-navbar__ul__li float-right">
                            <Link to="/cart">
                                
                                <svg id="i-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9" />
                                </svg>

                                {
                                    this.props.cart.length
                                    && (
                                            <span className="notification">
                                                {
                                                    this.props.cart.reduce((acc,item) => { return acc + item.qty }, 0)
                                                }
                                            </span>
                                       )
                                }
                                
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div style={{height: this.state.scroll ? '65px' : '50px',transition:'all .2s',WebkitTransition:'all .2s'}}></div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}
export default connect(mapStateToProps)(withRouter(Navbar));