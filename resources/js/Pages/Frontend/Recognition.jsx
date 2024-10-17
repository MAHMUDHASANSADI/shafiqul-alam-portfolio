import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Award1 from '@/Components/award&honor/Award'
import Degree1 from '@/Components/award&honor/Degree'
import Recognition1 from '@/Components/award&honor/Recognition'
import Vision from '../../Components/vision/Vision'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Recognition = () => {
    return(
     <>
     
     <Head title='Experiences' />
    <Topheader />
    <Navsec />
    <div className='container'>
    <Recognition1/></div>
    


    <Footer/>
    </>
     
     
     
    )
}

export default Recognition