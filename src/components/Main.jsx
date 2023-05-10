import React, { useState } from 'react';

export default function Main() {
  const [text, setText] = useState('');

  const boldText = {
    fontWeight: 'bold'
  };

  const transformText = (textToTransform) => {
    const words = textToTransform.split(' ');

    return words.map((word) => {
      const firstLetter = word.slice(0, (word.length) / 2 + 1);
      const restOfWord = word.slice(word.length / 2 + 1);

      return (
        <React.Fragment key={ word }>
          <span style={ boldText }>{ firstLetter }</span>
          { restOfWord }{ ' ' }
        </React.Fragment>
      );
    });
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className="flex-col p-5 my-6 mx-auto text-center font-serif">
      <form>
        <label htmlFor="text-area" className="text-2xl font-medium">
          Text to be adapted:
          <div>
            <textarea
              id="text-area"
              value={ text }
              onChange={ handleChange }
              className="text-base w-2/3 h-80 my-8 p-3 shadow-xl rounded-lg bg-gray-50 scroll-smooth
              scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:cursor-text"
            />
          </div>
        </label>
      </form>
      <div className="w-3/4 text-justify mx-auto">
        <p className="text-2xl font-medium mb-10 text-center">
          Adapted text:
        </p>
        <div className="text-xl leading-8 subpixel-antialiased">
          { transformText(text) }
        </div>
      </div>
    </div>
  );
}
