import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  handlerSelectionLocation = (city) => {
    this.props.setCity(city);
  }
//Los componentes de clase siempre requieren de render y su contenido siempre debe ir dentro de divs
  render() {
    return (
      <div>
        <LocationList cities = {this.props.cities} 
          onSelectedLocation = {this.handlerSelectionLocation}>
        </LocationList>
      </div>
    )
  }  
}

//esta función nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);