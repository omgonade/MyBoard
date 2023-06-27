// import React from 'react';
// import './NavBar.css';
// import tlogo from './img/LOGO2.jpg';
// import Modal from 'react-modal';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const NavBar = (props) => {
//   const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
//   const [boardName, setBoardName] = useState('');
//   const navigate = useNavigate();
//   const [boardLinks, setBoardLinks] = useState([]);

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

//   const openAboutMe=()=>{
//     const aboutme=`/AboutMe`;
//     navigate(aboutme);
//   }
//   const goToHome=()=>{
//     navigate(`/`);
//   }
//   useEffect(() => {
//     localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
//   }, [boardLinks]);

//   return (
//     <div className='navbar'>
//       <div className='container'>
//         <img src={tlogo} className='logo' alt='logo' onClick={goToHome}/>
//         <div className='container2'>
//           <div className='use'onClick={openAboutMe}>About Me</div>
//           <button className='btn createbutton' onClick={openCreateBoardModal}>
//             Create new board
//           </button>
//         </div>
//       </div>

//       <Modal
//         isOpen={showCreateBoardModal}
//         onRequestClose={closeCreateBoardModal}
//         contentLabel='Create Board'
//         className='create-board-modal'
//       >
//         <div className='text1'>
//           <h2 style={{ textAlign: 'center' }}>Add a Name for Your Board</h2>
//           <button className='close-button' onClick={closeCreateBoardModal}></button>
//         </div>
//         <input
//           type='text'
//           placeholder='Enter board name'
//           value={boardName}
//           onChange={(e) => setBoardName(e.target.value)}
//         />
//         <br />
//         <button className='create-button' onClick={handleCreateBoard}>
//           Create Board
//         </button>
//       </Modal>
//     </div>
//   );
// };
// 
// import React from 'react';
// import './NavBar.css';
// import tlogo from './img/LOGO2.jpg';
// import Modal from 'react-modal';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import boardData from './boarddata';
// export const NavBar = (props) => {
//   const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
//   const [boardName, setBoardName] = useState('');
//   const navigate = useNavigate();
//   const [boardLinks, setBoardLinks] = useState([]);

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
//     localStorage.setItem('boardName',JSON.stringify(boardName));
//     boardData.push(boardName);
//     navigate(newBoardLink);
//     closeCreateBoardModal();
//   };

//   const openAboutMe=()=>{
//     const aboutme=`/AboutMe`;
//     navigate(aboutme);
//   }
//   const goToHome=()=>{
//     navigate(`/`);
//   }
//   useEffect(() => {
//     localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
//   }, [boardLinks]);

//   console.log(boardData);
//   return (
//     <div className='navbar'>
//       <div className='container'>
//         <img src={tlogo} className='logo' alt='logo' onClick={goToHome}/>
//         <div className='container2'>
//           <div className='use'onClick={openAboutMe}>About Me</div>
//           <button className='btn createbutton' onClick={openCreateBoardModal}>
//             Create new board
//           </button>
//         </div>
//       </div>

//       <Modal
//         isOpen={showCreateBoardModal}
//         onRequestClose={closeCreateBoardModal}
//         contentLabel='Create Board'
//         className='create-board-modal'
//       >
//         <div className='text1'>
//           <h2 style={{ textAlign: 'center' }}>Add a Name for Your Board</h2>
//           <button className='close-button' onClick={closeCreateBoardModal}></button>
//         </div>
//         <input
//           type='text'
//           placeholder='Enter board name'
//           value={boardName}
//           onChange={(e) => setBoardName(e.target.value)}
//         />
//         <br />
//         <button className='create-button' onClick={handleCreateBoard}>
//           Create Board
//         </button>
//       </Modal>
//     </div>
//   );
// };
import React from 'react';
import './NavBar.css';
import tlogo from './img/LOGO2bgR.png';
import twlogo from './img/LOGO2bgRWhite.png';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import boardData from './boarddata';
import linicon from './img/LinkInIcon.png';
import gmicon from './img/icons8-gmail-50.png';
import leicon from './img/leeticon.png';
import giticon from './img/giticon.png';
export const NavBar = (props) => {
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
  const [boardName, setBoardName] = useState('');
  const navigate = useNavigate();
  const [boardLinks, setBoardLinks] = useState([]);
  const location = useLocation();
  const [isAboutMePage, setIsAboutMePage] = useState(false);

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
    localStorage.setItem('boardName', JSON.stringify(boardName));
    boardData.push(boardName);
    navigate(newBoardLink);
    closeCreateBoardModal();
  };

  const openAboutMe = () => {
    const aboutme = `/AboutMe`;
    navigate(aboutme);
  };

  const goToHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    localStorage.setItem('boardLinks', JSON.stringify(boardLinks));
  }, [boardLinks]);

  useEffect(() => {
    setIsAboutMePage(location.pathname === '/AboutMe');
  }, [location]);

  return (
    <div className='navbar'>
      {isAboutMePage ? (
        <div className='containerAbout'>
          <img src={twlogo} className='logo' alt='logo' onClick={goToHome} />
          <div className='container2'>
          <a href="mailto: om.gonade2001@gmail.com" target="_blank" style={{display:'flex'}}><img src={gmicon} style={{width:'5vh',height:'5vh'}}></img></a>  
          <a href="https://www.linkedin.com/in/om-anil-gonade-750466214/" target="_blank" style={{display:'flex',marginLeft:'5vh'}}><img src={linicon}style={{width:'5vh',height:'5vh'}}></img></a>
          <a href="https://leetcode.com/user3088wi/" target="_blank" style={{display:'flex',marginLeft:'5vh'}}><img src={leicon} style={{width:'5vh',height:'5vh'}}></img></a>
          <a href="https://github.com/omgonade" target="_blank" style={{display:'flex',marginLeft:'5vh'}}><img src={giticon} style={{width:'5vh',height:'5vh'}}></img></a>
          </div>
        </div>
      ) : (
        <div className='container'>
          <img src={tlogo} className='logo' alt='logo' onClick={goToHome} />
          <div className='container2'>
            <div className='use' onClick={openAboutMe}>
              About Me
            </div>
            <button className='btn createbutton' onClick={openCreateBoardModal}>
              Create new board
            </button>
          </div>
        </div>
      )}
  
      <Modal
        isOpen={showCreateBoardModal}
        onRequestClose={closeCreateBoardModal}
        contentLabel='Create Board'
        className='create-board-modal'
      >
        <div className='text1'>
          <h2 style={{ textAlign: 'center',color:'white',fontFamily:"Ysabeau Infant",fontSize:'3vh'}}>Add a Name for Your Board</h2>
          <button className='close-button' onClick={closeCreateBoardModal}></button>
        </div>
        <input
          type='text'
          placeholder='Enter board name'
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <br />
        <button className='create-button' onClick={handleCreateBoard}
        style={{}}>
          Create Board
        </button>
      </Modal>
    </div>
  );
};