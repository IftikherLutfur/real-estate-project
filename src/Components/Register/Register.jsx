import { Link } from "react-router-dom";

const Register = () => {



    return (
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm dark:text-gray-600">Create an new account</p>
	</div>


	<form className="space-y-12">

		<div className="space-y-4">

			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Name</label>

				<input
                type="name" 
                name="name" id="email" 
                placeholder="Enter your name" 
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>

			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email</label>

				<input 
                type="email"
                name="email"
                placeholder="Example@gmail.com" 
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>

			<div>
				<div className="flex justify-between mb-2">
                    
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input 
                type="password" 
                name="password" 
                placeholder="*****" 
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>

			<div>
				<div className="flex justify-between mb-2">

		<label htmlFor="password" className="text-sm">Confirm Password</label>
		</div>
		<input 
        type="password" 
        name="confirmPassword" 
        placeholder="*****" 
        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>

		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">have an account yet?
                <button>
				<Link to="/login">
                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Login</a>
                </Link>
                </button>
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default Register;