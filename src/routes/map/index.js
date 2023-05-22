import { h } from 'preact'
import { useEffect, useState, useRef } from 'preact/hooks'

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat, transform } from 'ol/proj'

// set initial location
const MaineLonLat = [-70.4428, 43.5009]
let CoordWebMercator = fromLonLat(MaineLonLat)

const MapPage = () => {
  const coordBox = useRef(null)
  const lonInput = useRef(null)
  const latInput = useRef(null)
  const westSliderRef = useRef(null)
  const northSliderRef = useRef(null)


  const [isWestChecked, setIsWestChecked] = useState(true)
  const [isNorthChecked, setIsNorthChecked] = useState(true)

  const mapContainerRef = useRef(null)
  const coordButtonRef = useRef(null)

  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: mapContainerRef.current,
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

    // Event handler for 'moveend'
    const handleMoveEnd = () => {
      const view = map.getView()
      const center = view.getCenter()
      let lonLat = transform(center, 'EPSG:3857', 'EPSG:4326')
      let newLon = lonLat[0]
      let newLat = lonLat[1]

      // Wrap longitude within the range -180 to 180
      function wrapLongitude(lonLatValue) {
        return ((((lonLatValue + 180) % 360) + 360) % 360) - 180
      }

      // Handle the 'moveend' event here
      if (wrapLongitude(newLon) < 0) {
        setIsWestChecked(true)
        lonInput.current.value = Math.abs(wrapLongitude(newLon))
      } else {
        setIsWestChecked(false)
        lonInput.current.value = Math.abs(wrapLongitude(newLon))
      }

      if (wrapLongitude(newLat) < 0) {
        setIsNorthChecked(false)
        latInput.current.value = Math.abs(wrapLongitude(newLat))
      } else {
        setIsNorthChecked(true)
        latInput.current.value = Math.abs(wrapLongitude(newLat))
      }
    }

    map.on('moveend', handleMoveEnd)

    coordButtonRef.current.addEventListener('click', setNewMapCenterCoord)

    function setNewMapCenterCoord() {
      const lon = lonInput.current.value
      const lat = latInput.current.value 
      // BUG: Unknown why 'sliderPos' can't be turned into a Boolean
      // without losing the ability to update upon toggle. Explicit
      // check for string required at this time.
      let westSliderPos = westSliderRef.current.dataset.iswest
      let northSliderPos = northSliderRef.current.dataset.isnorth

      let lonRose
      let latRose

      if (westSliderPos === 'true') {
        lonRose = '-'
      } else if (westSliderPos === 'false') {
        lonRose = ''
      }

      if (northSliderPos === 'true') {
        latRose = ''
      } else if (northSliderPos === 'false') {
        latRose = '-'
      }

      let newCoords = [`${lonRose}${lon}`, `${latRose}${lat}`]
      CoordWebMercator = fromLonLat(newCoords)
      setNewMap(CoordWebMercator)
    }

    function setNewMap(CoordWebMercator) {
      map.getView().setCenter(CoordWebMercator)
      map.render()
    }

    // Cleanup function to remove the event listener and map
    return () => {
      map.un('moveend', handleMoveEnd)
      map.setTarget(null)
    }
  }, [])

  let coordBoxStyle = {
    height: 250,
    width: 440,
    backgroundColor: '#252832',
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderRadius: 30,
    zIndex: 10,
    padding: 30,
    fontSize: 18,
    outline: '10px solid rgb(88 147 229)',
  }

  let coordButtonStyle = {
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: '50%',
    bottom: 20,
    height: 50,
    fontSize: 18,
    borderRadius: 34
  }

  return (
    <>
      <div className='coord-box' style={coordBoxStyle} ref={coordBox}>
        <label style='padding: 4px; font-size: 24px;'>
          Longitude
          <br />
          <input style='height: 34px' ref={lonInput} type='text' />
        </label>
        <span
          style={{
            fontSize: '32px',
            width: '30px',
            display: 'inline-block',
            paddingLeft: '20px',
            position: 'relative',
            top: 5,
          }}>
          {isWestChecked ? 'W' : 'E'}
        </span>
        <div
          className='outer-container'
          onMouseUp={() => setIsWestChecked(!isWestChecked)}>
          <div
            className={`slider-lon ${!isWestChecked}`}
            data-iswest={isWestChecked}
            ref={westSliderRef}
          />
        </div>

        <br />
        <br />

        <label style='padding: 4px; font-size: 24px;'>
          Latitude
          <br />
          <input style='height: 34px' ref={latInput} type='text' />
        </label>
        <span
          style={{
            fontSize: '32px',
            width: '30px',
            display: 'inline-block',
            paddingLeft: '20px',
            position: 'relative',
            top: 6,
          }}>
          {isNorthChecked ? 'N' : 'S'}
        </span>
        <div
          className='outer-container'
          onMouseUp={() => setIsNorthChecked(!isNorthChecked)}>
          <div
            className={`slider-lat ${!isNorthChecked}`}
            data-isnorth={isNorthChecked}
            ref={northSliderRef}
          />
        </div>
        <button className='coord-button' style={coordButtonStyle} ref={coordButtonRef}>
          Set New Coordinates
        </button>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: 'calc(100vh - 3.5rem)' }}
      />
    </>
  )
}

export default MapPage
