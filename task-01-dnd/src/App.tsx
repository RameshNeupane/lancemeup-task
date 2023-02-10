import DnDContainer from "./components/DnDContainer";

const App = () => {
  return (
    <div className=" w-screen h-screen font-rubik flex flex-col items-center py-8 gap-8">
      <h1 className=" text-center text-3xl font-medium">
        Task: Drag and Drop Interface Using React
      </h1>
      <DnDContainer />
    </div>
  );
};

export default App;
