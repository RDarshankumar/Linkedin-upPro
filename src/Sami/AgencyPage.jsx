
import React, { useState, useEffect , useContext } from 'react';
import AgencyContext from './Data/AgencyData/AgencyContext'

const PostComponent = () => {

  const { CurrAgency , AgencyState , setAgencyState, setCurrAgency} = useContext(AgencyContext);
  const [NewPost , setNewPost] = useState(null);
  const [CurrIndex , setCurrIndex] = useState(null)
  
  useEffect(() => {
    const index = AgencyState.findIndex(obj =>  obj.id === CurrAgency.id);
    setCurrIndex(index);
 }, [CurrAgency]) ;


  const [searchPopup, setSearchPopup] = useState(false);
  const [imagePopup, setImagePopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [jobPopup, setJobPopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState('all');

  const [textContent, setTextContent] = useState('');

  const [imageFile, setImageFile] = useState(null);
  const [imageDescription, setImageDescription] = useState('');

  const [videoFile, setVideoFile] = useState(null);
  const [videoDescription, setVideoDescription] = useState('');

  const [jobImage, setJobImage] = useState(null);
  const [jobTitle , setJobTitle] = useState("");
  const [jobDesc , setJobDesc] =useState("")
  const [jobType , setJobType] = useState("")

  const [commentText, setCommentText] = useState({}); // Store comments for each post

  useEffect(() => {
    // Cleanup URLs created for file previews
    return () => {
      if (imageFile) URL.revokeObjectURL(URL.createObjectURL(imageFile));
      if (videoFile) URL.revokeObjectURL(URL.createObjectURL(videoFile));
    };
  }, [imageFile, videoFile, jobImage]);

  const handlePost = (type) => {
    let content;

    switch (type) {
      case 'text':
        content = textContent;
        break;
      case 'image':
        content = (
          <div>
            {imageFile && <img src={URL.createObjectURL(imageFile)} alt="User upload" className="object-cover w-full h-48 mb-2" />}
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
      case 'job':
        content = (
          <div>
            {jobImage && <img src={URL.createObjectURL(jobImage)} alt="Article" className="object-cover w-full h-48 mb-2" />}
            <h3 className="mb-2 text-lg font-semibold">{jobTitle}</h3>
            <p>{jobDesc}</p>
          </div>
        );
        break;
      default:
        content = '';
    }

    setNewPost({ type, content, id: Date.now(), likes: 0, comments: [] })

    setPosts([...posts, { type, content, id: Date.now(), likes: 0, comments: [] }]);
    resetForm();
  };

  const resetForm = () => {
    setSearchPopup("")
    setTextContent('');
    setImageFile(null);
    setImageDescription('');
    setVideoFile(null);
    setVideoDescription('');
    setSearchPopup(false);
    setImagePopup(false);
    setVideoPopup(false);
    setJobPopup(false)
    setJobTitle("");
    setJobDesc("");

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

    useEffect(() => {
      setCurrAgency(prevState => ({
      ...prevState,
        posts: posts,
    }));
      console.log("Posts total now ", CurrAgency.posts  );
      AgencyState[CurrIndex] = CurrAgency;
      console.log("current agency jo main hai uski posts",AgencyState[CurrIndex].posts)

    }, [posts]);


  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Left Sidebar */}
      <div className="w-full p-4 bg-gray-200 lg:w-64 lg:relative lg:flex-none">
        <h2 className="mb-4 text-xl font-semibold">Filter Posts</h2>
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
              className={`w-full p-2 text-left rounded-md ${selectedTab === 'job' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedTab('job')}
              aria-label="Article posts"
            >
              Job Posts
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Write your post..."
                className="w-full p-3 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              ></textarea>
              <div className="flex justify-between">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => handlePost('text')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Three Post Buttons - Centered */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => setImagePopup(true)}
            aria-label="Add image post"
          >
            Image Post
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setVideoPopup(true)}
            aria-label="Add video post"
          >
            Video Post
          </button>
          <button
            className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
            onClick={() => setJobPopup(true)}
            aria-label="Add article post"
          >
            Job Post
          </button>
        </div>

        {/* Image Post Popup */}
        {imagePopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
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
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="flex justify-between">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => handlePost('image')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Video Post Popup */}
        {videoPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
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
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="flex justify-between">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => handlePost('video')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Article Post Popup */}
        {jobPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <textarea
                placeholder="Job Description"
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              ></textarea>
              <div className="flex justify-between">
                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600" onClick={() => resetForm()}>Cancel</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => handlePost('job')}>Post</button>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="mt-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="p-4 mb-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
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
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  onClick={() => handlePostComment(post.id)}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Comment
                </button>
                <div className="mt-2">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="pt-2 border-t border-gray-200">{comment}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Trending Topics */}
      <div className="w-full p-4 bg-gray-200 lg:w-64 lg:relative lg:flex-none">
        <h2 className="mb-4 text-xl font-semibold">Trending Topics</h2>
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
