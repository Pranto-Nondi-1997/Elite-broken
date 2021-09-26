import React from 'react'

const SideCard = ({ heroesCard }) => {

    const totalCost = heroesCard


        .map((hero) => hero.sallary)
        .reduce((a, c) => a + c, 0)
    const filteredImage = heroesCard
        .map((x) => x.img)
        .filter((x, i, a) => a.indexOf(x) === i)
    const filteredName = heroesCard
        .map((x) => x.name)
        .filter((x, i, a) => a.indexOf(x) === i)

    return (
        <div className='bg-outline-primary'>
            <p>Total Added : {heroesCard.length}</p>
            <p>Total Cost: {totalCost}</p>
            <br />
            <div className='container-fluid'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {filteredImage.map((x) => (
                                    <img
                                        className='img-fluid'
                                        src={x}
                                        alt={x}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundSize: 'contain',
                                        }}
                                    />
                                ))}
                            </td>
                            <td className='my-auto'>
                                {filteredName.map((x) => (
                                    <h6>{x}</h6>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SideCard