import Navbar from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
// import Vision from '../../Components/vision/Vision'
import BizzSolutions1 from '../../Components/BusinessActivity/Bizz'
import SocialCommitment from '@/Components/vision/SocialCommitment'

const Bizz = () => {
  return (
    <>
    <Head title='BizzSolutionPlc' />
    <Topheader />
    <Navbar />
    <BizzSolutions1 />
    <Footer/>
    </>
  )
}

export default Bizz