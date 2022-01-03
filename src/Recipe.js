import React, { Component } from 'react'

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>{ title }</h1>
            <p> Calories - { calories }</p>
            <img src={image} alt=""></img>
        </div>
    )
}

export default Recipe;
