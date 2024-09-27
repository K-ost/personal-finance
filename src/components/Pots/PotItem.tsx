import { useState } from "react";
import {
  Box,
  BoxProps,
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
import EditPot from "./EditPot";
import DeletePot from "./DeletePot";

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

export const Circle = styled(Box)<BoxProps & { color: string }>(
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
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);

  const editHandler = () => {
    setAnchorEl(null);
    setEditDialog(true);
  };

  const deleteHandler = () => {
    setAnchorEl(null);
    setDeleteDialog(true);
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
              onClick={deleteHandler}
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

      <EditPot close={() => setEditDialog(false)} open={editDialog} pot={pot} />
      <DeletePot
        close={() => setDeleteDialog(false)}
        open={deleteDialog}
        pot={pot}
      />
    </>
  );
};

export default PotItem;
