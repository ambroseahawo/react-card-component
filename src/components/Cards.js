import React from 'react'
import Card from './Card'
import { articles } from './data'

const Cards = () => {
    return (
        <div class="container-fluid d-flex justify-content-center">
            <div class="row g-4">
                {articles.map(article => {
                    const {id, imgSrc, description} = article
                    return(
                        <div key={id} class="col-md-4">
                            <Card description={description} imgSrc={imgSrc} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
