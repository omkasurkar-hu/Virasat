import { StateHeritage } from '../types';
import { NORTH_STATES } from './northStates';
import { SOUTH_STATES } from './southStates';
import { WEST_CENTRAL_STATES } from './westAndCentralStates';
import { EAST_NORTHEAST_STATES } from './eastAndNortheastStates';

export const STATES_HERITAGE_DATA: StateHeritage[] = [
  ...NORTH_STATES,
  ...SOUTH_STATES,
  ...WEST_CENTRAL_STATES,
  ...EAST_NORTHEAST_STATES
];

export const ALL_REGIONS = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East'] as const;

export function getStateById(id: string): StateHeritage | undefined {
  return STATES_HERITAGE_DATA.find((state) => state.id === id);
}

export function getStatesByRegion(region: string): StateHeritage[] {
  if (region === 'All') return STATES_HERITAGE_DATA;
  return STATES_HERITAGE_DATA.filter((state) => state.region === region);
}

export function searchHeritage(query: string): StateHeritage[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return STATES_HERITAGE_DATA;

  return STATES_HERITAGE_DATA.filter((state) => {
    const matchName = state.name.toLowerCase().includes(cleanQuery);
    const matchCapital = state.capital.toLowerCase().includes(cleanQuery);
    const matchMonuments = state.monuments.some(
      (m) => m.name.toLowerCase().includes(cleanQuery) || m.location.toLowerCase().includes(cleanQuery)
    );
    const matchArt = state.artAndDance.some(
      (a) => a.name.toLowerCase().includes(cleanQuery) || a.type.toLowerCase().includes(cleanQuery)
    );
    const matchCuisine = state.cuisines.some((c) => c.name.toLowerCase().includes(cleanQuery));
    const matchFestival = state.festivals.some((f) => f.name.toLowerCase().includes(cleanQuery));
    const matchCrafts =
      state.craftsAndAttire.textiles.some((t) => t.toLowerCase().includes(cleanQuery)) ||
      state.craftsAndAttire.handicrafts.some((h) => h.toLowerCase().includes(cleanQuery));

    return matchName || matchCapital || matchMonuments || matchArt || matchCuisine || matchFestival || matchCrafts;
  });
}
