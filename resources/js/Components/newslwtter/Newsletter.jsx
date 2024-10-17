import React from 'react'

const Newsletter = () => {
  return (
    <section className="small_pt pb-0 newsletter_overlap">
	<div className="container">	
    	<div className="row justify-content-center">	
            <div className="col-md-12">
            	<div className="bg_danger radius_all_10 text_white newsletter_box animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                	<div className="row align-items-center">
                    	<div className="col-lg-6">
                            <div className="heading_s1">
                                <h2 className="font_style1">Subscribe Our Newsletter</h2>
                            </div>
                            <p>Contrary to popular belief of lorem Ipsm Latin amet ltin from consectetur industry blandit massa enim varius nunc. </p>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="newsletter_form form_lg rounded_input">
                                <form> 
                                    <input type="text" className="form-control" required="" placeholder="Email Address" />
                                    <button type="submit" title="Subscribe" className="btn btn-default btn-radius" name="submit" value="Submit">
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Newsletter