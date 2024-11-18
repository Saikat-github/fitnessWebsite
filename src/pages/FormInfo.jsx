import React, { useCallback, useEffect, useId, useState } from 'react'
import { useForm } from 'react-hook-form';
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dbService from '../appwrite/data';
import { addDetails } from '../store/authSlice';

const FormInfo = () => {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { register, handleSubmit, setValue, watch, formState: { isSubmitting } } = useForm();
    const id = useId()
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const userDetails = useSelector((state) => state.auth.userDetails);
    const dispatch = useDispatch();



    useEffect(() => {
        if (!userData) {
            navigate("/login")
            return;
        }
    }, [])



    const questions = [
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>What is your primary fitness goal?</p>,
            options: ["Lose Fat", 'Build Muscle', "Body Recomposition (Build Muscle & Lose Fat)", "Health & Longevity"],
            name: "applicantGoal"
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>How old are you? My coaching is 18+</p>,
            options: ["18-25", "26-35", "36-45", "46+"],
            name: "applicantAge"
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>What is your gender?</p>,
            options: ["Male", "Female", "Other", "Prefer not to answer"],
            name: "applicantGender"
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>This application is for paid 1:1 coaching (including personalized nutrition, workouts, weekly chckins & whatsApp chat with me) do you want to continue?</p>,
            options: ["Yes", "No cancel my application"],
            name: "agreedToContinue"
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>Please Choose Your Plan (See pricing details on<span onClick={() => navigate("/pricing")} className='text-blue-700 cursor-pointer'> Pricing Page</span>)</p>,
            options: ["Guaranteed: Lose 5-10kg in 6 weeks [₹2999/mo]","Muscle Building [₹1499/mo]", "Weight Loss [₹1499/mo]", "Body Recomposition [₹1999/mo]"],
            name: "planChoosen"
        },
        {
            type: 'input',
            question: <p><span className='text-red-600'>*</span>Your Name</p>,
            name: "applicantName"
        },
        {
            type: "input",
            question: <p><span className='text-red-600'>*</span>What is your phone number?</p>,
            name: "phoneNo"
        },
        // {
        //     type: "input",
        //     question: "What is your e-mail address?",
        //     name: "email"
        // },
        {
            type: "input",
            question: <p><span className='text-red-600'>*</span>Name of your gym <br /><span className='text-xs'>(If you're not a member of any gym write N/A)</span></p>,
            name: "gymName",
        },
        // {
        //     type: "input",
        //     question: "What is your instagram handle?",
        //     name: "instaID"
        // }
    ];




    //form submission logic
    const onSubmit = async (data) => {
        setError(null);
        setLoading(true);
        console.log(data);
        try {
            const formData = await dbService.createPost({ ...data, userId: userData.$id });
            if (formData) {
                alert("Form submitted succesfully");
                dispatch(addDetails(formData))
                navigate("/account")
            }
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };



    //logic for next btn
    const handleNext = useCallback(() => {
        const currentField = (questions[currQuestion].name);
        const fieldValue = watch(currentField);
        if ((currQuestion !== questions.length - 1) && fieldValue) {
            setCurrQuestion((prev) => prev + 1)
        } else {
            alert("Please answer the question to proceed")
        }
    }, [currQuestion, questions])




    //logic for prev btn
    const handlePrev = () => {
        if (currQuestion > 0) {
            setCurrQuestion((prev) => prev - 1);
        }
    }



    //logic for btncliked
    const onBtnClicked = useCallback((value, question) => {
        setValue(question.name, value);
        setCurrQuestion(currQuestion + 1);
    }, [currQuestion, setValue]);



    //rendering each question
    const renderQuestion = (question, idx) => {
        const isActive = currQuestion === idx;
        return (
            <div key={idx} className={`flex flex-col  gap-6 items-center  ${isActive ? "block" : "hidden"}`}>
                <div className='font-semibold text-sm lg:text-xl text-center w-2/3'>{question.question}</div>
                {question.type === 'input' ? (
                    <input
                        type='text'
                        {...register(question.name, { required: true })}
                        className='px-10 py-2 border border-black rounded-full outline-none lg:w-[70vh] xl:w-[80vh]'
                    />
                ) : (
                    <div className='grid lg:grid-cols-2 grid-cols-1  gap-6 lg:px-20'>
                        {question.options.map((option, i) => (
                            <button
                                type="button"
                                key={i}
                                className={`px-10 py-4 border border-black rounded-full sm:w-80 w-64 text-sm transition-all duration-500 ${watch(question.name) === option ? "bg-red-700 text-white" : "hover:bg-red-700 hover:text-white"}`}
                                onClick={() => onBtnClicked(option, question)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };


    if (userDetails) return (<div className='my-20 font-semibold text-center'>You have already submitted your details, to add new details please delete your info from <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/account')}>Account</span> Page</div>)

    return !error ? (
        <div className='lg:px-32 px-4 my-10'>
            <h3 className='text-center text-xs lg:text-sm font-semibold text-red-600 my-4'>
                Please fill in the details below correctly, so we can contact you and start helping you achieve your Goal fast.
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-6 my-10'>
                <div className='flex flex-col gap-10 justify-center'>
                    {questions.map((question, idx) => (renderQuestion(question, idx)))}
                </div>


                <br />
                <div className="flex justify-around w-full my-4">
                    {currQuestion > 0 && (
                        <button type="button" className="border sm:px-12 border-black hover:scale-105 transition p-2 rounded flex flex-row-reverse gap-2" onClick={handlePrev}>
                            <span className='hidden sm:inline'>Previous</span>
                            <img src={arrowLeft} className='w-6' alt="" />
                        </button>
                    )}
                    {currQuestion < questions.length - 1 && (
                        <button type="button" className="border sm:px-12 border-black hover:scale-105 transition p-2 rounded  bg-red-600 text-white flex  gap-2" onClick={handleNext}>
                            <span className='hidden sm:inline'>Next</span>
                            <img src={arrowRight} className='w-6' alt="" />
                        </button>
                    )}
                    {currQuestion === questions.length - 1 && (
                        <button disabled={isSubmitting || userDetails} type="submit" className="flex gap-3 border sm:px-12 border-black hover:scale-105 transition p-2 rounded  bg-green-500 text-white">
                            <span>Submit</span> {loading ? <div className="h-6 w-6 border-4 border-t-blue-500 rounded-full animate-spin "></div> : null}
                        </button>
                    )}
                </div>
            </form>
        </div>
    ) : (<div className='h-screen w-screen flex justify-center items-center text-4xl text-red-700'>{error}</div>)
}

export default FormInfo