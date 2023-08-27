const display={display: "flex",}
const flexWrap={flexWrap: "wrap",}
export const mainContainer = {...display,
  
  flexDirection: "column",
  ...flexWrap,
  mt: 2,
  maxWidth: "100vw",
  marginX: "auto",
};
export const box1 = { width: "100%", borderColor: "  2px solid blue", mb: 2 ,...display,justifyContent:"center"};
// export const tabs={
//   justifyContent:"center",...display,...flexWrap,
// }
export const typographyStyle={ textAlign: { xs: "left", sm: "center" } }