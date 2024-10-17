import React from 'react';

const Topheader = () => {
  return (
    <div>
        <div className="top-header bg_light_navy light_skin border-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="contact_detail list_none ">
                  <li><a href="#"><i className="ti-mobile"></i>123-456-7890</a></li>
                  <li><a href="#"><i className="ti-email"></i>info@yourmail.com</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
                  <ul className="list_none social_icons social_white text-center text-md-right">
                    <li><a href="#"><i className="ion-social-facebook ion-social "></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter ion-social"></i></a></li>
                    <li><a href="#"><i className="ion-social-googleplus ion-social"></i></a></li>
                    <li><a href="#"><i className="ion-social-youtube-outline ion-social"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram-outline ion-social"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topheader