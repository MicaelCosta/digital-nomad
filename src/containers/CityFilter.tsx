import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
  categories: Category[];
};

export function CityFilter({ categories }: CityFilterProps) {
  const [name, setName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={name}
          onChangeText={setName}
          placeholder="Qual o seu destino?"
        />
      </Box>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              active={selectedCategoryId === category.id}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
