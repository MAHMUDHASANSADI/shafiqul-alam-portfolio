import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Print1 from '@/Components/news/Print1'
const Recognition = () => {
    return(
     <>
     
    <Head title='News' />
    <Topheader />
    <Navsec />
    <Print1/>
    <Footer/>
    </>   
     
    )
}

export default Recognition