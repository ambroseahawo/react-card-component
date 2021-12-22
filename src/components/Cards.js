import React from 'react'
import Card from './Card'
import { articles } from './data'

const Cards = () => {
    return (
        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">
                    {articles.map(article => {
                        const {id, imgSrc, description} = article
                        return(
                            <Card key={id} description={description} imgSrc={imgSrc} />
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Cards
