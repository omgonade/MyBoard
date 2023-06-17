import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BoardPage.css';
import Modal from 'react-modal';
import deleteicon from './img/icons8-trash-80.png';
const BoardPage = () => {
  const { boardName } = useParams();
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Load the saved posts from localStorage
    const savedPosts = localStorage.getItem('boardPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    // Save the posts to localStorage whenever it changes
    localStorage.setItem('boardPosts', JSON.stringify(posts));
  }, [posts]);

  const openCreatePostModal = () => {
    setShowCreatePostModal(true);
  };

  const closeCreatePostModal = () => {
    setShowCreatePostModal(false);
    setSubject('');
    setImage(null);
    setContent('');
  };

  const handlePublishPost = () => {
    // Handle the logic to save the post data and update the board page
    const newPost = { subject, image, content };
    setPosts([...posts, newPost]);
    closeCreatePostModal();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleDeletePost = (index) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts.splice(index, 1);
      return updatedPosts;
    });
  };
  return (
    <div className='topic'>
      {boardName}
      <div className='createPost'>
        <button className='createbuttonpost' onClick={openCreatePostModal}>
          + Create new post
        </button>
      </div>
      <div className='posts'>
        {posts.map((post, index) => (
          <div className='post' key={index}>
            <h3>{post.subject}</h3>
            {post.image && <img src={post.image} alt='Post' />}
            <p>{post.content}</p>
            < img src ={deleteicon} onClick={() => handleDeletePost(index)} className='deleteicon'
            style={{height:'50px',width:'50px',marginLeft:'90%',cursor:'pointer'}}></img>
          </div>
        ))}
      </div>
      <Modal
        isOpen={showCreatePostModal}
        onRequestClose={closeCreatePostModal}
        contentLabel='Create Post'
        className='create-post-modal'
      >
        <h2>Create a New Post</h2>
        <span style={{ fontSize: '10px', color: 'grey', display: 'block' }}>
          Write something for your post
        </span>
        <br />
        <span style={{ fontSize: '20px', color: 'black', display: 'block', fontWeight: '500' }}>
          Subject
        </span>
        <input
          type='text'
          className='subjectinput'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type='file'
          className='choosefile'
          placeholder='Add Image'
          onChange={handleImageUpload} // Update the onChange event handler
        />
        <br />
        <hr />
        <br />
        <span style={{ fontSize: '20px', color: 'black', display: 'block', fontWeight: '500' }}>
          What's on your mind?
        </span>
        <textarea
          placeholder="What's on your mind?"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handlePublishPost} className='publishbutton'>
          Publish
        </button>
      </Modal>
    </div>
  );
};

export default BoardPage;