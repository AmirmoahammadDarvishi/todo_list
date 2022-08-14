import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const TextErea = styled(TextField)({
      "& label.Mui-focused": {
            color: "green",
      },
      "& .MuiInput-underline:after": {
            borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                  borderColor: "blue",
            },
            "&.Mui-focused fieldset": {
                  borderColor: "green",
            },
      },
});

export default function TextBox({ text, setText, handleInsert }) {
      return (
            <form className="rounded-3" onSubmit={handleInsert}>
                  <TextErea
                        className="w-100 my-2"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        label="Enter todos"
                        id="custom-css-outlined-input"
                  />
            </form>
      );
}
// const TextBox = ({ text, setText, handleInsert }) => {
//       return (
//             <form onSubmit={handleInsert}>
//                   <div class="form-group">
//                         <div class="form-group">
//                               <textarea
//                                     value={text}
//                                     onChange={e => setText(e.target.value)}
//                                     placeholder="Enter your todo"
//                                     class="form-control"
//                                     rows="3"
//                               ></textarea>
//                         </div>
//                         <button className="btn btn-success w-100">
//                               insert
//                         </button>
//                   </div>
//             </form>
//       );
// };
// export default TextBox;
