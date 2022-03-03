import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjThree } from './Data'
import Pricing from '../../Pricing'



function Signup() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />

        </>
    )
}


export default Signup;