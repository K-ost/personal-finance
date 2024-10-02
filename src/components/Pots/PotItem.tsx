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
import { useTranslation } from "react-i18next";
import { getLocalPrice } from "../../utils/utils";

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
  const { t } = useTranslation();

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
            <MenuItem onClick={editHandler}>{t("pots.edit")}</MenuItem>
            <MenuItem
              sx={(theme) => ({ color: theme.palette.error.main })}
              onClick={deleteHandler}
            >
              {t("pots.delete")}
            </MenuItem>
          </MenuIcon>
        </Stack>

        <PotPrice title={t("pots.total")} total={pot.total} />
        <PotProgress
          color={pot.theme}
          target={pot.target}
          total={pot.total}
          targetTitle={t("pots.target", {
            amount: getLocalPrice(pot.target, true),
          })}
        />

        <Stack direction="row">
          <Btn
            color="secondary"
            fullWidth
            sx={(theme) => ({ mr: theme.spacing(4) })}
            onClick={() => setTopUpDialog(true)}
            disabled={pot.total > pot.target - 10}
          >
            + {t("pots.addmoney")}
          </Btn>
          <Btn
            color="secondary"
            fullWidth
            onClick={() => setWithdrawDialog(true)}
            disabled={pot.total < 10}
          >
            {t("pots.withdraw")}
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
