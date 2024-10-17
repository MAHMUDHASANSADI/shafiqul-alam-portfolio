import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Award1 from '@/Components/award&honor/Award'
import Achivement1 from '@/Components/award&honor/Achivement'
import Vision from '../../Components/vision/Vision'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Achivement = () => {
    return(
     <>
     
     <Head title='Achievement' />
    <Topheader />
    <Navsec />
    <Achivement1/>
    <Footer/>
    </>
     
     
     
    )
}

export default Achivement