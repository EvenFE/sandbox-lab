"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("client 컴포넌트");
  return (
    <div>
      {children}
      클라이언트 컴포넌트
    </div>
  );
}
