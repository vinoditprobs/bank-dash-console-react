import Link from "next/link"

const Dashboard = () => {
    return(
       <main>
         <section>
            <div  className="container">
                <div className="row" >
                    <div className="col-sm-12" >
                        <h1>Dashboard</h1>
                        <p>Click here to go <Link href="/loans" >Loans</Link> Page</p>
                    </div>
                </div>
            </div>
         </section>
       </main>
    )
}
export default Dashboard