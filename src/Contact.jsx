import React from 'react';
import { useState } from 'react';

const Contact=()=>{
    const [data,setData]=useState({
        name:'',
        phone:'',
        mail:'',
        message:'',
    })

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `My name is ${data.name}.My mobile number is ${data.phone}.E-mail is ${data.mail}`)
    }
    return(
        <>
        <div className='my-5'>
            <h1 className='text-center'>Contact US</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter your name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={InputEvent} placeholder='Enter your name'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter your mobile number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={InputEvent} placeholder='Enter your mobile number'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mail" value={data.mail} onChange={InputEvent} placeholder='Enter your e-mail'/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea type="password" class="form-control" id="exampleInputPassword1" name="message" value={data.message} onChange={InputEvent} placeholder='Leave any message'></textarea>
  </div>
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
                </div>
            </div>

        </div>
        </>
    )
}
export default Contact;