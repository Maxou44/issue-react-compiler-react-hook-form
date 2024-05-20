import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Headers
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("test")} placeholder="Test field" />
        Value is {watch("test")}
        <input type="submit" />
      </form>
    </div>
  );
}
