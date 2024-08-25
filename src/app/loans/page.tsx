
'use client'
import Image from "next/image"
import personalLoanImg from '/public/icons/personal-loan.svg';
import corporateLoanImg from '/public/icons/corporate-loan.svg';
import businessLoanImg from '/public/icons/business-loan.svg';
import customLoanImg from '/public/icons/custom-loan.svg';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Loans = () => {

    const products = [
      { sN: '01.', loanMony: '$100,000', leftRepay: '$40,500', duration: 10, interestRate: '12%', installment: '$2,000 / month' },
      { sN: '02.', loanMony: '$75,000', leftRepay: '$20,000', duration: 8, interestRate: '10%', installment: '$1,500 / month' },
      { sN: '03.', loanMony: '$50,000', leftRepay: '$15,000', duration: 5, interestRate: '8%', installment: '$1,000 / month' },
      { sN: '04.', loanMony: '$120,000', leftRepay: '$60,000', duration: 12, interestRate: '15%', installment: '$3,000 / month' }
     
    ];

    const renderRepayButton = (rowData: Record<string, any>) => (
        <button className="btn btn-outline-dark btn-md rounded-5 w-100">
          Repay
        </button>
      );

    return(
        <main>
        <div className="section" >
            <div className="container g-0" >
                <div  className="row g-3 mb-4">
                    <div  className="col-6 col-md-6 col-lg-3 mb-2">
                        <div className="card h-100" >
                           <figure className="d-flex align-items-center m-0" >
                            <span className="p_icon xl rounded bg-blue-light text-blue flex-shrink-0" >
                               <Image src={personalLoanImg} alt=""  className="w-50 h-auto"  /> 
                            </span>
                            <figcaption className="ps-3" >
                                <p className="text-blue-light" >Personal Loans</p>
                                <p className="fs-6 fw-semibold" >$50,000</p>
                            </figcaption>
                           </figure>
                        </div>
                    </div>
                    <div  className="col-6 col-md-6 col-lg-3 mb-2">
                        <div className="card h-100 " >
                            <figure className="d-flex align-items-center m-0" >
                             <span className="p_icon xl rounded bg-yellow-light text-yellow flex-shrink-0" >
                                
                                 <Image src={corporateLoanImg} alt=""  className="w-50 h-auto"  />
                             </span>
                             <figcaption className="ps-3" >
                                 <p className=" text-blue-light" >Corporate Loans</p>
                                 <p className="fs-6 fw-semibold" >$100,000</p>
                             </figcaption>
                            </figure>
                         </div>
                    </div>
                    <div  className="col-6 col-md-6 col-lg-3 mb-2">
                        <div className="card h-100" >
                            <figure className="d-flex align-items-center m-0" >
                             <span className="p_icon xl rounded bg-magenta-light text-magenta flex-shrink-0" >
                                 
                                 <Image src={businessLoanImg} alt=""  className="w-50 h-auto"  />
                             </span>
                             <figcaption className="ps-3" >
                                 <p className="text-blue-light" >Business Loans</p>
                                 <p className="fs-6 fw-semibold" >$500,000</p>
                             </figcaption>
                            </figure>
                         </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 mb-2">
                        <div className="card h-100" >
                            <figure className="d-flex align-items-center m-0" >
                             <span className="p_icon xl rounded bg-cyan-light text-cyan flex-shrink-0 " >
                                 
                                 <Image src={customLoanImg} alt=""  className="w-50 h-auto"  />
                             </span>
                             <figcaption className="ps-3" >
                                 <p className="text-blue-light" >Custom Loan</p>
                                 <p className="fs-6 fw-semibold" >Choose Money</p>
                             </figcaption>
                            </figure>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section" >
            <div className="container gx-0" >
                <div className="row mb-1" >
                    <div className="col-sm-12 " >
                        <h6>Active Loans Overview</h6>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-12 " >
                    <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="sN" header="SL No" footer="Total" ></Column>
                        <Column field="loanMony" header="Loan Money" footer="$125,0000" ></Column>
                        <Column field="leftRepay" header="Left to repay" footer="$750,000" ></Column>
                        <Column field="duration" header="duration" ></Column>
                        <Column field="interestRate" header="Interest Rate" ></Column>
                        <Column field="installment" header="Installment" footer="$50,000 / month" ></Column>
                        <Column header="Repay" body={renderRepayButton}></Column>
                    </DataTable>
         
    
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Loans