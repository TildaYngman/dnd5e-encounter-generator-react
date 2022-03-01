import { render } from "@testing-library/react";
import React from "react";
import PlayerSummary from "./PlayerSummary";

test("Player summary populated", () => {
    const { getByText } = render(<PlayerSummary />);
    const p = getByText(/25XP/)
    expect(p).toHaveTextContent(
        "25XP"
    );
});