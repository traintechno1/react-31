
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./FormValidation.css";

const formSchema = z.object({
    first_name : z
    .string()
    .min(1, "First Name is required")
    .min(2, "First Name must be at least 2 characters")
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

    lang: z.array(z.string())
    .min(1, "Please select at least one language")
})

export default function FormValidation(){
    
    const {register, handleSubmit, formState : {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            gender: "",
            lang: []
        }
    })

    function submit(data){
        console.log(data);
    }

    return (
        <>
            <h1>Form Example:</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="first_name">First Name:</label>
                <input
                    {...register("first_name")}
                    className={errors.first_name ? "error" : ""}
                    id="first_name"
                    autoComplete="false"
                    type="text"
                    placeholder="First Name" />

                <br /> 
                <p className={"error-phrase"}>{errors.first_name?.message}</p>
                
                <label htmlFor="last_name">Last Name:</label>
                <input
                    {...register("last_name")}
                    className={errors.last_name ? "error" : ""}
                    id="last_name"
                    autoComplete="false"
                    type="text"
                    placeholder="Last Name" />

                <br /> 
                <p className={"error-phrase"}>{errors.last_name?.message}</p>
                
                <label htmlFor="email">Email:</label>
                <input
                    {...register("email")}
                    className={errors.email ? "error" : ""}
                    id="email"
                    type="text"
                    placeholder="Email" />

                <br /> 
                <p className={"error-phrase"}>{errors.email?.message}</p>

                <label htmlFor="mobile">Mobile:</label>
                <input
                    {...register("mobile")}
                    className={errors.mobile ? "error" : ""}
                    id="mobile"
                    type="text"
                    placeholder="Mobile" />
                <br />
                <p className={"error-phrase"}>{errors.mobile?.message}</p>

                <label>Gender:</label>
                <input id="male" type="radio" value={"Male"} {...register("gender")} /> <label htmlFor="male">Male</label>
                <input id="female" type="radio" value={"Female"} {...register("gender")} /> <label htmlFor="female">Female</label>
                <br />
                <p className={"error-phrase"}>{errors.gender?.message}</p>


                <label>Prefered Languages:</label>
                <input type="checkbox" {...register("lang")} value={"Java"} id="java" /> <label htmlFor="java">Java</label>
                <input type="checkbox" {...register("lang")} value={"JS"} id="js" /> <label htmlFor="js">Javascript</label>
                <input type="checkbox" {...register("lang")} value={"React"} id="react" /> <label htmlFor="react">React</label>
                <input type="checkbox" {...register("lang")} value={"Python"} id="python" /> <label htmlFor="python">Python</label>
                <input type="checkbox" {...register("lang")} value={"DotNet"} id="net" /> <label htmlFor="net">.Net</label>
                <br/>

                <p className={"error-phrase"}>{errors.lang?.message}</p>

                <br />
                <button type="submit">Submit</button>
            </form>            
        </>
    )
}