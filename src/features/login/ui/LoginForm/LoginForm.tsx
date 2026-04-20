import { Button, Input, Tabs } from "@/shared/ui";
import styles from "./LoginForm.module.scss";
import { AuthMethod } from "@/shared/config";

export const LoginForm = () => {
  return (
    <form>
      <Tabs defaultValue={AuthMethod.EMAIL}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>Email</Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>Phone</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <label>Email</label>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <label>Phone</label>
          <input
            type="tel"
            className={styles.input}
            placeholder="Enter phone"
          />
        </Tabs.Content>
      </Tabs>
      <Input
        type="password"
        placeholder="Enter password"
        className={styles.input}
      />
      <Button type="submit" className={styles.button} size="md">
        Login
      </Button>
    </form>
  );
};
