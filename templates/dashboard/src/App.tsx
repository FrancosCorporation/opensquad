import { lazy, Suspense } from "react";
import { useSquadSocket } from "@/hooks/useSquadSocket";
import { SquadSelector } from "@/components/SquadSelector";
import { StatusBar } from "@/components/StatusBar";
import { useSquadStore } from "@/store/useSquadStore";

const OfficeScene = lazy(() =>
  import("@/office/OfficeScene").then((module) => ({ default: module.OfficeScene }))
);

export function App() {
  useSquadSocket();
  const selectedSquad = useSquadStore((state) => state.selectedSquad);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: 40,
          minHeight: 40,
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-sidebar)",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.5,
        }}
      >
        opensquad Dashboard
      </header>

      {/* Main content */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <SquadSelector />
        {selectedSquad ? (
          <Suspense
            fallback={
              <div role="status" style={sceneMessageStyle}>
                Loading office…
              </div>
            }
          >
            <OfficeScene />
          </Suspense>
        ) : (
          <div style={sceneMessageStyle}>Select a squad to monitor</div>
        )}
      </div>

      {/* Footer */}
      <StatusBar />
    </div>
  );
}

const sceneMessageStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--text-secondary)",
} as const;
