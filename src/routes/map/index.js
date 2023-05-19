import { h } from 'preact'
import { useEffect, useState, useRef } from 'preact/hooks'

import { Elem, Event } from '../../utilities/global'

import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

// set initial location
const MaineLonLat = [-70.4428, 43.5009]
let CoordWebMercator = fromLonLat(MaineLonLat)

const MapPage = () => {
  const mapContainer = useRef(null)
  const lonW = useRef(null)
  const lonE = useRef(null)
  const latN = useRef(null)
  const latS = useRef(null)

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

  function lonWChange() {
    lonE.current.checked = false
  }

  function lonEChange() {
    lonW.current.checked = false
  }

  function latNChange() {
    latS.current.checked = false
  }

  function latSChange() {
    latN.current.checked = false
  }

  return (
    <div
      ref={mapContainer}
      style={{ width: '100%', height: 'calc(100vh - 3.5rem)' }}>
      <div className='coord-box'>
        <label style='padding: 4px'>
          Longitude
          <br />
          <input id='lonInput' type='text' />
        </label>
        <input ref={lonW} onClick={lonWChange} type='checkbox' checked>
          W
        </input>
        <input ref={lonE} onclick={lonEChange} type='checkbox'>
          E
        </input>
        <br />
        <label style='padding: 4px'>
          Latitude
          <br />
          <input id='latInput' type='text' />
        </label>
        <input ref={latN} onclick={latNChange} type='checkbox' checked>
          N
        </input>
        <input ref={latS} onclick={latSChange} type='checkbox'>
          S
        </input>
      </div>
    </div>
  )
}

export default MapPage
