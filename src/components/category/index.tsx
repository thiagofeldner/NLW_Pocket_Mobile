import { Text, Pressable, PressableProps } from "react-native";

import { s } from "./style";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/theme";

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable style={[s.container]}>
      <Icon size={16} color={colors.green.light}/>
      <Text style={[s.name]}>{name}</Text>
    </Pressable>
  )
}
