import React from 'react';

const ExperiencePopup = ({ jobDetails, onClose }) => {
  if (!jobDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#181818] border border-[#33353F] p-6 rounded-lg shadow-xl max-w-lg w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-white mb-1">{jobDetails.company}</h3>
        <p className="text-lg text-blue-400 font-medium mb-2">{jobDetails.role}</p>
        <p className="text-sm text-[#ADB7BE] uppercase tracking-wider mb-4">
          {jobDetails.period} | {jobDetails.location}
        </p>
        <ul className="space-y-3 text-[#ADB7BE] max-h-[60vh] overflow-y-auto pr-2">
          {jobDetails.description.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-blue-500 shrink-0 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePopup;
