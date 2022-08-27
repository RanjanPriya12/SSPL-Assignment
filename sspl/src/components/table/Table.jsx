import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import { Spinner } from "@chakra-ui/react";

export const Table = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.publicapis.org/entries`);
      const data = res.data;
      setItems(data.entries);
      //console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading && (
        <div>
          <Spinner color="red.500" />
          <p style={{color:"red"}}>Loading...</p>
        </div>
      )}

      {!isLoading && (
        <div className="tableContainer">
          <table className="table">
            <thead className="thead">
              <tr>
                <th className="tcol">API</th>
                <th>Auth</th>
                <th>Category</th>
                <th>Cors</th>
                <th>HTTPS</th>
                <th>Link</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {items.map((el, i) => (
                
                  <tr className="row" key={i}>
                    <td className="tcol">{el.API}</td>
                    <td>{el.Auth}</td>
                    <td>{el.Category}</td>
                    <td>{el.Cors}</td>
                    <td>{el.HTTPS}</td>
                    <td>{el.Link}</td>
                    <td>{el.Description}</td>
                  </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
