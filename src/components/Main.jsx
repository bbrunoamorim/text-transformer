import React, { useState } from 'react';

export default function Main() {
  const [text, setText] = useState('');

  const boldText = {
    fontWeight: 'bold'
  };

  const transformText = (textToTransform) => {
    const paragraphs = textToTransform.split('\n');

    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');

      const transformedLines = lines.map((line, lineIndex) => {
        const words = line.split(' ');

        return words.map((word) => {
          const boldLetters = word.slice(0, word.length / 2);
          const restOfWord = word.slice(word.length / 2);

          return (
            <React.Fragment key={ `${index}-${lineIndex}-${word}` }>
              <span style={ boldText }>{ boldLetters }</span>
              { restOfWord }{ ' ' }
            </React.Fragment>
          );
        });
      });

      return (
        <React.Fragment key={ index }>
          { transformedLines }
          <br />
        </React.Fragment>
      );
    });
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className="flex-col p-5 mb-6 mx-auto text-center font-serif">
      <h1 className="text-4xl mb-12 font-semibold text-gray-700">
        Bionic Reading
      </h1>
      <form>
        <label htmlFor="text-area" className="text-2xl font-medium text-gray-700">
          Text to be adapted:
          <div>
            <textarea
              id="text-area"
              value={ text }
              onChange={ handleChange }
              className="text-base w-3/4 h-80 my-8 p-3 shadow-xl rounded-lg bg-gray-50 scroll-smooth
              scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:cursor-text"
            />
          </div>
        </label>
      </form>
      <div className="w-3/4 text-justify mx-auto text-gray-700">
        <p className="text-2xl font-medium mb-10 text-center">
          Adapted text:
        </p>
        <div className="text-lg leading-7 subpixel-antialiased">
          { transformText(text) }
        </div>
      </div>
    </div>
  );
}
