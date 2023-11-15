import React, {ReactElement} from 'react';
import {FeatureFlags} from '@/shared/types/featureFlags'
import {getFeatureFlag} from '../setGetFeatures'

interface ToggleFeatureProps {
  isOn: boolean | undefined
  feature: keyof FeatureFlags
  off: ReactElement
  on: ReactElement
}

export const ToggleFeature = (props: ToggleFeatureProps) => {

  const {on, off, feature, isOn} = props

  if (isOn) {
    return on
  }

  return off
};