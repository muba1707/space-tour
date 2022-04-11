import { useForm } from "react-hook-form";
import { useState } from "react";

export default function form() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input type="text" {...register("firstName", { required: true })} />
        <input type="text" {...register("lastName", { required: true })} />
        <input type="number" {...register("age", { required: true })} />
        <input
          type="radio"
          value="yes"
          {...register("Developer", { required: true })}
        />
        <input
          type="radio"
          value="no"
          {...register("Developer", { required: true })}
        />
        <button type="submit">submit</button>
        <input type="reset" value="reset" />
      </form>
    </div>
  );
}
