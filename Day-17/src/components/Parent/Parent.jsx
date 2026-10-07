import React from 'react'
import { useState } from 'react'
import Child from "../Child/Child";

function Parent() {
    let [skills, setSkills] = useState({
        skill_1: `HTML`,
        skill_2: `CSS`,
        skill_3: `JavaScript`,
        skill_4: `React`
    })
    return (
        <>
            <div className='container-fluid'>
                <h1 className='bg-success text-center p-2 m-0'>My Skills</h1>
                <Child skills={skills}/>
            </div>
        </>
    )
}

export default Parent
