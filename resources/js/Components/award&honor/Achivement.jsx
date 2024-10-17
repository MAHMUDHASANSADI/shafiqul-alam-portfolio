import React from 'react'

const Achivement = () => {
  return (
    <>
      <div className="footer_dark bg_light_navy background_bg bg_fixed mb-4">
        <h1 className="text-center pt-4">Achivement</h1>
      </div>
      <div className="container vision_P">
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Year</th>
      <th scope="col">Particulars</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row"></th> */}
      <td>2010</td>
      <td>Business Award</td>
    </tr>
    <tr>
      {/* <th scope="row"></th> */}
      <td>2014</td>
      <td>Professional Award</td>
    </tr>
    <tr>
      {/* <th scope="row"></th> */}
      <td>2024</td>
      <td>President Award</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  )
}

export default Achivement