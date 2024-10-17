import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Award1 from '@/Components/award&honor/Award'
import Vision from '../../Components/vision/Vision'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Award = () => {
    return(
     <>
     
     <Head title='Award' />
    <Topheader />
    <Navsec />
    <Award1/>
    <Footer/>
    </>
     
     
     
    )
}

export default Award