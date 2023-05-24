import './navbar.css';
import sqilogo from './sqi.jpg';

const Navbar =()=>{
    return(


      <nav id='navbarz' class="navbar navbar-expand-lg bg-body-tertiary justify-content-around
       px-5 border shadow rounded position-sticky top-0">
  <div class="">
    <img src={sqilogo}  alt="logo" />

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>

    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
  
    
          <span>About
            <div class="dontShow">
              <p><a href="">Our Story</a></p>
              <p><a href="">Our Team</a></p>
            </div>

          </span>

          <span>Programmes

          <div class="dontShow">
              <p><a href="">National Innovation Diploma</a></p>
              <p><a href="">Professional Diploma Program</a></p>
              <p><a href="">Executive Professional Certificate Program</a></p>
            </div>
          </span>
          <span>Admission

          <div class="dontShow">
              <p><a href="">Apply for a Programme</a></p>
              <p><a href="">Mode of Study</a></p>
              <p><a href="">Tuition</a></p>
              <p><a href="">Frequently Asked Questions</a></p>
            </div>
          </span>

          <span>E-portal

          <div class="dontShow">
              <p><a href="">Students</a></p>
              <p><a href="">Staff</a></p>
            </div>
          </span>

          <span>SQI Schorlarship</span>
          <span>News</span>

    
    </div>
  
</nav>
        

    )
}

export default Navbar