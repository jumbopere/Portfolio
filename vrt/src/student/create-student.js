import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';


const CreateStudent = (props) => {
    const [data, setData] = useState({
        studentName: "",
        studentAddress: "",
        studentNumber: "",
        studentEntry: "",
        studentYear: "",
        student_Verification: false
    });

    const onChangeStudentData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitStudentData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/all_student/add', data).then(res => console.log(res.data));
        setData({
            studentName: "",
            studentAddress: "",
            studentNumber: "",
            studentEntry: "",
            studentYear: "",
            
            studentVerification: false
        });

    }

    return (
        
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Create Student</h3>
            <Form onSubmit={onSubmitStudentData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Student Name </Label>
                        <Input
                            type="text"
                            name="studentName"
                            className="form-control"
                            value={data.studentName}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            type="text"
                            name="studentAddress"
                            className="form-control"
                            value={data.studentAddress}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Student Number </Label>
                        <Input
                            type="number"
                            name="studentNumber"
                            className="form-control"
                            value={data.studentNumber}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Level </Label>
                        <Input
                            type="text"
                            name="studentEntry"
                            className="form-control"
                           
                            value={data.studentEntry}
                            onChange={onChangeStudentData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Year </Label>
                        <Input
                            type="text"
                            name="studentYear"
                            className="form-control"
                            value={data.studentYear}
                            onChange={onChangeStudentData} 
                            />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreateStudent;