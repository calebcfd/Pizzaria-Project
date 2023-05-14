import React from 'react'

function Creator() {



    return (
        <div id='Creator'>
            <h1>This is the Creator page</h1>
            <form action='/Cart' method='GET'>
                <div className='smallBox'>
                    <h3>Crust</h3>
                    <label>
                        Traditional
                        <input type='radio' name='crust' value='traditional'/>
                    </label>
                    <label>
                        Thin Crust
                        <input type='radio' name='crust' value='thin crust'/>
                    </label>
                    <label>
                        Stuffed Crust
                        <input type='radio' name='crust' value='stuffed crust'/>
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
        
    )
}

export {Creator}