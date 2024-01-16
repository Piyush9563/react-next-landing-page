import React from 'react'

const Features = () => {
  return (
         
    <section className='features' >
        
    <div className='feature'>
      <img src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png" alt="Feature 1" height="200px" width="100px"/>
      <h2>Blogs</h2>
      <p>This feature contains the different blogs published by the user
      </p>
    </div>
    
    <div className='feature' id='1'>
      <img src="https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977559-stock-illustration-hands-holding-word-about-us.jpg" alt="Feature 2"  height="200px" width="100px" class="center"/>
      <h2>About Us</h2>
      <p>This feature contains description about us</p>
    </div>
    
    <div className='feature'>
      <img src="https://www.edesk.com/wp-content/uploads/2020/06/get-more-amazon-reviews.png" alt="Feature 3" height="200px" width="100px" class="center" />
      <h2>Ratings</h2>
      <p>This feature help users to check the ratings</p>
    </div>
  </section>
  )
}

export default Features
