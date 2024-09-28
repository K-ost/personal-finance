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
import { getLocalPrice } from "../../utils/utils";

type ChangeBalanceProps = {
  close: () => void;
  open: boolean;
  pot: Pot;
  type: "topup" | "withdrawal";
};

const ChangeBalance = (props: ChangeBalanceProps): JSX.Element => {
  const { close, open, pot, type } = props;
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
    if (type === "topup") {
      setAmount(pot.total + Number(total));
    }
    if (type === "withdrawal") {
      setAmount(pot.total - Number(total));
    }
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
          setNotification(
            `You've ${
              type === "topup" ? "added" : "withdrawn"
            } money to your target for ${pot.name}`
          );
        },
      }
    );
  };

  const title = `${type === "topup" ? "Add to" : "Withdraw from"} ${pot.name}`;
  const btnText = type === "topup" ? "Confirm Addition" : "Confirm Withdrawal";
  const labelText = type === "topup" ? "Amount to Add" : "Amount to Withdraw";
  const errorText =
    type === "topup"
      ? `It can't be more than ${getLocalPrice(pot.target - pot.total, true)}`
      : `It can't be more than ${getLocalPrice(pot.total, true)}`;

  return (
    <CustomDialog open={open} title={title} close={close}>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Typography>

      <PotPrice title="New Amount" total={amount} />
      <PotProgress color={pot.theme} target={pot.target} total={amount} />

      <form onSubmit={handleSubmit(topUpHandler)}>
        <CustomInput
          type="number"
          label={labelText}
          adornment="$"
          inputProps={{
            ...register("total", {
              ...FORM_SETTINGS.totalChange,
              max: {
                value: type === "topup" ? pot.target - pot.total : pot.total,
                message: errorText,
              },
            }),
          }}
          error={errors.total ? true : false}
          helperText={errors.total && errors.total.message}
        />
        <Btn type="submit" fullWidth>
          {isPending ? "Loading..." : btnText}
        </Btn>
      </form>
    </CustomDialog>
  );
};

export default ChangeBalance;
