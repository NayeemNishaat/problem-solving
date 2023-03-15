const obj = {
  firstName: "Abdur",
  middleName: "N/A",
  lastName: "Rahman",
  courses: {
    cs101: {
      teachers: ["Jalal", "-", "Mohsin"]
    },
    cs102: {
      teachers: [
        "Mahbub",
        "Joarder",
        {
          firstName: "Hossain",
          middleName: "",
          lastName: "Mohsin"
        }
      ]
    }
  },
  hobbies: [""]
};

function generic(obj) {
  // Object.values(obj).forEach(v=>{
  //   if(v==="N/A")
  // })

  for (const key in obj) {
    if (obj[key] === "N/A") delete obj[key];
    if (obj[key] === "") delete obj[key];
    if (obj[key] === "-") delete obj[key];

    if (Array.isArray(obj[key])) {
      if (obj[key].length === 1) {
        obj[key][0] === "";
        delete obj[key];
      }

      obj[key] = obj[key]?.filter((el) => {
        if (el !== "-" && el !== "N/A" && el !== "") return true;
      });
    }

    if (typeof obj[key] === "object" /* && !Array.isArray(obj[key]) */) {
      generic(obj[key]);
    }
  }

  return obj;
}
console.log(JSON.stringify(generic(obj), null, 2));
