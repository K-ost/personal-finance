import {
  Box,
  BoxProps,
  MenuItem,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotProgress from "./PotProgress";
import PotPrice from "./PotPrice";
import MenuIcon from "../../ui/MenuIcon";
import { useState } from "react";

type PotItemProps = {
  pot: Pot;
};

const PotBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 12,
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5),
  },
}));

const Circle = styled(Box)<BoxProps & { color: string }>(
  ({ theme, color }) => ({
    backgroundColor: color,
    borderRadius: "50%",
    height: 16,
    marginRight: theme.spacing(4),
    width: 16,
  })
);

const PotItem = (props: PotItemProps): JSX.Element => {
  const { pot } = props;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <PotBox>
      <Stack direction="row" alignItems="center" mb={8}>
        <Circle color={pot.theme} />
        <Typography variant="h2" component="div" m={0}>
          {pot.name}
        </Typography>

        <MenuIcon anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
          <MenuItem onClick={() => setAnchorEl(null)}>Edit Pot</MenuItem>
          <MenuItem
            sx={{ color: theme.palette.error.main }}
            onClick={() => setAnchorEl(null)}
          >
            Delete Pot
          </MenuItem>
        </MenuIcon>
      </Stack>

      <PotPrice total={pot.total} />

      <PotProgress color={pot.theme} target={pot.target} total={pot.total} />

      <Stack direction="row">
        <Btn color="secondary" fullWidth sx={{ mr: theme.spacing(4) }}>
          + Add Money
        </Btn>
        <Btn color="secondary" fullWidth>
          Withdraw
        </Btn>
      </Stack>
    </PotBox>
  );
};

export default PotItem;
