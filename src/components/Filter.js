import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useGetData } from "../utils/useGetData";
import { useDispatch, useSelector } from "react-redux";
import { selectedAllValues } from "../utils/dataSlice";

const Filter = () => {
  const [selectValue, setSelectValue] = useState({
    jobRole: "",
    location: "",
    minJdSalary: null,
    minExp: null,
    searchText: "",
  });
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
  const locationsArr = Array.from(uniqueLocation);
  const locations = locationsArr?.filter(
    (location) =>
      location?.toLowerCase() !== "remote" ||
      location?.toLowerCase() !== "on-site" ||
      location?.toLowerCase() !== "hybrid"
  );
  const experiences = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const remotes = ["remote", "on-site", "hybrid"];
  const minBaseSalary = ["0", "10", "20", "30", "40", "50"];

  const filterHandler = (e) => {
    const { name, value } = e.target;
    setSelectValue({ ...selectValue, [name]: value });
    if (selectValue) {
      dispatch(selectedAllValues({ ...selectValue, [name]: value }));
    }
  };
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <select
              name="jobRole"
              placeholder={"Role"}
              onChange={(e) => filterHandler(e)}
            >
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
            <select
              name="location"
              placeholder={"Location"}
              onChange={(e) => filterHandler(e)}
            >
              <option value="" disabled selected>
                Location
              </option>
              {locations?.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item md={2}>
            <select
              name="minExp"
              placeholder={"Minimum Experience"}
              onChange={(e) => filterHandler(e)}
            >
              <option value="" disabled selected>
                Min Experience
              </option>
              {experiences?.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item md={2}>
            <select
              name="minJdSalary"
              placeholder={"Minimum Base Pay Salary"}
              onChange={(e) => filterHandler(e)}
            >
              <option value="" disabled selected>
                Minimum Base Pay Salary
              </option>
              {minBaseSalary?.map((sal) => (
                <option key={sal} value={sal}>
                  {sal}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item md={2}>
            <select
              name="location"
              placeholder={"Remote"}
              onChange={(e) => filterHandler(e)}
            >
              <option value="" disabled selected>
                Remote / On-site
              </option>
              {remotes?.map((rem) => (
                <option key={rem} value={rem}>
                  {rem}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item md={2}>
            <input
              type="text"
              name="searchText"
              value={selectValue.searchText}
              placeholder="Search by company"
              onChange={(e) => filterHandler(e)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Filter;
