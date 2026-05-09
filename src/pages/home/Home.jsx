import ApiCall from "../../components/APICall/ApiCall";
import { Consumer } from "../../components/Consumer/Consumer";
import Form from "../../components/Form/Form";
import FormValidation from "../../components/FormValidation/FormValidation";
import GlobalCounter from "../../components/GlobalCounter/GlobalCounter";
import { Producer } from "../../components/Producer/Producer";

export default function Home(){
    return(
        <>
            {/* <Form></Form> */}
            {/* <FormValidation></FormValidation> */}
            <Producer></Producer>
            <Consumer></Consumer>
            {/* <ApiCall></ApiCall> */}
            <GlobalCounter></GlobalCounter>
        </>
    )
}