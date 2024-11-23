import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
        <h1 className='h2'>
        <FontAwesomeIcon className='me-2' icon={faBook} />
            Introduction to Application
        </h1>
        <p> This Website acumalates the libraries in india and some of the Popular genres of book they have. The Details Come from A Json Server
            And the website uses its data. we can also update the data in the server whitch is not covered in this app. </p>
    </div>
  )
}

export default Home;