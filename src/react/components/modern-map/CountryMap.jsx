import React from "react";
import RegionMap from "./RegionMap";


const CountryMap = props => (
    <svg {...props} viewBox="-200 -16 1032 632" style={{
        fill: "#ccc",
        stroke: "#fff",
        strokeWidth: .5,
        overflow: "hidden"
    }}>
        <RegionMap
            {...props}
            id={"Alajuela"}
            color={"#D11D25"}
        />
        <RegionMap
            {...props}
            id={"Cartago"}
            color={"#024A92"}
        />
        <RegionMap
            {...props}
            id={"Guanacaste"}
            color={"#795548"}
        />
        <RegionMap
            {...props}
            id={"Heredia"}
            color={"#FCBD2C"}
        />
        <RegionMap
            {...props}
            id={"Limon"}
            color={"#39AE1F"}
        />
        <RegionMap
            {...props}
            id={"Puntarenas"}
            color={"#E9720C"}
        />
        <RegionMap
            {...props}
            id={"San Jose"}
            color={"#79113E"}
        />
    </svg>
);

export default CountryMap;

