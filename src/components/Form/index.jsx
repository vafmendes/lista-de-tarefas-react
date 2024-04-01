// eslint-disable-next-line no-unused-vars
import React from 'react';

import PropTypes from 'prop-types';

import './Form.css';

// Form
import { FaPlus} from 'react-icons/fa';

export default function Form({handleChange, handleSubmit, novaTarefa}) {
    return(
        <form onSubmit={handleSubmit} className="form" action="#">
            <input
                onChange={handleChange}
                type="text"
                value={novaTarefa} 
                placeholder="Digite o que irá planejar..." />
            <button className='button-85' type="submit">
                <FaPlus />
            </button>
        </form>
    );
}


Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}