import React, { useState } from 'react';

const Profile = () => {
  const [bannerImage, setBannerImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    university: '',
    highSchool: '',
    degree: '',
    grade: '',
    cgpa: ''
  });

  // Handle image uploads
  const handleBannerChange = (e) => {
    setBannerImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfileChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle education input changes
  const handleEducationChange = (e) => {
    setNewEducation({ ...newEducation, [e.target.name]: e.target.value });
  };

  // Add new education entry
  const addEducation = () => {
    setEducationList([...educationList, { ...newEducation, id: Date.now() }]);
    setNewEducation({ university: '', highSchool: '', degree: '', grade: '', cgpa: '' });
  };

  // Edit existing education
  const editEducation = (id) => {
    const updatedEducation = educationList.find((edu) => edu.id === id);
    setNewEducation(updatedEducation);
    deleteEducation(id); // Remove the old entry
  };

  // Delete education entry
  const deleteEducation = (id) => {
    setEducationList(educationList.filter((edu) => edu.id !== id));
  };

  return (
    <div className="container p-6 mx-auto">
      {/* Banner and Profile Image */}
      <div className="mb-4">
        <div>
          <h2 className="text-lg font-medium">Banner Image</h2>
          <input type="file" onChange={handleBannerChange} />
          {bannerImage && <img src={bannerImage} alt="Banner" className="object-cover w-full h-64 mt-4" />}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium">Profile Image</h2>
          <input type="file" onChange={handleProfileChange} />
          {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 mt-4 rounded-full" />}
        </div>
      </div>

      {/* Education Form */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Add Education</h2>
        <div className="mt-4">
          <input
            type="text"
            name="university"
            value={newEducation.university}
            onChange={handleEducationChange}
            placeholder="University Name"
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="highSchool"
            value={newEducation.highSchool}
            onChange={handleEducationChange}
            placeholder="High School Name"
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="degree"
            value={newEducation.degree}
            onChange={handleEducationChange}
            placeholder="Degree"
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="grade"
            value={newEducation.grade}
            onChange={handleEducationChange}
            placeholder="Grade"
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="cgpa"
            value={newEducation.cgpa}
            onChange={handleEducationChange}
            placeholder="CGPA"
            className="block w-full p-2 mb-4 border rounded"
          />

          <button
            onClick={addEducation}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Add Education
          </button>
        </div>
      </div>

      {/* Display Education List */}
      <div>
        <h2 className="text-lg font-medium">Education List</h2>
        {educationList.map((education) => (
          <div
            key={education.id}
            className="flex items-center justify-between p-4 mb-4 border rounded"
          >
            <div>
              <p>
                <strong>University:</strong> {education.university}
              </p>
              <p>
                <strong>High School:</strong> {education.highSchool}
              </p>
              <p>
                <strong>Degree:</strong> {education.degree}
              </p>
              <p>
                <strong>Grade:</strong> {education.grade}
              </p>
              <p>
                <strong>CGPA:</strong> {education.cgpa}
              </p>
            </div>

            <div>
              <button
                onClick={() => editEducation(education.id)}
                className="px-4 py-2 mr-2 text-white bg-yellow-500 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEducation(education.id)}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
