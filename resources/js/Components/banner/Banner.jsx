import { useEffect,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      api.get('/slider')
      .then((response)=>{
        setGalleries(response.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log('Error fetching slider',error);
        setLoading(false)
      })
    },[]);
    if (loading)
    {
      return <p>Loading....</p>
    }



  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        {sliders.map((slider) => (
          <img key={slider.id} src={`http://127.0.0.1:8000/${slider.image}`} alt={`Slider ${slider.id}`} />
        ))}
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/banner7.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/banner8.jpg"
        alt="Third slide"
      />
    </Carousel.Item> */}
  </Carousel>
  );
}

export default Sliders;