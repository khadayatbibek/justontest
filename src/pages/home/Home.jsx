import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [colorkeys, setColorKeys] = useState([]);
  const [values, setValues] = useState([]);

  const [sumvalues, setSumValues] = useState();
  const [sumdigits, setSumDigits] = useState();

  const [juston, setJustOn] = useState({
    address: {
      Colorkeys: [],
      values: [],
    },
    meta: {
      digits: "",
      processingPattern: "",
    },
  });

  // create function to add colorkey input  dynamically
  const handleAddColorKeys = () => {
    const tempcolorkey = [...colorkeys, []];
    setColorKeys(tempcolorkey);
    setJustOn((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        Colorkeys: tempcolorkey,
      },
    }));
  };

  // create function to getting value on change from each input field of Colorkeys
  const handleChangeColorKeys = (onChangeValue, i) => {
    const inputdata = [...colorkeys];
    inputdata[i] = onChangeValue.target.value;
    setColorKeys(inputdata);

    setJustOn((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        Colorkeys: inputdata,
      },
    }));
  };

  // create function to delete a specific input field of colorkeys
  const handleDeleteColorKeys = (i) => {
    const deletVal = [...colorkeys];
    deletVal.splice(i, 1);
    setColorKeys(deletVal);
  };
  // create function to add values input  dynamically
  const handleAddValues = () => {
    const tempvalue = [...values, []];
    setValues(tempvalue);
    setJustOn((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        values: tempvalue,
      },
    }));

    setVisible(true);
  };
  // create function to getting value on change from each input field of values
  const handleChangeValues = (onChangeValue, i) => {
    const inputdata = [...values];
    inputdata[i] = Number(onChangeValue.target.value);
    setValues(inputdata);

    setJustOn((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        values: inputdata,
      },
    }));
  };

  // create function to delete a specific input field of values
  const handleDeleteValues = (i) => {
    const deletVal = [...values];
    deletVal.splice(i, 1);
    setValues(deletVal);
  };

  // function tosum all element of values and add each digit of it
  const getSumDigits = () => {
    const sum = values.reduce(
      (total, currentItem) => (total = total + Number(currentItem)),
      0
    );
    const numArr = sum.toString().split("");
    const digitsum = numArr.reduce(
      (total, currentItem) => (total = total + Number(currentItem)),
      0
    );
    setSumDigits(digitsum);
    setSumValues(sum);
    setVisible2(true);
  };
  // create function to getting value on change from each input field of digits
  const handleChangeDigits = (onChangeValue) => {
    const inputdata = onChangeValue.target.value;

    setJustOn((prev) => ({
      ...prev,
      meta: {
        ...prev.meta,
        digits: Number(inputdata),
      },
    }));
  };
  // create function to getting value on change from each input field of processingPattern
  const handleChangeProcessing = (onChangeValue) => {
    const inputdata = onChangeValue.target.value;

    setJustOn((prev) => ({
      ...prev,
      meta: {
        ...prev.meta,
        processingPattern: inputdata,
      },
    }));
  };

  // create function post request on clicking submit button
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/justondata", juston)
      .then((response) => console.log("data posted", response))
      .catch((error) => console.log(error));
    history("/report");
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="listContainer">
          <div className="block">
            <button
              className="input_button"
              onClick={() => handleAddColorKeys()}
            >
              Add ColorKeys
            </button>
            {colorkeys.map((data, i) => {
              return (
                <div className="row">
                  <input
                    className="input_field"
                    value={data}
                    onChange={(e) => handleChangeColorKeys(e, i)}
                  />
                  <button
                    className="input_button"
                    onClick={() => handleDeleteColorKeys(i)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
          <div className="block">
            <button className="input_button" onClick={() => handleAddValues()}>
              Add Values
            </button>
            {values.map((data, i) => {
              return (
                <div className="row">
                  <input
                    className="input_field"
                    type="number"
                    value={data}
                    onChange={(e) => handleChangeValues(e, i)}
                  />
                  <button
                    className="input_button"
                    onClick={() => handleDeleteValues(i)}
                  >
                    x
                  </button>
                </div>
              );
            })}

            {visible && (
              <>
                <div className="gap">
                  <button
                    className="input_button"
                    onClick={() => getSumDigits()}
                  >
                    SumDigits
                  </button>
                </div>

                {visible2 && (
                  <>
                    <p>Total sum is :{sumvalues}</p>
                    <p>and digits sum of the result is :{sumdigits}</p>
                  </>
                )}
              </>
            )}
          </div>

          {visible && (
            <div className="block">
              <div className="row">
                <input
                  className="input_field"
                  type="number"
                  placeholder="Digits"
                  onChange={(e) => handleChangeDigits(e)}
                />
              </div>
              <div className="row">
                <input
                  className="input_field"
                  placeholder="Processing Pattern"
                  onChange={(e) => handleChangeProcessing(e)}
                />
              </div>
            </div>
          )}

          <br></br>
        </div>
        {visible && (
          <div className="lowerContainer">
            <div className="lower">
              <button className="input_button" onClick={(e) => onSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
