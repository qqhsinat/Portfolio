import './HomePage.css'
import myimg from './IMG.jpg'
import reactjs from './1174949_js_react js_logo_react_react native_icon.png'
import elementor from './Elementor-Logo-Symbol-Red.png'
import html from './download.png'
import python from './5848152fcef1014c0b5e4967.png'
import javascript from './JavaScript-logo.png'
import wordpress from './Wordpress_Blue_logo.png'
import css from './css-logo.png'
import bootstrax from './pngegg.png'


export default function HomePage(){
    return(
      <>
      <div className="Homepage">
        <div className='firstsec' id="about_me">
        <div className="image" >
          <img className='myImg' src={myimg} alt='Me Here'/>  
        </div>
        <div className="content" style = {{}}>
          <h1 className='hi text-center my-1'>Hi this is Tanishq</h1>
          <h1 className="occupation text-center my-1">frontend developer</h1>
          <h1 className="place text-center my-1">based in Delhi</h1>
          <p className="about my-3">Pursuing my bachelors from Hansraj College, As a fresh frontend developer, I embark on a journey where pixels meet purpose. With a canvas of code, I weave creativity into functionality, shaping digital landscapes that engage and inspire.</p>
          <button className='hire btn btn-success my-3' target="_blank" href=" https://wa.me/918851134420" type='button'>Hire Me!</button>
        </div>
        </div>
        <div className="secondsec">
        <h1 className="skillstech" id="scrollspy">Skills & Technologies</h1>
        <p>Here is a summary of skills that I have gained throughout my course of learning WebDev and working towards perfection, even though I'm still on the run.</p>
      </div>
      <div className="cards">
      <div className="row">
        <button className="btn col-sm-4 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <img className='icon' src={reactjs} alt='reactjs'/>
              <h5 className="card-title">ReactJS</h5>
            </div>
          </div>
        </button>
        <button className="btn col-sm-4">
          <div className="card">
            <div className="card-body">
            <img className='icon' src={bootstrax} alt='bootstrap'/>
              <h5 className="card-title">Bootstrap</h5>
            </div>
          </div>
        </button>
      </div>
      <div className="row my-5">
        <button className="btn col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <img className='icon' src={html} alt='html'/>
              <h5 className="card-title">HTML</h5>
            </div>
          </div>
        </button>
        <button className="btn col-sm-4">
          <div className="card  ">
            <div className="card-body">
              <img className='icon' src={css} alt='css'/>
              <h5 className="card-title">CSS</h5>
            </div>
          </div>
        </button>
      </div>
      <div className="row my-5">
        <button className="btn col-sm-4 mb-3 mb-sm-0">
          <div className="card  ">
            <div className="card-body">
            <img className='icon' src={javascript} alt='javascript'/>
              <h5 className="card-title">Javascript</h5>
            </div>
          </div>
        </button>
        <button className="btn col-sm-4">
          <div className="card  ">
            <div className="card-body">
              <img className='icon' src={wordpress} alt='wordpress'/>
              <h5 className="card-title">Wordpress </h5>
            </div>
          </div>
        </button>
      </div>
      <div className="row my-5">
        <button className="btn col-sm-4 mb-3 mb-sm-0">
          <div className="card  ">
            <div className="card-body">
              <img className='icon' src={elementor} alt='elementor'/>
              <h5 className="card-title">Elementor</h5>
            </div>
          </div>
        </button>
        <button className="btn col-sm-4">
          <div className="card  ">
            <div className="card-body">
                <img src={python} alt="python" className="icon" />
              <h5 className="card-title">Python</h5>
            </div>
          </div>
        </button>  
        </div>
        <div className="thirdsec">
      </div>
      </div>
        <div className="contactform max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
    <h2 className="saysomething text-center" id="scrollspyheading4">Say Something!</h2>
    <form action=""  method="">
      <div className="mb-4">
        <label htmlFor="name" className="text-end">Your Name</label>
        <input type="text" id="name" name="name" autoComplete='name' placeholder="John Doe" required
          className="form-control"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-start">Your Email</label>
        <input type="email" id="email" name="email" autoComplete='email' placeholder="john@example.com" required
          className="form-control"/>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="text-start">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="This is a disabled form responses will not be shared, please contact through alternate ways" required
          className="form-control"></textarea>
      </div>
      <button type="submit"
        className="sendmsg btn btn-success my-3" >
        Send Message
      </button>
      <p className="mt-3 text-gray-300 fs-6">If you are not a fan of forms you can email us instead <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline" rel='noreferrer' target='_blank'
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishq.ss04@gmail.com&su=Hey+Work+with+us!&body=">tanishq.ss04@gmail.com</a></p>
    </form>
      </div>
      </div>
    </>
  )
}