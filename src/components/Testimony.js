import React from 'react'
import Landing from '../landingPage/Landing'

const Testimony = () => {
  return (
    <>
        <main id='TestimonyMain' className=' w-75'>
            <h2 className='text-info fw-bold text-center my-3'>OUR CLIENT SAY</h2>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={require('../Images/test6.jpg')} class=" mx-auto d-block " alt="..." />
      <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>MArcos Mathew</h5>
        <p>"From humble beginnings to financial triumph. How one
            strategic investment changed my life forever.
            Thanks to the teams and co-founders of this great platform"</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test1.jpg')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Charles Hams</h5>
        <p>"Unleashing the power of foresight: How a smart investment decision propelled
            my wealth to new heights. I'm very happy!"</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test3.jpg')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Darren Dan</h5>
        <p>"Unveiling the secrets behind my investment success story - 
         a journey from risk to reward. I'm very happy i took the bold step"</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test8.JPG')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>John Mike</h5>
        <p>"Unraveling the golden opportunity: Witness the incredible returns that transformed
            my investment portfolio. This is a life changing opportunity!"</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test7.JPG')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Garrel James</h5>
        <p>"Investment secrets revealed. The formula that turned my financial dreams
            into a tangible reality."</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test2.jpg')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Luda Billy</h5>
        <p>"A leap of faith that paid off. Discover the untold story of my groundbreaking
             investment triumph."</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test5.jpg')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Jeffrey Harper</h5>
        <p>"From doubt to double-digit returns. My transformational investment journey that
             defied all odds. Amazing!"</p>
      </div>
    </div>

    <div class="carousel-item">
    <img src={require('../Images/test4.jpg')} class=" mx-auto d-block " alt="..." />
    <div className='w-50 mx-auto px-3 py-3 text-center'>
        <h5>Alex James</h5>
        <p>"Seizing the moment. The investment choice that propelled
             me towards financial freedom."</p>
      </div>
    </div>
  </div>
  <button class="btn h-25 mt-5 bg-primary carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="btn h-25 mt-5 bg-primary carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </main>
    </>
  )
}

export default Testimony