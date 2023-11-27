function ProgressBar ({ value }) {
  const maxValue = 200
  const percentage = (value / maxValue) * 100
  return (
    <div name="progressContainer" className="cardTypeShadow"
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#EDEDED",
        borderRadius: "4px"
      }}
    >
      <div name="progress"
        style={{
          background: "linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)",
          height: "100%",
          width: `${percentage}%`,
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          boxShadow: "1px 0px 3px 0px rgba(150, 150, 150, 0.7)"
        }}
      />
    </div>
  );
};

export default ProgressBar;