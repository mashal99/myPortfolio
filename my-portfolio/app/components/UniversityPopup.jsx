// app/components/UniversityPopup.jsx
import React from "react";

const UniversityPopup = ({ universityDetails, closePopup }) => {
  if (!universityDetails) return null;

  const mainProgram = universityDetails.programs?.[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#181818] border border-[#33353F] p-6 rounded-lg shadow-xl max-w-lg w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* University name */}
        <h3 className="text-2xl font-bold text-white mb-1">
          {universityDetails.name}
        </h3>

        {/* Main program (like a “role” line) */}
        {mainProgram && (
          <p className="text-lg text-blue-400 font-medium mb-2">
            {mainProgram.title}
          </p>
        )}

        {/* Meta info line (grad date / terms if available) */}
        {(mainProgram?.graduationDate || mainProgram?.term || mainProgram?.terms) && (
          <p className="text-xs text-[#ADB7BE] uppercase tracking-wider mb-4">
            {mainProgram?.graduationDate
              ? `Graduated: ${mainProgram.graduationDate}`
              : ""}
            {mainProgram?.term ? `  •  ${mainProgram.term}` : ""}
            {mainProgram?.terms ? `  •  ${mainProgram.terms}` : ""}
          </p>
        )}

        {/* All programs / highlights list */}
        <ul className="space-y-3 text-sm text-[#ADB7BE] max-h-[60vh] overflow-y-auto pr-2">
          {universityDetails.programs.map((prog, index) => (
            <li
              key={index}
              className="flex flex-col gap-1 leading-relaxed border-b border-[#33353F]/60 pb-2 last:border-none last:pb-0"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-blue-500 shrink-0 rounded-full" />
                <div>
                  <p className="font-medium text-white">{prog.title}</p>
                  {(prog.graduationDate || prog.term || prog.terms) && (
                    <p className="text-[11px] text-[#8B9AA5] uppercase tracking-wide mt-0.5">
                      {prog.graduationDate && `Graduation: ${prog.graduationDate}`}
                      {prog.term && (prog.graduationDate ? "  •  " : "") + prog.term}
                      {prog.terms && (prog.graduationDate || prog.term ? "  •  " : "") + prog.terms}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityPopup;
