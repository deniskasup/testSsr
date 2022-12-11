import { DependencyName } from "~/enums/DependencyName";

export const useHttpClient = () => useNuxtApp()[`$${DependencyName.HTTP_CLIENT}`];
