import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  TextField,
  Container,
} from "@mui/material";
import SectionTittle from "../../../components/shared/SectionTittle";
import { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import usePagiNation from "../../../hooks/usePagiNation";
import LoadingRow from "../../../utils/LoadingRow";
import PetCardStyle from "../../../components/shared/pet/petCardStyle";

const PetListing = () => {
  const [ascending, setAscending] = useState(true);
  const [Category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  let { data: number = 10, isLoading: loadingPage,refetch:refechPageNumber,isRefetching:isRefetchingNumber} = useQuery({
    queryKey: ["pageNumber"],
    queryFn: async () => {
      let data = await AxiosCustomSecure.get(`/api/petcount?sort=${ascending}&name=${search}&category=${Category}`);
      return data.data.total;
    },
  });

  let {
    pagesButton,
    isLoading,
    refetch,isRefetching,
    items,pageNumber
  } = usePagiNation({
    number: number,
    perPage: 10,
    ProductApi: `/api/petsavailable?sort=${ascending}&name=${search}&category=${Category}`,
  });

  useEffect(() => {
    refetch();
    refechPageNumber()
  }, [refetch, Category, search, ascending,pageNumber,refechPageNumber]);
  let AxiosCustomSecure = useAxiosIntercepter();
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleAscending = (event, newAlignment) => {
    setAscending(newAlignment);
  };
  const handleSearch = (event) => {
    let value = event.target.value;
    setSearch(value);
  };
  let { data: categories } = useQuery({
    queryKey: ["PetCategory"],
    queryFn: async () => {
      let data = await AxiosCustomSecure.get("/api/categories");
      return data.data;
    },
  });







  return (
    <>
      <SectionTittle
        tittle="Pet Listing"
        desc="All Pets Listed Here"
      ></SectionTittle>
      <Grid sx={{ paddingY: 4 }}>
        <Container>
          <Grid container sx={{ gap: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                justifyContent: "center",
                gap: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel size="small" id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Category}
                    label="Category"
                    size="small"
                    onChange={handleCategory}
                  >
                    {categories?.map((category) => (
                      <MenuItem
                        key={category.category}
                        size="small"
                        value={category.category.toLowerCase()}
                      >
                        {category.category}{" "}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <ToggleButtonGroup
                color="primary"
                value={ascending}
                exclusive
                onChange={handleAscending}
                aria-label="Platform"
              >
                <ToggleButton size="small" value={false}>
                  Ascending
                </ToggleButton>
                <ToggleButton size="small" value={true}>
                  Descending
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  label="Search"
                  id="fullWidth"
                  onChange={handleSearch}
                />
              </Box>
            </Grid>
          </Grid>

         {loadingPage || isLoading||isRefetching||isRefetchingNumber? <Grid sx={{ paddingY: 5 }}>
    
    <LoadingRow></LoadingRow> <LoadingRow></LoadingRow>
    <LoadingRow></LoadingRow>
  </Grid>:<Grid container spacing={2} sx={{paddingTop:6}}>

           {items.map((pet) =><PetCardStyle key={pet._id} pet={pet}></PetCardStyle>
              )}
           </Grid>
         }
          <Grid
            sx={{ display: "flex", justifyContent: "center", paddingTop: 3 }}
          >
            {pagesButton}
          </Grid>


       


        </Container>
      </Grid>
    </>
  );
};

export default PetListing;
