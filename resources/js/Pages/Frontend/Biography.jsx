import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Vision from '../../Components/vision/Vision'
import Biographies from '@/Components/biography/biography'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Biography = () => {
  return (
    <>
    <Head title='Biography' />
    <Topheader />
    <Navsec />
    <Biographies />
    <Footer/>
    </>
  )
}

export default Biography