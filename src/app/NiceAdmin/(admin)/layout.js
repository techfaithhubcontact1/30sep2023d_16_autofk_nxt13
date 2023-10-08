"use client"

//1. Import Area
import Header from '../../../../Components/Layouts/Header'
import Aside from '../../../../Components/Layouts/Aside'
import Footer from '../../../../Components/Layouts/Footer'


import {usePathname} from 'next/navigation'

//2. defination area 
function AdminDashboardLayout({children,}) {

   const pathname =  usePathname();

   const title = pathname.split('/').pop().toUpperCase();

  return (
      <>
          <Header />

          <Aside />

          <main id="main" className="main">
            <div className="pagetitle">
              <h1> {title} </h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active"> {title} </li>
                    </ol>
                </nav>
            </div>
            {children}
          </main>

          <Footer />
      </>
  )
}

//3.export area 
//3.1 default export
export default AdminDashboardLayout;