import React from 'react'
import About from '../Commponents/About'
import OurVision from '../Commponents/OurVision'
import PlatformSection from '../Commponents/PlatformSection'
import AboutSection from '../Commponents/AboutSection'
import Team from '../Commponents/OurTeam'
import PartnerCompanies from '../Commponents/PartnerCompanies'

function AboutUs() {
  return (
    <div>
      <OurVision />
      <AboutSection />
      <About />
      <Team />
      <PartnerCompanies />
      <PlatformSection />
    </div>
  )
}

export default AboutUs
