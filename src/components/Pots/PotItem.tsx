import { useState } from "react";
import { Box, BoxProps, MenuItem, Stack, styled } from "@mui/material";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotProgress from "./PotProgress";
import PotPrice from "./PotPrice";
import MenuIcon from "../../ui/MenuIcon";
import EditPot from "./EditPot";
import DeletePot from "./DeletePot";
import ChangeBalance from "./ChangeBalance";
import IconTitle from "../../ui/IconTitle";

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

const PotItem = (props: PotItemProps): JSX.Element => {
  const { pot } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [topUpDialog, setTopUpDialog] = useState<boolean>(false);
  const [withdrawDialog, setWithdrawDialog] = useState<boolean>(false);

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
          <IconTitle color={pot.theme} title={pot.name} />

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
            onClick={() => setTopUpDialog(true)}
            disabled={pot.total > pot.target - 10}
          >
            + Add Money
          </Btn>
          <Btn
            color="secondary"
            fullWidth
            onClick={() => setWithdrawDialog(true)}
            disabled={pot.total < 10}
          >
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

      <ChangeBalance
        close={() => setTopUpDialog(false)}
        open={topUpDialog}
        pot={pot}
        type="topup"
      />

      <ChangeBalance
        close={() => setWithdrawDialog(false)}
        open={withdrawDialog}
        pot={pot}
        type="withdrawal"
      />
    </>
  );
};

export default PotItem;
