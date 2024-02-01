import { Icon, divIcon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import SCOOTER from "./assets/kick-scooter.png"
// import HeatmapLayer from "../HeatmapLayer"
import MarkerClusterGroup from "react-leaflet-cluster";
// import HeatmapLayer from "react-leaflet-heatmap-layer"
// import { addressPoints } from "./util/realworld.10000"

const App = () => {

  const bounds = [[100, 0],[0, 100]]
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];


  const scooterIcon = new Icon({
    iconUrl: SCOOTER,
    iconSize: [38, 38]
  })

  const createCustomeClusterIcon = (cluter) => {
    return new divIcon({
      html: `<div> ${cluter.getChildCount()} </div>`
    })
  }

  const act = "BmCLZLTEBJ9WdQ7Hg5ePKTp2f03G7Zy1YvVp4V94jJoRX9lql9Ek1i13Jhc2EsyE"
  const url = `https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${act}`
  return (
    <>
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ width: "100vw", height: "100vh" }} >
      {/* <HeatmapLayer
          points={geojson.features}
          longitudeExtractor={(m) => m.geometry.coordinates[0]}
          latitudeExtractor={(m) => m.geometry.coordinates[1]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
          max={100}
          minOpacity={0.4}
        /> */}

       
        <TileLayer
          url={url}
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomeClusterIcon}
        >
          {
            markers.map((marker) => {
              return (
                <Marker position={marker.geocode} icon={scooterIcon} >
                  <Popup>
                    <h2> {marker.popUp} </h2>
                  </Popup>
                </Marker>
              )
            })
          }
        </MarkerClusterGroup>

      </MapContainer>
    </>
  )
}

export default App