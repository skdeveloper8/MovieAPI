import React from 'react'

function Card({ data }) {
    
    return (
    

        <div  className='cardCenter'>
              <div className='card'>

            <img src={data.data.Poster} alt="" />
            <h1 className='title'>{data.data.Title}</h1>
            <span className='bold'>Rating :</span><span> {data.data.imdbRating}</span>
            <br />

            <button>{data.data.Genre}</button>
            <hr />
            <span  className='bold'>Release Date: </span><span>{data.data.Released}</span>
            <br />

            <span className='bold'>Run Time :</span><span>{data.data.Runtime}</span>
            <br />

            <span className='bold'>Actors: </span><span>{data.data.Actors}</span>
            <br />

            <span className='bold'>Plot: </span><span>{data.data.Plot}</span>
            </div>


       
        </div>
    )
}

export default Card