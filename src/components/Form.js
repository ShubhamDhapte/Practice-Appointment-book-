import "./Form.css";
import React, { useState } from "react";

export default function Form() {
  //   const[name,setname]=useState("");
  //  const[birthday,setbirthday]=useState("");
  //  const[weight,setweight]=useState("");
  const [userid, setuserid] = useState("");
  const [doctorid, setdoctorid] = useState("");
  const [clientid, setclientid] = useState("");
  const [title, settitle] = useState("");
  const [appointmentDate, setappointmentDate] = useState("");
  const [appointmentTime, setappointmentTime] = useState("");
  const [appointmentChannelWalkin, setappontmentChannelWalkin] = useState("");
  const [appointmentType, setappointmentType] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastNAme] = useState("");
  const [bookedDate, setbookedDate] = useState("");
  const [patient_BP, setpatient_BP] = useState("");
  const [patient_Plus, setpatient_Plus] = useState("");
  const [patient_SPO2, setpatient_SPO2] = useState("");
  const [patient_Temp, setpatient_Temp] = useState("");
  const [patient_Weight, setpatient_Weight] = useState("");
  const [patient_Height, setpatient_Height] = useState("");
  const [shortNote, setshortNote] = useState("");
  const [prescriptionNote, setprescriptionNote] = useState("");
  function saveUser() {
    console.log({
      userid,
      doctorid,
      clientid,
      title,
      appointmentDate,
      appointmentTime,
      appointmentChannelWalkin,
      appointmentType,
      firstName,
      lastName,
      bookedDate,
      patient_BP,
      patient_Plus,
      patient_SPO2,
      patient_Temp,
      patient_Weight,
      patient_Height,
      shortNote,
      prescriptionNote,
    });
    let data = {
      userid,
      doctorid,
      clientid,
      title,
      appointmentDate,
      appointmentTime,
      appointmentChannelWalkin,
      appointmentType,
      firstName,
      lastName,
      bookedDate,
      patient_BP,
      patient_Plus,
      patient_SPO2,
      patient_Temp,
      patient_Weight,
      patient_Height,
      shortNote,
      prescriptionNote,
    };
    fetch("http://13.233.217.107:8080/api/AddAppointment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
    });
  }
  return (
    <>
      {/* Image starts Here */}

      <div class="flex-container">
        <span class="imgname">Chris Evans</span>
        <img
          src="https://w0.peakpx.com/wallpaper/200/798/HD-wallpaper-summer-beach-cool-fresh-nature-nice-scene-sea-view.jpg"
          class="image1"
        ></img>
      </div>

      {/* Image Ends Here */}

      <div class="container-fluid border-top border-3">
        {/* Sidebar Starts here */}

        <div id="mySidebar" class="sidebar">
          <i class="fa fa-home" aria-hidden="true"></i>
          <i class="fa fa-clone" aria-hidden="true"></i>
          <i class="fa fa-envelope-open" aria-hidden="true"></i>
          <i class="fa fa-address-book" aria-hidden="true"></i>
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fa fa-credit-card" aria-hidden="true"></i>
          <i class="fa fa-clone" aria-hidden="true"></i>
          <i class="fa fa-id-card-o" aria-hidden="true"></i>
          <i class="fa fa-history" aria-hidden="true"></i>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>

        {/* Sidebar Ends here */}
      </div>

      {/* Sections Starts here */}
      <h1 class="header">Book Appointment</h1>
      <div class="container">
        <div class="main">
          <div class="row">
            {/* Left Section starts here  */}
            <section class="leftsec col-6 col-md-6 col-lg-6">
              <h3 class="det">Details</h3>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1"></label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Appointment Title"
                    value={title}
                    name="title"
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>

                <div class="dropdown">
                  <button
                    type="button"
                    class="btn1 btn-default dropdown-toggle border"
                    data-bs-toggle="dropdown" //value={appointmentChannelWalkin} name='appointmentChannelWalkin' onChange={(e)=>setappointmentChannelWalkin(e.target.value)}
                  >
                    Appointment Channel
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="dropdown">
                  <button
                    type="button"
                    class="btn1 btn-default dropdown-toggle border"
                    data-bs-toggle="dropdown"
                  >
                    Dr.Peter Parker
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        link 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        link 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </section>

            {/* Right Section starts here  */}

            <section class="rightsec col-6 col-md-6 col-lg-6">
              <div>
                <h3>Appointment Details</h3>
                <div class="row">
                  <div class="col-6 col-md-3 col-lg-6">
                    <p>John Wick</p>
                  </div>
                  <div class="col-6 col-md-3 col-lg-6">
                    <p>M-9848848222</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 col-md-6 colp-lg-6">
                    <p>Walk-in Appointment</p>
                  </div>
                  <div class="col-6 col-md-6 colp-lg-6">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round p-1">yes</span>
                    </label>
                  </div>
                  <div class="schedule">
                    <span>Schedule</span>

                    <form>
                      <label for="birthdaytime"></label>
                      <input
                        type="datetime-local"
                        id="birthdaytime"
                        name="birthdaytime"
                        value={bookedDate}
                        name="bookedDate"
                        onChange={(e) => setbookedDate(e.target.value)}
                      />
                    </form>
                  </div>
                  <div class="dropdown">
                    <button
                      type="button"
                      class="btn4 btn-default dropdown-toggle border"
                      data-bs-toggle="dropdown"
                    >
                      Appointment Type
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
              <h3>Vital Information</h3>

              <div class="input1">
                <span class="inputtext1">Blood pressure</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_BP}
                  name="patient_BP"
                  onChange={(e) => setpatient_BP(e.target.value)}
                />
                <span class="inputtext2">Height</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_Height}
                  name="patient_Height"
                  onChange={(e) => setpatient_Height(e.target.value)}
                />
                <span class="inputtext3">SPo2</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_SPO2}
                  name="patient_SPO2"
                  onChange={(e) => setpatient_SPO2(e.target.value)}
                />
                <span class="inputtext4">Temp</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_Temp}
                  name="patient_Temp"
                  onChange={(e) => setpatient_Temp(e.target.value)}
                />
                <span class="inputtext5">Weight</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_Weight}
                  name="patient_Weight"
                  onChange={(e) => setpatient_Weight(e.target.value)}
                />
                <span class="inputtext6">Pulse Rate</span>
                <input
                  type="text"
                  class="form-control3"
                  placeholder=""
                  value={patient_Plus}
                  name="patient_Plus"
                  onChange={(e) => setpatient_Plus(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="desc">
            <textarea
              id="w3review"
              rows="3"
              cols="50"
              placeholder="Reason"
              value={shortNote}
              name="shortNote"
              onChange={(e) => setshortNote(e.target.value)}
            ></textarea>
            <textarea
              id="w3review1"
              rows="3"
              cols="50"
              placeholder="Note for Doctor"
              value={prescriptionNote}
              name="prescriptionNote"
              onChange={(e) => setprescriptionNote(e.target.value)}
            ></textarea>

            <div class="buttons1">
              <button type="button" class="btn2 btn-primary">
                Cancel
              </button>

              {/*  <button type="button" class="btn3 btn-primary">
              Book
            </button> */}
              <button
                to="/register"
                onClick={saveUser}
                type="button"
                class="btn3 btn-primary"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p class="footer">POWERED BY RAJYUG IT SOLUTIONS PVT LTD</p>
      </footer>
    </>
  );
}
