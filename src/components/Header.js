import React from 'react'

const Header = () => {
    return (
        <div className='py-3 text-white text-center bgColor'>
            <h1 className='fst-italic text-white'>Breaking Bad Heroes</h1>
            <p className='text-center'>
                Breaking Bad: Created by Vince Gilligan. With Bryan Cranston, Anna Gunn,
                Aaron Paul, Betsy Brandt. A high school chemistry teacher diagnosed with
                inoperable lung cancer turns to manufacturing and selling
                methamphetamine in order to secure his family's future.
            </p>
            <br />
            <h6 className='text-white'>
                Total Budget: $<span>3Million</span>{' '}
            </h6>
        </div>
    )
}

export default Header