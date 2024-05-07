import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { useGetData } from "../utils/useGetData";
import { Box, Container, Grid } from "@mui/material";
import Filter from "./Filter";

const Home = () => {
  useGetData();
  const jobData = useSelector((store) => store.data.allData);
  const selectedValues = useSelector((store) => store.data.selectedValues);

  const applyFilters = () => {
    let filteredJobs = jobData?.jdList;

    if (selectedValues?.jobRole) {
      filteredJobs = filteredJobs.filter(
        (job) => job.jobRole === selectedValues?.jobRole
      );
    }

    if (selectedValues?.location) {
      filteredJobs = filteredJobs.filter(
        (job) => job.location === selectedValues?.location
      );
    }
    if (selectedValues?.minJdSalary) {
      filteredJobs = filteredJobs.filter(
        (job) => job.minJdSalary >= selectedValues?.minJdSalary
      );
    }
    if (selectedValues?.minExp) {
      filteredJobs = filteredJobs.filter(
        (job) => job.minExp >= selectedValues?.minExp
      );
    }

    if (selectedValues?.searchText !== "" && selectedValues !== null) {
      const searchText = selectedValues?.searchText.toLowerCase();
      filteredJobs = filteredJobs.filter((job) =>
        job?.companyName.toLowerCase().includes(searchText)
      );
    }
    return filteredJobs;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container
        maxWidth="lg"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Filter />
        <Grid container spacing={2}>
          {applyFilters()?.map((job) => (
            <Grid item md={4} key={job.jdUid}>
              <JobCard
                jobTitle={job.jobRole}
                companyName={job.companyName}
                location={job.location}
                jobDescription={job.jobDetailsFromCompany}
                minExp={job.minExp}
                maxExp={job.maxExp}
                logo={job.logoUrl}
                jdLink={job.jdLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
