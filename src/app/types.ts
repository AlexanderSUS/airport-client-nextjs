export interface FlightsSearchResponse {
  total: string;
  data:  FlightsSearchData[];
}

export interface FlightsSearchData {
  id:                   string;
  date:                 string;
  cost:                 string;
  departureCity:        string;
  departureCountry:     string;
  departureAirportIata: string;
  departureTime:        string;
  arrivalTime:          string;
  arrivalCity:          string;
  arrivalCountry:       string;
  arrivalAirportIata:   string;
  aircraftModel:        string;
  availableSeats:       number;
}