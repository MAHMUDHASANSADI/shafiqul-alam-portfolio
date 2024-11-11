import React from 'react'
import { useInternalLink } from '@/utils/helper';
import { useEffect, useState } from 'react';
import api from '@/utils/axiosConfig';
import '../../../css/frontendasset/css/style.css';
function Hero() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      api.get('/hero')
      .then((response) => {
        setHeroes(response.data);
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
    <section className="staggered-animation-wrap">
    <div className="container">
    	<div className="row justify-content-center">
        	<div className="col-xl-6 col-lg-8">
            	<div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                    <div className="heading_s1 text-center">
                        <h2 className="font_style1">Welcome to the Official Website of
                        Md. Shafiqul Alam</h2>
                    </div>
                    <p>" This site is like a diary of Mr. Shafiqul Alam where he shares about his dream, activities, experience with all."</p>
                </div>
            </div>
        </div>
        <div className="row">
            {heroes.map((hero) => (
            <div className="col-lg-4 col-md-6" >
                <div className="icon_box text-center bg_danger text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                	<div className="box_icon bg-white mb-3">
                		<i className="fa fa-book text_danger"></i>
                        <img src="{useInternalLink(hero?.image)}" alt="{`Heroes ${hero.id}`}"  />

                    </div>
                    <div className="intro_desc">
                        <h5 key={hero.id}>{hero.title}</h5>
                        <p key={hero.id}>{hero.description}
                        </p>
                    </div>
                </div>
            </div>
            ))}

            
            {/* <div className="col-lg-4 col-md-6">
            	<div className="icon_box text-center bg_blue2 text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                	<div className="box_icon bg-white mb-3">
                        <i className="fa fa-graduation-cap text_blue2"></i>
                    </div>
                    <div className="intro_desc">
                        <h5>Scholarship</h5>
                        <p>Explore a range of scholarships designed to support your educational journey. Whether you're looking for merit-based awards or need-based assistance, the 'Scholarship' cart offers opportunities to help you achieve your academic goals. Start unlocking your potential today!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
            	<div className="icon_box text-center bg_orange text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                	<div className="box_icon bg-white mb-3">
                		<i className="fa fa-globe text_orange"></i>
                    </div>
                    <div className="intro_desc">
                        <a href="https://ctti.com.bd/"><h5>Learn Courses Online</h5></a> 
                        <p>Discover a variety of online courses designed to help you learn new skills and advance your career. Whether you're a beginner or looking to expand your expertise, the 'Learn Online Course' cart offers flexible and accessible learning opportunities for everyone</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
            	<div className="icon_box text-center bg_light_green text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                	<div className="box_icon bg-white mb-3">
                        <i className="fa fa-user-tie text_light_green"></i>
                    </div>
                    <div className="intro_desc">
                        <h5>Expert Instructors</h5>
                        <p>Learn from the best with the 'Expert Instructor' cart, featuring top professionals ready to guide you through your educational journey. Gain valuable insights and skills from experienced instructors in various fields</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
            	<div className="icon_box text-center bg_light_navy text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                	<div className="box_icon bg-white mb-3">
                        <i className="fa fa-headphones-alt text_light_navy"></i>
                    </div>
                    <div className="intro_desc">
                        <h5>Annual Programs</h5>
                        <p>Join our 'Annual Program' cart to access a comprehensive selection of courses, workshops, and events throughout the year. Designed to enhance your skills and knowledge, this program offers valuable opportunities for personal and professional growth</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
            	<div className="icon_box text-center bg_pink text_white icon_box_style3 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                	<div className="box_icon bg-white mb-3">
                        <i className="fa fa-child text_pink"></i>
                    </div>
                    <div className="intro_desc">
                        <a href="https://www.saco.com.bd/"><h5>CA Professional</h5></a>
                        <p>Elevate your career with the 'CA Professional' cart, featuring specialized resources, courses, and support tailored for Chartered Accountants. Whether you're preparing for exams or seeking to enhance your skills, find everything you need to excel in your profession</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    {/* <div className="ol_shape20">
        <div className="staggered-animation" data-animation="bounceInDown" data-animation-delay="0.1s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape20.png" alt="shape20"/>
        </div>
    </div>
    <div className="ol_shape21">
        <div className="staggered-animation" data-animation="bounceInUp" data-animation-delay="0.2s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape21.png" alt="shape21"/>
        </div>
    </div>
    <div className="ol_shape22">
        <div className="staggered-animation" data-animation="bounceInRight" data-animation-delay="0.3s">
            <img data-parallax='{"y": 30, "smoothness": 20}' src="assets/images/shape22.png" alt="shape22"/>
        </div>
    </div>
    <div className="ol_shape23">
        <div className="staggered-animation" data-animation="bounceInUp" data-animation-delay="0.4s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape23.png" alt="shape23"/>
        </div>
    </div>
    <div className="ol_shape24">
        <div className="staggered-animation" data-animation="bounceInLeft" data-animation-delay="0.5s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape24.png" alt="shape24"/>
        </div>
    </div>
    <div className="ol_shape25">
        <div className="staggered-animation" data-animation="bounceInDown" data-animation-delay="0.6s">
            <img data-parallax='{"y": 30, "smoothness": 20}' src="assets/images/shape25.png" alt="shape25"/>
        </div>
    </div>
    <div className="ol_shape26">
        <div className="staggered-animation" data-animation="bounceInLeft" data-animation-delay="0.7s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape26.png" alt="shape26"/>
        </div>
    </div>
    <div className="ol_shape27">
        <div className="staggered-animation" data-animation="bounceInLeft" data-animation-delay="0.7s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape27.png" alt="shape27"/>
        </div>
    </div>
    <div className="ol_shape28">
        <div className="staggered-animation" data-animation="bounceInLeft" data-animation-delay="0.7s">
            <img data-parallax='{"y": -30, "smoothness": 20}' src="assets/images/shape28.png" alt="shape28"/>
        </div>
    </div> */}
</section> 
    </>
  )
}
export default Hero;
