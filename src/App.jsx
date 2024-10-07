import Header from "./component/Header";
import Content from "./component/Content";
import UserContext from "./Hooks/UserContext";

function App() {
  return (
    <>
      <UserContext>
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <div className="max-w-xs md:max-w-lg m-auto bg-slate-100">
            <Header />
            <Content />
          </div>
        </div>
      </UserContext>
    </>
  );
}

export default App;
