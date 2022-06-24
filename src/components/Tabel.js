import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { editTask, delTask, getTasks } from "../redux/actions/tasks";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tabel() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [copy, setCopy] = useState({
    title: "",
    description: "",
  });

  const [description, setDescription] = useState("");
  const taskState = useSelector((state) => state.handleTasks);
  const [loadingData, setLoadingData] = useState(true);

  const [rows, setRows] = useState([]);
  const [enabled, setEnabled] = useState("");

  const classes = useStyles();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleEdit = (row) => {
    setEnabled("");
    setLoadingData(true);
    setTitle(row.title);
    dispatch(editTask(row.id, row.title, row.description));
  };

  const handleDel = (id) => {
    setLoadingData(true);
    dispatch(delTask(id));
  };

  const isDisabled = (id) => {
    return enabled !== id;
  };
  const clear = () => {
    setEnabled("");
  };

  //when the app loads , we laod the data
  useEffect(() => {
    async function getData() {
      dispatch(getTasks());
    }
    if (loadingData) {
      getData();
    }
  }, []);

  //when any change happens , we get the data from the redux state
  useEffect(() => {
    Promise.resolve(taskState).then(
      function (value) {
        setLoadingData(true);
        setRows(value.data);
      },
      function (value) {}
    );
  }, [taskState]);

  return (
    <>
      <Paper>
        <TableContainer style={{ marginBottom: "25px" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">description</TableCell>
                <TableCell align="right">action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right">{row.id}</TableCell>

                  <TableCell align="right">
                    <TextField
                      style={{ width: "100%" }}
                      variant="standard"
                      onChange={(e) => {
                        handleTitle(e);
                        row.title = e.target.value;
                      }}
                      value={row.title}
                      disabled={isDisabled(row.id)}
                    />{" "}
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      style={{ width: "100%" }}
                      variant="standard"
                      onChange={(e) => {
                        handleDescription(e);
                        row.description = e.target.value;
                      }}
                      value={row.description}
                      disabled={isDisabled(row.id)}
                    />{" "}
                  </TableCell>
                  <TableCell align="right">
                    <DeleteIcon
                      hidden={enabled}
                      onClick={() => {
                        handleDel(row.id);
                      }}
                    />
                    <EditIcon
                      hidden={enabled}
                      onClick={() => {
                        setEnabled(row.id);
                        setCopy((previousState) => {
                          return {
                            ...previousState,
                            title: row.title,
                            description: row.description,
                          };
                        });
                      }}
                    />{" "}
                    <CheckIcon
                      onClick={() => handleEdit(row)}
                      hidden={enabled !== row.id}
                    />{" "}
                    <ClearIcon
                      onClick={(e) => {
                        clear(e);
                        row.title = copy.title;
                        row.description = copy.description;
                      }}
                      hidden={enabled !== row.id}
                    />{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
    </>
  );
}
