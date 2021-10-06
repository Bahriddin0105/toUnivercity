import React, { Component } from 'react'
import styled from 'styled-components';
import ChartDoughnut from './chart';
const  Natija = ({category}) => {
		return (
			<Main>
				<ChartDoughnut category={category}/>
				{/* <div className="container">

<h1 className="text-center m-5">Results</h1>
<div className="d-flex justify-content-between align-items-center p-3">
<h2 className='result'>Technology</h2>

<h2>80% interest level</h2>
</div>

<div className="mt-5">
	<h4>Results</h4>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Molestiae fugit corporis dolores, in error iure ducimus
		  ut quos eos facere nobis enim et at debitis impedit qui
		 consequatur voluptatem earum accusamus veniam dolore eius culpa corrupti id! Accusantium, itaque ducimus!
		 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore explicabo est cumque ad a doloribus
		  repellendus minus quos error sequi!</p>
</div>
<div className="mt-5">
	<h4>For Students</h4>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Molestiae fugit corporis dolores, in error iure ducimus
		  ut quos eos facere nobis enim et at debitis impedit qui
		 consequatur voluptatem earum accusamus veniam dolore eius culpa corrupti id! Accusantium, itaque ducimus!
		 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore explicabo est cumque ad a doloribus
		  repellendus minus quos error sequi!</p>
</div>
<div className="mt-5">
	<h4>For Parents</h4>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Molestiae fugit corporis dolores, in error iure ducimus
		  ut quos eos facere nobis enim et at debitis impedit qui
		 consequatur voluptatem earum accusamus veniam dolore eius culpa corrupti id! Accusantium, itaque ducimus!
		 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore explicabo est cumque ad a doloribus
		  repellendus minus quos error sequi!</p>
</div>
<div className="mt-5">
	<h4>Careers</h4>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		 Molestiae fugit corporis dolores, in error iure ducimus
		  ut quos eos facere nobis enim et at debitis impedit qui
		 consequatur voluptatem earum accusamus veniam dolore eius culpa corrupti id! Accusantium, itaque ducimus!
		 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore explicabo est cumque ad a doloribus
		  repellendus minus quos error sequi!</p>
</div>
</div>

<div className="d-flex justify-content-evenly mt-5">
	<button className="btn btn-primary mx-4">Recommendations</button>
	<button className="btn btn-primary mx-4">Universities</button>
	<button className="btn btn-primary mx-4">Career Information</button>
	<button className="btn btn-primary mx-4">Print Results</button>
</div> */}
			</Main>
		)
	}

const Main = styled.div`
/* display: none; */
	background: linear-gradient(#ffffff, #00d4ff);
	height: auto;
	padding-bottom: 40px;
	font-size: 16px;
`;

export default Natija;
