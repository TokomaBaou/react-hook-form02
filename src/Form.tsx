import { Stack, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

//入力の型を決める
type Inputs = {
  name: string;
};

//react-hook-form で使う道具を変数に入れる。　検証の定義をする。
export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ defaultValues: { name: "here!!" } });

  const validationRules = {
    name: {
      required: "名前を入力して下さい。",
      minLength: { value: 4, message: "4文字以上で入力してくださいs。" }
    }
  };

  //送信の際の関数
  const onSubmitTxt: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit:${data.name}`);
  };

  return (
    <>
      formです
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmitTxt)}
        spacing={2}
        sx={{ m: 2, width: "25ch" }}
      >
        <Controller
          name="name"
          control={control}
          rules={validationRules.name}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="名前"
              error={errors.name !== undefined}
              helperText={errors.name?.message}
            />
          )}
        />
        <Button variant="contained" type="submit">
          送信する
        </Button>
        <p>{}</p>
      </Stack>
    </>
  );
};
