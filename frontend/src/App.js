import React,{useState} from "react";
import axios from 'axios'

const App = () => {
  const [storyDetails, setStoryDetails] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleFileInputChange = (e) => {
    console.log("e.target.files[0]", e.target.files);
    const file = new FileReader();
    file.readAsDataURL(e.target.files[0]);
    file.onloadend = () => {
      setStoryDetails({ ...storyDetails, image: file.result });
    };
    file.onerror = () => {
      alert("error in image upload");
    };
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8340/upload", {
        ...storyDetails,
      })
      .then((res) => console.log("res", res))
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <h1>ADD TO STORY</h1>
      <input
        type={"text"}
        placeholder="enter title"
        onChange={(e) => {
          setStoryDetails({ ...storyDetails, title: e.target.value });
        }}
      />
      <textarea
        rows={4}
        placeholder="enter description"
        onChange={(e) => {
          setStoryDetails({ ...storyDetails, description: e.target.value });
        }}
      ></textarea>
      <input
        type={"file"}
        accept=".jpg,.png"
        onChange={handleFileInputChange}
      />
      <button
        onClick={() => {
          console.log("storyDetails", storyDetails);
          handleSubmit();
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default App;
