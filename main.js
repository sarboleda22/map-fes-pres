mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYm9sZWRhMjIiLCJhIjoiY2pkdWg3YXBzMWV0eDJ4bnlzeHk1bTA0ZCJ9.jFNUbOyVXti1PiWFL9LKag';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sarboleda22/cjfe931z18sn02ssyjlq4b2d4',
    center: [-96.1476785, 40.2744218],
    maxZoom: 19,
    minZoom: 1,
    zoom: 3
});

var title = document.getElementById('location-title');
var subtitle = document.getElementById('location-subtitle');
var description = document.getElementById('location-description');
var logo = document.getElementById('company-logo');
var picture = document.getElementById('location-picture');
var address = document.getElementById('location-address');

var locations = [{
    "title": "",
    "description": "",
    "picture": "",
    "logo": "",
    "camera": {
        center: [-96.1476785, 40.2744218],
        zoom: 4.15,
        bearing: 0,
        pitch: 0,
    }
}, {
    "id": "2",
    "title": "zColo 60 Hudson Data Center",
    "address": "60 Hudson St, New York, NY 10013",
    "subtitle": "LED Lighting Upgrade",
    "description": "At zColo’s landmark four floor data center at 60 Hudson, Fairbanks Energy completed a retrofit of their existing lighting with new efficient LED lighting with advanced controls. A majority of the fixtures now have wireless networking capabilities to allow for granular high and low trim light levels, occupancy and daylight harvesting capabilities. <br><br><b> TOTAL INCENTIVE: $28,000 <br> <br> TOTAL ANNUAL kWh SAVINGS: 216,800 kWh <br><br> PROJECT PAYBACK: > 2 years </b>  <br> <br> <p style='font-size:19px;color:#337d49;'> <b>TOTAL ANNUAL SAVINGS: $40,000 </b></p>",
    "picture": "img/zcolo1.jpg",
    "logo": "img/logos/zcolo.png",
    "camera": {
        center: [-74.0104881, 40.7177228],
        zoom: 18.21,
        pitch: 50,
        speed: 0.38,
    }
}, {
    "id": "3",
    "title": "Vertex Pharmaceuticals",
    "address": "50 Northern Ave, Boston, MA 02210",
    "subtitle": "LED Lighting and Lighting Controls Upgrade",
    "description": "Fairbanks Energy has completed a series of energy efficiency initiatives at the corporate headquarters of Vertex Pharmaceuticals Incorporated. The efficiency project involved the engineering and implementation of numerous LED lighting and advanced controls retrofits through a variety of buildings on the Vertex campus, including mechanical rooms, labs, the lobby, and other public spaces.<br> <br> <b> TOTAL INCENTIVE: $800,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 2,700,000 kWh <br><br> PROJECT PAYBACK: 2 years </b> <br> <br> <p style='font-size:19px;color:#337d49;'> <b> TOTAL ANNUAL SAVINGS: $435,000 </b> </p>",
    "picture": "img/2.jpg",
    "logo": "img/logos/vertex.png",
    "camera": {
        center: [-71.0483887, 42.3534302],
        bearing: -15.9,
        zoom: 17.68,
        speed: 0.38,
    }
}, {
    "id": "15",
    "title": "111 8th Avenue Multi-Tenant Colocation Facility",
    "address": "111 8th Ave, New York, NY 10011",
    "subtitle": "Mechanical Systems Upgrade",
    "description": "Inside 111 8th Avenue’s landmark multitenant colocation facilityFairbanks Energy has worked with multiple clients on a variety of projects including integration of power equipment like transfer switches, branch circuit monitoring kits, and CRAC/CRAH units, monitoring and control of pumps and condensers/dry-cooler equipment, and airflow best practices in server rows. The combination of these different systems in an intelligent Building Automation System (BMS) benefits clients by enabling the display of real-time Power Usage Effectiveness metrics and granular monitoring and control over HVAC equipment based upon sensed temperature and humidity. <br> <br> <b>TOTAL INCENTIVE: $248,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 2,000,000 kWh <br><br> PROJECT PAYBACK: 1.45 YEARS</b> <br><br> <p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $167,000</b></p>",
    "picture": "img/3.jpg",
    "logo": "",
    "camera": {
        center: [-74.005576, 40.7414688],
        bearing: 25.3,
        zoom: 15.5,
        speed: 0.38,
    }
}, {
    "id": "1",
    "title": "111 8th Avenue Multi-Tenant Colocation Facility",
    "address": "111 8th Ave, New York, NY 10011",
    "subtitle": "LED Lighting Upgrade",
    "description": "At 111 8th Avenue’s main data center space in New York City, Fairbanks Energy retrofitted a tenant’s existing fluorescent fixtures to new LED drivers and lamps with occupancy sensors. In the mechanical and NOC spaces, Fairbanks Energy installed new LED fixtures with integrated occupancy and daylight sensors. As a result, annual electrical consumption at the data center has reduced annually by 136,000 kWh. <br> <br> <b>TOTAL INCENTIVE: $5,400 <br><br> TOTAL ANNUAL kWh SAVINGS: 136,000 kWh <br><br> PROJECT PAYBACK: 1.2 YEARS</b> <br><br> <p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $23,000</b></p>",
    "picture": "img/3.jpg",
    "logo": "",
    "camera": {
        center: [-74.005576, 40.7414688],
        bearing: 25.3,
        zoom: 15.5,
        speed: 0.38,
    }
}, {
    "id": "5",
    "title": "Massachusetts General Hospital",
    "address": "55 Fruit St, Boston, MA 02114",
    "subtitle": "Comprehensive Upgrades", 
    "description": "Since 2014, Fairbanks Energy has contracted with Massachusetts General Hospital under their Strategic Energy Master Plan. The energy plan mandates energy conservation projects that improve the conditions of their patients, staff and the environment. Fairbanks Energy has completed more than 30 energy efficiency projects at MGH at a variety of the hospital’s buildings on its main campus, in addition to other efficiency enhancements in its facilities throughout Boston. <br><br> <b>TOTAL INCENTIVE: $1,600,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 7,000,000 kWh </b> <br><br> <p style='font-size:18px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS: $1,250,000</b></p> ",
    "picture": "img/5.jpg",
    "logo": "img/logos/mgh.jpg",
    "camera": {
        center: [-71.0710221, 42.3631542],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "4",
    "title": "Edward-Elmhurst Health",
    "address": "1804 N Naper Blvd, Naperville, IL 60563",
    "subtitle": "LED Lighting Upgrade",
    "description": "Fairbanks Energy Services completed a series of energy efficiency upgrades at Edward-Elmhurst Health, resulting in total annual savings of $1.9 million. A turn-key solution, the project replaced or retrofitted more than 38,000 inefficient halogen, incandescent, fluorescent and metal halide fixtures with modern LEDs. A variety of indoor spaces were improved through the initiative, including: common areas, nurse stations, cafeterias, offices, mechanical rooms, conference rooms, fitness centers and parking areas. <br> <br> <b> TOTAL INCENTIVE: $343,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 15,000,000 kWh <br><br> PROJECT PAYBACK: 2.6 Years </b> <br><br> <p style='font-size:17px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS: $2,000,000</b></p>",
    "picture": "img/4.jpg",
    "logo": "img/logos/edward.png",
    "camera": {
        center: [-88.1216413, 41.8030472],
        bearing: 20,
        zoom: 15.37,
        speed: 0.38,
    }
}, {
    "id": "6",
    "title": "zColo Atlanta Data Center",
    "address": "1100 White Street, Atlanta, GA",
    "subtitle": "Raised Floor Airflow Management", 
    "description": "Fairbanks Energy installed a number of airflow improvements in the 50,000 square foot raised floor side of the data center. In addition, the BMS was modified to control the airflow to match the heatload of the room, with units in “hot standby” waiting to turn back on in the event of a thermal emergency. <br><br><b>BENEFITS <br>7 CRACS Shut Off, Allowing:<br> - 40% of Reclaimed HVAC Energy <br> - 150 tons of Mechanical CRAC Capacity</b> <br><br><br> <p style='font-size:18px;color:#337d49;'><b>SAVINGS: 1,367,500 kWh</b></p> ",
    "picture": "img/6.jpg",
    "logo": "img/logos/zcolo.png",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "11",
    "title": "zColo Atlanta Data Center",
    "address": "1100 White Street, Atlanta, GA",
    "subtitle": "Slab Floor Airflow Management", 
    "description": "Fairbanks Energy installed a duct system to combine CRAC units into 7 zones, installed cold aisle doors at the ends of aisles, and blanking panels. FES modified the BMS to turn off at least 9 units, which remain in “hot standby” waiting to turn back on in the event of a thermal emergency. <br> <br> <br> <b>BENEFITS: <br> 9 CRACs Shut Off, Allowing: <br> - 51.6% of HVAC Energy Reclaimed <br> - 230 Tons of reclaimed Mechanical CRAC Capacity <br> - Minimum N+1 redundancy in each of the 7 zones.</b> <br><br><br><p style='font-size:19px;color:#337d49;'><b>SAVINGS: 1,880,300 kWh</b></p>",
    "picture": "img/6-1.jpg",
    "logo": "img/logos/zcolo.png",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "12",
    "title": "zColo Atlanta Data Center",
    "address": "1100 White Street, Atlanta, GA",
    "subtitle": "Mechanical Systems Upgrade", 
    "description": "Fairbanks Energy modified zColo’s Atlanta data center by converting a one loop system to a two loop system. The Cooling Tower Water Loop consisted of 4 cooling towers, and 5 cooling tower pumps. The existing cooling tower fans and CTW pumps were controlled by variable frequency drives (VFDs) and new CW pumps are now controlled by VFDs. This results in efficient operation with two or more pumps in each loop and two or more cooling towers in operation as the pump and fan speeds reduce in speed to maintain system pressure or temperature set points. <br> <br> <p style='font-size:19px;color:#337d49;'><b>SAVINGS: 742,000 kWh</b></p>",
    "picture": "img/6-2.jpg",
    "logo": "img/logos/zcolo.png",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "14",
    "title": "Hotel 140",
    "address": "140 Clarendon St, Boston, MA 02116",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Similarly, Fairbanks Energy completed a LED lighting and lighting controls upgrade throughout Hotel 140’s basement, elevator lobbies, hallways and kitchenette/lounge, saving the customer $19,000 annually. <br> <br> <b>TOTAL INCENTIVE $20,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 117,000 kWh <br><br> PROJECT PAYBACK 3 YEARS<br><br><p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $19,000</b></p>",
    "picture": "img/7.jpg",
    "logo": "img/logos/hotel140.jpg",
    "camera": {
        center: [-71.0766487, 42.3486305],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "7",
    "title": "Hotel 140",
    "address": "140 Clarendon St, Boston, MA 02116",
    "subtitle": "Steam System Upgrades", 
    "description": "Fairbanks Energy Services completed a steam system upgrade at Hotel 140 consisting of several improvements including valve replacements and a wholesale replacement of all steam traps with more efficient venture nozzle units. The net result was savings of over $20,000 per year, resulting in a less than 2.5 year payback. <br> <br> <b> TOTAL PROJECT COST: $50,000 <br><br> PROJECT PAYBACK: 2.5 YEARS</b> <br><br> <p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS $20,000</b></p>",
    "picture": "img/14.jpg",
    "logo": "img/logos/hotel140.jpg",
    "camera": {
        center: [-71.0766487, 42.3486305],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "8",
    "title": "Trinity Health of New England",
    "address": "114 Woodland St, Hartford, CT 06105",
    "subtitle": "Mechanical Upgrades", 
    "description": "Trinity Health of New England contracted with Fairbanks Energy Services to develop and implement different mechanical efficiency solutions at three of its hospitals - St Francis Hospital and Mt Sinai Hospital in Hartford CT and Johnson Memorial Medical Center in Stafford Springs CT. The total cost of the efficiency solutions is approximately $6 million with annual gas and oil savings of over 260,000 therms. FES accessed the Connecticut Energy Efficiency Fund through Eversource and CNG for over $3,250,000 of incentives. <br><br> <b>TOTAL INCENTIVE: $2,000,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 5,700,000 kWh </b><br><br><p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $980,000</b></p>",
    "picture": "img/8.jpg",
    "logo": "img/logos/trinity.png",
    "camera": {
        center: [-72.7006005, 41.7749634],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "13",
    "title": "Trinity Health of New England",
    "address": "114 Woodland St, Hartford, CT 06105",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Fairbanks Energy Services also completed lighting and lighting controls efficiency solutions at three of Trinity Health of New England hospitals, with annual electricity savings of over 8 million kWh.<br><br> <b> TOTAL INCENTIVE: $2,900,000 <br><br> TOTAL ANNUAL kWh SAVINGS: 8,000,000 kWh</b><br><br><p style='font-size:19px;color:#337d49'><b>TOTAL ANNUAL SAVINGS: $1,400,000</b></p>",
    "picture": "img/13.jpg",
    "logo": "img/logos/trinity.png",
    "camera": {
        center: [-72.7006005, 41.7749634],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "9",
    "title": "Providence College",
    "address": "1 Cunningham Square, Providence, RI 02918",
    "subtitle": "LED Lighting Upgrade", 
    "description": "Fairbanks Energy completed an LED lighting and lighting controls upgrade at Providence College Phillips Memorial Library.  Fairbanks Energy retrofitted a total of 2,956 fixtures, saving Providence College $179,000 annually. <br> <br> <b> TOTAL INCENTIVE $477,000 <br><br> TOTAL ANNUAL kWh SAVINGS 2.2 million kWh <br><br> PROJECT PAYBACK 2 years </b> <br><br> <p style='font-size:19px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS $179,000 </p>",
    "picture": "img/9.jpg",
    "logo": "img/logos/providence.jpg",
    "camera": {
        center: [-71.4401479, 41.8440829],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "id": "10",
    "title": "zColo Hillcrest Data Center",
    "address": "6606 LBJ Freeway Dallas, Texas",
    "subtitle": "Data Center Airflow Management Project", 
    "description": "At zColo’s 14,000 square feet Dallas data center, Fairbanks Energy implemented an airflow management upgrade providing adequate cooling to the racks of the equipment while allowing for units to be turned off or in hot stand-by. The project saves zColo $68,000 each year in electricity costs. <br> <br> <b> TOTAL ANNUAL kWh SAVINGS: 970,000 kWh <br><br> PROJECT PAYBACK: 1.4 years </b> <br><br> <p style='font-size:19px;color:#337d49;'> <b> TOTAL ANNUAL SAVINGS: $68,000 </b> </p>",
    "picture": "img/10.jpeg",
    "logo": "img/logos/zcolo.png",
    "camera": {
        center: [-96.7935828, 32.9230277],
        bearing: 28.4,
        zoom: 16.64,
        speed: 0.38,
    }
}, {
    "title": "",
    "description": "",
    "picture": "img/logo.png",
    "camera": {
        center: [-96.1476785, 40.2744218],
        zoom: 3,
        bearing: 0,
        pitch: 0
    }
}];

function highlightBorough(code) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    map.setFilter('highlight', ["==", "borocode", code]);
}

function playback(index) {
    title.textContent = locations[index].title;
    subtitle.textContent = locations[index].subtitle;
    description.innerHTML = locations[index].description;
    address.textContent = locations[index].address;
    picture.setAttribute("src", locations[index].picture);
    logo.setAttribute("src", locations[index].logo);

    // Animate the map position based on camera properties
    map.flyTo(locations[index].camera);

    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
            // Increment index
            index = (index + 1 === locations.length) ? 0 : index + 1;
            playback(index);
        }, 15000); // After callback, show the location for 3 seconds.
    });
}
// Display the last title/description first
title.textContent = locations[locations.length - 1].title;
address.textContent = locations[locations.length -1].address
subtitle.textContent = locations[locations.length - 1].subtitle;
description.innerHTML = locations[locations.length - 1].description;

map.on('load', function() {

    map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": {
            "type": "vector",
            "url": "mapbox://mapbox.8ibmsn6u"
        },
        "source-layer": "original",
        "paint": {
            "fill-color": "#fd6b50",
            "fill-opacity": 0.25
        },
        "filter": ["==", "borocode", ""]
    }, 'neighborhood_small_label'); // Place polygon under the neighborhood labels.

    // Start the playback animation for each borough
    playback(0);
});


// Markers of the FES Locations
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-70.9063307, 42.179856]
    },
    properties: {
      title: 'Mapbox',
      description: 'MA'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-72.6770809, 41.7663459]
    },
    properties: {
      title: 'Mapbox',
      description: 'CT'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9757727, 40.7509091]
    },
    properties: {
      title: 'Mapbox',
      description: 'NYC'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-88.0949075, 42.0606854]
    },
    properties: {
      title: 'Mapbox',
      description: 'IL'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-105.0011815, 39.7499842]
    },
    properties: {
      title: 'Mapbox',
      description: 'CO'
    }
  },
]};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});