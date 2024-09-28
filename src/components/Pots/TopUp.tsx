import CustomDialog from "../../ui/CustomDialog";
import { Typography } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import Btn from "../../ui/Btn";
import { Pot } from "../../types";
import PotPrice from "./PotPrice";
import PotProgress from "./PotProgress";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FORM_SETTINGS } from "../../utils/constants";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificationStore } from "../../store/useNotificationStore";

type TopUpProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
};

const TopUp = (props: TopUpProps): JSX.Element => {
  const { close, open, pot } = props;
  const [amount, setAmount] = useState<number>(0);
  const queryClient = useQueryClient();
  const { setNotification } = useNotificationStore();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<Pick<Pot, "total">>();

  const total = watch("total") || "";

  useEffect(() => {
    setAmount(pot.total + Number(total));
  }, [total]);

  useEffect(() => {
    setAmount(pot.total);
  }, [pot]);

  const { mutate, isPending } = useMutateData<Pot, Pick<Pot, "total">>({
    key: ["pots"],
    method: "PATCH",
    uri: `/pots/${pot.id}`,
  });

  const topUpHandler = () => {
    mutate(
      {
        total: amount,
      },
      {
        onSuccess: () => {
          reset(),
            close(),
            queryClient.invalidateQueries({
              queryKey: ["pots"],
            });
          setNotification(`You've added money to your target for ${pot.name}`);
        },
      }
    );
  };

  return (
    <CustomDialog open={open} title={`Add to "${pot.name}"`} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>

      <PotPrice title="New Amount" total={amount} />
      <PotProgress color={pot.theme} target={pot.target} total={amount} />

      <form onSubmit={handleSubmit(topUpHandler)}>
        <CustomInput
          type="number"
          label="Amount to Add"
          adornment="$"
          inputProps={{
            ...register("total", {
              ...FORM_SETTINGS.totalTopUp,
              max: {
                value: pot.target - pot.total,
                message: "It can't be more than target",
              },
            }),
          }}
          error={errors.total ? true : false}
          helperText={errors.total && errors.total.message}
        />
        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : "Confirm Addition"}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default TopUp;
