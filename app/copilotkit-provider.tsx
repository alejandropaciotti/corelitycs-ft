"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { useSearchParams } from "next/navigation";

export function CopilotKitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const threadId = searchParams.get("thread_id");

  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      agent="strands_agent"
      threadId={threadId || undefined}
    >
      {children}
    </CopilotKit>
  );
}
