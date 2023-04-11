import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.data.map((data) => data.value);
  const totalMaximum = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
