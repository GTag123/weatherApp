import React from 'react';

function Form (props) {
	return (
    	<form onSubmit={props.weatherMethod} className='form-inline'>
    		<div className='form-group w-100'>
				<input type="text" name="city" placeholder="Город" className="form-control col-7" />
				<input type="submit" value="Получить погоду" className="btn btn-primary offset-1 col-4" />
			</div>
    	</form>
    );
}
export default Form;