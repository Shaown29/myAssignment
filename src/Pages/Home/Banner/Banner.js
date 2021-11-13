import React from 'react';

const Banner = () => {
    return (
        
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active bg-dark" data-bs-interval="1000">
        <img src="https://waltonbd.com/image/catalog/refrigerator-and-freezer/direct-cool.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src="https://home.liebherr.com/media/ncsa/liebherr-promotion/kopie_von_kopie_von_kopie_von_wine_instagram_post_3.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://waltonbd.com/image/catalog/refrigerator-and-freezer/non-frost.jpg" className="d-block w-100" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
        
    );
};

export default Banner;