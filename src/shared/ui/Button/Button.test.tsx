import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("calls onClick", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>test</Button>);
    fireEvent.click(screen.getByText("test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies disabled", () => {
    render(<Button disabled>Test Disabled</Button>);
    expect(screen.getByText("Test Disabled")).toBeDisabled();
  });
});
