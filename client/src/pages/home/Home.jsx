import { MessageContainer, Sidebar } from "../../components";

const Home = () => {
	return (
		<div className='flex  md:flex-row   mx-auto rounded-lg overflow-hidden shadow-lg bg-white'>
			{/* Sidebar */}
			<Sidebar />

			{/* Message Container */}
			<MessageContainer />
		</div>
	);
};

export default Home;
