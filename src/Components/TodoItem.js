import * as React from "react";

import CircleIcon from "@mui/icons-material/Circle";

import { red, purple, blue, orange, grey } from "@mui/material/colors";
import TaskIcon from "./taskIcon";
import Carditem from "./cardItem";
const redd = red[500];
const purplee = purple[500];
const bluee = blue[500];
const orangee = orange[500];
const greyy = grey[500];
const TodoItem = ({
      data,
      deleteItem,
      editHandler,
      editText,
      setEditText,
      toggleDoneItem,
      handlePriority,
}) => {
      return (
            <div>
                  {data.map((item, index) => {
                        let bgColor;
                        if (item.priority === 1) {
                              bgColor = redd;
                        } else if (item.priority === 2) {
                              bgColor = orangee;
                        } else if (item.priority === 3) {
                              bgColor = purplee;
                        } else if (item.priority === 0) {
                              bgColor = greyy;
                        }

                        return (
                              <div
                                    key={index}
                                    className="card border-0 text-bg-light my-3"
                              >
                                    <div
                                          style={{
                                                backgroundColor: bgColor,
                                          }}
                                          className="card-body rounded-4 border-0 text-white"
                                    >
                                          <div className="row">
                                                <div className="col-7">
                                                      <p className="card-text">
                                                            <Carditem
                                                                  item={item}
                                                            />
                                                      </p>
                                                </div>
                                                <TaskIcon
                                                      editHandler={editHandler}
                                                      index={index}
                                                      deleteItem={deleteItem}
                                                      item={item}
                                                      toggleDoneItem={
                                                            toggleDoneItem
                                                      }
                                                />
                                                <div className="col justify-content-between">
                                                      <CircleIcon
                                                            onClick={() =>
                                                                  handlePriority(
                                                                        1,
                                                                        index
                                                                  )
                                                            }
                                                            style={{
                                                                  color: redd,
                                                            }}
                                                      />
                                                      <CircleIcon
                                                            onClick={() =>
                                                                  handlePriority(
                                                                        2,
                                                                        index
                                                                  )
                                                            }
                                                            style={{
                                                                  color: orangee,
                                                            }}
                                                      />
                                                      <CircleIcon
                                                            onClick={() =>
                                                                  handlePriority(
                                                                        3,
                                                                        index
                                                                  )
                                                            }
                                                            style={{
                                                                  color: purplee,
                                                            }}
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
};
export default TodoItem;
