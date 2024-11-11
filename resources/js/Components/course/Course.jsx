import React from 'react'
import { useInternalLink } from '@/utils/helper';
import { useEffect, useState } from 'react';
import api from '@/utils/axiosConfig';
import '../../../css/frontendasset/css/style.css';

function Program() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      api.get('/program')
      .then((response) => {
        setPrograms(response.data);
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
                    {programs.map((program) => (
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="content_img radius_ltrt_10" key={program.id}>
                                    <a href="#"><img src={useInternalLink(program?.image)} alt={`Programs ${program.id}`} /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title" key={program.id}><a href="#">{program.title}</a></h4>
                                    <p key={program.id}>{program.description}</p>    
                                </div>

                            
                                <div className="content_footer justify-content-end" >
                                    <div className="price"  >
                                        <span className="alert alert-success" key={program.id}>BDT-{program.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                        
                        
                        
                </div >
                </div >
            </section >
        </>
  )
}

export default Program