// import React, { useEffect, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import Loader from '../components/Loader'
// import Room from '../models/Room'


//     {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
//         popup
//     </div> */}
// const Home = () => {
//     const adjustIslandForScreenSize = () => {
//         let screenScale, screenPosition;
//         screenPosition = [0, -6.5, -10];
//         let rotation = [0.1, 5.7, 0];

//         if (window.innerWidth < 768) {
//             screenScale = [0.9, 0.9, 0.9];
//         } else {
//             screenScale = [1, 1, 1];
//         }
//         return [screenScale, screenPosition, rotation]
//     }
//     // const [roomScale, roomPosition, roomRotation] = adjustIslandForScreenSize();
//     const [time, setTime] = useState(0)
//     const [roomScale, setRoomScale] = useState([0.9, 0.9, 0.9])
//     const [roomPosition, setRoomPosition] = useState([0, -6.5, -10])
//     const [roomRotation, setRoomRotation] = useState([0.1, 5.7, 0])
//     useEffect(() => {
//         if (time < 3000) {
//             setTime(time + 1)
//             let t1 = roomScale
//             let t2 = roomPosition
//             let t3 = roomRotation 
//             setRoomScale(t1)
//             setRoomPosition(t2)
//             t3[0] += 0.01
//             console.log("t3 is, ", t3)
//             setRoomRotation(t3)
//         }
//         // let [t1, t2, t3] = adjustIslandForScreenSize();

//     }, [time,])

//   return (
//     <section className='w-full h-screen relative'>
//         <Canvas
//             className='w-full h-screen bg-transparent'
//             camera={{ near: 0.1, far: 1000}}
//         >
//             <Suspense fallback={<Loader />}>
//                 <directionalLight position = {[1,1,1]} intensity={2} />
//                 <ambientLight />
//                 <pointLight />
//                 <spotLight />
//                 <hemisphereLight />

//                 <Room
//                     position = {roomPosition}
//                     island = {roomScale}
//                     rotation = {roomRotation}
//                 />
//             </Suspense>

//         </Canvas>
//     </section>
//   )
// }

// export default Home

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home