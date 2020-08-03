import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";
import { fetchPopulation } from '../../../redux/population/action';

const CreateChart = (props) => {
  const [populationData, setPopulationData] = useState();
  const onPopulation = () => {
  const newPopulation = [];
    if(props.population) {
      Object.values(props.population.data).map(t => {
        newPopulation.push({
          "年":`${t.year}年`,
          "人口": t.value,
        })
      })
      setPopulationData(newPopulation);
    }
  }
  useEffect(() => {
    props.fetchPopulation(props.pref);
    onPopulation();
  },[props.pref]);
  if(!props.population) return null;
  return (
    <>
    <LineChart
        width={700}
        height={500}
        data={populationData}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="年" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Legend />
        <Line type="monotone" dataKey="人口" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      population: state.population.population
  }
}

export default connect(
  mapStateToProps,
  {
      fetchPopulation
  }
)(CreateChart);

