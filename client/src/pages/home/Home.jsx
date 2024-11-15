import { MessageContainer, Sidebar } from "../../components";

const Home = () => {
	return (
		<div className='flex flex-col md:flex-row h-screen  w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white'>
			{/* Sidebar */}
			<Sidebar />

			{/* Message Container */}
			<MessageContainer />
		</div>
	);
};

export default Home;
