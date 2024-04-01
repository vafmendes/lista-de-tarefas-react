// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Tarefas.css';

import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({tarefas, handleEdit, handleDelete}){
    return(
        <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
                {tarefa}
                <span>
                    <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                    <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
                </span>
            </li>
        ))}
    </ul>
    )
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}