import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log('Entered name: ' + enteredName);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log('Entered name: ' + enteredName); // Conventional way using useState

    const enteredValue = nameInputRef.current.value; // Alternative way using useRef
    console.log('Entered ref value: ' + enteredValue);

    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
