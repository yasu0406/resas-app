import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPrefectures } from '../../../redux/prefectures/action';
import { fetchPopulation } from '../../../redux/population/action';
import { PrefCardList } from '../../organisms/index';

const Home = (props) => {
  useEffect(() => {
    props.fetchPrefectures();
    props.fetchPopulation();
  },[]);
  return (
    <>
      <PrefCardList prefectures={props.prefectures && props.prefectures.result} population={props.population && props.population} />
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        prefectures: state.prefectures.prefectures,
        population: state.population.population
    }
}

export default connect(
    mapStateToProps,
    {
        fetchPrefectures,
        fetchPopulation
    }
)(Home);
