import { h } from 'preact'
import { useEffect, useState, useRef } from 'preact/hooks'

import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'



// set initial location
const MaineLonLat = [-70.4428, 43.5009]
let CoordWebMercator = fromLonLat(MaineLonLat)


const MapPage = () => {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new Map({
      target: mapContainer.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: CoordWebMercator,
        zoom: 2,
      }),
    })

    return () => {
      map.setTarget(null)
    }
  }, [])

  return (
    <div ref={mapContainer} style={{ width: '100%', height: 'calc(100vh - 3.5rem)' }} />
  )
}

export default MapPage
