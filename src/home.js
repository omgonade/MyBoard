
import React, { useEffect, useState } from 'react';
import './home.css';
import boardimg from './img/boardimg.png';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boardLinks, setBoardLinks] = useState([]);

  const navigate = useNavigate();

  const openCreateBoardModal = () => {
    setShowCreateBoardModal(true);
  };

  const closeCreateBoardModal = () => {
    setShowCreateBoardModal(false);
    setBoardName('');
  };

  const handleCreateBoard = () => {
    const newBoardLink = `/board/${boardName}`;
    setBoardLinks([...boardLinks, newBoardLink]);
    navigate(newBoardLink);
    closeCreateBoardModal();
  };

  useEffect(() => {
    localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
  }, [boardLinks]);

  const boards = ['Earth Changes & journey', 'Eating Right'];

  return (
    <div className='home'>
      <div className='content'>
        Myboards
        <div className='boards'>
          {boards.map((board, index) => (
            <div
              key={index}
              className='board'
              onClick={() => navigate(`/board/${board}`)}
            >
              <img
                src={boardimg}
                style={{ height: '35px', width: '30px', marginRight: '10px' }}
                alt='Board Icon'
              />
              {index + 1}. {board}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the code */}
    </div>
  );
};
