import React, { useState } from "react";
// TODO
// Challenge:
// 1. Have a user then play
// 2. Quiz 1 - 10 with random # questions
// 3. Show the score at the end of the game
const Form = () => {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    
    if (status === 'success') {
        return <h1 className="py-2 px-12 w-[500px] bg-emerald-500 text-emerald-100 font-semibold text-4xl rounded-md shadow-md text-center">🎉 That's RIGHT!</h1>
    }

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer);
            setStatus('success');
        } catch (error) {
            setStatus('typing');
            setError(error);
        }
    };

    return (
        <>
            <h2>City quiz</h2>
            <h2>Status: {status}</h2>
            <p>
                In which city is there a billboard that turns air into drinkable
                water?
            </p>
            <form onSubmit={handleSubmit} className="w-[500px] flex flex-col gap-2">
                <div>
                    <textarea
                        onChange={handleChange}
                        value={answer}
                        cols="30"
                        rows="10"
                        className="border-2 border-black py-2 px-4 w-full"
                    />
                    {error && (
                        <p className="text-rose-200 bg-rose-600 font-semibold py-2 px-4 w-full">{error.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`py-2 px-12 text-white ${answer.length === 0 ? 'bg-slate-300' : 'bg-slate-500 hover:bg-slate-400'} rounded-md shadow-md`} 
                    disabled={answer.length === 0 || status === 'submitting'}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'))
            } else {
                resolve();
            }
        }, 1500)
    })
}

export default Form;
