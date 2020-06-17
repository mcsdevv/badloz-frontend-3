import dynamic from "next/dynamic";
const Bodies = dynamic(() =>
    import("public/svg/illustrations/bodies/Bodies1")
);

export default function HeaderLanding() {
  return (
    <div className="background index">
      <div className="object one cloud" />
      <div className="object two body">
          <Bodies/>
      </div>
      <div className="object three cloud" />
      <div className="object four cloud" />
      <div className="object five cloud" />
    </div>
  );
}
