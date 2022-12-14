import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="med_sym.jpg"/> */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Patient Management System</h1>
            <p class="mb-8 leading-relaxed">Welcome to Patient Management System. Here you can find hospitals, pharmacies and doctors at your fingertips!</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/signup">USER</Link></button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link to="/signup">ORGANIZATION</Link></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
