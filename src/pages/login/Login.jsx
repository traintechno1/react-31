import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";
import { Bounce, ToastContainer, toast} from "react-toastify";
import { useNavigate } from "react-router-dom";


const formSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Enter Valid Email"),

    password: z.string()
    .min(1, "Password is required")

})

export default function Login(){
    const {register, handleSubmit, formState : {errors}, reset} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const navigate = useNavigate();

    function submit(data){
        axios.post("http://localhost:3300/customer/login", data)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            reset();
            navigate("/dashboard");
        }).catch(error=>{
            console.log(error);
            toast.error('Unauthorised', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        })
    }

    return(
        <>
           <div className="register-container">
            <h1 className="text-center">User Login</h1>

            <form onSubmit={handleSubmit(submit)}>
                <label className="label-align" htmlFor="email">Email<span className="required">*</span>:</label>
                <input
                    {...register("email")}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    id="email"
                    type="text"
                    placeholder="Email" />

                <br /> 
                <p className={"error-phrase"}>{errors.email?.message}</p>


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
                    <button type="submit" className="submit-btn">Login</button>
                </div>
            </form>  

            <ToastContainer
                position="top-right"
                autoClose={5000}
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