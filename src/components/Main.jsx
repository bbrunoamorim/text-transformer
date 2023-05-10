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
    <div className="flex-col text-center p-5 my-6">
      <form>
        <label htmlFor="text-area" className="text-2xl font-medium">
          Texto a ser adaptado:
          <div>
            <textarea
              id="text-area"
              value={ text }
              onChange={ handleChange }
              className="text-base w-2/3 h-80 my-8 p-2"
            />
          </div>
        </label>
      </form>
      <div>
        <p className="text-2xl font-medium mb-10">Texto transformado:</p>
        <div className="text-xl">
          { transformText(text) }
        </div>
      </div>
    </div>
  );
}
