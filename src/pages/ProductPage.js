import React, { useState } from 'react';
import { connect } from 'react-redux';

const ProductPage = props => {
    const [state,setState] = useState({
        slide: 0,
        maat: ''
    })

    const set_slide = index => {
        setState(prevState => ({...state, slide: prevState.slide = index}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!state.maat || state.maat === 'Maat'){
            alert('XXXXXXXXX')
        }else{
            props.add(props.selected)
        }
    }

    const selectedFunction = (e) => {
        setState({...state, maat: e.target.value})
        if(e.target.value){
            props.add_maat(e.target.value)
        }
    }
    
    return(
        <>
            <div className="row">

                <div className="col-md-12 mt-5">
                    <h1 align="center">
                        {props.selected.title}
                    </h1>
                    <h3 align="center">
                        {props.selected.geslachd} / {props.selected.name}
                    </h3>
                </div>

                <div className="col-md-12 product">
                    {
                        props.selected.gallery.map((item,index) => 
                            <img 
                                style={{opacity: state.slide === index ? 1 : 0}}
                                className="img-fluid product--img" 
                                src={item}
                                alt={window.location.pathname}
                            />
                        )
                    }
                </div>

                <div className="col-md-12">
                    <div className="row" style={{justifyContent:'center'}}>
                    {
                        props.selected.gallery.map((item,index) => 
                            <div className="col-md-1 container__img" onClick={() => set_slide(index)} key={index}>
                                <img className="img-fluid container__img--img" src={item} alt={props.selected.name} />
                                <div className="overlay"><i className="material-icons">search</i></div>
                            </div>
                        )
                    }
                    </div>
                </div>

                <div className="col-md-6 offset-md-3 mt-5">
                    <div class="form-group">
                        <label>Maat schoenen</label>
                        <select class="form-control" onChange={e => selectedFunction(e)}>
                            <option>Maat</option>
                            {
                                props.selected.maat.map((item,index) => 
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <div className="col-md-6 offset-md-3 mt-5">
                    <section>
                        <h3>
                            Beschrijving:
                        </h3>
                        <br />
                        <p style={{fontSize:'1.4em'}}>
                            {props.selected.description}
                        </p>
                    </section>
                </div>

                <div className="col-md-6 offset-md-3 mt-2 mb-5">
                    <h4>
                        {props.selected.price} / Euro
                    </h4>
                    <br />
                    <a className="main-btn--medium" onClick={handleSubmit}>Toevogen</a>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        selected: state.selected,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        add: item => {
            dispatch({type: 'ADD', payload: item})
        },
        add_maat: item => {
            dispatch({type: 'ADD_MAAT', payload: item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);