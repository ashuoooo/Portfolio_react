import React from "react";

const CandidateProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen  p-6">
      {/* Back Button */}
      <div className="mb-2 max-w-3xl mx-6">
        <button className="text-purple-600 text-sm font-semibold flex items-center">
          &larr; Back to Candidates
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     

        {/* Left Column (Profile, Personal Info, and Additional Cards) */}
        <div className="lg:col-span-2 space-y-6">
        {/* <div className="max-w-3xl mx-auto p-6"> */}
          {/* Profile Section */}
          <div className="max-w-3xl  mx-auto p-6">

          <div className="bg-white p-6 mb-8 rounded-lg shadow ">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-xl font-semibold">Jerome Bell</h1>
                  <p className="text-gray-400 font-bold">
                    Coderspace <span className="text-gray-400">.</span> Senior
                    Software Developer
                  </p>
                </div>
              </div>
              {/* LinkedIn Button at rightmost */}
              <a href="https://www.linkedin.com/in/your-account-name" class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center" 
              target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin mr-2"></i> LinkedIn Account</a>
            </div>
            {/* Navigation Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="flex-1 text-center p-2 bg-purple-100 text-purple-600 rounded-md">
                <span className="block">Overview</span>
              </button>
              <button className="flex-1 text-center p-2 bg-purple-100 text-purple-600 rounded-md">
                <span className="block">Notes</span>
              </button>
              <button className="flex-1 text-center p-2 bg-purple-100 text-purple-600 rounded-md">
                <span className="block">Tests</span>
              </button>
              <button className="flex-1 text-center p-2 bg-purple-100 text-purple-600 rounded-md">
                <span className="block">History</span>
              </button>
            </div>
          </div>

          <div className="bg-white mb-8 p-6 rounded-lg shadow-lg space-y-4">
      {/* Title Row: Personal Information & Edit Icon */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">All Personal Information</h2>
        <button className="text-purple-600 flex items-center space-x-1">
          <span className="material-icons">edit</span>
          <span>Edit</span>
        </button>
      </div>
      {/* Email and Phone Row */}
      <div className="flex items-center space-x-36">
        <div className="flex items-center space-x-2">
          <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">mail</span>
          <p>example.user@mail.com</p>
        </div>
        <div className="flex items-center space-x-2" style={{ marginRight: '-24px' }}>
          <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg" >phone</span>
          <div>
            <p>+91 9876543210</p>
            {/* <p>Phone</p> */}
          </div>
        </div>
      </div>

      {/* Date of Birth and Salary Row */}
      <div className="flex items-center space-x-60">
        <div className="flex items-center space-x-2">
          <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">cake</span>
          <p>03/09/2000</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">attach_money</span>
          <p>$24,000</p>
        </div>
      </div>

      {/* Underline Separator */}
      <hr />

      {/* Location Row */}
      <div className="flex items-center space-x-2">
        <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">location_on</span>
        <p>Bangalore, India</p>
      </div>

      {/* Work Type Row */}
      <div className="flex items-center space-x-2">
        <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">work</span>
        <p>Remote, Full-Time</p>
      </div>
    </div>

          {/* Resume Card */}
          <div className="bg-white p-6 mb-8 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold">Resume</h2>

            <div className="flex justify-between items-center">
              {/* Left: PDF Icon and Name */}
              <div className="flex items-center space-x-2">
                <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">picture_as_pdf</span>
                <p className="text-sm font-semibold">Resume-JeromeBell.pdf</p>
              </div>

              {/* Right: Download Button with Icon */}
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <span className="material-icons ">download</span>
                <span>Download</span>
              </button>
            </div>
          </div>
          {/* Experience Section */}
          <div className="bg-white p-6 mb-8 rounded-lg shadow space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Experience</h2>
            <button className="text-purple-600 flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Edit</span>
            </button>
          </div>
          <div className="space-y-6">
  {/* Experience Item */}
  <div className="flex items-start space-x-4">
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover"
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '-4px' }}>Coderspace</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Full-Time</span>
      </div>

      {/* Job Title and Duration (in the same line with dot separator) */}
      <p className="text-gray-800 text-sm"   style={{ marginLeft: '-3px' }}>
        Senior Software Developer
        <span className="text-gray-400 text-sm" > • 1 year 2 months - Oct 2021, Dec 2022</span>
      </p>
    </div>
  </div>
  {/* Underline Separator */}
  <hr />
  {/* Experience Item */}
  <div className="flex items-start space-x-4">
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover"
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '-3px' }}>XYZ Tech</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Contract</span>
      </div>

       {/* Job Title and Duration (in the same line with dot separator) */}
       <p className="text-gray-800 text-sm" style={{ marginLeft: '-3px' }}>
        Senior Software Developer
        <span className="text-gray-400 text-sm" > • 1 year 2 months - Oct 2021, Dec 2022</span>
      </p>
    </div>
  </div>
  {/* Underline Separator */}
  <hr />
  {/* Experience Item */}
  <div className="flex items-start space-x-4">
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover"
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '-3px' }} >XYZ Tech</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Full-Time</span>
      </div>

       {/* Job Title and Duration (in the same line with dot separator) */}
       <p className="text-gray-800 text-sm" style={{ marginLeft: '-3px' }}>
        Senior Software Developer
        <span className="text-gray-400 text-sm" > • 1 year 2 months - Oct 2021, Dec 2022</span>
      </p>
    </div>
  </div>
</div>

          </div>
          {/* Education Section */}
           <div className="bg-white mb-8 p-6 rounded-lg shadow space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Education</h2>
            <button className="text-purple-600 flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Edit</span>
            </button>
          </div>
          <div className="space-y-6">
  {/* Experience Item */}
  <div className="flex items-start space-x-4 " >
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover" style={{ marginTop: '14px' }}
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '3px' }}>Middle Earth Technic University</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Full-Time</span>
      </div>

      {/* Job Title and Duration (in the same line with dot separator) */}
      <div>
      <p className="text-gray-800 text-sm" >Master degree in Computer Science and Mathematics</p>
      <p className="text-gray-400 text-sm" style={{ marginLeft: '-134px' }}>January 2012 - Istanbul , Turkey</p>
      </div>
    </div>
  </div>
  {/* Underline Separator */}
  <hr />
  {/* Experience Item */}
  <div className="flex items-start space-x-4 " >
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover" style={{ marginTop: '14px' }}
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '3px' }}>Middle Earth Technic University</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Full-Time</span>
      </div>

      {/* Job Title and Duration (in the same line with dot separator) */}
      <div>
      <p className="text-gray-800 text-sm" >Master degree in Computer Science and Mathematics</p>
      <p className="text-gray-400 text-sm" style={{ marginLeft: '-134px' }}>January 2012 - Istanbul , Turkey</p>
      </div>
    </div>
  </div>
 
  {/* Underline Separator */}
  <hr />

  {/* Experience Item */}
  <div className="flex items-start space-x-4 " >
    {/* Circular Image */}
    <img
      src="https://via.placeholder.com/50"
      alt="Company Logo"
      className="w-12 h-12 rounded-full object-cover" style={{ marginTop: '14px' }}
    />
    
    {/* Experience Details */}
    <div className="flex flex-col">
      {/* Company Name, Full-time, and Role */}
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-lg" style={{ marginLeft: '3px' }}>Middle Earth Technic University</h3>
        <span className="border border-blue-500 text-blue-500 text-sm px-2 py-0.5 rounded-full">Full-Time</span>
      </div>

      {/* Job Title and Duration (in the same line with dot separator) */}
      <div>
      <p className="text-gray-800 text-sm" >Master degree in Computer Science and Mathematics</p>
      <p className="text-gray-400 text-sm" style={{ marginLeft: '-134px' }}>January 2012 - Istanbul , Turkey</p>
      </div>
    </div>
  </div>
</div>

          </div>

          
      
  {/* Preferred Positions */}
  <section className="mb-8 p-4 bg-white rounded-lg shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Preferred Positions</h2>
      <button className="text-purple-600 flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Edit</span>
            </button>
    </div>
    <ul className="space-y-6">
      <li className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow">
        <span>Front-End Dev. (C#)</span>
        <span className="text-green-600">2 Years</span>
      </li>
      <li className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow">
        <span>Back-End Dev. (React)</span>
        <span className="text-green-600">2 Years</span>
      </li>
      <li className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow">
        <span>Backend Developer (NodeJS)</span>
        <span className="text-green-600">3 Years</span>
      </li>
    </ul>
  </section>

  {/* Skills Section */}
  <section className="mb-8 p-4 bg-white rounded-lg shadow-lg">
  <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Skills</h2>
      <button className="text-purple-600 flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Edit</span>
            </button>
    </div>
    <div className="flex flex-wrap gap-6">
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Mobile Application</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Problem-Solving</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Team-Working</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">PHP</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">JavaScript</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">HTML / CSS</span>
      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">SwiftUI</span>
    </div>
  </section>

  {/* Language Section */}
  <section className="p-4 bg-white rounded-lg shadow-lg">
  <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Preferred Positions</h2>
      <button className="text-purple-600 flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Edit</span>
            </button>
    </div>
    <div className="flex gap-6">
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow">
        <span className="text-xl font-semibold">TR</span>
        <span className="text-sm text-gray-500">Turkish</span>
        <span className="text-sm text-gray-400">Native Language</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow">
        <span className="text-xl font-semibold">EN</span>
        <span className="text-sm text-gray-500">English</span>
        <span className="text-sm text-gray-400">Advanced</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow">
        <span className="text-xl font-semibold">DE</span>
        <span className="text-sm text-gray-500">German</span>
        <span className="text-sm text-gray-400">Intermediate</span>
      </div>
    </div>
  </section>
</div>


          
        </div>

        {/* Right Column (Active Positions, Career Status, etc.) */}
        <div className="space-y-6 max-w-3xl  mx-1 p-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold  text-left">Active Positions</h2>
            {/* Active Positions content */}
            <div className="space-y-4">
            {/* First Role */}
      <div className="text-center">
        <img
          src="https://via.placeholder.com/40" 
          alt="Trendyol Logo"
          className="w-12 h-12 rounded-full mx-auto my-3"
        />
             <div className="flex items-center justify-between ">
             <div className="flex items-center space-x-12 ">
             <div className="text-left my-3">
            <p className="font-semibold">Front-End Developer</p>
            <p className="text-gray-500">Trendyol Inch.</p>
          </div>

             </div>
             <button className="bg-yellow-400 text-white px-3 py-1 rounded-md">
          Interview
        </button>
             </div>

      </div>

      {/* Underline Between Roles */}
      <hr className="my-4 border-gray-300" />

      {/* Second Role */}
      <div className="text-center">
        <img
          src="https://via.placeholder.com/40" 
          alt="Anadolu Sigorta Logo"
          className="w-12 h-12 rounded-full mx-auto"
        />
        </div>
        <div className="flex items-center justify-between">
             <div className="flex items-center space-x-4">
             <div className="text-left">
            <p className="font-semibold">Front-End Developer</p>
            <p className="text-gray-500">Trendyol Inch.</p>
          </div>

             </div>
             <button className="bg-yellow-400 text-white px-3 py-1 rounded-md">
          Interview
        </button>
             </div>

      </div>
    
    <button className="mt-4 bg-purple-600 text-white w-full py-2 rounded-md">
      Show All
    </button>
  </div>


              
          {/* Career Status Section */}
          <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold">Career Status</h2>
    <select className="mt-2 block w-full p-2 border rounded-md text-gray-700">
      <option value="actively-seeking">Actively Seeking Job</option>
      <option value="not-looking">Not Looking for Jobs</option>
      <option value="open">Open to Opportunities</option>
    </select>
  </div>

         {/* Personal Information Section */}
<div className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold text-left mb-4">Personal Information</h2>
  {/* Personal info content */}
  <div className="space-y-4">
    {/* Phone Number */}
    <div className="flex items-center">
      <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">phone</span>
      <p className="ml-3">+90 (545) 493 00 00</p>
    </div>

    {/* Underline */}
    <hr className="border-gray-300 my-2" />

    {/* Email */}
    <div className="flex items-center">
      <span className="material-icons p-1 border border-gray-300 bg-gray-200 rounded-lg">email</span>
      <p className="ml-3">jerome.bell@example.com</p>
    </div>
  </div>
</div>

          {/* Resume Download Section */}
          <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold">Resume</h2>
    <button className="bg-purple-600 text-white w-full py-2 rounded-md flex items-center justify-center">
      <span className="material-icons">download</span>
      <span className="ml-2">jerome-bell-resume.pdf</span>
    </button>
  </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
