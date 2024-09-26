import {
  Box,
  BoxProps,
  InputAdornment,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotProgress from "./PotProgress";
import PotPrice from "./PotPrice";
import MenuIcon from "../../ui/MenuIcon";
import { useState } from "react";
import CustomDialog from "../../ui/CustomDialog";
import CustomInput from "../../ui/CustomInput";

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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [editDialog, setEditDialog] = useState<boolean>(false);

  const editHandler = () => {
    setAnchorEl(null);
    setEditDialog(true);
  };

  return (
    <>
      <PotBox>
        <Stack direction="row" alignItems="center" mb={8}>
          <Circle color={pot.theme} />
          <Typography variant="h2" component="div" m={0}>
            {pot.name}
          </Typography>

          <MenuIcon anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <MenuItem onClick={editHandler}>Edit Pot</MenuItem>
            <MenuItem
              sx={(theme) => ({ color: theme.palette.error.main })}
              onClick={() => setAnchorEl(null)}
            >
              Delete Pot
            </MenuItem>
          </MenuIcon>
        </Stack>

        <PotPrice total={pot.total} />

        <PotProgress color={pot.theme} target={pot.target} total={pot.total} />

        <Stack direction="row">
          <Btn
            color="secondary"
            fullWidth
            sx={(theme) => ({ mr: theme.spacing(4) })}
          >
            + Add Money
          </Btn>
          <Btn color="secondary" fullWidth>
            Withdraw
          </Btn>
        </Stack>
      </PotBox>

      <CustomDialog
        open={editDialog}
        title="Edit Pot"
        close={() => setEditDialog(false)}
      >
        <Typography variant="body1">
          If your saving targets change, feel free to update your pots.
        </Typography>
        <CustomInput
          label="Pot Name"
          helperText="16 characters left"
          defaultValue={pot.name}
        />
        <CustomInput
          label="Target"
          defaultValue={pot.target}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <Btn fullWidth>Save Changes</Btn>
      </CustomDialog>
    </>
  );
};

export default PotItem;
