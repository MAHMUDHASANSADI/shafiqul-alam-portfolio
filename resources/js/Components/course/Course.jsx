import React from 'react'

function Course() {
    return (
        <>
            <section className="bg_linen">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <div className="heading_s1 text-center">
                                    <h2 className="font_style1">Letest Programs</h2>
                                </div>
                                <p>Free seminar on various digital course</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="content_img radius_ltrt_10">
                                    <a href="#"><img src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/462750198_1045142320739013_2325710255460118955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHoBOxwt2ZpeXW4wmZtAP1-gQUby8uMT9iBBRvLy4xP2IJMYCx1WzcU3fPDVfZt51fxiY1QtHhnZpd_sWENh7B-&_nc_ohc=fNVe2fnZNc4Q7kNvgF1RWPW&_nc_zt=23&_nc_ht=scontent.fdac88-1.fna&_nc_gid=An98RqTxvfB7834fGRDf9rb&oh=00_AYD2iMBf-LKUMVrjQr3zzp9fVFGjg6Tb9TAAz3MBPISFnw&oe=67169362" alt="course_img7" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="#">HRIS and IMS software</a></h4>
                                    <p>Free Seminar on HR management system and Inventory management system </p>
                                    {/* <div className="courses_info">
                                        <ul className="list_none program_info">
                                            <li>Age: <span>2-5 Year</span></li>
                                        <li>Time: <span>8:00 - 10:00</span></li>
                                    </ul>
                                </div> */}
                            </div>
                            <div className="content_footer justify-content-end">
                                {/* <div className="teacher">
                                    <a href="#"><img src="assets/images/user1.jpg" alt="user1" /><span>Alia Noor</span></a>
                                </div> */}
                                <div className="price">
                                    <span className="alert alert-success ">Free</span>
                                </div>
                            </div>
                        </div>
                        </div>
        </div >
    </div >
</section >
    </>
  )
}

export default Course