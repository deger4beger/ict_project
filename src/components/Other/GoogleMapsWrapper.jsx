// import React from "react"
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// const mapStyle = {
//   width: '100%',
//   height: '300px'
// }

// const containerStyle = {
//   position: 'relative',
//   display: "block"  
// }

// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14} style={mapStyle}
//         containerStyle={containerStyle}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>

//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCvt6UqOQerhAoNEiQz3OW6GSYNYcbdmyQ")
// })(MapContainer)

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleApiWrapper = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 53.28514410173332, lng: 69.36958005491239 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 53.28514410173332, lng: 69.36958005491239 }} />}
  </GoogleMap>
))

export default GoogleApiWrapper
