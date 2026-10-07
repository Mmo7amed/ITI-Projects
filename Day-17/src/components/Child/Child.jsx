import React from 'react'
import { useState } from 'react'


function Child(props) {

    return (
        <>
            <div className='container-fluid bg-warning text-center'>
                <h3 className='text-center p-2 m-0'><strong>My Skills List</strong></h3>
                <h3>Skill 1: {props.skills.skill_1}</h3>
                <h3>Skill 2: {props.skills.skill_2}</h3>
                <h3>Skill 3: {props.skills.skill_3}</h3>
            </div>
        </>
    )
}

export default Child
