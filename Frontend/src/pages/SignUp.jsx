import React from 'react'

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    countryCode: "+49",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const closeForm = () => {
    setIsOpen(false);
  };

  const SignUpHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const telephone = phone;
    const email = form.email.value;
    const password = form.password.value;
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      telephone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      const resp = await fetch(`http://localhost:3001/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          telephone,
          email,
          password,
        }),
      });
      if (resp.status === 201) {
        setFormData({
          firstname: "",
          lastname: "",
          telephone: "",
          countryCode: "+49",
          email: "",
          password: "",
        });
        setEmailError(false);
        setPasswordError(false);
        setErrorMessage("");
        navigate("/home");
        // window.location.href = "/myAccount";
        console.log(" Register done:", resp.data);
      } else {
        console.log("my error ::::::::::::::");
        console.log("Error while signing up:", resp.data);
        setErrorMessage("Incorrect email or password");
        setEmailError(true);
        setPasswordError(true);
      }
    } catch (error) {
      console.log("Error while signing up:", error);
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFormData({
      firstname: "",
      lastname: "",
      telephone: "",
      countryCode: "+49",
      email: "",
      password: "",
    });
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage("");
  };
  return (
    <div>SignUp</div>
  )
}

export default SignUp