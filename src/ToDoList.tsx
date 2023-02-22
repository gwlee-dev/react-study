import { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(toDo)
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} placeholder="write" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };

interface IForm {
  name: string;
  email: string;
  number: string;
  password: string;
  password1: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@gridone.co.kr",
    },
  });
  const onValid = (data: any) => {
    data.password !== data.password1 &&
      setError(
        "password1",
        { message: "password confirm are not match" },
        { shouldFocus: true }
      );
    //   setError("extraError", {message: "server down"})
  };

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("name", {
            required: "name is Required",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nicks allowed" : true,
            },
          })}
          placeholder="name"
        />
        <input
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gridone.co.kr$/,
              message: "only gridone.co.kr allowed",
            },
          })}
          placeholder="email"
        />
        <input
          {...register("number", { required: true, minLength: 10 })}
          placeholder="number"
        />
        <input
          {...register("password", { required: "Password is Required" })}
          placeholder="password"
        />
        <input
          {...register("password1", {
            required: "Password Confirm is Required",
          })}
          placeholder="password1"
        />
        <button>Add</button>
      </form>
      <span>{errors?.email?.message}</span>
    </div>
  );
};

export default ToDoList;
