import React from 'react'

const Heroes = ({ hero, hereosToCard }) => {
    const { name, status, img, occupation, nickname, portrayed } = hero
    return (
        <div className='card mb-3'>
            <img
                src={img}
                className='card-img-top'
                alt={name}
                style={{ width: '100%', height: '350px', backgroundSize: 'contain' }}
            />
            <div className='card-body'>
                <h5 className='card-title'>Name:{name}</h5>
                <h5 className='card-title'>Nick Name:{nickname}</h5>
                <p className='card-text'>Status:{status}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Occupation: {occupation[0]}</li>
                <li className='list-group-item'>Portrayed: {portrayed}</li>
            </ul>
            <div className='card-body'>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <button
                        onClick={() => hereosToCard(hero)}
                        className='btn btn-outline-primary'
                        type='button'
                    >
                        <i className='fas fa-search-dollar'>Cost</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Heroes