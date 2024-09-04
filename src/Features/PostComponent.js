
import React, { useState, useEffect } from 'react';

const PostComponent = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  const [imagePopup, setImagePopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [articlePopup, setArticlePopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState('all');

  const [textContent, setTextContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageDescription, setImageDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [videoDescription, setVideoDescription] = useState('');
  const [articleImage, setArticleImage] = useState(null);
  const [articleHeading, setArticleHeading] = useState('');
  const [articleText, setArticleText] = useState('');

  const [commentText, setCommentText] = useState({}); // Store comments for each post

  useEffect(() => {
    // Cleanup URLs created for file previews
    return () => {
      if (imageFile) URL.revokeObjectURL(URL.createObjectURL(imageFile));
      if (videoFile) URL.revokeObjectURL(URL.createObjectURL(videoFile));
      if (articleImage) URL.revokeObjectURL(URL.createObjectURL(articleImage));
    };
  }, [imageFile, videoFile, articleImage]);

  const handlePost = (type) => {
    let content;

    switch (type) {
      case 'text':
        content = textContent;
        break;
      case 'image':
        content = (
          <div>
            {imageFile && <img src={URL.createObjectURL(imageFile)} alt="User upload" className="w-full h-48 object-cover mb-2" />}
            <p>{imageDescription}</p>
          </div>
        );
        break;
      case 'video':
        content = (
          <div>
            {videoFile && <video src={URL.createObjectURL(videoFile)} controls className="w-full h-48 mb-2" />}
            <p>{videoDescription}</p>
          </div>
        );
        break;
      case 'article':
        content = (
          <div>
            {articleImage && <img src={URL.createObjectURL(articleImage)} alt="Article" className="w-full h-48 object-cover mb-2" />}
            <h3 className="text-lg font-semibold mb-2">{articleHeading}</h3>
            <p>{articleText}</p>
          </div>
        );
        break;
      default:
        content = '';
    }

    setPosts([...posts, { type, content, id: Date.now(), likes: 0, comments: [] }]);
    resetForm();
  };

  const resetForm = () => {
    setTextContent('');
    setImageFile(null);
    setImageDescription('');
    setVideoFile(null);
    setVideoDescription('');
    setArticleImage(null);
    setArticleHeading('');
    setArticleText('');
    setSearchPopup(false);
    setImagePopup(false);
    setVideoPopup(false);
    setArticlePopup(false);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleCommentChange = (id, text) => {
    setCommentText({ ...commentText, [id]: text });
  };

  const handlePostComment = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, comments: [...post.comments, commentText[id]] }
        : post
    ));
    setCommentText({ ...commentText, [id]: '' });
  };

  const handleSharePost = (id) => {
    // Replace with your sharing logic
    const postURL = `http://yourwebsite.com/post/${id}`;
    navigator.clipboard.writeText(postURL).then(() => {
      alert('Post URL copied to clipboard!');
    });
  };

  const filteredPosts = selectedTab === 'all'
    ? posts
    : posts.filter(post => post.type === selectedTab);

  const trendingTopics = [
    "Artificial Intelligence and Machine Learning",
    "Climate Change and Sustainability",
    "Remote Work and Digital Nomadism",
    // ... other topics
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full lg:w-64 bg-gray-200 p-4 lg:relative lg:flex-none">
        <h2 className="text-xl font-semibold mb-4">Filter Posts</h2>
        <ul>
          <li>
            <button
              className={`w-full p-2 text-left rounded-md ${selectedTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedTab('all')}
              aria-label="All posts"
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`w-full p-2 text-left rounded-md ${selectedTab === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedTab('image')}
              aria-label="Image posts"
            >
              Image Posts
            </button>
          </li>
          <li>
            <button
              className={`w-full p-2 text-left rounded-md ${selectedTab === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedTab('video')}
              aria-label="Video posts"
            >
              Video Posts
            </button>
          </li>
          <li>
            <button
              className={`w-full p-2 text-left rounded-md ${selectedTab === 'article' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedTab('article')}
              aria-label="Article posts"
            >
              Article Posts
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="What you post?"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => setSearchPopup(true)}
            aria-label="Search posts"
          />
        </div>

        {/* Search Popup */}
        {searchPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Write your post..."
                className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              ></textarea>
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => handlePost('text')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Three Post Buttons - Centered */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setImagePopup(true)}
            aria-label="Add image post"
          >
            Image Post
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={() => setVideoPopup(true)}
            aria-label="Add video post"
          >
            Video Post
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            onClick={() => setArticlePopup(true)}
            aria-label="Add article post"
          >
            Article Post
          </button>
        </div>

        {/* Image Post Popup */}
        {imagePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="mb-4"
              />
              <input
                type="text"
                placeholder="Image description..."
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => handlePost('image')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Video Post Popup */}
        {videoPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                className="mb-4"
              />
              <input
                type="text"
                placeholder="Video description..."
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => handlePost('video')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Article Post Popup */}
        {articlePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setArticleImage(e.target.files[0])}
                className="mb-4"
              />
              <input
                type="text"
                placeholder="Article heading..."
                value={articleHeading}
                onChange={(e) => setArticleHeading(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <textarea
                placeholder="Article text..."
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              ></textarea>
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => handlePost('article')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="mt-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <button
                    onClick={() => handleLikePost(post.id)}
                    aria-label="Like post"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <i className="ri-thumb-up-line"></i> {post.likes}
                  </button>
                  <button
                    onClick={() => handleSharePost(post.id)}
                    aria-label="Share post"
                    className="ml-4 text-blue-500 hover:text-blue-600"
                  >
                    <i className="ri-share-line"></i>
                  </button>
                </div>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  aria-label="Delete post"
                  className="text-red-500 hover:text-red-600"
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
              <div className="mt-4">
                {post.content}
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentText[post.id] || ''}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  onClick={() => handlePostComment(post.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Comment
                </button>
                <div className="mt-2">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="border-t border-gray-200 pt-2">{comment}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Trending Topics */}
      <div className="w-full lg:w-64 bg-gray-200 p-4 lg:relative lg:flex-none">
        <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
        <ul>
          {trendingTopics.map((topic, index) => (
            <li key={index} className="mb-2">
              <a href={`#${topic}`} className="text-blue-500 hover:text-blue-600">{topic}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostComponent;
