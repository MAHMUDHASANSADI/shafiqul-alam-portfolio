import React from 'react'

const Loader = () => {
  return (
    <div>
         {/* LOADER */}
      <div id="preloader">
        <span className="spinner"></span>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* END LOADER */}
      <div className="modal fade lr_popup" id="Login" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <div className="h-100 background_bg radius_ltlb_5" data-img-src="assets/images/login_img.jpg"></div>
                </div>
                <div className="col-lg-7">
                  <div className="padding_eight_all">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="login-tab1" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="signup-tab1" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="login" role="tabpanel">
                        <div className="heading_s1 mb-3">
                          <h4>Login</h4>
                        </div>
                        <form method="post" className="login">
                          <div className="form-group">
                            <input type="text" required="" className="form-control" name="email" placeholder="Email"/>
                          </div>
                          <div className="form-group">
                            <input className="form-control" required="" type="password" name="password" placeholder="Password"/>
                          </div>
                          <div className="login_footer form-group">
                            <a href="#">Lost your password?</a>
                            <div className="chek-form mb-3">
                              <div className="custome-checkbox">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value=""/>
                                  <label className="form-check-label" for="exampleCheckbox3">Remember me</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-default btn-block" name="login">Log in</button>
                          </div>
                        </form>
                        <div className="different_login">
                          <span> or</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                          <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook"></i>Facebook</a></li>
                          <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus"></i>Google</a></li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="signup" role="tabpanel">
                        <div className="heading_s1 mb-3">
                          <h4>Sign Up</h4>
                        </div>
                        <form method="post" className="login">
                          <div className="form-group">
                            <input type="text" required="" className="form-control" name="username" placeholder="Username"/>
                          </div>
                          <div className="form-group">
                            <input type="text" required="" className="form-control" name="email" placeholder="Email"/>
                          </div>
                          <div className="form-group">
                            <input className="form-control" required="" type="password" name="password" placeholder="Password"/>
                          </div>
                          <div className="form-group">
                            <input className="form-control" required="" type="password" name="cpassword" placeholder="Confirm Password"/>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-default btn-block" name="login">Sign Up</button>
                          </div>
                        </form>
                        <div className="different_login">
                          <span> or</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                          <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook"></i>Facebook</a></li>
                          <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus"></i>Google</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader