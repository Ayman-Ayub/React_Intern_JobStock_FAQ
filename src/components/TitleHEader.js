import React from "react";
import img1 from "../img/banner-10.jpg";


const TitleHeader = () => {
  return (
    <>
     <section className="inner-header-title" style={{backgroundImage:`url(${img1})`}}>
				<div className="container">
					<h1>FAQ</h1>
				</div>
			</section>
			
    </>
  );
};
export default TitleHeader;
