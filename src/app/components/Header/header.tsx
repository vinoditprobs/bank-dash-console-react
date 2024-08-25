'use client'
import React, { useState, useRef } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import Image from 'next/image';
import bankDashLogo from '/public/images/bank-dash.svg';
import profilePic from '/public/images/profile-pic.png';
import './header.scss'

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const notificationRef = useRef<any>(null);
    const profileRef = useRef<any>(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <>
            <div className="navigation_bar" >
                <div className="container-fluid h-100" >
                    <div className="row gx-lg-5 h-100 align-items-center " >
                        <div className="col aside_col h-100" >
                            <div className="h-100 d-flex align-items-center " >
                                <div className="main_logo full" >
                                    <Image src={bankDashLogo} alt="Profile" />
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="row gx-lg-5 align-items-center" >
                                <div className="col-sm-12 col-md-4 d-none d-md-block" >
                                    {/*<h4 className="mb-0" >{{pageName}}</h4> */}
                                </div>
                                <div className="col-sm-12 col-md-8 text-end " >
                                    <div className="d-inline-flex align-items-center gap-2" >
                                        <div className="d-inline-block d-none d-md-inline-block"  >
                                            <IconField iconPosition="left">
                                                <InputIcon className="pi pi-search text-blue-light" />
                                                <InputText type="text" placeholder="Search for something" />
                                            </IconField>
                                        </div>
                                        <button className="clear d-block d-md-none" >
                                            <span className="p_icon rounded bg-primary-light" ><i className="pi pi-search" ></i></span>
                                        </button>
                                        <button className="clear" >
                                            <span className="p_icon rounded bg-primary-light" ><i className="pi pi-cog" ></i></span>
                                        </button>
                                        <div className="d-inline-block" >
                                            <button onClick={(e) => notificationRef.current.toggle(e)} className="clear" >
                                                <span className="p_icon rounded bg-primary-light text-danger" ><i className="pi pi-bell" ></i></span>
                                            </button>

                                            <OverlayPanel ref={notificationRef} showCloseIcon >
                                                <div className="notification_wrapp" >
                                                    <div className="mb-3" >
                                                        <h6>Notification</h6>
                                                    </div>
                                                    <ul className="list " >
                                                        <li className="mb-2" >
                                                            <div className="card bordered px-3 py-3 rounded-4" >
                                                                <h6 className="fs-7 fw-medium mb-2" >Lorem Ipsum</h6>
                                                                <div className="row justify-content-between " >
                                                                    <div className="col-auto" ><p className="fs-7" >Lorem Ipsum</p></div>
                                                                    <div className="col-auto" ><p className="fs-7" >1d ago</p></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-2" >
                                                            <div className="card bordered px-3 py-3 rounded-4" >
                                                                <h6 className="fs-7 fw-medium mb-2" >Lorem Ipsum</h6>
                                                                <div className="row justify-content-between " >
                                                                    <div className="col-auto" ><p className="fs-7" >Lorem Ipsum</p></div>
                                                                    <div className="col-auto" ><p className="fs-7" >1d ago</p></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-2" >
                                                            <div className="card bordered px-3 py-3 rounded-4" >
                                                                <h6 className="fs-7 fw-medium mb-2" >Lorem Ipsum</h6>
                                                                <div className="row justify-content-between " >
                                                                    <div className="col-auto" ><p className="fs-7" >Lorem Ipsum</p></div>
                                                                    <div className="col-auto" ><p className="fs-7" >1d ago</p></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li  >
                                                            <div className="card bordered px-3 py-3 rounded-4" >
                                                                <h6 className="fs-7 fw-medium mb-2" >Lorem Ipsum</h6>
                                                                <div className="row justify-content-between " >
                                                                    <div className="col-auto" ><p className="fs-7" >Lorem Ipsum</p></div>
                                                                    <div className="col-auto" ><p className="fs-7" >1d ago</p></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </OverlayPanel>


                                        </div>
                                        <div className="d-inline-block" >
                                            <button onClick={(e) => profileRef.current.toggle(e)} className="clear" >
                                                <span className="p_icon rounded lg" ><Image src={profilePic} alt='Profile' /> </span>
                                            </button>
                                            <OverlayPanel ref={profileRef} >
                                                <div className="" >
                                                    <figure className="d-flex mb-4 align-items-center" >
                                                        <span className="p_icon rounded lg flex-shrink-0" > <Image src={profilePic} alt='Profile' /></span>

                                                        <figcaption className="ps-2" >
                                                            <p className="fw-medium mb-1 fs-7" >Grace John</p>
                                                            <p className="fw-light fs-7" >+91 9827839223 | gracejohn&#64;gmail.com</p>
                                                        </figcaption>
                                                    </figure>
                                                    <ul className="list bordered" >
                                                        <li>
                                                            <a href="" className="link" >Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className="link"  >Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="" className="link"  >Menu 1</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </OverlayPanel>
                                        </div>
                                        <div className="d-inline-flex d-block d-md-none" >
                                            <button className="clear" onClick={toggleMenu} >
                                                <span className="p_icon lg rounded bg-blue-light text-blue " >
                                                    <i className={`pi ${isMenuVisible ? 'pi-times' : 'pi-bars'}`} ></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className={`aside_nav ${isMenuVisible ? 'active' : ''}`} >
                <div className="main_logo_wrapp" >
                    <div className="main_logo full" >
                        <Image src={bankDashLogo} alt='BankDash' />
                    </div>
                </div>
                <nav className="main_menu" >
                    {/*  <p-panelMenu [model]="items"  /> */}
                </nav>
            </aside>
            <div className="page_title d-block d-md-none" >
                <div className="container-fluid py-3" >
                    <div className="row" >
                        <div className="col-sm-12" >
                            {/*<h4 className="mb-0" >{{pageName}}</h4> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`overlay ${isMenuVisible ? 'active' : ''}`}> </div>
        </>
    )
}

export default Header;
