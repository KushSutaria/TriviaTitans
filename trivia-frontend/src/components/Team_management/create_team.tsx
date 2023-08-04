import React from "react";
import { Formik, Form, Field } from 'formik';
import { useState } from "react";

const createTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [user1, setUser1] = useState('');


    const handleSubmit = () => {
        console.log(teamName);
        console.log(user1);
        var values = {
            "Team": teamName,
            "user1": user1,
        };
        fetch('https://67u4ndnjaf.execute-api.us-east-1.amazonaws.com/prod/create-team', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.statusCode == 200){
                    alert('Team Created');
                }
                else{
                    console.error('Error:', data);
                    alert(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error');
            });
    };

    return (
        <div>
            <h1>Create Team</h1>
            <div>
            <Formik
                    initialValues={{ teamName: '', user1: '' }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="user1"
                            name="user1"
                            placeholder="email"
                            value={user1}
                            onChange={(e: any) => setUser1(e.target.value)}
                        />
                        <label htmlFor="Team">Team Name</label>
                        <Field
                            id="Team"
                            name="Team"
                            placeholder="Team Name"
                            value={teamName}
                            onChange={(e: any) => setTeamName(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};


export default createTeam;
