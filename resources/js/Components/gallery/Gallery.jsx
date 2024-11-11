import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import { useInternalLink } from '@/utils/helper';
import api from '@/utils/axiosConfig';
import { Carousel } from 'react-bootstrap';
import '../../../css/frontendasset/css/style.css';

function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/gallery')
      .then((response) => {
        setGalleries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching gallery', error);
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
                        <h2 className="font_style1">Our Gallery</h2>
                    </div>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    <div className="small_divider"></div>
                </div>
            </div>
            
        </div>
        <Carousel data-bs-theme="dark">
            {galleries.map((gallery) => (
            <Carousel.Item key={gallery.id}>
                <div className="carousel-image-wrapper">
                <img
                    src={useInternalLink(gallery?.image)}
                    alt={`Galleries ${gallery.id}`}
                    className="carousel-image"
                />
                </div>
            </Carousel.Item>
            ))}
        </Carousel>
        </div>
      
    </section>
  );
}

export default Gallery;
