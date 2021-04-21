import React from 'react';
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row header">
                        <div className="container-fluid left my-auto">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 txt">
                                <h1 className="display-1">
                                    <strong>Welcome</strong>
                                </h1>
                                <h2 className="my-3">
                                    <p>Hello! Speech can be a major confidence booster for many people, This project aims on improving your speech through different exercises and add a brighter element to your personality</p>
                                </h2>
                            </div>
                        </div>
                        <div className="container-fluid right" >
                            <div className="col-md-6 col-lg-6 order-1 order-lg-2 header-img">
                                <img src="https://image.freepik.com/free-vector/radio-broadcasting-concept_74855-7834.jpg" className="img-fluid animated" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Welcome
