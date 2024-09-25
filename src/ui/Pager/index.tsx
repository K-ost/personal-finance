import {
  Pagination,
  PaginationItem,
  PaginationProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconNext, IconPrev } from "./Icons";

const Pager = (props: PaginationProps): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root": {
          borderColor: theme.palette.custom.beige500,
          borderRadius: "8px",
          color: theme.palette.primary.main,
          fontSize: theme.typography.body1.fontSize,
          height: 40,
          lineHeight: theme.typography.body1.lineHeight,
          margin: `0 ${theme.spacing(1)}`,
          width: 40,
          "&:hover": {
            backgroundColor: theme.palette.custom.beige500,
            color: theme.palette.primary.contrastText,
            "& svg path": {
              fill: theme.palette.primary.contrastText,
            },
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.custom.grey900,
            borderColor: theme.palette.custom.grey900,
            color: theme.palette.primary.contrastText,
          },
          "&.MuiPaginationItem-previousNext": {
            pl: theme.spacing(4),
            pr: theme.spacing(4),
            width: "auto",
          },
        },
        "& li:first-of-type": {
          mr: "auto",
        },
        "& li:last-of-type": {
          ml: "auto",
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          slots={{
            previous: () => (
              <>
                <IconPrev color={theme.palette.primary.main} />
                {isTablet && (
                  <span style={{ marginLeft: theme.spacing(4) }}>Prev</span>
                )}
              </>
            ),
            next: () => (
              <>
                {isTablet && (
                  <span style={{ marginRight: theme.spacing(4) }}>Next</span>
                )}
                <IconNext color={theme.palette.primary.main} />
              </>
            ),
          }}
          {...item}
        />
      )}
      variant="outlined"
      shape="rounded"
      {...props}
    />
  );
};

export default Pager;
