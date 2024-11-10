import React, { useEffect, useState } from 'react';
import api from '../../utils/axiosConfig'; // Adjust the import path as needed

function Biographies() {
    const [biographies, setBiographies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        api.get('/biography')
            .then((response) => {
                setBiographies(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching biographies:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
        {/* // <div>
        //     <h1>Biographies</h1>
        //     <ul>
        //         {biographies.map((biography) => (
        //             <li key={biography.id}>{biography.description}</li>
        //         ))}
        //     </ul>
        // </div> */}
        <div className="footer_dark bg_light_navy background_bg bg_fixed mb-4">
        <h1 className="text-center pt-4">Biography</h1>
      </div>
      <div className="container vision_P text_justify">
        <p>
        {biographies.map((biography) => (
                    <li key={biography.id}>{biography.description}</li>
                 ))}
          <br />
          The economical sustainability of our country is possible through ensuring quality education for all, developing skilled human resources and Entrepreneurs.He has a passionate belief in the power of young generation and therefore he is giving importance in developing them.
          <br />
          His “ethical” business sense led him to move into the private education sector with a view to serve the society.  He is working hard to develop the Education Systems and bringing quality education at the reach of general people. With this vision, he opened up opportunity for Rural Students to get access to private education sector <br /> which is very costly in compare to public institutions in Bangladesh. Already Daffodil Education Network is offering Play Group to Post Graduate Level study and highly focused on technical and entrepreneurial education along with general education systems. It has been seen that at Daffodil Education Network 75% students are from Rural Area. He has a dream to set a Medical College and an institution for the disadvantage community under Daffodil Group. Daffodil Education Network is working for the Internationalization of Education Systems and gradually updating the systems and standard.

          This is an example <br /> to follow by others. Through Education & Training he is paying effort to alleviate poverty by helping the human resources becoming self dependent/job ready.

          Instead of the trend and practices looking to “take a job,” <br />he wants to change it as seek to “make a job.”His vision is to create Entrepreneurs. He could foresee the importance of entrepreneurship education as our local, regional, and global marketplaces face economic challenges and transitions. Through his education ventures he is creating and nurturing a learning environment that promotes entrepreneurial traits and behaviors, such as becoming creative and independent thinkers, assuming responsibility, and valuing diversity.

          He has contribution in developing the ICT <br />Sector as well. He brought much innovative Idea in ICT Businesses and created the awareness among people. He promoted the use of ITES and ensured practices in his own organization to set an example. He is among those who brought the dream of dominating the Outsourcing World and therefore he first set up the first computer training institute in Bangladesh. He brought innovative idea in business process as well.

          Mr. Shafiqul Alam has a vision to take Daffodil in all <br />possible regions of the World. Already Group started operation in Malaysia, UK, USA, and Dubai and very soon Daffodil Group will extend its operation in other region of the world as well.
        </p>
      </div>
      </>
    );
}

export default Biographies;
