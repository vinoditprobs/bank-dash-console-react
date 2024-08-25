'use client'
import Link from "next/link"
import { useEffect } from "react"
import { usePageTitleContext } from "../context/pageName"

const Dashboard = () => {

    const pageTitle = "Dashboard"
    const {setPageTitle} = usePageTitleContext()
    useEffect(()=>{setPageTitle(pageTitle)},[setPageTitle])  

    return(
       <main>
         <section>
            <div  className="container">
                <div className="row" >
                    <div className="col-sm-12" >
                        <p>Click here to go <Link href="/loans" >Loans</Link> Page</p>
                    </div>
                </div>
            </div>
         </section>
       </main>
    )
}
export default Dashboard