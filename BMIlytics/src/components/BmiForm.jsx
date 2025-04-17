import { useState } from "react";
export default function BMIForm() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBMI] = useState(0);
    const [category, setCategory] = useState("");
  
    function calBMI() {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      if (!h || !w) return;
      const calcbmi = w / (h * h);
      setBMI(calcbmi);
      setCategory(getCategory(calcbmi));
    }
  
    function getCategory(value) {
      if (value < 18.5) return "Underweight 🪶";
      else if (value < 25) return "Normal weight ✅";
      else if (value < 30) return "Overweight ⚠️";
      else if (value < 35) return "Obesity (Class 1) 🚨";
      else if (value < 40) return "Obesity (Class 2) 🚨";
      else return "Extreme Obesity ☠️";
    }
  
    const style = {
      backgroundColor:
        (category === "Underweight 🪶" && "#42A5F5") ||
        (category === "Normal weight ✅" && "#4CAF50") ||
        (category === "Overweight ⚠️" && "#ce9837") ||
        (category === "Obesity (Class 1) 🚨" && "#FB8C00") ||
        (category === "Obesity (Class 2) 🚨" && "#F44336") ||
        (category === "Extreme Obesity ☠️" && "#D32F2F"),
    };
  
    return (
      <>
        <form className="details" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="height"
            value={height}
            onChange={(e) =>
              /^\d+$/.test(Number(e.target.value)) &&
              setHeight(Number(e.target.value))
            }
          />
          <label htmlFor="height">Height (cm)</label>
          <br />
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={(e) =>
              /^\d+$/.test(Number(e.target.value)) &&
              setWeight(Number(e.target.value))
            }
          />
          <label htmlFor="weight">Weight (kg)</label>
          <br />
          <button onClick={calBMI}>Calculate BMI</button>
        </form>
        {bmi && (
          <div className="wrapper">
            <div className="bmi" style={style}>
              <h3>
                BMI <strong style={{ fontSize: "25px" }}>&rarr;</strong> {bmi.toFixed(2)}
              </h3>
              <h4>
                Category <strong style={{ fontSize: "25px" }}>&rarr;</strong> {category}
              </h4>
            </div>
          </div>
        )}
      </>
    );
  }