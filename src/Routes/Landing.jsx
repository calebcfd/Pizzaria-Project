import React from 'react'

function Landing() {



    return (
        <div id='Landing'>
            <div id='specialTitle' className='flexCenter'>
                <hr></hr>
                <div className='triangle' style={{transform: 'rotate(180deg)'}}></div>
                <h1>Specialty Pizzas</h1>
                <div className='triangle'></div>
            </div>
            <div id='specials'>
                <div className='special a'>
                    <img className='specialImg' src='src\assets\portrait1.jpg'></img>
                    <h2 className='title'>The Pizzilla</h2>
                    <p className='description'>Everything on top, <br/> nothing to hide. <br/> For your greatest craving</p>
                    <div className='price'>
                        <h2 className='boxLetter'>$17.99</h2>
                        <div className='orderBtn'>Add To Cart</div>
                    </div>
                </div>
                <div className='special b'>
                    <img className='specialImg' src='src\assets\specialty1.jpeg'></img>
                    <h2 className='title'>All Italian</h2>
                    <p className='description'>With Tomatoes, Salami, and Olives, <br/> Can it get any <i>more</i> Italiana?</p>
                    <div className='price'>
                        <h2 className='boxLetter'>$14.99</h2>
                        <div className='orderBtn'>Add To Cart</div>
                    </div>
                </div>
                <div className='special c'>
                    <img className='specialImg' src='src\assets\specialty2.jpg'></img>
                    <h2 className='title'>Veggie Supreme</h2>
                    <p className='description'>Fresh and Flavorful, <br/> Bring the taste of the garden to your next slice!</p>
                    <div className='price'>
                        <h2 className='boxLetter'>$15.99</h2>
                        <div className='orderBtn'>Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Landing}