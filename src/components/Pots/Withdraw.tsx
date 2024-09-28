import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotPrice from "./PotPrice";
import PotProgress from "./PotProgress";
import { useState } from "react";

type WithdrawProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const Withdraw = (props: WithdrawProps): JSX.Element => {
  const { close, open, pot } = props;
  const [amount, setAmount] = useState<number>(pot.total);

  return (
    <CustomDialog
      open={open}
      title={`Withdraw from "${pot.name}"`}
      close={close}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>

      <PotPrice title="New Amount" total={amount} />
      <PotProgress color={pot.theme} target={pot.target} total={amount} />

      <CustomInput
        type="number"
        label="Amount to Withdraw"
        adornment="$"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(pot.total - Number(e.target.value))
        }
      />
      <Btn fullWidth>Confirm Withdrawal</Btn>
    </CustomDialog>
  );
};

export default Withdraw;
