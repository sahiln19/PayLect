import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import Menu from "./Menu";

export default function AddLectures() {
    const navigate = useNavigate();
    const [Batch, setBatch] = useState([]);
    const [Subject, setSubject] = useState([]);
    const [Teacher, setTeacher] = useState([]);
    const [Payment, setPayment] = useState([]);
    const [Lecture, setLecture] = useState({
        teacher_id: "",
        subject_id: "",
        batch_id: "",
        duration_start: "",   // Updated field
        duration_end: "",     // Updated field
        amount: "",
        lecture_date: "",
        payout_id: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [batchData, subjectData, teacherData, payoutData] = await Promise.all([
                    axios.get(getBase() + "batch"),
                    axios.get(getBase() + "subject"),
                    axios.get(getBase() + "teacher"),
                    axios.get(getBase() + "payout")
                ]);
        
                setBatch(batchData.data.batches || []);
                setSubject(subjectData.data.subjects || []);
                setTeacher(teacherData.data.teachers || []);
                setPayment(payoutData.data.payout || []);
                setLoading(false);
            } catch (err) {
                showError("An error occurred: " + err.message);
            }
        };
        
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLecture((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(getBase() + "lecture", Lecture);
            console.log("API Response:", response.data);
            if (response.data) {
                showMessage(response.data.message); // Display message from response
                setTimeout(() => {
                    navigate("/Lectures");
                }, 1000);
            } else {
                showError(response.data.message); // Display error message
            }
        } catch (err) {
            console.error("Error in handleSubmit:", err);
            showError("An error occurred: " + (err.response ? err.response.data.message : err.message));
        }
    };

    return (
        <>
            <Menu />
            <ToastContainer />
            <main id="main" className="main">
                <div className="d-flex justify-content- mb-2">
                    <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow mt-lg-5">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Add Lecture</h5>
                                </div>
                                <div className="card-body mt-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="teacher_id" className="form-label">Teacher</label>
                                            <select
                                                className="form-select"
                                                id="teacher_id"
                                                name="teacher_id"
                                                value={Lecture.teacher_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select teacher</option>
                                                {Teacher.length > 0 ? (
                                                    Teacher.map((teacher) => (
                                                        <option key={teacher.id} value={teacher.id}>
                                                            {teacher.name}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="">No Teachers Available</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="subject_id" className="form-label">Subject</label>
                                            <select
                                                className="form-select"
                                                name="subject_id"
                                                id="subject_id"
                                                value={Lecture.subject_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Subject</option>
                                                {Subject.length > 0 ? (
                                                    Subject.map((subject) => (
                                                        <option key={subject.id} value={subject.id}>
                                                            {subject.title}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="">No Subjects Available</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="batch_id" className="form-label">Batch</label>
                                            <select
                                                className="form-select"
                                                id="batch_id"
                                                name="batch_id"
                                                value={Lecture.batch_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Batch</option>
                                                {Batch.length > 0 ? (
                                                    Batch.map((batch) => (
                                                        <option key={batch.id} value={batch.id}>
                                                            {batch.batch_name || batch.id} {/* Adjust if necessary */}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="">No Batches Available</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="DurationTime" className="form-label">Duration</label>
                                            <div className="d-flex align-items-center">
                                                <input
                                                    type="time"
                                                    className="form-control me-2"
                                                    id="duration_start"
                                                    name="duration_start"
                                                    value={Lecture.duration_start}
                                                    onChange={handleChange}
                                                    placeholder="Start Time"
                                                />
                                                <span>to</span>
                                                <input
                                                    type="time"
                                                    className="form-control ms-2"
                                                    id="duration_end"
                                                    name="duration_end"
                                                    value={Lecture.duration_end}
                                                    onChange={handleChange}
                                                    placeholder="End Time"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="amount" className="form-label">Lecture Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="amount"
                                                name="amount"
                                                value={Lecture.amount}
                                                onChange={handleChange}
                                                placeholder="Lecture Amount"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lecture_date" className="form-label">Lecture Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="lecture_date"
                                                name="lecture_date"
                                                value={Lecture.lecture_date}
                                                onChange={handleChange}
                                                placeholder="Lecture Date"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="payout_id" className="form-label">Payout</label>
                                            <select
                                                className="form-select"
                                                name="payout_id"
                                                id="payout_id"
                                                value={Lecture.payout_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Payment Remarks</option>
                                                {Payment.length > 0 ? (
                                                    Payment.map((payment) => (
                                                        <option key={payment.id} value={payment.id}>
                                                            {payment.remarks}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="">No Payments Available</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
