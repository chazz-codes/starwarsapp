import React from 'react';

function Home(props) {
    return (
        <div>
              <div className="episode">
                <div className="bigInfo">
                <h1>The Star Wars Movie App</h1>
                <img src='' alt=""/>
                </div>
                <div className="infoHolder">
                <div className="infoText">
                <h3>How it Works</h3> Click an Episode in the top Nav Bar <br/>
                <h3>What's Covered</h3>Episodes 1-9 <br/>
                <h3>Powered by</h3>React.js and OMDB API<br/>
                </div>
                </div>


                
            </div>
        </div>
    );
}

export default Home;