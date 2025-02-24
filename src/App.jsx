import { useState } from 'react';
import './App.css';
import iconRadioSelected from "./assets/icon-radio-selected.svg";
import checkmarkIcon from "./assets/icon-checkbox-check.svg";
import emailSent from "./assets/icon-success-check.svg";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedQueryType, setSelectedQueryType] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "This field is required";
    if (!lastName.trim()) newErrors.lastName = "This field is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "This field is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!selectedQueryType) newErrors.queryType = "Please select a query type";
    if (!message.trim()) newErrors.message = "This field is required";
    if (!isChecked) newErrors.consent = "To submit this form, please consent to being contacted";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
      console.log("Form submitted");
    }
  };

  return (
    <div className='flex justify-center h-screen items-center' role="main">
      {isModalOpen && (
        <div className="absolute text-white top-46 bg-[var(--Grey-900-darker)] border rounded-xl p-6 shadow-lg m-4 md:m-0">
          <div className="flex items-center gap-2 mb-2">
            <img className="block" src={emailSent} alt="Email sent icon" />
            <p className="font-bold">Message Sent!</p>
          </div>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className='rounded-lg bg-white p-12 w-[46rem] flex flex-col gap-6'>
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[50%]">
            <label htmlFor="first-name" className="block text-sm">
              Full Name <span className="text-green-600">*</span>
            </label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="cursor-pointer rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)]"
              type="text" id="first-name" name="firstName" autoComplete="given-name" />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="w-full md:w-[50%]">
            <label htmlFor="last-name" className="block text-sm">
              Last Name <span className="text-green-600">*</span>
            </label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="cursor-pointer rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)]"
              type="text" id="last-name" name="lastName" autoComplete="family-name" />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div className="w-[100%]">
          <label htmlFor="email" className="block text-sm">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            className="cursor-pointer rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)]"
            type="text" id="email" name="email" autoComplete="email" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm">Query Type <span className="text-green-600">*</span></label>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <label onClick={() => setSelectedQueryType('general')}
              className={`flex items-center gap-2 border border-[var(--Grey-900-darker)] rounded-lg p-2 w-full md:w-[50%] cursor-pointer ${selectedQueryType === 'general' ? 'bg-[var(--Green-200-lighter)]' : ''} focus-within:outline focus-within:outline-1 focus-within:outline-green-600`}>
              <input type="radio" name="queryType" value="general" className="sr-only peer"
                checked={selectedQueryType === 'general'} onChange={() => setSelectedQueryType('general')} />
              <span className="ml-2 mr-1 w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:hidden"></span>
              <span className="hidden peer-checked:inline">
                <img src={iconRadioSelected} alt="Selected radio icon" className="ml-2 mr-1 w-5 h-5" />
              </span>
              General Enquiry
            </label>
            <label onClick={() => setSelectedQueryType('support')}
              className={`flex items-center gap-2 border border-[var(--Grey-900-darker)] rounded-lg p-2 w-full md:w-[50%] cursor-pointer ${selectedQueryType === 'support' ? 'bg-[var(--Green-200-lighter)]' : ''} focus-within:outline focus-within:outline-1 focus-within:outline-green-600`}>
              <input type="radio" name="queryType" value="support" className="sr-only peer"
                checked={selectedQueryType === 'support'} onChange={() => setSelectedQueryType('support')} />
              <span className="ml-2 mr-1 w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:hidden"></span>
              <span className="hidden peer-checked:inline">
                <img src={iconRadioSelected} alt="Selected radio icon" className="ml-2 mr-1 w-5 h-5" />
              </span>
              Support Request
            </label>
          </div>
          {errors.queryType && <p className="text-red-500 text-sm">{errors.queryType}</p>}
        </div>
        <div>
          <label className="block text-sm" htmlFor="message">
            Message <span className="text-green-600">*</span>
          </label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}
            className="cursor-pointer rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)]"
            id="message" name="message" rows="4" cols="50"></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="custom-checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}
              className="sr-only peer" />
            <label
              htmlFor="custom-checkbox"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span
                className="w-3 h-3 flex items-center justify-center border border-[var(--Grey-900-darker)] peer-checked:border-[var(--Green-600-medium)] peer-focus:outline peer-focus:outline-1 peer-focus:outline-[var(--Green-600-medium)]"
              >
                {isChecked && <img src={checkmarkIcon} alt="Checked" className="w-3 h-3" />}
              </span>
              <span className="text-gray-800">
                I consent to being contacted by the team <span className="text-green-600">*</span>
              </span>
            </label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
        </div>

        <button type="submit"
          className="cursor-pointer w-[100%] p-3 bg-[var(--Green-600-medium)] rounded-xl text-white hover:bg-[var(--Grey-900-darker)]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
