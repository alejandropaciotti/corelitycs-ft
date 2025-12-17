import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    agents: {
      strands_agent: {
        id: "strands_agent",
        name: "strands_agent",
      },
    },
  });
};
