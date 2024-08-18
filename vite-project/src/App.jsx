import { useState } from 'react'
import './App.css'
import VerticalNavbar from './VerticalNavBar'
import Content from './Content'
import Expertise from './Expertise'
import StatsSection from './StatsSection'
import Education from './Education'
import WorkExperience from './workexperience'
import Project from './Project'
import Contact from './Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <VerticalNavbar/>
        <Content/>
        <Expertise/>
        <StatsSection/>
        <Education/>
        <WorkExperience/>
        <Project/>
        <Contact/>
       </div>
    </>
  )
}

export default App
