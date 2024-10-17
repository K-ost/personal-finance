import {
  Pagination,
  PaginationItem,
  PaginationProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconNext, IconPrev } from "./Icons";
import { useTranslation } from "react-i18next";

const Pager = (props: PaginationProps): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();

  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root": {
          borderColor: theme.palette.custom.beige500,
          borderRadius: "8px",
          color: theme.palette.primary.main,
          fontSize: theme.typography.body1.fontSize,
          height: isTablet ? 40 : 30,
          width: isTablet ? 40 : 30,
          lineHeight: theme.typography.body1.lineHeight,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: theme.spacing(isTablet ? 1 : 1 / 2),
          marginRight: theme.spacing(isTablet ? 1 : 1 / 2),
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
            "&:hover": {
              backgroundColor: theme.palette.custom.grey900,
              color: theme.palette.primary.contrastText,
            },
          },
          "&.MuiPaginationItem-previousNext": {
            pl: theme.spacing(isTablet ? 4 : 1),
            pr: theme.spacing(isTablet ? 4 : 1),
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
                  <span style={{ marginLeft: theme.spacing(isTablet ? 4 : 1) }}>
                    {t("filter.prev")}
                  </span>
                )}
              </>
            ),
            next: () => (
              <>
                {isTablet && (
                  <span
                    style={{ marginRight: theme.spacing(isTablet ? 4 : 1) }}
                  >
                    {t("filter.next")}
                  </span>
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
