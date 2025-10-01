import React from 'react'

const DiscriptionBox = () => {
    return (
        <div className='container mt-5'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Discription</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Review</button> 
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem sequi? Nostrum consectetur tempore, fuga deleniti corporis asperiores. Reiciendis impedit quia asperiores sit possimus voluptas harum quaerat vero cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae tempora blanditiis rerum! A blanditiis voluptatum repellendus doloremque autem, debitis commodi nesciunt! Deserunt exercitationem quisquam officiis voluptas iste nesciunt amet.
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    Review</div> 
            </div>

        </div>
    )
}

export default DiscriptionBox
