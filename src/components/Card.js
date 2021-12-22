import React from 'react'

const Card = (props) => {
    return (
        <div class="col-md">
            <div class="card shadow">
                <div class="overflow mb-3">
                    <img src={props.imgSrc} alt="" className='card-img-top'/>
                </div>
                <div class="card-body text-center text-dark">
                    <h4 class="card-title">Card Tile</h4>
                    <p class="card-text text-secondary">{props.description}</p>
                    <a href="/" className="btn btn-outline-success">Go anywhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card
