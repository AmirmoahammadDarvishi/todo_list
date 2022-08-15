import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditIcon from "@mui/icons-material/Edit";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
const TaskIcon = ({ toggleDoneItem, index, item, deleteItem, editHandler }) => {
      return (
            <div className="col justify-content-between text-white">
                  {item.done ? (
                        ""
                  ) : (
                        <Tooltip title="Done">
                              <IconButton>
                                    <DoneIcon
                                          onClick={() => toggleDoneItem(index)}
                                          className="IconHover"
                                    />
                              </IconButton>
                        </Tooltip>
                  )}

                  <Tooltip title="Delete">
                        <IconButton>
                              <ClearIcon
                                    className="IconHover"
                                    onClick={() => deleteItem(index)}
                              />
                        </IconButton>
                  </Tooltip>
                  <Tooltip title={item.time}>
                        <IconButton>
                              <AccessTimeIcon className="IconHover" />
                        </IconButton>
                  </Tooltip>
                  <Tooltip title={item.date}>
                        <IconButton>
                              <DateRangeIcon className="IconHover" />
                        </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                        <IconButton>
                              <EditIcon
                                    onClick={() => editHandler}
                                    className="IconHover"
                              />
                        </IconButton>
                  </Tooltip>
            </div>
      );
};
export default TaskIcon;
