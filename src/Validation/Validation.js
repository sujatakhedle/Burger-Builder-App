import  React from 'react';

const validation = (props) => {
	let validationMessage = "Text too Short!";

	 if (props.inputLength >= 5) {
	    validationMessage ="Text long enough";
	 }

	return ( 
	<div>
		<p>{validationMessage}</p>
	</div>
	);

};

export default validation;