// App.jsx
import React, { Suspense, useState } from 'react';
import { fetchAllUsers, fetchAllPosts } from './api';
import { ClipLoader } from 'react-spinners';

// Lazy load child components
const User = React.lazy(() => import('./User'));
const Post = React.lazy(() => import('./Post'));

// Initialize data resources outside component to prevent re-fetching on render
const usersResource = fetchAllUsers();
const postsResource = fetchAllPosts();

const UserList = ({ resource }) => {
  const users = resource.read();
  return (
    <div className="users-list">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

const PostList = ({ resource }) => {
  const posts = resource.read();
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Logo</div>
          <div className="nav-links">
            <button
              className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              Home
            </button>
            <button
              className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <header className="banner">
        <div className="banner-content">
          <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <h1 className="banner-title">{activeTab === 'users' ? 'Users' : 'Posts'}</h1>
        </div>
      </header>

      {/* Content Area */}
      <main className="content-container">
        {activeTab === 'users' ? (
          <Suspense fallback={
            <div className="loader-container">
              <ClipLoader color="#12004d" size={50} />
            </div>
          }>
            <UserList resource={usersResource} />
          </Suspense>
        ) : (
          <Suspense fallback={
            <div className="loader-container">
              <ClipLoader color="#12004d" size={50} />
            </div>
          }>
            <PostList resource={postsResource} />
          </Suspense>
        )}
      </main>
    </div>
  );
};

export default App;
