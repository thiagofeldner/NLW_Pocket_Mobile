import { Text, TextProps ,TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[s.container, style ]}
      activeOpacity={0.8}>
        {
          isLoading ? <ActivityIndicator/> : children
        }        
    </TouchableOpacity>
  )
}

function Title({children}: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

Button.Title = Title;

export { Button }

