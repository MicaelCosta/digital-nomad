import React, { useState } from "react";
import { Box } from "../components/Box";
import { SearchInput } from "../components/SearchInput";

export function CityFilter() {
  const [name, setName] = useState("");

  return (
    <Box>
      <SearchInput value={name} onChangeText={setName} placeholder="Qual o seu destino?" />
    </Box>
  );
}
