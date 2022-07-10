import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='m-3 p-3'>
      <Link className='link-secondary text-decoration-none' to="/about" >About</Link>
      <h2>PLEASE SHOW UP</h2>
      <h3>Deploying React to Github</h3>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.schauspielervideos.de/FM/fotos/14/99014058/kf1745261_gr_1800.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://d205pfv3qf1itp.cloudfront.net/s3/castupload-com/production/294fa79f-438b-4b38-97b9-5dd6faa4b1c6.jpg/b4d4d92b1dfb6b5e2ce837e612d8200af43554ad6c767a38d24917d4c19fec17/c_crop,f_jpg,h_4155,q_80,w_4155,x_0,y_212/c_fill,g_North,h_500,w_500" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.schauspielervideos.de/FM/fotos/14/99014058/kf1745264_gr_1800.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
 }
 export default App;
