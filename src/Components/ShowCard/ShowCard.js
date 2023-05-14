import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ShowCard = ({ show }) => {
    const allShow = show.show;
    console.log(allShow);
    const { id, name, image, genres, language, rating } = allShow;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='w-full h-80' src={image?.original} alt="show" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h4 className='card-title'>{name}</h4>
                    <div className='flex items-center'>
                        {
                            rating?.average ? <>
                                <FaStar className='text-warning mr-1'></FaStar>
                                <p>{rating?.average}</p>
                            </>
                                :
                                <>
                                    <FaStar className='text-warning mr-1'></FaStar>
                                    <p>0</p>
                                </>
                        }
                    </div>
                </div>
                <h4 className='text-green-600'>Genres: {genres[0]}. {genres[1]}</h4>
                <h4 className='text-black'>Language: {language}</h4>
                <div className="card-actions justify-end">
                    <Link to={`/show/${id}`} className="btn btn-sm btn-accent normal-case mt-3">
                        View Summary
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;