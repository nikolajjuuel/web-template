// import { useEffect, useState } from "react";

// interface Props {
//   title: string;
//   image: string;
// }

// const Card = (props: Props) => {
//   const { title, image } = props;
//   const [openModal, setOpenModal] = useState(false);
//   const [expand, setExpand] = useState({
//     background: "tomato",
//     transition: "0.4s linear",
//     height: "20px",
//     width: "20px",
//     borderRadius: "50%",
//     position: "absolute",
//     left: "auto",
//   });

//   useEffect(() => {
//     if (openModal) {
//       setExpand({
//         background: "tomato",
//         transition: "0.4s linear",
//         height: "100%",
//         width: "100%",
//         borderRadius: "0",
//         position: "absolute",
//         left: "auto",
//       });
//       setTimeout(() => {
//         setExpand({
//           background: "tomato",
//           transition: "0.4s linear",
//           height: "100%",
//           width: "100%",
//           borderRadius: "0",
//           position: "absolute",
//           left: 0,
//         });
//       }, 200);
//     } else {
//       setExpand({
//         background: "tomato",
//         transition: "0.4s linear",
//         height: "20px",
//         width: "20px",
//         borderRadius: "50%",
//         position: "absolute",
//         left: "auto",
//       });
//     }
//   }, [openModal]);

//   return (
//     <div
//       className="flex md:w-1/3 flex-col items-center justify-center"
//       style={{ border: "solid 2px orange" }}
//     >
//       <div className="p-2"></div>
//       <img src={image} alt="Speaking Heads" />
//       <h4>{title}</h4>
//       <button
//         onClick={(e) => {
//           setOpenModal(!openModal);
//           console.log(openModal);
//           console.log("E", e);
//         }}
//         style={{ background: "tomato" }}
//       >
//         CLICK ME
//       </button>
//       <div
//         onClick={(e) => {
//           setOpenModal(false);
//           console.log("e", e);
//         }}
//         style={expand}
//       ></div>
//       <p>View</p>

//       {/* {openModal && (
//         <Portal>
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               justifyContent: " center",
//               alignItems: " center",
//               flexDirection: "column",
//               position: "fixed",
//               top: 0,
//             }}
//           >
//             <div
//               style={{
//                 width: "80%",
//               }}
//             >
//               <div>{title}</div>
//               <img
//                 src={image}
//                 alt="Speaking Heads"
//                 style={{ width: "100%", height: "200px" }}
//               />
//               <div>HELLO I AM A PORTAL SHOWING INFORMATION</div>
//               <div onClick={() => setOpenModal(false)}>CLOSE</div>
//             </div>
//           </div>
//         </Portal>
//       )} */}

//       <p>GitHub</p>
//     </div>
//   );
// };

// export default Card;
