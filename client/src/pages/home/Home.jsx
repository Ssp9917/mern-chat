import { MessageContainer, Sidebar } from "../../components";

const Home = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg bg-black">
      <div className="flex max-w-3xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Message Container */}
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
