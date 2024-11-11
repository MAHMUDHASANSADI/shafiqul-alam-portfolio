import React, { useEffect, useState } from 'react';
import { useInternalLink } from '@/utils/helper';
import api from '@/utils/axiosConfig';
import '../../../css/frontendasset/css/style.css';

function Blog() {
  const [newses, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/news')
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching news', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="bg_linen">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
              <div className="heading_s1 text-center">
                <h2 className="font_style1">Recent News</h2>
              </div>
              <p>Stay updated with the latest happenings and announcements</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {newses.map((news) => (
            <div className="col-lg-4 col-md-6" key={news.id}>
              <div className="blog_post box_shadow1 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <div className="blog_img radius_ltrt_10">
                  <a href="https://www.tbsnews.net/economy/corporates/bizz-solutions-wins-presidents-industrial-award-858906">
                    <div className="link_blog">
                      <span className="ripple"><i className="fa fa-link"></i></span>
                    </div>
                    <img src={useInternalLink(news?.image)} alt={`News ${news.id}`} />
                  </a>
                </div>
                <div className="blog_content bg-white">
                  <h6 className="blog_title"><a href="#">President Award</a></h6>
                  <p>Chairman, Bizz Solutions Plc got 2021 tech president award</p>
                  <a href="https://www.tbsnews.net/economy/corporates/bizz-solutions-wins-presidents-industrial-award-858906" className="text-capitalize">Read More</a>
                </div>
                <div className="blog_footer bg-white radius_lbrb_10">
                  <ul className="list_none blog_meta">
                    <li><a href="https://www.tbsnews.net/economy/corporates/bizz-solutions-wins-presidents-industrial-award-858906"><i className="ion-calendar"></i>24 May, 2024</a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
