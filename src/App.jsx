import { useState } from 'react';
import './App.css';
import iconRadioSelected from "./assets/icon-radio-selected.svg";
import checkmarkIcon from "./assets/icon-checkbox-check.svg";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex justify-center h-screen items-center' role="main">
      <div className='rounded-lg bg-white p-12 w-[46rem] flex flex-col gap-6'>
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>

        {/* Full Name & Last Name */}
        <div className="flex flex-row gap-4">
          <div className="w-[50%]">
            <label htmlFor="first-name" className="block text-sm">
              Full Name <span className="text-green-600">*</span>
            </label>
            <input className="rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)]"
              type="text" id="first-name" name="firstName" autoComplete="given-name"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="last-name" className="block text-sm">
              Last Name <span className="text-green-600">*</span>
            </label>
            <input className="rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)"
              type="text" id="last-name" name="lastName" autoComplete="family-name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-[100%]">
          <label htmlFor="email" className="block text-sm">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input className="rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)"
            type="text" id="email" name="email" autoComplete="email"
          />
        </div>

        {/* Query Type (Radio Buttons) */}
        <div>
          <label className="block text-sm">Query Type <span className="text-green-600">*</span></label>
          <div className="flex flex-row gap-4 mt-2">
            <label className="flex items-center gap-2 border border-[var(--Grey-900-darker)] rounded-lg p-2 w-[50%] cursor-pointer peer-checked:border-[var(--Green-600-medium)] focus-within:outline focus-within:outline-1 focus-within:outline-[var(--Green-600-medium)]">
              <input type="radio" name="queryType" value="general"
                className="sr-only peer"
              />
              <span className="ml-2 mr-1 w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:hidden"></span>
              <span className="hidden peer-checked:inline">
                <img src={iconRadioSelected} alt="Selected radio icon" className="ml-2 mr-1 w-5 h-5" />
              </span>
              General Enquiry
            </label>

            <label className="flex items-center gap-2 border border-[var(--Grey-900-darker)] rounded-lg p-2 w-[50%] cursor-pointer peer-checked:border-[var(--Green-600-medium)] focus-within:outline focus-within:outline-1 focus-within:outline-[var(--Green-600-medium)]">
              <input type="radio" name="queryType" value="support"
                className="sr-only peer"
              />
              <span className="ml-2 mr-1 w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full peer-checked:hidden"></span>
              <span className="hidden peer-checked:inline">
                <img src={iconRadioSelected} alt="Selected radio icon" className="ml-2 mr-1 w-5 h-5" />
              </span>
              Support Request
            </label>
          </div>
        </div>

        {/* Message Box */}
        <div>
          <label className="block text-sm" htmlFor="message">
            Message <span className="text-green-600">*</span>
          </label>
          <textarea className="rounded-lg border border-[var(--Grey-900-darker)] w-full p-2 mt-2 focus:border-[var(--Green-600-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--Green-600-medium)"
            id="message" name="message" rows="4" cols="50"
          ></textarea>
        </div>

        {/* Fixed Checkbox (Now Focusable with Tab) */}
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="custom-checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only peer"
          />
          <label
            htmlFor="custom-checkbox"
            className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-md peer-checked:border-[var(--Green-600-medium)] peer-focus:outline peer-focus:outline-1 peer-focus:outline-[var(--Green-600-medium)]"
          >
            {isChecked && <img src={checkmarkIcon} alt="Checked" className="w-5 h-5" />}
          </label>
          <span className="text-gray-800">
            I consent to being contacted by the team <span className="text-green-600">*</span>
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-[100%] p-3 bg-[var(--Green-600-medium)] rounded-xl text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;