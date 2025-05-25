import Button from "./Components/Button";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Button>Click Me</Button>
        <Button color="danger" size="small">
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
