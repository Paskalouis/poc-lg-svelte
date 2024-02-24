// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { Group } from '../types';
import groupsJson from '../lib/groups.json';
export const prerender = true;

function getGroups(): Promise<Group[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(groupsJson.data);
      }, 500);
    });
  }

/** @type {import('./$types').PageLoad} */
export async function load() {
    const groups = await getGroups()
	return {
		groups
	};
}