mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYm9sZWRhMjIiLCJhIjoiY2pkdWg3YXBzMWV0eDJ4bnlzeHk1bTA0ZCJ9.jFNUbOyVXti1PiWFL9LKag';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.1476785, 40.2744218],
    maxZoom: 16,
    minZoom: 1,
    zoom: 3
});

var title = document.getElementById('location-title');
var subtitle = document.getElementById('location-subtitle');
var description = document.getElementById('location-description');
var picture = document.getElementById('location-picture');

var locations = [{
    "id": "2",
    "title": "zColo 60 Hudson Data Center",
    "subtitle": "LED Lighting Upgrade",
    "description": "At zColo’s landmark four floor data center at 60 Hudson, Fairbanks Energy completed a retrofit of their existing lighting with new efficient LED lighting with advanced controls. A majority of the fixtures now have wireless networking capabilities to allow for granular high and low trim light levels, occupancy and daylight harvesting capabilities. In addition, the ability to regroup and zone easily through a handheld device allows the operations team to quickly and easily manage the lighting system as customers move in and change over time. <br> <br> <b>TOTAL ANNUAL SAVINGS: $40,000 <br> TOTAL INCENTIVE: $28,000 <br> TOTAL ANNUAL kWh SAVED: 216,800 kWh <br> PROJECT PAYBACK: > 2 years </b>",
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
    "description": "Fairbanks Energy has completed a series of energy efficiency initiatives at the corporate headquarters of Vertex Pharmaceuticals Incorporated. The efficiency project involved the engineering and implementation of numerous LED lighting and advanced controls retrofits through a variety of buildings on the Vertex campus, including mechanical rooms, labs, the lobby, and other public spaces. Additionally, the existing lighting controls system within the company’s labs was upgraded to include a new scheme that includes occupancy sensors, dramatically reducing energy costs when the area is not in use. As a result, annual electrical consumption at the Vertex headquarters has been reduced by 2,700,000 kWh. <br> <br> <b> TOTAL ANNUAL SAVINGS $435,000 <br> TOTAL INCENTIVE $800,000 <br> TOTAL ANNUAL kWh SAVED 2,700,000 kWh <br> PROJECT PAYBACK 2 years </b>",
    "picture": "img/2.jpg",
    "camera": {
        center: [-71.0483887, 42.3534302],
        bearing: -8.9,
        zoom: 17.68
    }
}, {
    "id": "1",
    "title": "111 8th Avenue Multi-Tenant Colocation Facility",
    "subtitle": "LED Lighting Upgrade",
    "description": "At 111 8th Avenue’s main data center space in New York City, Fairbanks Energy retrofitted a tenant’s existing fluorescent fixtures to new LED drivers and lamps with occupancy sensors. In the mechanical and NOC spaces, Fairbanks Energy installed new LED fixtures with integrated occupancy and daylight sensors. As a result, annual electrical consumption at the data center has reduced annually by 136,000 kWh. <br> <br> <b>TOTAL ANNUAL SAVINGS: $23,000 <br> TOTAL INCENTIVE: $5,400 <br> TOTAL ANNUAL kWh SAVED: 136,000 kWh <br> PROJECT PAYBACK: 1.2 YEARS</b>",
    "picture": "img/3.jpg",
    "camera": {
        center: [-74.005576, 40.7414688],
        bearing: 25.3,
        zoom: 15.5
    }
}, {
    "id": "4",
    "title": "Edward-Elmhurst Health",
    "subtitle": "LED Lighting Upgrade",
    "description": "Fairbanks Energy Services completed a series of energy efficiency upgrades at Edward-Elmhurst Health, resulting in total annual savings of $1.9 million. A turn-key solution, the project replaced or retrofitted more than 38,000 inefficient halogen, incandescent, fluorescent and metal halide fixtures with modern LEDs. A variety of indoor spaces were improved through the initiative, including: common areas, nurse stations, cafeterias, offices, mechanical rooms, conference rooms, fitness centers and parking areas. <br> <br> <b> TOTAL ANNUAL SAVINGS: $2,000,000 <br> TOTAL INCENTIVE: $343,000 <br> TOTAL ANNUAL kWh SAVINGS: 15,000,000 kWh <br> PROJECT PAYBACK: 2.6 Years </b>",
    "picture": "img/4.jpg",
    "camera": {
        center: [-88.1216413, 41.8030472],
        bearing: 20,
        zoom: 15.37,
    }
}, {
    "id": "5",
    "title": "Massachusetts General Hospital",
    "subtitle": "Comprehensive Upgrades", 
    "description": "Since 2014, Fairbanks Energy has contracted with Massachusetts General Hospital under their Strategic Energy Master Plan. The energy plan mandates energy conservation projects that improve the conditions of their patients, staff and the environment. Fairbanks Energy has completed more than 30 energy efficiency projects at MGH at a variety of the hospital’s buildings on its main campus, in addition to other efficiency enhancements in its facilities throughout Boston. <br> <br> <b> TOTAL ANNUAL SAVINGS: $1,250,000 <br> TOTAL INCENTIVE: $1,600,000 <br> TOTAL ANNUAL kWh SAVINGS: 7,000,000 kWh </b>",
    "picture": "img/5.jpg",
    "camera": {
        center: [-71.0710221, 42.3631542],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "6",
    "title": "zColo Atlanta Data Center",
    "subtitle": "Mechanical & Data Center Upgrades", 
    "description": "Fairbanks Energy’s team of engineers were called in by an International multi-tenant colocation company to help them achieve their goal of being Tier 3+ Compliant. <br> <b> Step 1: Instrumentation </b> <br> FES installed a BMS System to integrate all power and cooling systems. It included all DCIM capabilities such as temperature sensors in cold aisles. <br> <b> Step 2: Mechanical </b> <br> FES Installed heat exchangers, automated valves and new pumps. <br> Results: Automatic failover control, Automatic loop optimization via pressure control, Reclaimed 1200 Tons of Mechanical Capacity. <br> <b> Final Step: Dynamic Airflow Management </b> <br> - Installation of automated two way valves on CRACs - Airflow best practices inside the racks, in the floor - Slab floor overhead air distribution - BMS with temperature sensors monitoring cold aisle, turning on backup units as load in data center changes. <br> <b> 4,400,000 kWh Savings <br> PUE of less than 1.5 <br> Reclaimed 55% of the stranded mechanical capacity of the site back <br> The site now has ability to scale to over 200 watts per square foot and be N+1 compliant Dynamic, self-healing systems in place for future growth",
    "picture": "img/6.jpg",
    "camera": {
        center: [-84.4278256, 33.7338976],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "7",
    "title": "Hotel 140",
    "subtitle": "Steam System & LED Lighting Upgrades", 
    "description": "Fairbanks Energy Services completed a comprehensive LED lighting and lighting controls upgrade at Hotel 140 in Boston, MA. FES installed advanced lighting controls throughout the hotel’s basement, elevator lobbies on all floors, hallways on floors 3 and 4 and in the kitchenette/lounge on floor 7. LED kits with controls were installed in the stairwells of the hotel and fixtures in the bathrooms and hotel lobby. As a result, a total of 304 fixtures were replaced, saving the customer $19,000 annually. Fairbanks Energy Services also completed a steam system upgrade at Hotel 140 consisting of several improvements including valve replacements and a wholesale replacement of all steam traps with more efficient venture nozzle units. The net result was savings of over $20,000 per year, resulting in a less than 2.5 year payback. <br> <br> <b> LED LIGHTING UPGRADE: <br> TOTAL ANNUAL SAVINGS$19,000 <br> TOTAL INCENTIVE $20,000 <br> TOTAL ANNUAL kWh SAVED: 117,000 kWh <br> PROJECT PAYBACK 3 YEARS <br> <br> STEAM SYSTEM UPGRADE: <br> TOTAL PROJECT COST $50,000 <br> TOTAL ANNUAL SAVINGS $20,000 <br> PROJECT PAYBACK 2.5 YEARS </b>",
    "picture": "img/7.jpg",
    "camera": {
        center: [-71.0766487, 42.3486305],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "8",
    "title": "Trinity Health of New England",
    "subtitle": "LED Lighting & Mechanical Upgrades", 
    "description": "Trinity Health of New England contracted with Fairbanks Energy Services to develop and implement lighting and mechanical efficiency solutions at three of its hospitals - St Francis Hospital and Mt Sinai Hospital in Hartford CT and Johnson Memorial Medical Center in Stafford Springs CT. The total cost of the efficiency solutions is approximately $6 million with annual electricity savings of over 8 million kWh and gas and oil savings of over 260,000 therms. FES accessed the CT. Energy Efficiency Fund through Eversource and CNG for over $3,250,000 of incentives. <br> <b> Mechanical Upgrades <br> TOTAL ANNUAL SAVINGS: $980,000 <br> TOTAL INCENTIVE: $2,000,000 <br> TOTAL ANNUAL kWh SAVINGS: 5,700,000 kWh <br> <br> LED Lighting Upgrades <br> TOTAL ANNUAL SAVINGS: $1,400,000 <br> TOTAL INCENTIVE: $2,900,000 <br> TOTAL ANNUAL kWh SAVINGS: 8,000,000 kWh <br>  </b>",
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
    "description": "Fairbanks Energy Services completed an LED lighting and lighting controls upgrade at Providence College Phillips Memorial Library in Providence, Rhode Island. Fairbanks Energy retrofitted a total of 2,956 fixtures to LEDs and LEDs with lighting control throughout the library. The lighting controls system is equipped with a solution that maximizes energy savings by providing automated granular dimming in response to both occupancy and daylight harvesting. As a result, the project improves the overall lighting quality for students and staff, while saving Providence College $179,000 annually. <br> <br> <b> TOTAL ANNUAL SAVINGS $179,000 <br> TOTAL INCENTIVE $477,000 <br> TOTAL ANNUAL kWh SAVED 2.2 million kWh <br> PROJECT PAYBACK 2 years </b>",
    "picture": "img/9.jpg",
    "camera": {
        center: [-71.4401479, 41.8440829],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "id": "10",
    "title": "zColo Hillcrest Data Center",
    "subtitle": "LED Lighting Upgrades", 
    "description": "Fairbanks Energy Services completed an LED lighting and lighting controls upgrade at Providence College Phillips Memorial Library in Providence, Rhode Island. Fairbanks Energy retrofitted a total of 2,956 fixtures to LEDs and LEDs with lighting control throughout the library. The lighting controls system is equipped with a solution that maximizes energy savings by providing automated granular dimming in response to both occupancy and daylight harvesting. As a result, the project improves the overall lighting quality for students and staff, while saving Providence College $179,000 annually. <br> <br> <b> TOTAL ANNUAL SAVINGS $179,000 <br> TOTAL INCENTIVE $477,000 <br> TOTAL ANNUAL kWh SAVED 2.2 million kWh <br> PROJECT PAYBACK 2 years </b>",
    "picture": "img/10.jpg",
    "camera": {
        center: [-96.7935828, 32.9230277],
        bearing: 28.4,
        zoom: 16.64
    }
}, {
    "title": "Fairbanks Energy Services Projects",
    "description": "We are an energy conservation firm dedicated to providing cost-effective retrofit solutions.",
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
        }, 2000); // After callback, show the location for 3 seconds.
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