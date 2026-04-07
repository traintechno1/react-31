import { useState } from "react"

export default function Form() {

    let [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        gender: "",
        lang: []
    });

    function handleFormChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function handleLangChange(event) {
        // if(form.lang.length > 2){
        //     alert("You can only select max 3 values");
        //     return;
        // }
        let { value, checked } = event.target;
        let updatedLangs = [];
        if (checked) {
            updatedLangs = [...form.lang, value];
        } else {
            updatedLangs = form.lang.filter(i => i != value)
        }
        setForm({
            ...form,
            lang: updatedLangs
        })
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(form);
    }

    return (
        <>
            <h1>Form Example:</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="first_name">First Name:</label>
                <input
                    id="first_name"
                    type="text"
                    onChange={handleFormChange}
                    name="first_name"
                    value={form.first_name}
                    placeholder="First Name" />

                <br />
                <br />

                <label htmlFor="last_name">Last Name:</label>
                <input
                    id="last_name"
                    type="text"
                    onChange={handleFormChange}
                    name="last_name"
                    value={form.last_name}
                    placeholder="Last Name" />
                <br />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    onChange={handleFormChange}
                    name="email"
                    value={form.email}
                    placeholder="Email" />
                <br />
                <br />

                <label htmlFor="mobile">Mobile:</label>
                <input
                    id="mobile"
                    type="text"
                    onChange={handleFormChange}
                    name="mobile"
                    value={form.mobile}
                    placeholder="Mobile" />

                <br />
                <br />
                <label>Gender:</label>
                <input id="male" type="radio" onChange={handleFormChange} name="gender" value={"Male"} /> <label htmlFor="male">Male</label>
                <input id="female" type="radio" onChange={handleFormChange} name="gender" value={"Female"} /> <label htmlFor="female">Female</label>


                <br /><br />

                <label>Prefered Languages:</label>
                <input type="checkbox" onChange={handleLangChange} checked={form.lang.includes("Java")} value={"Java"} name="lang" id="java" /> <label htmlFor="java">Java</label>
                <input type="checkbox" onChange={handleLangChange} checked={form.lang.includes("JS")} value={"JS"} name="lang" id="js" /> <label htmlFor="js">Javascript</label>
                <input type="checkbox" onChange={handleLangChange} checked={form.lang.includes("React")} value={"React"} name="lang" id="react" /> <label htmlFor="react">React</label>
                <input type="checkbox" onChange={handleLangChange} checked={form.lang.includes("Python")} value={"Python"} name="lang" id="python" /> <label htmlFor="python">Python</label>
                <input type="checkbox" onChange={handleLangChange} checked={form.lang.includes("DotNet")} value={"DotNet"} name="lang" id="net" /> <label htmlFor="net">.Net</label>

                <br/><br/>


                <button type="submit">Submit</button>
            </form>
            <br /><br />
            <div>First :{form.first_name}</div>
            <div>Last: {form.last_name}</div>
            <div>Email: {form.email}</div>
            <div>Mobile: {form.mobile}</div>
            <div>Gender: {form.gender}</div>
            <div>Languages: {form.lang.toString()}</div>
        </>
    )
}