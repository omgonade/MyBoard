// import React, { useEffect, useState } from 'react';
// import './home.css';
// import boardimg from './img/boardimg.png';
// import { useNavigate } from 'react-router-dom';
// import { NavBar } from './NavBar';
// import boardData from './boarddata';
// export const Home = () => {
//   const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
//   const [boardName, setBoardName] = useState('');
//   const [boardLinks, setBoardLinks] = useState([]);
//   const [boards, setBoards] = useState(['Earth Changes & journey', 'Eating Right']);
//   const [showNavBar, setShowNavBar] = useState(false);
//   const navigate = useNavigate();
//   // const mergedBoards = [...boards, ...boardData];
//   // setBoards(mergedBoards);
//   const openCreateBoardModal = () => {
//     setShowCreateBoardModal(true);
//   };

//   const closeCreateBoardModal = () => {
//     setShowCreateBoardModal(false);
//     setBoardName('');
//   };


//   const handleCreateBoard = () => {
//     const newBoardLink = `/board/${boardName}`;
//     setBoardLinks([...boardLinks, newBoardLink]);
//     navigate(newBoardLink);
//     closeCreateBoardModal();
//   };

//   const handleDeleteBoard = (index) => {
//     boardData.splice(index,1);
//   };

//   useEffect(() => {
//     localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
//   }, [boardLinks]);

//   return (
//     <div className='home'>
//       <div className='content'>
//         Myboards
//         <div className='boards'>
//           {boards.map((board, index) => (
//             <div
//               key={index}
//               className='board'
//               onClick={() => navigate(`/board/${board}`)}
//             >
//               <img
//                 src={boardimg}
//                 style={{ height: '35px', width: '30px', marginRight: '10px' }}
//                 alt='Board Icon'
//               />
//               {index + 1}. {board}
//             </div>
//           ))}
//           {boardData.map((board,index)=>(
//             <div
//             key={index}
//             className='board'
//             onClick={() => navigate(`/board/${board}`)}
//           >
//             <img
//               src={boardimg}
//               style={{ height: '35px', width: '30px', marginRight: '10px' }}
//               alt='Board Icon'
//             />
//             {index + 3}. {board}
//             <button
//                 className='delete-button'
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteBoard(index);
//                 }}
//               >
//                 Delete
//               </button>
//           </div>
//           ))}
//         </div>
//       </div>      
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import './home.css';
import boardimg from './img/boardimg.png';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import boardData from './boarddata';
export const Home = () => {
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boardLinks, setBoardLinks] = useState([]);
  const [boards, setBoards] = useState(['Earth Changes & journey', 'Eating Right']);
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();
  const [boards2, setBoards2] = useState(boardData);
  // const mergedBoards = [...boards, ...boardData];
  // setBoards(mergedBoards);
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
          {boards2.map((board, index) => (
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
              {index + 3}. {board}              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};