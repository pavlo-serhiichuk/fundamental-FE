import {FC} from 'react'
import {Flex, FlexProps} from 'shared/ui/Stack/ui/Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
  const {align = 'start'} = props

  return (
    <Flex
      direction={'column'}
      {...props}
      align={align}
    />
  );
}