import React from 'react'

const Contact = () => {
  return (
    <section className="small_pb">
	<div className="container">	
    	<div className="row justify-content-center">
        	<div className="col-xl-6 col-lg-8">
            	<div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                    <div className="heading_s1 text-center">
                        <h2 className="font_style1">Get In Touch</h2>
                    </div>
                    <p>If you have any questions, feedback, or inquiries, don't hesitate to reach out. Fill out the form below, and our dedicated team will get back to you as soon as possible.</p>
                    <div className="small_divider"></div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
                <div className="row">
                    <div className="col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                        <div className="field_form form_style1">
                            <form method="post" name="enq">
                                <div className="row">
                                    <div className="form-group col-12">
                                        <input required="required" placeholder="Enter Name" id="first-name" className="form-control" name="name" type="text"/>
                                     </div>
                                    <div className="form-group col-12">
                                        <input required="required" placeholder="Enter Email" id="email" className="form-control" name="email" type="email"/>
                                    </div>
                                    <div className="form-group col-12">
                                        <input required="required" placeholder="Enter Phone No." id="phone" className="form-control" name="phone" type="tel"/>
                                    </div>
                                    <div className="form-group col-12">
                                        <input placeholder="Enter Subject" id="subject" className="form-control" name="subject" type="text"/>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea required="required" placeholder="Message" id="description" className="form-control" name="message" rows="3"></textarea>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <button type="submit" title="Submit Your Message!" className="btn-default btn-radius btn-block" id="submitButton" name="submit" value="Submit">Submit</button>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <div id="alert-msg" className="alert-msg text-center"></div>
                                    </div>
                                </div>
                            </form>		
                        </div>
                    </div>
                    <div className="col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                        <div className="contact_map overflow-hidden h-100 mt-4 mt-md-0">
                           <img src="https://i.pinimg.com/originals/4a/ff/d8/4affd89a9f1bef68eaddc24a749fa532.png
                           " alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact