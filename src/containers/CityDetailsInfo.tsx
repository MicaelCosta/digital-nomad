import React from "react";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailsInfo({
  name,
  country,
  description,
}: CityDetailsInfoProps) {
  return (
    <Box>
      <Text variant="title28">{name}</Text>
      <Text variant="text18" mt="s2">
        {country}
      </Text>
      <Text variant="text14" mt="s24">
        {description}
      </Text>
    </Box>
  );
}
