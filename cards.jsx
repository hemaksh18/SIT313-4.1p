function Cards(props)
{
    return(
        <div className="column"> 
            <img src = {props.image} alt = 'staff' />
            <h3>{props.name}</h3>
            <p1> {props.position}</p1>
            <p>{props.description}</p>
            <p3>{props.rating}</p3>

        </div>
    )
}

export default Cards;