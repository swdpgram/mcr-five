function 

<>
    <div className="card-cont">
        <div className="card-img">
              <div className="card-badge">
                    <i className="material-symbols-outlined" onClick={()=> console.log("here")}>favorite</i>
                    <i className="material-symbols-outlined" id="red-fill" onClick={()=> console.log("here")}>favorite</i>
              </div> 
           
              <img src={image} alt="testimg" />   
            
        </div>

        <div className="card-details">
            <div> <Link to={`/product/`+1}> One </Link> </div>
            <b> Rs.10 </b>
            <b> Ratings: 4/5 </b>
        </div>

        
        <button className="card-button active-button" onClick={()=> console.log("here") }> Add to Cart</button>
        <button className="card-button active-button" onClick={()=> console.log("here") }> Go to Cart</button>
                   
    </div>
    
</>