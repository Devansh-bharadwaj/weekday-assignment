import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { useGetData } from "../utils/useGetData";
import { Box, Container, Grid } from "@mui/material";
import Filter from "./Filter";

const Home = () => {
  const jobData = useSelector((store) => store.data.allData);
  const loading = useGetData();
  console.log(loading);
  const filterData = useSelector((store) => store.data.filteredData);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container
          maxWidth="lg"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Filter />
          <Grid container spacing={2}>
            {filterData?.length > 0
              ? filterData?.map((job) => (
                  <Grid item md={4} key={job?.jdUid}>
                    <JobCard
                      jobTitle={job?.jobRole}
                      companyName={job?.companyName}
                      location={job?.location}
                      jobDescription={job?.jobDetailsFromCompany}
                      minExp={job?.minExp}
                      maxExp={job?.maxExp}
                      logo={job?.logoUrl}
                    />
                  </Grid>
                ))
              : jobData?.jdList?.map((job) => (
                  <Grid item md={4} key={job?.jdUid}>
                    <JobCard
                      jobTitle={job?.jobRole}
                      companyName={job?.companyName}
                      location={job?.location}
                      jobDescription={job?.jobDetailsFromCompany}
                      minExp={job?.minExp}
                      maxExp={job?.maxExp}
                      logo={job?.logoUrl}
                    />
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
