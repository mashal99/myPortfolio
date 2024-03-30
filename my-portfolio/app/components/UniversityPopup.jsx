import React from 'react';

const UniversityPopup = ({ universityDetails, onClose }) => {
  if (!universityDetails) return null;

  return (
      <div className="university-popup bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">{universityDetails.name}</h3>
          <ul>
              {universityDetails.programs.map((program, index) => (
                  <li key={index} className="mb-2">
                      <p className="font-semibold">{program.title}</p>
                      {program.graduationDate && <p>Graduation Date: {program.graduationDate}</p>}
                      {program.term && <p>Term: {program.term}</p>}
                  </li>
              ))}
          </ul>
          <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Close
          </button>
      </div>
  );
};


UniversityPopup.defaultProps = {
    university: { name: '', programs: [] }
};

export default UniversityPopup;
