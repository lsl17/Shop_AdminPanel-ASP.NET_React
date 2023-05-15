import { React, useState, Fragment } from "react";
import { Box, Button, TableRow, TableCell, IconButton, Collapse, Typography, Table, TableBody, TableHead, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../theme";
import { KeyboardArrowUp, KeyboardArrowDown, Edit, Delete, AddCircle, RemoveCircle } from "@mui/icons-material";
import EditCategoryForm from "./EditCategoryForm";
import CreateSubcategory from "./CreateSubcategory";

export default function AdminCategoriesRow(props) {
  const [category, setCategory] = useState(props.category);
  const [subcategories, setSubcategories] = useState(props.subcategories);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [openSubcategoryForm, setOpenSubcategoryForm] = useState(false);

  function updateCategoryName(newName, newDescription) {
    setCategory((prev) => {
      return {
        ...prev,
        name: newName,
        description: newDescription,
      };
    });
  }

  function subcategoriesUpdated(newSubcategory) {
    setSubcategories((prev) => {
      return [...prev, newSubcategory];
    });
    console.log(newSubcategory);
  }

  function handleShowEditForm() {
    setOpenEditForm((prev) => !prev);
  }

  function handleShowSubcategories() {
    setOpenEditForm(false);
    setShowSubcategories((prev) => !prev);
  }

  function handleOpenSubcategoryForm() {
    setOpenSubcategoryForm((prev) => !prev);
  }

  const StyledButtonBox = styled(Box)({
    marginTop: theme.spacing(2),
  });

  const CategoryNameTableCell = styled(TableCell)({
    fontWeight: 500,
    fontSize: 18,
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      /* backgroundColor: theme.palette.action.hover, */
      backgroundColor: "#Cdf3d0",
      color: theme.palette.white.main,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledButton = styled(Button)({
    boxShadow: "none",
  });

  function renderCategoryProductsCount() {
    return subcategories?.reduce((a, b) => a + b?.productsCount, 0);
  }

  function renderSubcategories() {
    return subcategories?.map((subcategory) => (
      <StyledTableRow key={subcategory?.id}>
        <TableCell component="th" scope="row">
          {subcategory?.name}
        </TableCell>
        <TableCell align="center">{subcategory?.productsCount}</TableCell>
        <TableCell align="center">{subcategory?.createdBy}</TableCell>
        <TableCell align="center">
          <StyledButton
            color="warning"
            variant="contained"
            size="small"
            startIcon={<Edit />}
          >
            EDIT
          </StyledButton>
        </TableCell>
        <TableCell align="center">
          <StyledButton
            color="error"
            variant="contained"
            size="small"
            startIcon={<Delete />}
          >
            DELETE
          </StyledButton>
        </TableCell>
      </StyledTableRow>
    ));
  }

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleShowSubcategories()}
          >
            {showSubcategories && !openEditForm ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </IconButton>
        </TableCell>
        <CategoryNameTableCell component="th" scope="row">
          {category?.name}
        </CategoryNameTableCell>
        <TableCell align="center">{renderCategoryProductsCount()}</TableCell>
        <TableCell align="center">{subcategories?.length}</TableCell>
        <TableCell align="center">{category?.createdBy}</TableCell>
        <TableCell align="center">
          <StyledButton
            onClick={() => handleShowEditForm()}
            color="warning"
            variant="contained"
            size="small"
            startIcon={<Edit />}
          >
            EDIT
          </StyledButton>
        </TableCell>
        <TableCell align="center">
          <StyledButton
            color="error"
            variant="contained"
            size="small"
            startIcon={<Delete />}
          >
            DELETE
          </StyledButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse
            in={openEditForm || showSubcategories}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ display: openEditForm ? "block" : "none" }}>
              <EditCategoryForm
                category={category}
                updateCategoryName={updateCategoryName}
              />
            </Box>
            <Box
              sx={{
                margin: 2,
                display: showSubcategories && !openEditForm ? "block" : "none",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: 500, mt: theme.spacing(5), mb: theme.spacing(4) }}
              >
                {`Subcategories of ${category?.name}`}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">NAME</TableCell>
                    <TableCell align="center">PRODUCTS</TableCell>
                    <TableCell align="center">CREATOR</TableCell>
                    <TableCell align="center">EDIT</TableCell>
                    <TableCell align="center">DELETE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{renderSubcategories()}</TableBody>
              </Table>
              <StyledButtonBox>
                {openSubcategoryForm ? (
                  <Button
                    onClick={handleOpenSubcategoryForm}
                    variant="contained"
                    size="small"
                    startIcon={<RemoveCircle />}
                  >
                    Hide creation form
                  </Button>
                ) : (
                  <Button
                    onClick={handleOpenSubcategoryForm}
                    variant="contained"
                    size="small"
                    startIcon={<AddCircle />}
                  >
                    Add new subcategory to {category.name}
                  </Button>
                )}
                <Collapse in={openSubcategoryForm} timeout="auto" unmountOnExit>
                  <Paper
                    sx={{
                      padding: theme.spacing(2),
                      marginTop: theme.spacing(2),
                    }}
                  >
                    <CreateSubcategory
                      subcategoriesUpdated={subcategoriesUpdated}
                      categoryId={category?.id}
                    />
                  </Paper>
                </Collapse>
              </StyledButtonBox>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}