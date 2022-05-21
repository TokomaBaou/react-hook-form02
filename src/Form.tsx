import { Stack, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  name: string;
};

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } =
    useForm <
    Inputs >
    {
      defaultValues: { name: "longbridgeyuk" }
    };

  const validationRules = {
    name: {
      required: "名前を入力して下さい。",
      minLength: { value: 4, message: "4文字以上で入力してください。" }
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit:${data.name}`);
  };

  return (
    <>
      formです
      <Stack></Stack>
    </>
  );
};