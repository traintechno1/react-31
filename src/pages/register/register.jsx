
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import "./register.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    first_name : z
    .string()
    .min(1, "First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "Only characters allowed"),
    
    middle_name : z
    .string()
    .min(1, "Middle Name is required")
    .min(2, "Middle Name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "Only characters allowed"),

    last_name: z
    .string()
    .min(1, "Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "Only characters allowed"),

    email: z
        .string()
        .min(1, "Email is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Enter Valid Email"),

    mobile: z.string()
        .min(1, "Mobile is required")
        .min(10, "Mobile must be 10-digit number")
        .max(10, "Mobile must be 10-digit number")
        .regex(/^[6789]{1}[0-9]{9}$/, "Please enter valid mobile number"),

    gender: z.string()
    .min(1, "Gender is required"),

    address: z.string()
    .min(1, "Address is required")
    .max(200, "Address should not be more than 200 characters"),

    aadhar: z.string()
    .min(1, "AADHAAR number is required")
    .regex(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/, "Please Enter Valid AADHAAR Number"),

    pan_number: z.string()
    .min(1, "PAN number is required")
    .regex(/^[A-Z]{3}[PCHFATBLJG][A-Z](?!0000)\d{4}[A-Z]$/, "Please enter valid PAN Number"),

    password: z.string()
    .min(1, "Password is required")

})

export default function Register(){

    const {register, handleSubmit, formState : {errors}, reset} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            middle_name: "",
            last_name: "",
            email: "",
            mobile: "",
            address: "",
            gender: "",
            aadhar: "",
            pan_number: "",
            password: ""
        }
    })

    const navigate = useNavigate();

    function submit(data){
        const request = data;
        axios.post("http://localhost:3300/customer", request)
        .then(res=>{

            const token = res.data.token;
            const accountRequest = {
                email: request.email,
                name: `${request.first_name} ${request.middle_name} ${request.last_name}`
            }
            axios.post("http://localhost:3300/account", 
            accountRequest,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                reset();
                toast.success('User created successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                navigate("/login");
            })

        })
    }

    return(
        <>
        {/* 
            first name, middle name, last name, gender, mobile, email, address, adhar, pan, dob
        */}
        <div className="register-container">
            <h1 className="text-center">Register Page</h1>

            <form onSubmit={handleSubmit(submit)}>
                <label className="label-align" htmlFor="first_name">First Name<span className="required">*</span>:</label>
                <input
                    {...register("first_name")}
                    className={`form-input ${errors.first_name ? "error" : ""}`}
                    id="first_name"
                    autoComplete="false"
                    type="text"
                    placeholder="First Name" />

                <br /> 
                <p className={"error-phrase"}>{errors.first_name?.message}</p>
                
                <label className="label-align" htmlFor="middle_name">Middle Name<span className="required">*</span>:</label>
                <input
                    {...register("middle_name")}
                    className={`form-input ${errors.middle_name ? "error" : ""}`}
                    id="middle_name"
                    autoComplete="false"
                    type="text"
                    placeholder="Middle Name" />

                <br /> 
                <p className={"error-phrase"}>{errors.middle_name?.message}</p>
                
                <label className="label-align" htmlFor="last_name">Last Name<span className="required">*</span>:</label>
                <input
                    {...register("last_name")}
                    className={`form-input ${errors.last_name ? "error" : ""}`}
                    id="last_name"
                    autoComplete="false"
                    type="text"
                    placeholder="Last Name" />

                <br /> 
                <p className={"error-phrase"}>{errors.last_name?.message}</p>
                
                <label className="label-align" htmlFor="email">Email<span className="required">*</span>:</label>
                <input
                    {...register("email")}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    id="email"
                    type="text"
                    placeholder="Email" />

                <br /> 
                <p className={"error-phrase"}>{errors.email?.message}</p>

                <label className="label-align" htmlFor="mobile">Mobile<span className="required">*</span>:</label>
                <input
                    {...register("mobile")}
                    className={`form-input ${errors.mobile ? "error" : ""}`}
                    id="mobile"
                    type="text"
                    placeholder="Mobile" />
                <br />
                <p className={"error-phrase"}>{errors.mobile?.message}</p>

                <label className="label-align" htmlFor="address">Address<span className="required">*</span>:</label>
                <input
                    {...register("address")}
                    className={`form-input ${errors.address ? "error" : ""}`}
                    id="address"
                    autoComplete="false"
                    type="text"
                    placeholder="Address" />

                <br /> 
                <p className={"error-phrase"}>{errors.address?.message}</p>

                <label className="label-align">Gender<span className="required">*</span>:</label>
                <input id="male" type="radio" value={"Male"} {...register("gender")} /> <label className="checkbox-align" htmlFor="male">Male</label>
                <input id="female" type="radio" value={"Female"} {...register("gender")} /> <label htmlFor="female">Female</label>
                <br />
                <p className={"error-phrase"}>{errors.gender?.message}</p>

                <label className="label-align" htmlFor="aadhar">AADHAR Number<span className="required">*</span>:</label>
                <input
                    {...register("aadhar")}
                    className={`form-input ${errors.aadhar ? "error" : ""}`}
                    id="aadhar"
                    autoComplete="false"
                    type="text"
                    placeholder="AADHAR Number" />

                <br /> 
                <p className={"error-phrase"}>{errors.aadhar?.message}</p>

                {/* REHPG6567T */}
                <label className="label-align" htmlFor="pan_number">PAN Number<span className="required">*</span>:</label>
                <input
                    {...register("pan_number")}
                    className={`form-input ${errors.pan_number ? "error" : ""}`}
                    id="pan_number"
                    autoComplete="false"
                    type="text"
                    placeholder="PAN Number" />

                <br /> 
                <p className={"error-phrase"}>{errors.pan_number?.message}</p>
                
                <label className="label-align" htmlFor="password">Password<span className="required">*</span>:</label>
                <input
                    {...register("password")}
                    className={`form-input ${errors.password ? "error" : ""}`}
                    id="password"
                    autoComplete="false"
                    type="password"
                    placeholder="Password" />

                <br /> 
                <p className={"error-phrase"}>{errors.password?.message}</p>

                <div className="button-container">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>  

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
                />   
        </div>
        </>
    )
}