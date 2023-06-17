import React from 'react'
import './NavBar.css'
import tlogo from './img/tlogo.png';
import Modal from 'react-modal';
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const NavBar = (props) => {
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    const [boardName, setBoardName] = useState('');
    const navigate = useNavigate();
    const [boardLinks, setBoardLinks] = useState([]);
    const openCreateBoardModal = () => {
        setShowCreateBoardModal(true);
    };

    const closeCreateBoardModal = () => {
        setShowCreateBoardModal(false);
        setBoardName('');
    };

    // const handleCreateBoard = () => {
    //     // Handle the logic to create a new board using the boardName
    //     navigate(`/board/${boardName}`);
    //     closeCreateBoardModal();
    // };
    const handleCreateBoard = () => {
        const newBoardLink = `/board/${boardName}`;
        setBoardLinks([...boardLinks, newBoardLink]);
        navigate(newBoardLink);
        closeCreateBoardModal();
      };

      useEffect(() => {
        localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
      }, [boardLinks]);

    return (
        <div className='navbar'>
            <div className='container'>
                <img src={tlogo} className='logo' alt='logo' />
                <div className='container2'>
                    <div className='searchbar'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <button className='createbutton' onClick={openCreateBoardModal}>+ Create new board</button>
                </div>
            </div>

            <Modal
                isOpen={showCreateBoardModal}
                onRequestClose={closeCreateBoardModal}
                contentLabel='Create Board'
                className='create-board-modal'
            >
                <div className='text1'>
                    <h2 style={{ textAlign: 'center' }}>Add a Name for Your Board</h2>
                    <button className="close-button" onClick={closeCreateBoardModal}>
                    </button>
                </div>
                <input
                    type='text'
                    placeholder='Enter board name'
                    value={boardName}
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <br />
                <button className="create-button" onClick={handleCreateBoard} >Create Board</button>
            </Modal>

        </div>
    )
}
