import React from "react";
import { Link } from "react-router-dom";
import A from "../img/logo.png"

const Navbar = () => {
    const path =window.location.pathname
    return (
      <>
        <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">
            <div className="container">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"> </i>
                </button>
                <div className="navbar-header">
                    <Link className="navbar-brand" to="index-2.html">
                        <img src={A} className="logo logo-scrolled" alt=""></img>
                        </Link>
                    </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                   
                        <li>
                            <Link to="login.html"> <i className="fa fa-pencil" aria-hidden="true"> </i>SignUp</Link>
                        </li>
                        <li>
                            <Link to="pricing.html"> <i className="fa fa-sign-in" aria-hidden="true"> </i>Pricing</Link>
                        </li>
                        <li className="left-br">
                            <Link to="javascript:void(0)" data-toggle="modal" data-target="#signup" className="signin">Sign In Now</Link>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li class="active"><input type="text" class="form-control" placeholder="Find Freelancer"></input></li>
                        <li className="dropdown megamenu-fw">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Brows</Link>
                            <ul className="dropdown-menu megamenu-content" role="menu">
                                <li>
                                    <div className="row">

                                        <div className="col-menu col-md-3">
                                            <h6 className="title">Main Pages</h6>
                                            <div className="content">
                                                <ul className="menu-col">
                                                    <li><Link to="index-2.html">Home Page 1</Link></li>
                                                    <li><Link to="index-3.html">Home Page 2</Link></li>
                                                    <li><Link to="index-4.html">Home Page 3</Link></li>
                                                    <li><Link to="index-5.html">Home Page 4</Link></li>
                                                    <li><Link to="index-6.html">Home Page 5</Link></li>
                                                    <li><Link to="freelancing.html">Freelancing</Link></li>
                                                    <li><Link to="signin-signup.html">Sign In / Sign Up</Link></li>
                                                    <li><Link to="search-job.html">Search Job</Link></li>
                                                    <li><Link to="accordion.html">Accordion</Link></li>
                                                    <li><Link to="tab.html">Tab Style</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-menu col-md-3">
                                            <h6 className="title">For Candidate</h6>
                                            <div className="content">
                                                <ul className="menu-col">
                                                    <li><Link to="browse-jobs.html">Browse Jobs</Link></li>
                                                    <li><Link to="browse-company.html">Browse Companies</Link></li>
                                                    <li><Link to="create-resume.html">Create Resume</Link></li>
                                                    <li><Link to="resume-detail.html">Resume Detail</Link></li>
                                                    <li><Link to="#">Manage Jobs</Link></li>
                                                    <li><Link to="job-detail.html">Job Detail</Link></li>
                                                    <li><Link to="browse-jobs-grid.html">Job In Grid</Link></li>
                                                    <li><Link to="candidate-profile.html">Candidate Profile</Link></li>
                                                    <li><Link to="manage-resume-2.html">Manage Resume 2</Link></li>
                                                    <li><Link to="company-detail.html">Company Detail</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-menu col-md-3">
                                            <h6 className="title">For Employer</h6>
                                            <div className="content">
                                                <ul className="menu-col">
                                                    <li><Link to="create-job.html">Create Job</Link></li>
                                                    <li><Link to="create-company.html">Create Company</Link></li>
                                                    <li><Link to="manage-company.html">Manage Company</Link></li>
                                                    <li><Link to="manage-candidate.html">Manage Candidate</Link></li>
                                                    <li><Link to="manage-employee.html">Manage Employee</Link></li>
                                                    <li><Link to="browse-resume.html">Browse Resume</Link></li>
                                                    <li><Link to="search-new.html">New Search Job</Link></li>
                                                    <li><Link to="employer-profile.html">Employer Profile</Link></li>
                                                    <li><Link to="manage-resume.html">Manage Resume</Link></li>
                                                    <li><Link to="new-job-detail.html">New Job Detail</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-menu col-md-3">
                                            <h6 className="title">Extra Pages <span className="new-offer">New</span></h6>
                                            <div className="content">
                                                <ul className="menu-col">
                                                    <li><Link to="freelancer-detail.html">Freelancer detail</Link></li>
                                                    <li><Link to="job-apply-detail.html">New Apply Job</Link></li>
                                                    <li><Link to="payment-methode.html">Payment Methode</Link></li>
                                                    <li><Link to="new-login-signup.html">New LogIn / SignUp</Link></li>
                                                    <li><Link to="freelancing-jobs.html">Freelancing Jobs</Link></li>
                                                    <li><Link to="freelancers.html">Freelancers</Link></li>
                                                    <li><Link to="freelancers-2.html">Freelancers 2</Link></li>
                                                    <li><Link to="premium-candidate.html">Premium Candidate</Link></li>
                                                    <li><Link to="premium-candidate-detail.html">Premium Candidate Detail</Link></li>
                                                    <li><Link to="blog-detail.html">Blog detail</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="blog.html">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="clearfix"></div>
        </>
);
}

export default Navbar