// import "./RegistrationForm.css";
// import React, { useState } from 'react';
 
// const RegistrationForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contact: '',
//     address: '',
//     gender: ''
//   });
 
//   const [successMessage, setSuccessMessage] = useState('');
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setSuccessMessage('Form submitted successfully!');
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       contact: '',
//       address: '',
//       gender: ''
//     });
   
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };
 
//   return (
//     <div className="registration-form-container">
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <h2>Registration Form</h2>
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//         <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//         <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" required />
//         <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
//         <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
//         <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
 
// export default RegistrationForm;
 





// import "./RegistrationForm.css";
// import React, { useState } from 'react';

// const RegistrationForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contact: '',
//     address: '',
//     gender: ''
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setSuccessMessage('Form submitted successfully!');
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       contact: '',
//       address: '',
//       gender: ''
//     });
   
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div className="registration-form-container">
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <h2>Registration Form</h2>
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//         <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//         <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" required />
//         <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
//         <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
//         <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;






// import React, { useState } from 'react';
// import "./RegistrationForm.css";

// const RegistrationForm = ({ onSubmit }) => {
//   // State to manage form inputs and success message
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contact: '',
//     address: '',
//     gender: ''
//   });
// console.log(formData)
//   const [successMessage, setSuccessMessage] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Pass form data to parent component
//     setSuccessMessage('Form submitted successfully!'); // Set success message
//     // Clear form fields
    
//     // Clear success message after 3 seconds
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div className="registration-form-container">
//       {/* Display success message */}
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       {/* Form element */}
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <h2>Registration Form</h2>
//         {/* Input fields */}
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <input
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           placeholder="Contact"
//           required
//         />
//         <input
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//         />
//         <input
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           placeholder="Gender"
//           required
//         />
//         {/* Submit button */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;







import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ onSubmit }) => {
  // State to manage form inputs and success message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    gender: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Retrieve existing data from local storage on component mount
  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("registrationData")) || [];
    if (savedData.length > 0) {
      setFormData(savedData[savedData.length - 1]); // Load the last entry for editing
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing data from local storage
    const savedData =
      JSON.parse(localStorage.getItem("registrationData")) || [];

    // Add new form data to existing data
    savedData.push(formData);

    // Save updated data to local storage
    localStorage.setItem("registrationData", JSON.stringify(savedData));

    onSubmit(formData); // Pass form data to parent component
    setSuccessMessage("Form submitted successfully!"); // Set success message

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      gender: "",
    });

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="registration-form-container">
      {/* Display success message */}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {/* Form element */}
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        {/* Input fields */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
 