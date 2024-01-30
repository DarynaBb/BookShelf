

let backendUrl;

if (process.env.NODE_ENV === "production") {
  backendUrl = "https://";
} else {
  backendUrl = "http://localhost:3001";
}

export default backendUrl;
