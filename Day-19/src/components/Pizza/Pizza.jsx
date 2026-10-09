import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { nanoid } from 'nanoid'

function Pizza() {

    // old method
    // ====================== Fetch() ======================
    // async function getData(searchTerm = `pizza`){
    //     try{
    //         let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`, {method: GET})
    //         response = await response.json();
    //         if(response.status === `success`) {
    //             console.log(`response.data.recipe`);
    //         }else {
    //             console.log(`Error in fetching data`);
    //         }
    //     }catch(error){
    //         console.error(`Error: ${error}`);
    //     }
    // }

    // getData(`pizza`);
    // ====================== Fetch() ======================
    // ====================== Axios ======================

    // useEffect(() => {
    //     getRecipes()
    // }, [])

    // async function getRecipes(){
    //     try{
    //         let {data} = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=pizza`)
    //         console.log(data.data.recipes)
    //     }catch(error){
    //         console.error(`Error: ${error}`);
    //     }
    // }
    // ====================== Axios ======================

    let [recipesArray, setRecipesArray] = useState([])

    let [isLoading, setIsLoading] = useState(true)

    let [fruits, setFruits] = useState([`kiwi`,`orange`,`apple`])

    useEffect(() => {
        // getRecipes();
    },[])

    async function getRecipes(searchTerm = 'pizza') {
        try{
            const {data} = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`)
            setRecipesArray(data.data.recipes);
            setIsLoading(false);
        }catch(error){
            console.log(`error: ${error}`);
            setIsLoading(false);
        }
        
    }

    return (
        <>
            <div className="container">
                <h1 className='text-center bg-primary text-light p-4 rounded shadow'>Pizza Section</h1>
                <div className='row'>
                    {recipesArray.length > 0 ? recipesArray.map( ( recipe ) =>
                        <div className="col-md-3" key={recipe.id}>
                            <RecipeCard recipe={recipe}/>
                        </div>
                    ) : <Loader />}

                    <ul>
                            {fruits.map((fruit) => ( <li key={nanoid()}>{nanoid()}</li> ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pizza

function RecipeCard({recipe}) {
    return(
        <>
            <div className="card p-4 m-1 text-center">
                <img src={recipe.image_url} className='card-img-top' alt={recipe.title} style={{height: `200px`, objectFit: `cover`}} />
                <div className="card-body">
                    <h5 className='card-title'>{recipe.title}</h5>
                    <p className='card-text'>{recipe.publisher}</p>
                </div>
            </div>
        </>
    )
}