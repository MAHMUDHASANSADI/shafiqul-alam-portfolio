import React from 'react'

function Gallery() {
  return (
    <section className="bg_linen">
	<div className="container">	
    	<div className="row justify-content-center">
        	<div className="col-xl-6 col-lg-8">
            	<div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                    <div className="heading_s1 text-center">
                        <h2 className="font_style1">Our Gallery</h2>
                    </div>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    <div className="small_divider"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <ul className="grid_container gutter_medium grid_col3 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                    <li className="grid-sizer"></li>
                    <li className="grid_item">
                        <div className="gallery_item radius_all_10">
                            <a href="#" className="image_link">
                                <img src="assets/images/gallery_item_small28_360X240.jpg" alt="image" />
                            </a>
                            <div className="gallery_content">
                                <div className="link_container">
                                    <a href="assets/images/gallery_item28.jpg" className="image_popup"><span className="ripple"><i className="ion-image"></i></span></a>
                                </div>
                                <div className="text_holder text_white">
                               		<h5>Galley Title</h5>
                                </div>
							</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Gallery