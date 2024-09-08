
// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
// import ReactDOM from 'react-dom';

// const EmployeeSignup = ( ) => {
//   const [step, setStep] = useState(1);
//   const [educationList, setEducationList] = useState([{ institution: '', degree: '', grade: '', gpa: '' }]);
//   const [workList, setWorkList] = useState([{ company: '', years: '', startDate: '', endDate: '' }]);
//   const [certList, setCertList] = useState([{ name: '', place: '', startDate: '', endDate: '' }]);
//   const [profileImage, setProfileImage] = useState(null);
//   const [loading, setLoading] = useState(false); // For showing spinner
//   const [submitted, setSubmitted] = useState(false);

//   const handleNext = () => setStep(prevStep => prevStep + 1);

//   const handleAddEducation = () => {
//     setEducationList([...educationList, { institution: '', degree: '', grade: '', gpa: '' }]);
//   };

//   const handleEducationChange = (index, field, value) => {
//     const updatedList = educationList.map((item, i) => i === index ? { ...item, [field]: value } : item);
//     setEducationList(updatedList);
//   };

//   const handleAddWork = () => {
//     setWorkList([...workList, { company: '', years: '', startDate: '', endDate: '' }]);
//   };

//   const handleWorkChange = (index, field, value) => {
//     const updatedList = workList.map((item, i) => i === index ? { ...item, [field]: value } : item);
//     setWorkList(updatedList);
//   };

//   const handleAddCert = () => {
//     setCertList([...certList, { name: '', place: '', startDate: '', endDate: '' }]);
//   };

//   const handleCertChange = (index, field, value) => {
//     const updatedList = certList.map((item, i) => i === index ? { ...item, [field]: value } : item);
//     setCertList(updatedList);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     // Simulate a delay (4 seconds), then show Navbar component and stop the spinner
//     setTimeout(() => {
//       setLoading(false); // Hide spinner after loading
//       setSubmitted(true); // Set submitted to true

//       // Pass the collected data to Navbar component
//       const NavbarWithData = () => (
//         <Navbar
//           profileImage={profileImage}
//           educationList={educationList}
//           workList={workList}
//           certList={certList}
//         />
//       );

//       // Replace current page content with Navbar component with data
//       ReactDOM.render(<NavbarWithData />, document.getElementById('root'));
//     }, 4000);
//   };

//   const renderStep = () => {
//     if (submitted) {
//       return null; // No additional rendering needed as the page will be replaced by Navbar
//     }

//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
//             <input type="text" placeholder="Name" className="block w-full p-3 mb-4 border rounded-lg" required />
//             <input type="email" placeholder="Email" className="block w-full p-3 mb-4 border rounded-lg" required />
//             <input type="tel" placeholder="Phone Number" className="block w-full p-3 mb-4 border rounded-lg" required />
//             <button type="button" onClick={handleNext} className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               Next
//             </button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Education Information</h3>
//             {educationList.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Institution"
//                   value={edu.institution}
//                   onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Degree"
//                   value={edu.degree}
//                   onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Grade"
//                   value={edu.grade}
//                   onChange={(e) => handleEducationChange(index, 'grade', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="text"
//                   placeholder="GPA"
//                   value={edu.gpa}
//                   onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={handleAddEducation} className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               Add More Education
//             </button>
//             <button type="button" onClick={handleNext} className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4">
//               Next
//             </button>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
//             {workList.map((work, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Company"
//                   value={work.company}
//                   onChange={(e) => handleWorkChange(index, 'company', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Years"
//                   value={work.years}
//                   onChange={(e) => handleWorkChange(index, 'years', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   placeholder="Start Date"
//                   value={work.startDate}
//                   onChange={(e) => handleWorkChange(index, 'startDate', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   placeholder="End Date"
//                   value={work.endDate}
//                   onChange={(e) => handleWorkChange(index, 'endDate', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={handleAddWork} className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               Add More Work Experience
//             </button>
//             <button type="button" onClick={handleNext} className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4">
//               Next
//             </button>
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Certifications</h3>
//             {certList.map((cert, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Certification Name"
//                   value={cert.name}
//                   onChange={(e) => handleCertChange(index, 'name', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Place"
//                   value={cert.place}
//                   onChange={(e) => handleCertChange(index, 'place', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   placeholder="Start Date"
//                   value={cert.startDate}
//                   onChange={(e) => handleCertChange(index, 'startDate', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   placeholder="End Date"
//                   value={cert.endDate}
//                   onChange={(e) => handleCertChange(index, 'endDate', e.target.value)}
//                   className="block w-full p-3 mb-2 border rounded-lg"
//                 />
//               </div>
//             ))}
//             <button type="button" onClick={handleAddCert} className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               Add More Certifications
//             </button>
//             <button type="button" onClick={handleNext} className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4">
//               Next
//             </button>
//           </div>
//         );
//       case 5:
//         return (
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Upload Profile Picture</h3>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full p-3 mb-4 border rounded-lg"
//             />
//             {profileImage && <img src={profileImage} alt="Profile Preview" className="mb-4" />}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Submit
//             </button>
//             {loading && (
//               <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 {/* Custom Spinner */}
//                 <div className="w-12 h-12 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
//               </div>
//             )}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       {renderStep()}
//     </div>
//   );
// };

// export default EmployeeSignup;



// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
// import ReactDOM from 'react-dom';
// import PostComponent from './PostComponent';

// const EmployeeSignup = () => {
//   const [step, setStep] = useState(1);
//   const [profileImage, setProfileImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
//   const [education, setEducation] = useState([{ school: '', degree: '', cgpa: '' }]);
//   const [experience, setExperience] = useState([{ company: '', years: '', startDate: '', endDate: '' }]);
//   const [certifications, setCertifications] = useState([{ institute: '', startDate: '', endDate: '' }]);

//   const handleNext = () => setStep((prevStep) => prevStep + 1);
//   const handleBack = () => setStep((prevStep) => prevStep - 1);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//       const NavbarWithProfile = () => <Navbar profileImage={profileImage}  />  ;
//       ReactDOM.render(<NavbarWithProfile /> , document.getElementById('root'));
//     }, 4000);
   
//   };

//   const handleInputChange = (e, setStateFunc, index, key) => {
//     const value = e.target.value;
//     setStateFunc((prev) =>
//       prev.map((item, i) => (i === index ? { ...item, [key]: value } : item))
//     );
//   };

//   const addNewEntry = (setStateFunc, defaultEntry) => {
//     setStateFunc((prev) => [...prev, defaultEntry]);
//   };

//   const renderStep = () => {
//     if (submitted) return null;

//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Personal Information</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={personalInfo.name}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={personalInfo.email}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={personalInfo.phone}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <label className="block mb-4 text-gray-700">Upload Profile Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//             />
//             {profileImage && (
//               <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
//                 <img src={profileImage} alt="Profile Preview" className="object-cover w-full h-full" />
//               </div>
//             )}
//             <button onClick={handleNext} className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg">
//               Next
//             </button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Education</h3>
//             {education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="School Name"
//                   value={edu.school}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'school')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Degree"
//                   value={edu.degree}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'degree')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="CGPA/Percentage"
//                   value={edu.cgpa}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'cgpa')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setEducation, { school: '', degree: '', cgpa: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Education
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Next
//               </button>
//             </div>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Work Experience</h3>
//             {experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   value={exp.company}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'company')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Years of Experience"
//                   value={exp.years}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'years')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={exp.startDate}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'startDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={exp.endDate}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'endDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setExperience, { company: '', years: '', startDate: '', endDate: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Experience
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Next
//               </button>
//             </div>
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Certifications</h3>
//             {certifications.map((cert, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Institute Name"
//                   value={cert.institute}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'institute')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={cert.startDate}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'startDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={cert.endDate}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'endDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setCertifications, { institute: '', startDate: '', endDate: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Certification
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleSubmit} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Submit
//               </button>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-12">
//       {loading ? (
//         <div className="text-center">
//           <div className="animate-spin h-10 w-10 border-t-4 border-b-4 border-indigo-600 rounded-full mx-auto"></div>
//           <p className="text-indigo-700 text-lg mt-4">Submitting...</p>
//         </div>
//       ) : submitted ? (
//         <div className="text-center">
//           <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Success!</h3>
//           <p>Your profile has been submitted.</p>
//         </div>
//       ) : (
//         renderStep()
//       )}
//     </div>
//   );
// };

// export default EmployeeSignup;





// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from './Navbar'; // Import your Navbar component
// import PostComponent from './PostComponent';

// const EmployeeSignup = () => {
//   const [step, setStep] = useState(1);
//   const [profileImage, setProfileImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
//   const [education, setEducation] = useState([{ school: '', degree: '', cgpa: '' }]);
//   const [experience, setExperience] = useState([{ company: '', years: '', startDate: '', endDate: '' }]);
//   const [certifications, setCertifications] = useState([{ institute: '', startDate: '', endDate: '' }]);

//   const handleNext = () => setStep((prevStep) => prevStep + 1);
//   const handleBack = () => setStep((prevStep) => prevStep - 1);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);

//       // Render Navbar and PostComponent
//       const MainComponent = () => (
//         <div>
//           <Navbar profileImage={profileImage} />
//           <PostComponent />
//         </div>
//       );

//       ReactDOM.render(<MainComponent />, document.getElementById('root'));
//     }, 4000);
//   };

//   const handleInputChange = (e, setStateFunc, index, key) => {
//     const value = e.target.value;
//     setStateFunc((prev) =>
//       prev.map((item, i) => (i === index ? { ...item, [key]: value } : item))
//     );
//   };

//   const addNewEntry = (setStateFunc, defaultEntry) => {
//     setStateFunc((prev) => [...prev, defaultEntry]);
//   };

//   const renderStep = () => {
//     if (submitted) return null;

//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Personal Information</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={personalInfo.name}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={personalInfo.email}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={personalInfo.phone}
//               onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//               required
//             />
//             <label className="block mb-4 text-gray-700">Upload Profile Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//             />
//             {profileImage && (
//               <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
//                 <img src={profileImage} alt="Profile Preview" className="object-cover w-full h-full" />
//               </div>
//             )}
//             <button onClick={handleNext} className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg">
//               Next
//             </button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Education</h3>
//             {education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="School Name"
//                   value={edu.school}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'school')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Degree"
//                   value={edu.degree}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'degree')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="CGPA/Percentage"
//                   value={edu.cgpa}
//                   onChange={(e) => handleInputChange(e, setEducation, index, 'cgpa')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setEducation, { school: '', degree: '', cgpa: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Education
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Next
//               </button>
//             </div>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Work Experience</h3>
//             {experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   value={exp.company}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'company')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Years of Experience"
//                   value={exp.years}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'years')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={exp.startDate}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'startDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={exp.endDate}
//                   onChange={(e) => handleInputChange(e, setExperience, index, 'endDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setExperience, { company: '', years: '', startDate: '', endDate: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Experience
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Next
//               </button>
//             </div>
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Certifications</h3>
//             {certifications.map((cert, index) => (
//               <div key={index} className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Institute Name"
//                   value={cert.institute}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'institute')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={cert.startDate}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'startDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={cert.endDate}
//                   onChange={(e) => handleInputChange(e, setCertifications, index, 'endDate')}
//                   className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               onClick={() => addNewEntry(setCertifications, { institute: '', startDate: '', endDate: '' })}
//               className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
//             >
//               Add Another Certification
//             </button>
//             <div className="flex justify-between">
//               <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
//                 Back
//               </button>
//               <button onClick={handleSubmit} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
//                 Submit
//               </button>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         <div>{renderStep()}</div>
//       )}
//     </div>
//   );
// };

// export default EmployeeSignup;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'; // Import your Navbar component
import PostComponent from './PostComponent';
import './Em.css'
import { Link } from 'react-router-dom';

const EmployeeSignup = () => {
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState([{ school: '', degree: '', cgpa: '' }]);
  const [experience, setExperience] = useState([{ company: '', years: '', startDate: '', endDate: '' }]);
  const [certifications, setCertifications] = useState([{ institute: '', startDate: '', endDate: '' }]);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Render Navbar and PostComponent
      const MainComponent = () => (
        <div>
          <Navbar profileImage={profileImage} />
          <PostComponent />
        </div>
      );

      ReactDOM.render(<MainComponent />, document.getElementById('root'));
    }, 4000);
  };

  const handleInputChange = (e, setStateFunc, index, key) => {
    const value = e.target.value;
    setStateFunc((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item))
    );
  };

  const addNewEntry = (setStateFunc, defaultEntry) => {
    setStateFunc((prev) => [...prev, defaultEntry]);
  };

  const renderStep = () => {
    if (submitted) return null;

    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Personal Information</h3>
            <Link to="/"
              
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </Link>
            <input
              type="text"
              placeholder="Name"
              value={personalInfo.name}
              onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
              className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
              className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
              className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
              required
            />
            <label className="block mb-4 text-gray-700">Upload Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
            />
            {profileImage && (
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img src={profileImage} alt="Profile Preview" className="object-cover w-full h-full" />
              </div>
            )}
            <button onClick={handleNext} className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg">
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Education</h3>
            <Link to="/"
              
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </Link>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="School Name"
                  value={edu.school}
                  onChange={(e) => handleInputChange(e, setEducation, index, 'school')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleInputChange(e, setEducation, index, 'degree')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="CGPA/Percentage"
                  value={edu.cgpa}
                  onChange={(e) => handleInputChange(e, setEducation, index, 'cgpa')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
              </div>
            ))}
            <button
              onClick={() => addNewEntry(setEducation, { school: '', degree: '', cgpa: '' })}
              className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
            >
              Add Another Education
            </button>
            <div className="flex justify-between">
              <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
                Back
              </button>
              <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Work Experience</h3>
            <Link to="/"
              
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </Link>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={(e) => handleInputChange(e, setExperience, index, 'company')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Years of Experience"
                  value={exp.years}
                  onChange={(e) => handleInputChange(e, setExperience, index, 'years')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => handleInputChange(e, setExperience, index, 'startDate')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleInputChange(e, setExperience, index, 'endDate')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
              </div>
            ))}
            <button
              onClick={() => addNewEntry(setExperience, { company: '', years: '', startDate: '', endDate: '' })}
              className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
            >
              Add Another Experience
            </button>
            <div className="flex justify-between">
              <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
                Back
              </button>
              <button onClick={handleNext} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Certifications</h3>
            <Link to="/"
              
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </Link>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Institute Name"
                  value={cert.institute}
                  onChange={(e) => handleInputChange(e, setCertifications, index, 'institute')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="date"
                  value={cert.startDate}
                  onChange={(e) => handleInputChange(e, setCertifications, index, 'startDate')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
                <input
                  type="date"
                  value={cert.endDate}
                  onChange={(e) => handleInputChange(e, setCertifications, index, 'endDate')}
                  className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
                  required
                />
              </div>
            ))}
            <button
              onClick={() => addNewEntry(setCertifications, { institute: '', startDate: '', endDate: '' })}
              className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg mb-4"
            >
              Add Another Certification
            </button>
            <div className="flex justify-between">
              <button onClick={handleBack} className="w-1/2 py-3 px-4 bg-gray-500 text-white rounded-lg mr-2">
                Back
              </button>
              <button onClick={handleSubmit} className="w-1/2 py-3 px-4 bg-indigo-600 text-white rounded-lg ml-2">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        renderStep()
      )}
    </div>
  );
};

export default EmployeeSignup;
