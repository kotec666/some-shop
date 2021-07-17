import ContentLoader from "react-content-loader"
import React from "react"


const Loader = () => {
 return (
     <ContentLoader
         speed={2}
         width={150}
         height={185}
         viewBox="0 0 150 185"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         style={{marginRight: '2rem', marginBottom: '2rem'}}
     >
         <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
         <rect x="0" y="104" rx="3" ry="3" width="150" height="15"/>
         <rect x="0" y="124" rx="3" ry="3" width="93" height="15"/>
         <rect x="0" y="149" rx="8" ry="8" width="80" height="24"/>
         <rect x="119" y="142" rx="8" ry="8" width="32" height="32"/>
     </ContentLoader>
 )
}

export default Loader