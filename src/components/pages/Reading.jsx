import React, { useState } from 'react'

export default function Reading() {
  let words = [
    "Miras", 
    "Yedige",
    "Alikhan",
    "Bekarys"
  ]

  const [spaces, setSpaces] = useState(words.map((word, index) => ({origWord: word, currentWord: ""})));
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);

  function checkUserInput(e)
  {
    let cnt = 0;
    for (let i = 0; i < spaces.length; i++)
    {
      if (spaces[i].currentWord === spaces[i].origWord)
      {
        cnt++;
      }
    }
    cnt /= spaces.length;
    alert(`You scored ${cnt * 100}%!`);
    setSpaces((arr) => arr.map((elem, ind) => ({origWord: elem.origWord, currentWord: ""})));
  }

  function dragOverHandler(e, word, board)
  {
    e.preventDefault();
    if (e.target.className.includes('board'))
    {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }
  function dragLeaveHandler(e)
  {
    e.target.style.boxShadow = 'none';
  }
  function dragStartHandler(e, word, board)
  {
    setCurrentBoard(board);
    setCurrentWord(word);
  }
  function dragEndHandler(e)
  {
    console.log(e);
    e.target.style.boxShadow = 'none';
  }
  function dropHandler(e, word, board)
  {
    if (currentWord === "")
    {
      return;
    }
    e.target.style.boxShadow = "none";
    e.preventDefault();

    setSpaces((arr) => arr.map((space, index) => {
      if (index == e.target.getAttribute('data-index'))
      {
        return {...space, currentWord: currentWord};
      }
      else
      {
        return space;
      }
    }));
    setCurrentWord("");
  }

  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      {
        spaces.map((space, index) => (
          <div data-index={index} className='board w-1/4 h-12 bg-gray-500 my-2'
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDrop={(e) => dropHandler(e)}
          >
            {space.currentWord}
          </div>
        ))
      }
      {
      words.map((word, index) => 
        (
          <div className='word w-1/4 bg-red-500 my-2' 
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e, word, "")}
          onDragOver={(e) => e.preventDefault()}
          draggable>
            {word}
          </div>
        ))
      }
      <button onClick={checkUserInput} className='bg-gray-500 w-20 h-14 rounded-xl hover:text-white'>
        Submit
      </button>
    </div>
  )
}
