import { useState, useMemo, useCallback } from "react";

const ControlledForm = ({ value }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handlerNameInput = (event) => {
    setName(event.target.value);
  };

  const handlerEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlerPasswordInput = (event) => {
    setPassword(event.target.value);
  };

  // useCallback, ше пази стойността на инпута, ако той е един и същ,
  //ако имаме различен input handleSubmit, ще се извика отново
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(
        "Form submited with:",
        "Name:",
        name,
        "Email:",
        email,
        "Password:",
        password
      );
      // това след субмит, ще изпразни инпут полетата
      setName("");
      setEmail("");
      setPassword("");
      // този dependency array се изисква от useCallback
    },
    [name, email, password]
  );

  const result = useMemo(() => {
    return value * 2;
  }, [value]);
  return (
    <>
      {<p>{result}</p>}
      <form>
        {name.length < 5 && <p>Name must be longer then 5 characters</p>}
        <label>
          Name:
          <input type="text" onChange={handlerNameInput} value={name} />
        </label>
        <br />
        <label>
          Email:
          {/* за да контролираме формата, трябва да зададем value, в случая value = email  */}
          <input type="email" onChange={handlerEmailInput} value={email} />
        </label>
        <br />
        <label>
          Password:
          <input
            type={show ? "text" : "password"}
            onChange={handlerPasswordInput}
            value={password}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {/* за да ни покаже паролата бутона трябва да е извън формата, защото при onClick, пак презарежда страницата  */}
      <button onClick={handleShowPassword}>Show</button>
    </>
  );
};

export default ControlledForm;
