import { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "Form submited with:",
      "Name:",
      nameRef.current.value,
      "Email:",
      emailRef.current.value
    );
    // това след субмит, ще изпразни инпут полетата
    nameRef.current.value = "";
    emailRef.current.value = "";
  };
  return (
    <form>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
