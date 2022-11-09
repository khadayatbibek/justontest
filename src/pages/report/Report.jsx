import React from "react";
import axios from "axios";
import "./report.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const Report = () => {
  const [justondata, setJustonData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // load Userdata from json server
  const loadData = async () => {
    const result = await axios.get("http://localhost:3003/justondata");

    setJustonData(result.data.reverse());
  };

  if (!justondata) return null;

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="uContainer">
            <div className="container">
              <h2>Example Table</h2>
              <h1>Raw Data </h1>
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">ColorKeys</div>
                  <div class="col col-2">Values</div>
                  <div class="col col-3">Digits</div>
                  <div class="col col-4">Processing Pattern</div>
                </li>
                {justondata.map((element) => {
                  return (
                    <li class="table-row">
                      {Object.values(element.address).map((elm) => {
                        return (
                          <>
                            <div class="col col-5" data-label="ColorKeys">
                              {elm.join(", ")}
                            </div>
                          </>
                        );
                      })}
                      {Object.values(element.meta).map((elm) => {
                        return (
                          <>
                            <div class="col col-6" data-label="Digits">
                              {elm}
                            </div>
                          </>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
