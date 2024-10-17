import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Vision from '../../Components/vision/Vision'
import Firm from '../../Components/BusinessActivity/CA'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const firm = () => {
  return (
    <>
    <Head title='firm' />
    <Topheader />
    <Navsec />
    <Firm />
    <Footer/>
    </>
  )
}

export default firm