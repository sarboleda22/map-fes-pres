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
var picture = document.getElementById('location-picture');

var locations = [{
    "title": "",
    "description": "",
    "picture": "img/logo.png",
    "camera": {
        center: [-96.1476785, 40.2744218],
        zoom: 4.35,
        bearing: 0,
        pitch: 0
    }
}, {
    "id": "2",
    "title": "zColo 60 Hudson Data Center",
    "subtitle": "LED Lighting Upgrade",
    "description": "At zColo’s landmark four floor data center at 60 Hudson, Fairbanks Energy completed a retrofit of their existing lighting with new efficient LED lighting with advanced controls. A majority of the fixtures now have wireless networking capabilities to allow for granular high and low trim light levels, occupancy and daylight harvesting capabilities. <br> <br> <br><br><b> TOTAL INCENTIVE: $28,000 <br> TOTAL ANNUAL kWh SAVED: 216,800 kWh <br> PROJECT PAYBACK: > 2 years </b>  <br> <br> <p style='font-size:19px;color:#337d49;'> <b>TOTAL ANNUAL SAVINGS: $40,000 </b></p>",
    "picture": "img/zcolo1.jpg",
    "camera": {
        center: [-74.0104881, 40.7177228],
        zoom: 18.21,
        pitch: 50,
    }
}, {
    "id": "3",
    "title": "Vertex Pharmaceuticals",
    "subtitle": "LED Lighting Upgrade",
    "description": "Fairbanks Energy has completed a series of energy efficiency initiatives at the corporate headquarters of Vertex Pharmaceuticals Incorporated. The efficiency project involved the engineering and implementation of numerous LED lighting and advanced controls retrofits through a variety of buildings on the Vertex campus, including mechanical rooms, labs, the lobby, and other public spaces.<br> <br> <b> TOTAL INCENTIVE: $800,000 <br> TOTAL ANNUAL kWh SAVED: 2,700,000 kWh <br> PROJECT PAYBACK: 2 years </b> <br> <br> <p style='font-size:19px;color:#337d49;'> <b> TOTAL ANNUAL SAVINGS: $435,000 </b> </p>",
    "picture": "img/2.jpg",
    "camera": {
        center: [-71.0483887, 42.3534302],
        bearing: -15.9,
        zoom: 17.68
    }
}, {
    "id": "1",
    "title": "111 8th Avenue Multi-Tenant Colocation Facility",
    "subtitle": "LED Lighting Upgrade",
    "description": "At 111 8th Avenue’s main data center space in New York City, Fairbanks Energy retrofitted a tenant’s existing fluorescent fixtures to new LED drivers and lamps with occupancy sensors. In the mechanical and NOC spaces, Fairbanks Energy installed new LED fixtures with integrated occupancy and daylight sensors. As a result, annual electrical consumption at the data center has reduced annually by 136,000 kWh. <br> <br> <b>TOTAL INCENTIVE: $5,400 <br> TOTAL ANNUAL kWh SAVED: 136,000 kWh <br> PROJECT PAYBACK: 1.2 YEARS</b> <br><br> <p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $23,000</b></p>",
    "picture": "img/3.jpg",
    "camera": {
        center: [-74.005576, 40.7414688],
        bearing: 25.3,
        zoom: 15.5
    }
}, {
    "id": "5",
    "title": "Massachusetts General Hospital",
    "subtitle": "Comprehensive Upgrades", 
    "description": "Since 2014, Fairbanks Energy has contracted with Massachusetts General Hospital under their Strategic Energy Master Plan. The energy plan mandates energy conservation projects that improve the conditions of their patients, staff and the environment. Fairbanks Energy has completed more than 30 energy efficiency projects at MGH at a variety of the hospital’s buildings on its main campus, in addition to other efficiency enhancements in its facilities throughout Boston. <br><br> <b>TOTAL INCENTIVE: $1,600,000 <br> TOTAL ANNUAL kWh SAVINGS: 7,000,000 kWh </b> <br><br> <p style='font-size:18px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS: $1,250,000</b></p> ",
    "picture": "img/5.jpg",
    "camera": {
        center: [-71.0710221, 42.3631542],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "6",
    "title": "zColo Atlanta Data Center",
    "subtitle": "Raised Floor Airflow Management", 
    "description": "Fairbanks Energy installed a number of airflow improvements in the 50,000 square foot raised floor side of the data center. In addition, the BMS was modified to control the airflow to match the heatload of the room, with units in “hot standby” waiting to turn back on in the event of a thermal emergency. <br><br> <b>SAVINGS: 1,367,500 kWh</b> <br><br>  <p style='font-size:19px;color:#337d49;'><b>BENEFITS<ul> <li>7 CRACS Shut Off:<ul><li>40% of the HVAC Energy Reclaimed</li><li>150 tons of Reclaimed Mechanical CRAC Capacity Allowed</li></ul></li></ul></b></p> ",
    "picture": "img/6.jpg",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "4",
    "title": "Edward-Elmhurst Health",
    "subtitle": "LED Lighting Upgrade",
    "description": "Fairbanks Energy Services completed a series of energy efficiency upgrades at Edward-Elmhurst Health, resulting in total annual savings of $1.9 million. A turn-key solution, the project replaced or retrofitted more than 38,000 inefficient halogen, incandescent, fluorescent and metal halide fixtures with modern LEDs. A variety of indoor spaces were improved through the initiative, including: common areas, nurse stations, cafeterias, offices, mechanical rooms, conference rooms, fitness centers and parking areas. <br> <br> <b> TOTAL INCENTIVE: $343,000 <br> TOTAL ANNUAL kWh SAVINGS: 15,000,000 kWh <br> PROJECT PAYBACK: 2.6 Years </b> <br><br> <p style='font-size:19px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS: $2,000,000</b></p>",
    "picture": "img/4.jpg",
    "camera": {
        center: [-88.1216413, 41.8030472],
        bearing: 20,
        zoom: 15.37,
    }
}, {
    "id": "11",
    "title": "zColo Atlanta Data Center",
    "subtitle": "Slab Floor Airflow Management", 
    "description": "Fairbanks Energy installed a duct system to combine CRAC units into 7 zones, installed cold aisle doors at the ends of aisles, and blanking panels. FES modified the BMS to turn off at least 9 units, which remain in “hot standby” waiting to turn back on in the event of a thermal emergency. <br> <br> <b>SAVINGS: 1,880,300 kWh</b> <br> <br> <p style='font-size:19px;color:#337d49;'><b>BENEFITS <ul> <li> 9 CRACs were shut off (in controlled stand-by):</li> <ul><li>51.6% of HVAC Energy Reclaimed</li> <li>230 Tons of reclaimed Mechanical CRAC Capacity </li> <li>Minimum N+1 redundancy in each of the 7 zones.</li></ul></ul></b></p>",
    "picture": "img/6-1.jpg",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "7",
    "title": "Hotel 140",
    "subtitle": "Steam System Upgrades", 
    "description": "Fairbanks Energy Services completed a steam system upgrade at Hotel 140 consisting of several improvements including valve replacements and a wholesale replacement of all steam traps with more efficient venture nozzle units. The net result was savings of over $20,000 per year, resulting in a less than 2.5 year payback. <br> <br> <b> TOTAL PROJECT COST $50,000 <br> PROJECT PAYBACK 2.5 YEARS</b><br><br> <p style='font-size:19px;color:#337d49;><b>TOTAL ANNUAL SAVINGS $20,000</b></p>",
    "picture": "img/14.jpg",
    "camera": {
        center: [-71.0766487, 42.3486305],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "14",
    "title": "Hotel 140",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Similarly, Fairbanks Energy completed a LED lighting and lighting controls upgrade throughout Hotel 140’s basement, elevator lobbies, hallways and kitchenette/lounge, saving the customer $19,000 annually. <br> <br> <b>TOTAL INCENTIVE $20,000 <br> TOTAL ANNUAL kWh SAVED: 117,000 kWh <br> PROJECT PAYBACK 3 YEARS <br><br></b> <br><br> <p style='font-size:19px;color:#337d49;><b>TOTAL ANNUAL SAVINGS: $19,000</b></p>",
    "picture": "img/7.jpg",
    "camera": {
        center: [-71.0766487, 42.3486305],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "12",
    "title": "zColo Atlanta Data Center",
    "subtitle": "Mechanical Systems Upgrade", 
    "description": "Fairbanks Energy modified zColo’s Atlanta data center by converting a one loop system to a two loop system. The Cooling Tower Water Loop consisted of 4 cooling towers, and 5 cooling tower pumps. The existing cooling tower fans and CTW pumps were controlled by variable frequency drives (VFDs) and new CW pumps are now controlled by VFDs. This results in efficient operation with two or more pumps in each loop and two or more cooling towers in operation as the pump and fan speeds reduce in speed to maintain system pressure or temperature set points. <br> <br> <p style='font-size:19px;color:#337d49;'><b>SAVINGS: 742,000 kWh</b></p>",
    "picture": "img/6-2.jpg",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "8",
    "title": "Trinity Health of New England",
    "subtitle": "Mechanical Upgrades", 
    "description": "Trinity Health of New England contracted with Fairbanks Energy Services to develop and implement different mechanical efficiency solutions at three of its hospitals - St Francis Hospital and Mt Sinai Hospital in Hartford CT and Johnson Memorial Medical Center in Stafford Springs CT. The total cost of the efficiency solutions is approximately $6 million with annual gas and oil savings of over 260,000 therms. FES accessed the Connecticut Energy Efficiency Fund through Eversource and CNG for over $3,250,000 of incentives. <br>  <br> <b>TOTAL INCENTIVE: $2,000,000 <br> TOTAL ANNUAL kWh SAVINGS: 5,700,000 kWh </b><br><p style='font-size:19px;color:#337d49;'><b>TOTAL ANNUAL SAVINGS: $980,000</b></p>",
    "picture": "img/8.jpg",
    "camera": {
        center: [-72.7006005, 41.7749634],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "9",
    "title": "Providence College",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Fairbanks Energy completed an LED lighting and lighting controls upgrade at Providence College Phillips Memorial Library.  Fairbanks Energy retrofitted a total of 2,956 fixtures, saving Providence College $179,000 annually. <br> <br> <b> TOTAL INCENTIVE $477,000 <br> TOTAL ANNUAL kWh SAVED 2.2 million kWh <br> PROJECT PAYBACK 2 years </b> <br><br> <p style='font-size:19px;color:#337d49;'><b> TOTAL ANNUAL SAVINGS $179,000 </p>",
    "picture": "img/9.jpg",
    "camera": {
        center: [-71.4401479, 41.8440829],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "13",
    "title": "Trinity Health of New England",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Fairbanks Energy Services also completed lighting and lighting controls efficiency solutions at three of Trinity Health of NEw England hospitals, with annual electricity savings of over 8 million kWh.<br>  <br> <b> LED Lighting Upgrades <br> TOTAL INCENTIVE: $2,900,000 <br> TOTAL ANNUAL kWh SAVINGS: 8,000,000 kWh</b><br><p style='font-size:19px;color:#337d49'><b>TOTAL ANNUAL SAVINGS: $1,400,000</b></p>",
    "picture": "img/13.jpg",
    "camera": {
        center: [-72.7006005, 41.7749634],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "10",
    "title": "zColo Hillcrest Data Center",
    "subtitle": "Data Center Airflow Management Project", 
    "description": "At zColo’s 14,000 square feet Dallas data center, Fairbanks Energy implemented an airflow management upgrade providing adequate cooling to the racks of the equipment while allowing for units to be turned off or in hot stand-by. The project saves zColo $68,000 each year in electricity costs. <br> <br> <b> TOTAL ANNUAL kWh SAVED: 970,000 kWh <br> PROJECT PAYBACK: 1.4 years </b> <br><br> <p style='font-size:19px;color:#337d49;'> <b> TOTAL ANNUAL SAVINGS: $68,000 </b> </p>",
    "picture": "img/10.jpeg",
    "camera": {
        center: [-96.7935828, 32.9230277],
        bearing: 28.4,
        zoom: 16.64
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
    picture.setAttribute("src", locations[index].picture);

    highlightBorough(locations[index].id ? locations[index].id : '');

    // Animate the map position based on camera properties
    map.flyTo(locations[index].camera);

    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
            // Increment index
            index = (index + 1 === locations.length) ? 0 : index + 1;
            playback(index);
        }, 500); // After callback, show the location for 3 seconds.
    });
}
// Display the last title/description first
title.textContent = locations[locations.length - 1].title;
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