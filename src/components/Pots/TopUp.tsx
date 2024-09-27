import CustomDialog from "../../ui/CustomDialog";
import { InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotPrice from "./PotPrice";
import PotProgress from "./PotProgress";
import { useState } from "react";

type TopUpProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const TopUp = (props: TopUpProps): JSX.Element => {
  const { close, open, pot } = props;
  const [amount, setAmount] = useState<number>(pot.total);

  return (
    <CustomDialog open={open} title={`Add to "${pot.name}"`} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>

      <PotPrice title="New Amount" total={amount} />
      <PotProgress color={pot.theme} target={pot.target} total={amount} />

      <CustomInput
        label="Amount to Withdraw"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(pot.total + Number(e.target.value))
        }
      />
      <Btn fullWidth>Confirm Addition</Btn>
    </CustomDialog>
  );
};

export default TopUp;
