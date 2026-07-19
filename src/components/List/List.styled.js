import styled from "styled-components"

export const Data = styled.ul`
display: flex;
gap: 50px;
flex-wrap: wrap;`

// export const Item = styled.li`
//   padding: 10px;
//   border-radius: 10px;
//   background-color: ${({ isOnline }) => (isOnline ? "green" : "yellow")};
//   /* background-color: ${({ isOnline }) => isOnline ? "green" : "yellow"}; */
// `;

// export const Title = styled.h2`
//   color: red;
//   font-size: 40px;
// `;

// export const Text = styled.p`
//   color: ${(prop) => {
//     switch (prop.$role) {
//       case "student":
//         return "blue";
//       case "admin":
//       return "black"
//     }
//   }}
// `;