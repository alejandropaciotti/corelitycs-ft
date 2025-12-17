"use client";

import { CopilotChat } from "@copilotkit/react-ui";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const createConversation = async () => {
      // Check if thread_id already exists in URL
      const threadId = searchParams.get("thread_id");
      if (threadId) {
        return; // Conversation already exists
      }

      try {
        const response = await fetch("/api/conversations", {
          method: "POST",
        });

        if (!response.ok) {
          console.error("Failed to create conversation");
          return;
        }

        const data = await response.json();
        const conversationId = data.id;

        if (conversationId) {
          // Update URL with thread_id as query parameter
          router.replace(`/?thread_id=${conversationId}`);
        }
      } catch (error) {
        console.error("Error creating conversation:", error);
      }
    };

    createConversation();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl">
        <CopilotChat />
      </main>
    </div>
  );
}
