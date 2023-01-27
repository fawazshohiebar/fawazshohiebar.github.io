import logo from './logo.svg';
import './App.css';
import img from "../src/buble.png"
function App() {
  return (
    <div className="App">
      <div className='home'>
        <div className='nav'>
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>


        <div className=''>
          <h1 className='speach'>Welcome to the best website you will ever see
            adipisicing elit. Labore rerum consequatur accusamus
            sint placeat quod dolorem illo amet velit, vel, deserunt pariatur ex corporis eaque, quos porro quam architecto? Reprehenderit.



          </h1>
          <div className='pictureface'>
            <img src="" alt="" srcset="" />
          </div>





        </div>

        <div>



        </div>



      </div>




      <div className='second'>
        <div className='leftbar'> &#10094; </div>
        <div className='inside-second'>


        </div>
        <div className='rightbar'>&#10095; </div>



      </div>
      <div className='third'>
        <div>
          <img className='imgthird' src={img} alt="" />
        </div>
        <h1 className='third-text'>
          We give the best ecommerce service in the middle east
          we Are speciallized  in the clothing departments
        </h1>



        <h1 className='fourth'>
          Our Popular categories
        </h1>



        <div className='alo'>
          <table>
            <tr>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
              <th className='thhs'><img src={img} alt="" /></th>
            </tr>
            <tr>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
              <th className='thhs'>our product </th>
            </tr>



          </table>
        </div>


      </div>

      <div className='con'>      <div class="container">
        <div class="row">
          <div class="co">
            <h3>About Us</h3>
            <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="co">
            <h3>Contact</h3>
            <ul>
              <li>Phone: +961 78844125</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

        </div>
      </div>
      </div>


    </div >
  );
}

export default App;
