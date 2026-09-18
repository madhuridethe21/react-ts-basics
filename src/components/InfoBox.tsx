import type { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxprops = HintBoxProps | WarningBoxProps;
export default function InfoBox(props: InfoBoxprops) {
  //Modes: Info , Warning
   const { children, mode } = props;
  if ( mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const {severity} = props;
  return(
    <aside className={`infobox warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
