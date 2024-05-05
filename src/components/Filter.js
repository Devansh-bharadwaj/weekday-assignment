import { Box, Grid } from "@mui/material";
import React from "react";
import SelectInput from "./SelectInput";
import { useGetData } from "../utils/useGetData";
import { useSelector } from "react-redux";

const Filter = () => {
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
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={2}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Filter;
