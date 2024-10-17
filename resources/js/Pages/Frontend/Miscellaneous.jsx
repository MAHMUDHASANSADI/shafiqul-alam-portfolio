import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Miscellaneous1 from '@/Components/award&honor/Miscellaneous'


const Recognition = () => {
    return(
     <>
     
     <Head title='Miscellaneous' />
    <Topheader />
    <Navsec />
    <Miscellaneous1/>
    <Footer/>
    </>   
     
    )
}

export default Recognition