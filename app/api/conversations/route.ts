import { NextRequest, NextResponse } from "next/server";

const JWT_TOKEN =
  "eyJraWQiOiJLZnlBRTRnbDBITTl4K09cL1wvaUoyeEFLczNraklPQzNra1Y5V3lBdWJRdGc9IiwiYWxnIjoiUlMyNTYifQ.eyJjdXN0b206Y291bnRyeSI6Ik1FWCIsInN1YiI6ImU0ZjhlNDg4LTEwNTEtNzA2My1kODZmLTFjYjI4ZTRiMGZmZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV84SVlobGozWlUiLCJjdXN0b206dXNlcl9pZCI6IkhqdEF2NUVVUHRUNzBrIiwiY29nbml0bzp1c2VybmFtZSI6IkNMSS0xNzU2OTIyMDA3IiwiY3VzdG9tOnNlcnZpY2VfY2VudGVyIjoidzdEeDN4SU5xZm40R1oiLCJvcmlnaW5fanRpIjoiMjhmYmI3NGUtYmVlMC00ODQwLThmMDAtMjNhM2EwNGQzYTU1IiwiYXVkIjoiNWVwdDNqcWltZXA5MXJmM2pmcmw2bXRhODQiLCJpZGVudGl0aWVzIjpbeyJkYXRlQ3JlYXRlZCI6IjE3NjI4NzUwMDM3MjMiLCJ1c2VySWQiOiIxMTM1MzA4NjIxOTcwMTU5NDIwNTUiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJmYWxzZSJ9XSwiZXZlbnRfaWQiOiJmM2I3NWM2Mi0wMjIxLTQxZDEtOTY2MC02Y2IyODFmZDIxMTMiLCJjdXN0b206bGFuZ3VhZ2UiOiJFUyIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOmN1cnJlbmN5IjoiVVNEIiwiYXV0aF90aW1lIjoxNzYzNjc3Mzk5LCJuYW1lIjoiSnVseS5NZXhhIHRlc3QiLCJjdXN0b206ZW50ZXJwcmlzZSI6Imx6ZHdjOHF2bzduYWhYIiwiZXhwIjoxNzYzNzYzNzk5LCJjdXN0b206dXNlcl90eXBlIjoiU1VCU0NSSUJFUiIsImlhdCI6MTc2MzY3NzM5OSwianRpIjoiNGEzNmZlOTktOTI5My00OGQ2LWIzOWEtNmEwNmY0ZGM3ZWEyIiwiZW1haWwiOiJqdWxpYW4rMzBAY2x1Ymh1Yi5haSJ9.uYyWUzDBK3pxNm5zqUe4cAlBE0XGC13MOpp_QQd7ozX6S87UY2Y7mrHIRrdhNGT-9zxF6sMj4-JDzAI3TKhT_ASvAsxnYlSK_aLLxANgrg5wOyzha2AsWi_2-i_VnS3dOl6TPJsmwPnt3lzciSckF_fJAnjxuowKQFWLf9SrUbyhXC4Q8bPR-Vf8wzxI_YEUUhvRlTvwFdht9ai6q8SaeeD2D4f0WbEq3SXbKVWUpCiCYIq13QvpDcNC3Zkhu0gheRo29FIfulUme7ZAUIQUTxMNOAy5pWkb2RUaiBcwaptPHh-ayHa8G75pMYrvlIydl-bveQ__4jC3zrGQoFSG2Q";

export const POST = async (req: NextRequest) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/conversations", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error creating conversation:", errorText);
      return NextResponse.json(
        { error: "Failed to create conversation" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling conversations API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
