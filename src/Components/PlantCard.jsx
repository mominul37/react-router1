import React from 'react';

const PlantCard = ({plant}) => {
    const {name,image,category,price,id} = plant
    console.log(plant)
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={name}/>
  </figure>
  <div className="card-body">
    <h1>{id}</h1>
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PlantCard;


