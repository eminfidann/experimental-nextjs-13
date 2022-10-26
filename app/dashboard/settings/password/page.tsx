"use client";
import { useRouter } from "next/navigation";

export default function Password() {
  const router = useRouter();

  return (
    <>
      <h1>Hey, it's password page!</h1>
      <button
        type="button"
        onClick={() => router.push("/dashboard/settings/password/change")}
      >
        Change Password
      </button>
    </>
  );
}
