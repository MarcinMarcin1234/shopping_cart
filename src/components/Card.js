import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, select_product }) => {
    return(
        <div class="card mt-5 mb-5 card-main" style={{width: '18rem'}}>
            <div className="container-card-img">
                <img class="card-img-top img-main-card" src={item.img} alt={item.name} />
            </div>
            <div class="card-body">
                <h5 class="card-title" style={{textTransform:'uppercase'}}>
                    {item.title}
                </h5>
                <p class="card-text" style={{fontSize: '1.4em'}}>
                    {item.description.substring(0, 100)}
                </p>
                <p style={{fontSize: '1.4em'}}>
                    Price: {item.price} / Euro
                </p>

                <Link
                    to={`/${item.name}/${item.geslachd}/${item.id}`}
                    onClick={() => select_product(item)}
                class="main-btn--medium">Meer...</Link>
            </div>
        </div>
    );
}
export default Card;