import React from "react";


const FAQ = () => {
    const path =window.location.pathname
    return (
      <>
        
			<section className="accordion">
				<div className="container">
					<div className="col-md-12 col-sm-12">
						<div className="simple-tab">
							<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingOne">
										<h4 className="panel-title">
											<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											   Our Work Process
											</a>
										</h4>
									</div>
									<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
										<div className="panel-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue leo in congue mattis. Phasellus leo augue, consequat vitae cursus ut, efficitur a elit.</p>
										</div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingTwo">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												What We Do?
											</a>
										</h4>
									</div>
									<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
										<div className="panel-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue leo in congue mattis. Phasellus leo augue, consequat vitae cursus ut, efficitur a elit.</p>
										</div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingThree">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												How We Do?
											</a>
										</h4>
									</div>
									<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
										<div className="panel-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue leo in congue mattis. Phasellus leo augue, consequat vitae cursus ut, efficitur a elit.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
);
}

export default FAQ;