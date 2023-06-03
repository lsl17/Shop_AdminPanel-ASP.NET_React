import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Rating,
  Box,
  Typography,
  Card,
  CardActionArea,
  IconButton,
  Button,
  CardContent,
  CardMedia,
  Chip,
  Skeleton
} from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  maxNameLengthInProductCard,
  singleProductBasePath,
} from "../../../constants";
import { theme } from "../../../theme";

function ProductCarouselCard(props) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(props.product)
  const [isLoading, setIsLoading] = useState(true)

  const [subcategory, setSubcategory] = useState(props.subcategory);


  useEffect(() => {
    // Симулиране на зареждането на снимките
    setTimeout(() => {
      setProduct(product)
      setIsLoading(false);
    }, 0);
  }, []);


  const ProductCardMedia = styled(CardMedia)({
    height: 250,
    position: "relative",
  });

  const RibbonHolder = styled(Box)({
    position: "absolute",
    top: 10,
    left: -12,
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  });

  const ProductRibbon = styled(Chip)({
    fontSize: 14,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(0.7),
  });

  const LabelsHolder = styled(Box)({
    position: "absolute",
    bottom: 5,
    left: 8,
    display: "flex",
    gap: 5,
    justifyContent: "center",
  });

  const ProductLabel = styled(Chip)({
    fontSize: 14,
    borderRadius: 6,
  });

  const StyledCardActionArea = styled(Box)({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
     
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  });

  const ProductName = styled(Typography)({
    fontWeight: 500,
    fontSize: "120%",
    lineHeight: 1.1,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  });

  const RatingWrapper = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  });

  const PriceAndActionsWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const ActionsWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    gap: 1,
  });

  const RatingText = styled(Typography)({
    marginLeft: theme.spacing(1),
  });

  const PriceText = styled(Typography)({
    color: theme.palette.secondary.main,
    fontWeight: 500,
  });

  const StyledCard = styled(Card)({
    marginLeft: theme.spacing(0.7),
    marginRight: theme.spacing(0.7),
    minHeight: 400,
  });

  return  (
    !isLoading ? (<StyledCard>
      <CardActionArea>
        <ProductCardMedia
          onClick={() =>
            navigate(`${singleProductBasePath}${product.id}`)
          }
          title={product.name}
          image={props.image}
        />
        <RibbonHolder>
          {product.discount > 0 ? (
            <Box>
              <ProductRibbon
                label={`- ${product.discount}%`}
                color="error"
                variant="filled"
              />
            </Box>
          ) : (
            <></>
          )}
        </RibbonHolder>
        <LabelsHolder>
          {product.labels.map((label) => {
            return (
              <ProductLabel
                key={label}
                label={label}
                color="primary"
                size="small"
                variant="filled"
              />
            );
          })}
        </LabelsHolder>
      </CardActionArea>
      <CardContent>
        {subcategory?.name ? (
          <Button variant="outlined" size="small">
            {subcategory?.name}
          </Button>
        ) : (
          <></>
        )}
        <StyledCardActionArea sx={{border: "2px solid black"}}>
          <ProductName
            onClick={() =>
              navigate(`${singleProductBasePath}${product.id}`)
            }
          >
            {product.name.length > maxNameLengthInProductCard
              ? product.name.slice(0, maxNameLengthInProductCard) + "..."
              : product.name.slice(0, maxNameLengthInProductCard)}
          </ProductName>
        </StyledCardActionArea>
        <Box>
          <RatingWrapper>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <RatingText component="legend">
              {product.rating} stars
            </RatingText>
          </RatingWrapper>
          {product?.discount > 0 ? (
            <Box
              sx={{
                height: 25,
                color: "gray",
                textDecoration: "line-through",
              }}
            >
              {product.currency} {product.price.toFixed(2)}
            </Box>
          ) : (
            <Box sx={{ height: 25 }}></Box>
          )}
          <PriceAndActionsWrapper>
            <PriceText variant="h6">
              {product.currency}{" "}
              {(
                Math.round(
                  (product.price -
                    (product.price * product.discount) / 100) *
                    100
                ) / 100
              ).toFixed(2)}
            </PriceText>
            <ActionsWrapper>
              <IconButton
                size="large"
                variant="contained"
                sx={{
                  "&:hover": {
                    color: theme.palette.error.main,
                  },
                }}
              >
                <Favorite sx={{ fontSize: "26px" }} />
              </IconButton>
              <IconButton
                size="large"
                variant="contained"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ShoppingCart sx={{ fontSize: "26px" }} />
              </IconButton>
            </ActionsWrapper>
          </PriceAndActionsWrapper>
        </Box>
      </CardContent>
    </StyledCard>) 
    
    
    : ( <StyledCard><Skeleton  variant="rounded" height={484} /></StyledCard>)
  ) 
}

export default ProductCarouselCard;
