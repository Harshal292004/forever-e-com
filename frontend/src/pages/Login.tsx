import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
    const [currState, setCurrState] = useState<"Sign Up" | "Login">("Sign Up");
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); 

    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); 
        if (!email || !password) {
            toast.error("Please fill in all fields");
            setLoading(false); 
            return;
        }

        if (currState === "Sign Up" && !userName) {
            toast.error("Username is required for Sign Up");
            setLoading(false);
            return;
        }

        if (!termsAccepted) {
            toast.error("Please accept the terms and conditions");
            setLoading(false);
            return;
        }

        try {
            console.log(`Processing ${currState === "Sign Up" ? "Sign Up" : "Login"}...`);
            /* if (currState === "Sign Up") {
                const userId = await signUp(userName, email, password);
                console.log(`UserId: ${userId}`)           
                if (userId) {
                    await loadUserData(userId);
                    console.log(`User data after loading in the handle submit: ${userData}`);
                    navigate("/chat");
                }
            } else {
                const userId = await logIn(email, password);
                if (userId) {
                    await loadUserData(userId);
                    navigate("/chat");
                }
            } */
        } catch (error) {
            console.error("Authentication error:", error);
            toast.error((error as Error).message || "Authentication failed");
        } finally {
            console.log("Authentication process complete");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center text-black mb-6">
                    {currState}
                </h2>
                
                {currState === "Sign Up" && (
                    <input 
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        type="text" 
                        placeholder='Name' 
                        className="w-full px-4 py-3 mb-4 bg-white text-black border border-black rounded-lg focus:outline-none" 
                    />
                )}
                
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email} 
                    placeholder='Email address' 
                    className="w-full px-4 py-3 mb-4 bg-white text-black border border-black rounded-lg focus:outline-none" 
                />
                
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password} 
                    placeholder='Password' 
                    className="w-full px-4 py-3 mb-4 bg-white text-black border border-black rounded-lg focus:outline-none" 
                />
                
                <button 
                    type='submit' 
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 mb-4"
                    disabled={loading}
                >
                    {loading ? "Processing..." : currState === "Sign Up" ? "Sign Up" : "Login"}
                </button>
                
                <div className="flex items-center justify-between mb-4">
                    <a href="#" className="text-black text-sm hover:underline">
                        Forgot your password?
                    </a>
                    <a href="#" className="text-black text-sm hover:underline">
                        Login Here
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
