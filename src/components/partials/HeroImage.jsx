import React, { useEffect, useState } from 'react'

const HeroImage = () => { 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  
    return (
      <div className='sm:w-[100%] top-96 absolute md:w-[50%] md:top-[20%] md:right-[5%] '>
        <img
          src={"/src/assets/heroImage.png"}
          alt="Desktop PC"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
}

export default HeroImage