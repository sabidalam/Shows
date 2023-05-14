import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ShowDetails = () => {
    const ShowDetail = useLoaderData();
    const { name, image, summary, type, url, network } = ShowDetail;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const showName = form.showName.value;
        const userName = form.userName.value;
        const userEmail = form.email.value;
        const quantity = form.quantity.value;

        const booking = {
            showName: showName,
            userName: userName,
            userEmail: userEmail,
            quantity: quantity
        }

        const bookingInfo = JSON.stringify(booking);
        localStorage.setItem('booking', bookingInfo);
        toast.success('Booking Confirmed');
        form.reset();
        const getBookingInfo = JSON.parse(localStorage.getItem('booking'));
        console.log(getBookingInfo);
    };


    return (
        <div>
            <h4 className='text-center text-2xl font-bold my-3'>{name} Show Summary</h4>
            <div className="card lg:card-side bg-base-100 mx-10 my-10 shadow-xl">
                <figure><img className='w-full h-96' src={image?.original} alt="showImage" /></figure>
                <div className="card-body w-96">
                    <h2 className="card-title">{name}!</h2>
                    <h4 className='text-green-600'>Type: {type}</h4>
                    <h4 className='text-black font-semibold'>Country: {network?.country?.name}</h4>

                    <h4 className='text-black font-medium'>URL: <Link to={url}> <span className='text-blue-500'>{url}</span></Link> </h4>
                    <p> <b>Summary:</b> <br />
                        {summary}
                    </p>
                    <div className="card-actions justify-start mt-2">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-primary normal-case">Book Ticket Now</label>
                    </div>
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-4 top-6">✕</label>
                            <h3 className="font-bold text-lg mb-5">Book {name} Show Ticket Now!</h3>
                            <form onSubmit={handleBooking}>
                                <input type="text" name='showName' defaultValue={name} disabled className="input input-bordered w-full mb-3" />
                                <input type="text" name='userName' placeholder="Your Name" className="input input-bordered w-full mb-3" required />
                                <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full mb-3" required />
                                <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered w-full mb-3" required />
                                <input type="submit" value='Confirm Booking!' className='btn btn-primary w-full' />
                            </form>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to='/' className='btn btn-sm btn-ghost normal-case'><FaArrowLeft size={19} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails; 