import React, { useCallback, useEffect, useId, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dbService from '../appwrite/data';
import { addDetails } from '../store/authSlice';
import { sendTelegramNotification } from '../conf/otherInfo.js'
import { toast } from 'react-toastify';
import { MoveRight, MoveLeft } from 'lucide-react';
import { Button1, SmallLoader } from '../components/index.js';



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
            toast.warning("Please login to continue")
            navigate("/login")
            return;
        }
    }, [])

    const handleRedirect = () => {
        window.open('/pricing', '_blank');
    };

    const questions = [
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>What is your primary fitness goal?</p>,
            options: ["Lose Fat", 'Build Muscle', "Body Recomposition (Build Muscle & Lose Fat)", "Health & Longevity"],
            name: "applicantGoal",
            required: true
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>What is your gender?</p>,
            options: ["Male", "Female", "Other", "Prefer not to answer"],
            name: "applicantGender",
            required: true
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>This application is for paid 1:1 coaching (including personalized nutrition, workouts, weekly check-ins & WhatsApp chat with me) do you want to continue?</p>,
            options: ["Yes", "No cancel my application"],
            name: "agreedToContinue",
            required: true
        },
        {
            type: 'input',
            question: <p><span className='text-red-600'>*</span>Your Name</p>,
            name: "applicantName",
            required: true
        },
        {
            type: "input",
            question: <p><span className='text-red-600'>*</span>What is your phone number?</p>,
            name: "phoneNo",
            required: true
        },
        {
            type: "input",
            question: <p><span className='text-red-600'>*</span>How old are you? My coaching is for 18+</p>,
            name: "applicantAge",
            required: true
        },
        {
            type: "input",
            question: "What is your weight in kg?",
            name: "weight",
            required: true
        },
        {
            type: "input",
            question: "What is your height?(in centimeters)",
            name: "height",
            required: true
        },
        {
            type: "button",
            question: <p><span className='text-red-600'>*</span>Please Choose Your Plan, You don't have to pay now. <br /> (See pricing details on <Link className='text-blue-500' to="#" onClick={handleRedirect}>Pricing Page</Link> )</p>,
            options: ["Guaranteed: Lose 5-10 kg in 6 weeks (₹ 1999/mo)", "Muscle Building (₹ 1599/mo)", "Body Recomposition (₹ 1999/mo)"],
            name: "planChoosen"
        },
        {
            type: "input",
            question: <p>Name of your gym <br /><span className='text-xs'>(Optional)</span></p>,
            name: "gymName",
            required: false
        }
    ];




    //form submission logic
    const onSubmit = async (data) => {
        console.log(data);
        setError(null);
        setLoading(true);
        try {
            const formData = await dbService.createPost({ ...data, userId: userData.$id });
            console.log("formdata", formData);
            if (formData) {
                await sendTelegramNotification(data, "APPLICATION FOR PROGRAM");
                toast.success("Form submitted succesfully");
                dispatch(addDetails({ ...formData, email: userData.email }))
                navigate("/account")
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
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
            toast.info("Please answer the question to proceed")
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
        setTimeout(() => {
            setValue(question.name, value);
            setCurrQuestion(currQuestion + 1);
        }, 300);
    }, [currQuestion, setValue]);



    //rendering each question
    const renderQuestion = (question, idx) => {
        const isActive = currQuestion === idx;
        return (
            <div key={idx} className={`flex flex-col  gap-6 items-center  ${isActive ? "block" : "hidden"}`}>
                <div className='font-semibold text-sm lg:text-xl text-center w-2/3'>{question.question}</div>
                {question.type === 'input' ? (
                    <input
                        placeholder={question.name}
                        type='text'
                        {...register(question.name, { required: question.required })}
                        className='text-black px-10 py-2 border border-black rounded-full outline-none lg:w-[70vh] xl:w-[80vh]'
                    />
                ) : (
                    <div className='grid lg:grid-cols-2 grid-cols-1  gap-6 lg:px-20'>
                        {question.options.map((option, i) => (
                            <button
                                type="button"
                                key={i}
                                className={`px-10 py-4 border border-white rounded-full sm:w-80 w-64 text-sm transition-all duration-500 ${watch(question.name) === option ? "bg-red-700 text-white" : "hover:bg-red-700 hover:text-white"}`}
                                onClick={option === "No cancel my application" ? () => navigate("/") : () => onBtnClicked(option, question)}
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
        <div className='lg:px-32 px-4 py-10'>
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
                        <button type="button" className="border sm:px-12  hover:scale-105 transition p-2 rounded flex flex-row-reverse gap-2" onClick={handlePrev}>
                            <span className='hidden sm:inline'>Previous</span>
                            <MoveLeft className='w-6' />
                        </button>
                    )}
                    {currQuestion < questions.length - 1 && (
                        <button type="button" className="sm:px-12  hover:scale-105 transition p-2 rounded  bg-red-600 text-white flex  gap-2" onClick={handleNext}>
                            <span className='hidden sm:inline'>Next</span>
                            <MoveRight className='w-6'/>
                        </button>
                    )}
                    {currQuestion === questions.length - 1 && (
                        <Button1 disabled={isSubmitting || userDetails} type="submit" className="flex gap-3 sm:px-12  hover:scale-105 transition p-2 rounded text-white">
                             {loading ? <SmallLoader /> : "Submit"}
                        </Button1>
                    )}
                </div>
            </form>
        </div>
    ) : (<div className='h-screen text-center my-20 text-3xl text-red-600 font-semibold'>{error} <br /><span className='text-blue-600'>Please Reload the page</span></div>)
}

export default FormInfo