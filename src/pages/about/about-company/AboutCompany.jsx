import { useParams } from "react-router-dom"

export default function AboutCompany(){
    const {companyId} = useParams();

    return(
        <h1>About Company with Id: {companyId}</h1>
    )
}