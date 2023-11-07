import React, {ReactElement} from 'react';
import {FeatureFlags} from '@/shared/types/featureFlags'
import {getFeatureFlag} from '../setGetFeatures'

interface ToggleFeatureProps {
  on: ReactElement
  off: ReactElement
  feature: keyof FeatureFlags
}

export const ToggleFeature = (props: ToggleFeatureProps) => {

  const {on, off, feature} = props

  if(getFeatureFlag(feature)) {
    return on
  }

  return off
};