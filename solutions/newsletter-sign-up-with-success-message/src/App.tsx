import { useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  type Input as InputShape,
  string,
  email,
  object,
  minLength,
} from "valibot";
import SignUpDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import SignUpMobile from "@/assets/images/illustration-sign-up-mobile.svg";

import Icon from "@/components/ui/icon";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const Schema = object({
  email: string([
    minLength(1, "Please enter your email"),
    email("Valid email required"),
  ]),
});

type Values = InputShape<typeof Schema>;

const defaultValues: Values = {
  email: "",
};

function App() {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const { control, handleSubmit, watch, reset } = useForm<Values>({
    defaultValues,
    resolver: valibotResolver(Schema),
  });
  const email = watch("email");

  const onSubmit = () => {
    setIsSubscribe(true);
  };

  const onDismiss = () => {
    setIsSubscribe(false);
    reset({ email: "" });
  };

  return (
    <main
      className={
        "bg-dark-slate-grey font-roboto lg:flex lg:min-h-screen lg:items-center lg:justify-center"
      }
    >
      {isSubscribe ? (
        <div
          className={
            "flex h-screen flex-col bg-white px-5 py-8 lg:h-auto lg:max-w-md lg:rounded-3xl lg:px-12 lg:py-10"
          }
        >
          <div className={"mt-32 flex-1 lg:mb-8 lg:mt-0 lg:flex-initial"}>
            <Icon name={"success"} className={"mb-10 h-16 w-16"} />
            <h1
              className={
                "mb-4 text-[40px] font-bold leading-none text-charcoal-grey"
              }
            >
              {"Thanks for subscribing!"}
            </h1>

            <p className={"text-charcoal-grey lg:text-sm"}>
              {"A confirmation email has been sent to "}
              <span className={"font-bold"}>{email}</span>
              {
                ". Please open it and click the button inside to confirm your subscription"
              }
            </p>
          </div>

          <Button onClick={onDismiss}>{"Dismiss message"}</Button>
        </div>
      ) : (
        <div
          className={
            "h-screen bg-white lg:flex lg:h-auto lg:max-w-[840px] lg:flex-row-reverse lg:gap-x-8 lg:rounded-3xl lg:p-6"
          }
        >
          <div className={"w-full lg:flex-1"}>
            <picture>
              <source srcSet={SignUpDesktop} media={"(min-width: 1024px)"} />
              <img
                className={"w-full max-w-full object-cover"}
                src={SignUpMobile}
                alt={"Sign Up"}
              />
            </picture>
          </div>

          <div
            className={
              "px-6 py-8 lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:py-0"
            }
          >
            {/* title */}
            <h1 className={"mb-4 text-[40px] font-bold text-charcoal-grey"}>
              {"Stay Updated!"}
            </h1>

            {/* desc */}
            <p className={"mb-5"}>
              {"Join 60,000+ product managers receiving monthly updates on:"}
            </p>

            {/* list */}
            <ul className={"mb-8 space-y-3"}>
              <li className={"flex items-start gap-x-3"}>
                <Icon name={"list"} />
                <span>{"Product discovery and building what matters"}</span>
              </li>
              <li className={"flex gap-x-3"}>
                <Icon name={"list"} />
                <span>{"Measuring to ensure updates are a success"}</span>
              </li>
              <li className={"flex gap-x-3"}>
                <Icon name={"list"} />
                <span>{"And much more!"}</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
              {/* email address */}
              <Input
                label={"Email address"}
                placeholder={"email@company.com"}
                type={"email"}
                autoComplete={"email"}
                control={control}
                name={"email"}
              />

              {/* subscribe button */}
              {/* TODO hover state */}
              {/* TODO linear gradient bg color and box shadow */}
              <Button type={"submit"}>
                {"Subscribe to monthly newsletter"}
              </Button>
            </form>
          </div>
        </div>
      )}

      <div
        className={
          "fixed bottom-2 hidden w-full text-center text-xs tracking-wider text-charcoal-grey lg:block lg:text-white"
        }
      >
        <span>{"Challenge by "}</span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          {"Frontend Mentor"}
        </a>
        <span>{". Coded by "}</span>
        <a
          className={"transition-colors hover:text-primary"}
          href={"https://github.com/Myoschen"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          {"Myoschen"}
        </a>
        <span>{"."}</span>
      </div>
    </main>
  );
}

export default App;
