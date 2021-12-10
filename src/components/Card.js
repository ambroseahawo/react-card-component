import React from 'react'

const Card = (props) => {
    return (
        <div class="card text-center shadow">
            <div class="overflow">
                <img src={props.imgSrc} alt="" className='card-img-top'/>
            </div>
            <div class="card-body text-dark">
                <h4 class="card-title">Card Tile</h4>
                <p class="card-text text-secondary">{props.description}</p>
                <a href="/" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    )
}

export default Card
