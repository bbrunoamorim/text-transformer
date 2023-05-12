import React from 'react';

export default function Footer() {
  return (
    <div className="text-center font-serif text-gray-700 text-sm">
      <a href="https://github.com/bbrunoamorim" target="_blank" rel="noreferrer">
        <p>
          this is a project developed by Bruno Amorim
          <img src="./src/assets/images/github.svg" alt="Github Logo" className="inline w-5 ml-1 mb-1" />
        </p>
      </a>
    </div>
  );
}
