import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100'>
			<div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg'>
				<h1 className='text-3xl font-bold text-center text-gray-700'>
					Login <span className='text-blue-600'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm font-medium text-gray-600'>Username</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-600'>Password</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='text-sm text-center'>
						<Link to='/signup' className='text-blue-600 hover:underline'>
							Don't have an account?
						</Link>
					</div>

					<div>
						<button
							type='submit'
							className='w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
