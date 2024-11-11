import { useInternalLink } from '@/utils/helper';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import api from '@/utils/axiosConfig';
import '../../../css/frontendasset/css/style.css';
import './banner.module.css';

function Sliders() {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      api.get('/slider')
      .then((response) => {
        setSliders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching slider', error);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <p>Loading....</p>;
    }

    return (
      <Carousel data-bs-theme="dark">
        {sliders.map((slider) => (
          <Carousel.Item key={slider.id}>
            <div className="carousel-image-wrapper">
              <img
                src={useInternalLink(slider?.image)}
                alt={`Slider ${slider.id}`}
                className="carousel-image"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
}

export default Sliders;
