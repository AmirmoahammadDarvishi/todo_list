import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const Carditem = ({ item }) => {
      // let result0, result1, result2, result3;
      // if (item.priority === 0) {
      //       result0 = item;
      // } else if (item.priority === 1) {
      //       result1 = item.text;
      // } else if (item.priority === 2) {
      //       result2 = item.text;
      // } else if (item.priority === 3) {
      //       result3 = item.text;
      // }
      let result;
      if (item.done) {
            result = (
                  <div style={{ textDecoration: "line-through" }}>
                        {item.text}
                  </div>
            );
      } else if (item.edit) {
            result = (
                  <TextField
                        id="standard-basic"
                        onChange={e => {}}
                        variant="standard"
                  />
            );
      } else if ((result = item.text)) {
      }

      return result;
};
export default Carditem;
