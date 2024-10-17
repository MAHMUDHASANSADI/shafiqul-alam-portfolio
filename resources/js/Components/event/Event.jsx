import React from 'react'

function Event() {
  return (
    <section  className="staggered-animation-wrap overflow-hidden">
	<div className="container">
    	<div className="row justify-content-center">
        	<div className="col-xl-6 col-lg-8">
            	<div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                    <div className="heading_s1 text-center">
                        <h2 className="font_style1">Upcoming events</h2>
                    </div>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
        	<div className="col-lg-4 col-sm-6">
            	<div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                	<div className="content_img radius_ltrt_10">
                    	<a href="#"><img src="assets/images/event_img4.jpg" alt="event_img4"/></a>
                        <div className="event_date radius_all_5">
                        	<h5><span>16</span> May</h5>
                            <span className="event_time radius_lbrb_5 bg_default">10:00 am 3:00 pm</span>
                        </div>
                    </div>
                    <div className="content_desc">
                    	<h4 className="content_title"><a href="#">Nullam id varius nunc id varius nunc</a></h4>
                        <ul className="list_none content_meta">
                        	{/* <li><i className="ti-user"></i> <a href="#" className="text_default">John Wood</a></li> */}
                            <li><i className="ti-location-pin"></i><span className="text_default">New York City</span></li>
                        </ul>
                        <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ol_shape29">
        <div className="staggered-animation" data-animation="bounceInDown" data-animation-delay="0.1s">
            <img data-parallax='{"y": -50, "smoothness": 20}' src="assets/images/shape29.png" alt="shape29"/>
        </div>
    </div>
    <div className="ol_shape30">
        <div className="staggered-animation" data-animation="bounceInUp" data-animation-delay="0.2s">
            <img data-parallax='{"y": -50, "smoothness": 20}' src="assets/images/shape30.png" alt="shape30"/>
        </div>
    </div>
    <div className="ol_shape31">
        <div className="staggered-animation" data-animation="bounceInRight" data-animation-delay="0.3s">
            <img data-parallax='{"y": 50, "smoothness": 20}' src="assets/images/shape31.png" alt="shape31"/>
        </div>
    </div>
    <div className="ol_shape32">
        <div className="staggered-animation" data-animation="bounceInUp" data-animation-delay="0.4s">
            <img data-parallax='{"y": -50, "smoothness": 20}' src="assets/images/shape32.png" alt="shape32"/>
        </div>
    </div>
    <div className="ol_shape33">
        <div className="staggered-animation" data-animation="bounceInLeft" data-animation-delay="0.5s">
            <img data-parallax='{"y": -50, "smoothness": 20}' src="assets/images/shape33.png" alt="shape33"/>
        </div>
    </div>
    <div className="ol_shape34">
        <div className="staggered-animation" data-animation="bounceInDown" data-animation-delay="0.6s">
            <img data-parallax='{"x": 100, "smoothness": 20}' src="assets/images/shape34.png" alt="shape34"/>
        </div>
    </div>
</section>
  )
}

export default Event