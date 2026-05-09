import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { jwtDecode } from 'jwt-decode';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const formSchema = z.object({
    receiver_email: z
        .string()
        .min(1, "Receiver Email is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Enter Valid Email"),
    
    amount: z.string()
})

export default function Dashboard(){
    const {token} = useContext(AuthContext);
    const [senderEmail, setSenderEmail] = useState("");
    const [transactions, setTransactions] = useState([]);
    let [decodedToken, setDecodedToken] = useState("");
    const {counter} = useContext(AuthContext)
    const description = useSelector((state)=> state.description.d);

    useEffect(()=>{
        setDecodedToken(jwtDecode(token));
        setSenderEmail(jwtDecode(token).email);
        getTransactions();
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
            amount: +data.amount,
            receiver_email: data.receiver_email
        }
        postTransaction(transactionRequest);
    }

    function postTransaction(request){
        axios.post("http://localhost:3300/transact",
        request,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            getTransactions();
        })
    }

    function getTransactions(){
        axios.get(`http://localhost:3300/transact/${jwtDecode(token).email}`,
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }
        )
        .then(res=> {
            setTransactions(res.data.transactions)
        })
    }

    return(
        <>
            <div className="d-flex justify-content-between mx-3">
                <h3>Transaction Page</h3>
                <h3>Welcome, {decodedToken.full_name}</h3>
            </div>
            <div>
                <p>The counter value is: {counter}</p>
                <p>Description is: {description}</p>
            </div>
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

            <div>
                <h3>Transactions</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Counter Party</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                transactions.map((tx=>{
                                   return <tr>
                                        <td className="p-3" scope="row">{tx.counterparty}</td>
                                        <td className={tx.type == "credit" ? "bg-success-subtle": "bg-danger-subtle" }>{tx.amount}</td>
                                        <td className="p-3">{tx.timestamp}</td>
                                        <td className="p-3">{tx.type}</td>
                                    </tr>
                                }))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}