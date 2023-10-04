import {
  createBrowserRouter, 
   Route,
    createRoutesFromElements,
    RouterProvider} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Careers, { careersLoader } from './pages/careers/Career'

//Layouts
import RootLayout from './Layouts/RootLayout'
import HelpLayout from './Layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contact, { contactA } from './pages/help/Contact'
import Notfound from './pages/404/Notfound'
import CareersLayout from './Layouts/CareerLayouts'
import CareersDeatails, { careersDeatailsLoader } from './pages/careers/CareersDetails'
import Careernoid from './pages/careers/Careernoid'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element= {<Home />}/>
        <Route path="about" element= {<About />}/>
        <Route path="help"  element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />} action={contactA}/>
        </Route>

        <Route path="careers" element={<CareersLayout />}  errorElement={<Careernoid />} >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route path=":id" element={<CareersDeatails />} loader={careersDeatailsLoader} />
        </Route>

        <Route path='*' element={<Notfound/>}/>
      </Route>
  )
)

function App() {
  return (
  
    
   <RouterProvider  router={router}/>
  );
}

export default App
