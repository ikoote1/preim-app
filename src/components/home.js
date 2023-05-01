import React from "react";

const Home = () => {
    return(
        <div>
          <div className="heading">
            <div><p>Let's order</p><p>For your Tummy</p></div>
            <div>
                <img className="profile"></img>
                <img className="menu"></img>
            </div>
          </div>
          <div className="Buttons">
            <div>
                <button type="button">Break</button>
                <button type="button">Lunch</button>
                <button type="button">Supper</button>
            </div>
            <div>
                <button type="button">Location</button>
                {/* <input>Search</input> */}
            </div>
          </div>
          <div className="products"></div>
          <div className="footer">
            <img></img>
            <button type="button"> Final order</button>
            <img></img>
          </div>
        </div>
    )
}

export default Home;