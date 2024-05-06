import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { useGetData } from "../utils/useGetData";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../utils/dataSlice";

const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const jobData = useSelector((store) => store.data.allData);
  useGetData();
  const uniqueRoles = new Set();
  const uniqueCompany = new Set();
  const uniqueLocation = new Set();
  jobData?.jdList?.forEach((item) => {
    uniqueRoles.add(item?.jobRole);
    uniqueCompany.add(item?.companyName);
    uniqueLocation.add(item?.location);
  });
  const names = Array.from(uniqueRoles);
  const companies = Array.from(uniqueCompany);
  const locations = Array.from(uniqueLocation);
  const experiences = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const remotes = ["remote", "on-site", "hybrid"];
  const minBaseSalary = ["0", "10", "20", "30", "40", "50"];

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  //   useEffect(() => {
  //     const timer = setTimeout((e) => dispatch(searchFilter(searchText)), 200);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [searchText]);
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* <Grid item md={2}>
            <SelectInput names={names} placeholder={"Roles"} />
          </Grid>
          <Grid item md={2}>
            <SelectInput names={experiences} placeholder={"Min Experience"} />
          </Grid>
          <Grid item md={2}>
            <SelectInput names={companies} placeholder={"Company"} />
          </Grid>
          <Grid item md={2}>
            <SelectInput
              names={locations?.filter(
                (location) =>
                  location !== "remote" &&
                  location !== "hybrid" &&
                  location !== "on-site"
              )}
              placeholder={"Location"}
            />
          </Grid>
          <Grid item md={2}>
            <SelectInput names={remotes} placeholder={"Remote"} />
          </Grid>
          <Grid item md={2}>
            <SelectInput
              names={minBaseSalary}
              placeholder={"Minimum Base Pay Salary"}
            />
          </Grid> */}
          <Grid item md={2}>
            <select name="jobRole" placeholder={"Role"}>
              <option value="" disabled selected>
                Role
              </option>
              {names?.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item md={2}>
            <input
              type="text"
              value={searchText}
              placeholder="Search by company"
              onChange={(e) => searchHandler(e)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Filter;
