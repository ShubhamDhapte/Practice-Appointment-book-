import React ,{useState} from 'react';
import Axios from 'axios';

function PostForm() {
    const url = "http://13.233.217.107:8080/api/AddAppointment"
    const [data,setData] = useState ({
        userid : "",
        doctorid : "",
        clinicid : "",
        title : "",
        appointmentDate : "",
        appointmentTime : "",
     	appointmentChannelWalkin : "",
	    appointmentType : "",
    	firstName : "",
	    lastName : "",
	    bookedDate : "",
	    patient_BP : "",
	    patient_Plus : "",
	    patient_SPO2 : "",
	    patient_Temp : "",
        patient_Weight : "",
	    patient_Height : "",
	    shortNote : "",
	    prescriptionNote : ""

    })

    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        userid : data.userid,
        doctorid : data.doctorid,
        clinicid : data.clinicid,
        title : data.title,
        appointmentDate : data.appointmentDate,
        appointmentTime : data.appointmentTime,
     	appointmentChannelWalkin : data.appointmentChannelWalkin,
	    appointmentType : data.appointmentType,
    	firstName : data.firstName,
	    lastName : data.lastName,
	    bookedDate : data.bookedDate,
	    patient_BP : data.patient_BP,
	    patient_Plus : data.patient_Plus,
	    patient_SPO2 : data.patient_SPO2,
	    patient_Temp : data.patient_Temp,
        patient_Weight : data.patient_Weight,
	    patient_Height : data.patient_Height,
	    shortNote : data.shortNote,
	    prescriptionNote : data.prescriptionNote
      })

      .then(res =>{
      console.log(res.data)
      .catch(err => console.log(err));
      })
    }
 
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
             <input onChange={(e)=>handle(e)} placeholder="userid" value={data.userid} type="text"></input>
             <input onChange={(e)=>handle(e)} placeholder="doctorid" value={data.doctorid} type="date"></input>
             <input onChange={(e)=>handle(e)} placeholder="cliniid" value={data.clinicid} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="title" value={data.title} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="appointmentDate" value={data.appointmentDate} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="appointmentTime" value={data.appointmentTime} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="appointmentChannelWalkin" value={data.appointmentChannelWalkin} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="appointmentType" value={data.appointmentType} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="firstName" value={data.firstName} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="lastName" value={data.lastName} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="bookedDate" value={data.bookedDate} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_BP" value={data.patient_BP} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_Plus" value={data.patient_Plus} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_SPO2" value={data.patient_SPO2} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_Temp" value={data.patient_Temp} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_Weight" value={data.patient_Weight} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="patient_Height" value={data.patient_Height} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="shortNote" value={data.shortNote} type="number"></input>
             <input onChange={(e)=>handle(e)} placeholder="prescriptionNote" value={data.prescriptionNote} type="number"></input>
            <button>Submit</button>
            </form>
            
        </div>
    )
}

export default PostForm;





