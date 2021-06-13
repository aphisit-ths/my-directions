import React ,{useState} from 'react'
import "./form.scss"
import firebase from '../../utils/firebase';
const Form = () => {
    const [inputFields, setInputFields] = useState({
        title:"",
        direction:"",
        info:""
    });
    const handleChange = (e) =>{
        const { target } = e;
        const { name } = target
        const values = target.value
        setInputFields({
            ...inputFields,
            [name]:values
        })
    }
    const addnewData = () => {
        firebase.database().ref('todolist').push(
            {
                ...inputFields
            })};

    const  handleSubmit = (e) => {
        e.preventDefault()
        addnewData()
    }
    return (
        <div className="form">
            <h1>Add todo list</h1>
            <form onSubmit={handleSubmit} method="POST" > 
                <div className="warp" >
                    <input type="text" placeholder="Title" name="title" onChange={handleChange} required="true" />
                    <input type="text" placeholder="todo" name="todo" onChange={handleChange} required="true"  />
                    <input type="text" placeholder="Info" name="info"  onChange={handleChange} required="true" />
                    <button className="add-btn" type="submit" >Add Direction</button>
                </div>
            </form>
        </div>
    )
}
export default Form
