import axios from "axios"
import { useEffect, useState } from "react"
import { jwtDecode } from 'jwt-decode';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    receiver_email: z
        .string()
        .min(1, "Receiver Email is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Enter Valid Email"),
    
    amount: z.string()
})


export default function Dashboard(){
    const token = localStorage.getItem("token");
    const [senderEmail, setSenderEmail] = useState("");
    useEffect(()=>{
        const decodedToken = jwtDecode(token);
        setSenderEmail(decodedToken.email);
    }, [])

    const {register, handleSubmit, formState : {errors}, reset} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sender_email: "",
            amount: 0,
            receiver_email: ""
        }
    })

    function submit(data){
        const transactionRequest = {
            sender_email: senderEmail,
            amount: data.amount,
            receiver_email: data.receiver_email
        }
        console.log(transactionRequest);
    }

    return(
        <>
            <h1>Transaction Page</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label className="label-align" htmlFor="receiver_email">Receiver Email<span className="required">*</span>:</label>
                <input
                    {...register("receiver_email")}
                    className={`form-input ${errors.receiver_email ? "error" : ""}`}
                    id="receiver_email"
                    type="text"
                    placeholder="Receiver Email" />

                <br /> 
                <p className={"error-phrase"}>{errors.receiver_email?.message}</p>
                
                <label className="label-align" htmlFor="amount">Amount<span className="required">*</span>:</label>
                <input
                    {...register("amount")}
                    className={`form-input ${errors.amount ? "error" : ""}`}
                    id="amount"
                    type="number"
                    placeholder="Amount" />

                <br /> 
                <p className={"error-phrase"}>{errors.amount?.message}</p>

                <div className="button-container">
                    <button type="submit" className="submit-btn">Send Money</button>
                </div>
            </form> 
        </>
    )
}