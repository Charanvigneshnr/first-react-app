import "./App.css";

const Comp1 = (props) => {
  return (
    <>
      <h1>First Name: {props.fname}</h1>
      <h1>Last Name: {props.lname}</h1>
      <h1>Age: {props.age}</h1>
    </>
  );
};

const App = () => {
  const name = "Charan";
  const isName = true;
  return (
    <>
      <div className="App">
        <h1>Hello {isName ? name : "Someone"}!</h1>
        {isName ? (
          <>
            <h1>Correct st1</h1>
            <h1>Correct st2</h1>
          </>
        ) : (
          <>
            <h1>Wrong st1</h1>
            <h1>Wrong st1</h1>
          </>
        )}
      </div>
      <Comp1 fname={"Charan Vignesh"} lname={"N R"} age={20} />
    </>
  );
};

export default App;
