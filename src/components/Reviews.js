import React from "react";
import "../css/Reviews.css";


function Reviews(props) {
  return (
    <div className="reviews">

    <div id="carouselExampleIndicators" className="carousel slide reviewscontainer" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cc">
{/* <div className="reviewsimg">
  <figure>
    
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption><h6 className="imgname">Name here</h6></figcaption>
</figure>
</div> */}
    <div className="reviewstext">
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum....</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Lorem Ipsum</p>

    </div>
    </div></div>
    <div className="carousel-item">
      <div className="cc">
        
{/* <div className="reviewsimg">
<figure> 
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption className="imgname">Name here</figcaption>
</figure>
</div> */}

    <div className="reviewstext">
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum....</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Lorem Ipsum</p>

    </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className="cc">
{/* <div className="reviewsimg">
<figure>
<img src="../images/robot.png" className="d-block imager w-100" alt="..."/>
<figcaption><h6 className="imgname">Name here</h6></figcaption>
</figure>
</div> */}
    <div className="reviewstext">
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum
          Nulla vitae elit libero, a pharetra augue mollis interdum....</p>
          <p style={{textAlign:"right", textTransform:"capitalize"}}>~Lorem Ipsum</p>
    </div>
    </div>
  </div></div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
      );
      }
export default Reviews;