import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Award1 from '@/Components/award&honor/Award'
import Degree1 from '@/Components/award&honor/Degree'
import Vision from '../../Components/vision/Vision'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Degree = () => {
    return(
     <>
     
     <Head title='Degree' />
    <Topheader />
    <Navsec />
    <Degree1/>
    <Footer/>
    </>
     
     
     
    )
}

export default Degree