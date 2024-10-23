import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100'>
			<div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg'>
				<h1 className='text-3xl font-bold text-center text-gray-700'>
					Sign Up <span className='text-blue-600'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm font-medium text-gray-600'>Full Name</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-600'>Username</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-600'>Password</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-600'>Confirm Password</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full mt-1 input input-bordered border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<div className='text-sm text-center'>
						<Link
							to='/login'
							className='text-blue-600 hover:underline'
						>
							Already have an account?
						</Link>
					</div>

					<div>
						<button
							type='submit'
							className='w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
