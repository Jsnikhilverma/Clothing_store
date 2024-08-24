import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/navbar/Navbar'
import Men from './component/Men/Men'
import Menpants from './component/Men/Menpants'
import Women from './component/women/Women'
import Kids from './component/kids/Kids'
import Footer from './component/footer/Last'
import LogIn from './component/profile/LogIn'
import SignUp from './component/profile/SignUp'
const App = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Men/>
      <Menpants/>
      <Women/>
      <Kids/>
      <LogIn/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default App
