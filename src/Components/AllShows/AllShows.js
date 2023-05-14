import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';

const AllShows = () => {
    const shows = useLoaderData();

    return (
        <div className='mt-5'>
            <h4 className='text-center text-2xl font-bold my-3'>All Shows</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-xs lg:max-w-4xl mx-auto my-7'>
                {
                    shows.map(show => <ShowCard
                        key={show.show.id}
                        show={show}>
                    </ShowCard>)
                }
            </div>
        </div>
    );
};

export default AllShows;