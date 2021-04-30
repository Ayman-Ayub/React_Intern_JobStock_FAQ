import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
     <footer className="footer">
				<div className="row lg-menu">
					<div className="container">
						<div className="col-md-4 col-sm-4">
							<img src="assets/img/footer-logo.png" className="img-responsive" alt="" /> 
						</div>
						<div className="col-md-8 co-sm-8 pull-right">
							<ul>
								<li><Link to="index-2.html" title="">Home</Link></li>
								<li><Link to="blog.html" title="">Blog</Link></li>
								<li><Link to="404.html" title="">404</Link></li>
								<li><Link to="faq.html" title="">FAQ</Link></li>
								<li><Link to="contact.html" title="">Contact Us</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row no-padding">
					<div className="container">
						<div className="col-md-3 col-sm-12">
							<div className="footer-widget">
							<h3 className="widgettitle widget-title">About Job Stock</h3>
							<div className="textwidget">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
							<p>7860 North Park Place<br></br>
							San Francisco, CA 94120</p>
							<p><strong>Email:</strong> Support@careerdesk</p>
							<p><strong>Call:</strong> <a href="tel:+15555555555">555-555-1234</a></p>
							<ul className="footer-social">
								<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
								<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
								<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
								<li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
								<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
							</ul>
							</div>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
							<h3 className="widgettitle widget-title">All Navigation</h3>
							<div className="textwidget">
								<div className="textwidget">
								<ul className="footer-navigation">
									<li><Link to="manage-company.html" title="">Front-end Design</Link></li>
									<li><Link to="manage-company.html" title="">Android Developer</Link></li>
									<li><Link to="manage-company.html" title="">CMS Development</Link></li>
									<li><Link to="manage-company.html" title="">PHP Development</Link></li>
									<li><Link to="manage-company.html" title="">IOS Developer</Link></li>
									<li><Link to="manage-company.html" title="">Iphone Developer</Link></li>
								</ul>
							</div>
							</div>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
							<h3 className="widgettitle widget-title">All Categories</h3>
							<div className="textwidget">
								<ul className="footer-navigation">
									<li><Link to="manage-company.html" title="">Front-end Design</Link></li>
									<li><Link to="manage-company.html" title="">Android Developer</Link></li>
									<li><Link to="manage-company.html" title="">CMS Development</Link></li>
									<li><Link to="manage-company.html" title="">PHP Development</Link></li>
									<li><Link to="manage-company.html" title="">IOS Developer</Link></li>
									<li><Link to="manage-company.html" title="">Iphone Developer</Link></li>
								</ul>
							</div>
							</div>
						</div>
							
						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
							<h3 className="widgettitle widget-title">Connect Us</h3>
							<div className="textwidget">
							<form className="footer-form">
								<input type="text" className="form-control" placeholder="Your Name"></input> 
								<input type="text" className="form-control" placeholder="Email"></input>
								<textarea className="form-control" placeholder="Message"></textarea>
								<button type="submit" className="btn btn-primary">Login</button>
							</form>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row copyright">
					<div className="container">
						<p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
					</div>
				</div>
			</footer>
			
    </>
  );
};
export default Footer;
