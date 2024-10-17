import React from 'react'

const Award = () => {
  return (
    <>
      <div className="footer_dark bg_light_navy background_bg bg_fixed mb-4">
        <h1 className="text-center pt-4">Award</h1>
      </div>
      <div className="container vision_P">
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Serial</th>
      <th scope="col">Year</th>
      <th scope="col">Name of Award</th>
      <th scope="col">Particulars</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2010</td>
      <td>Business Award</td>
      <td>for impressive business activity</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2014</td>
      <td>Professional Award</td>
      <td>all kind of govt training</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2024</td>
      <td>President Award</td>
      <td>Tech award for IT sector</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  )
}

export default Award