import { useMemo, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/entities/user/model/services/login";
import type { AppDispatch } from "@/app/store";
import { Button, Input, Tabs } from "@/shared/ui";
import { selectLoginEmail } from "../../model/selectors/selectLoginEmail/selectLoginEmail";
import { selectLoginPhone } from "../../model/selectors/selectLoginPhone/selectLoginPhone";
import { selectLoginPassword } from "../../model/selectors/selectLoginPassword/selectLoginPassword";
import { selectLoginMethod } from "../../model/selectors/selectLoginMethod/selectLoginMethod";
import { selectLoginError } from "../../model/selectors/selectLoginError/selectLoginError";
import { selectLoginIsLoading } from "../../model/selectors/selectLoginIsLoading/selectLoginIsLoading";
import { loginActions } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";
import { AuthMethod, type AuthMethodType } from "../../lib/config/auth";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector(selectLoginEmail);
  const phone = useSelector(selectLoginPhone);
  const password = useSelector(selectLoginPassword);
  const method = useSelector(selectLoginMethod);
  const error = useSelector(selectLoginError);
  const isLoading = useSelector(selectLoginIsLoading);

  const isSubmitDisabled = useMemo(() => {
    const identifier = method === AuthMethod.EMAIL ? email.trim() : phone.trim();
    return !identifier || !password.trim() || isLoading;
  }, [email, phone, password, method, isLoading]);

  const handleMethodChange = (nextMethod: AuthMethodType) => {
    dispatch(loginActions.setMethod(nextMethod));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload =
      method === AuthMethod.EMAIL
        ? { email: email.trim(), password: password.trim() }
        : { phone: phone.trim(), password: password.trim() };

    void dispatch(login(payload));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Tabs defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL} onClick={() => handleMethodChange(AuthMethod.EMAIL)}>
            Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE} onClick={() => handleMethodChange(AuthMethod.PHONE)}>
            Phone
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input
            type="email"
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(value) => dispatch(loginActions.setEmail(value))}
            className={styles.input}
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <Input
            type="tel"
            label="Phone"
            placeholder="Enter phone"
            value={phone}
            onChange={(value) => dispatch(loginActions.setPhone(value))}
            className={styles.input}
          />
        </Tabs.Content>
      </Tabs>
      <Input
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={(value) => dispatch(loginActions.setPassword(value))}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button type="submit" className={styles.button} size="md" disabled={isSubmitDisabled}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};
