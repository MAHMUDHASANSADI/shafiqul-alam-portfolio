import Navsec from '@/Components/navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import Topheader from '@/Components/topHeader/Topheader'
import Footer from '@/Components/footer/Footer'
import Bizz from './../../Components/BusinessActivity/Bizz';
const Bizzsol = () => {
  return (
    <>
    <Head title='Bizz Solution' />
    <Topheader />
    <Navsec />
    <Bizz />
    <Footer/>
    </>
  )
}

export default Bizzsol