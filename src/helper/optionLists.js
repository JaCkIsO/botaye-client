const  ANY_OPTION = "any";
const locations = [
    // { text : ANY_OPTION, value : ANY_OPTION},
    { text : "Summit", value : "Summit"},
    { text : "Yeka Abado", value : "Yeka Abado"},
    // { text : ANY_OPTION, value : ANY_OPTION},
    // { text : ANY_OPTION, value : ANY_OPTION},
    // "Summit",
    // "Yeka Abado",
    // "Lideta",
    // "Gotera",
    // "Gerji",
    // "Gerji Mebrat-Hail",
    // "Mickelyland",
    // "Gelan",
    // "Tulu Dimtu"
];
const bedrooms = [
    { text : "bedroom_type_1", value : "bedroom_type_1"},
    { text : "bedroom_type_2", value : "bedroom_type_2"},
    { text : "bedroom_type_3", value : "bedroom_type_3"},
    { text : "bedroom_type_4", value : "bedroom_type_4"},
    { text : "bedroom_type_5", value : "bedroom_type_5"}
];
const floors = [
    {text : "floor_type_1", value : "floor_type_1"},
    {text : "floor_type_2", value : "floor_type_2"},
    {text : "floor_type_3", value : "floor_type_3"},
    {text : "floor_type_4", value : "floor_type_4"},
    {text : "floor_type_5", value : "floor_type_5"},
    {text : "floor_type_6", value : "floor_type_6"},
  
];
const prices= [
    { text : "price_type_1", value : "price_type_1" ,minValue : 0, maxValue : 3000},
    { text : "price_type_2", value : "price_type_2" ,minValue : 3001, maxValue : 5000},
    { text : "price_type_3", value : "price_type_3" ,minValue : 5001, maxValue : 7000},
    { text : "price_type_4", value : "price_type_4" ,minValue : 7001, maxValue : 10000},
    { text : "price_type_5", value : "price_type_5" ,minValue : 10001, maxValue : 15000},
    { text : "price_type_6", value : "price_type_6" ,minValue : 15001, maxValue : 999999},
];

const functions=[{ text: "commercial", value: "commercial"},{ text: "personal", value: "personal"}];
const filters = ["Area", "Function"];

export {
    ANY_OPTION,
    locations,
    bedrooms,
    floors,
    prices,
    functions,
    filters
}