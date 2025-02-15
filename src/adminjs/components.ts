import { ComponentLoader } from "adminjs"

export const componentLoader = new ComponentLoader

export const Components = {
  Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
  InputFormattedPrice: componentLoader.add('InputFormattedPrice', './components/InputFormattedPrice'),
  InputZipCode: componentLoader.add('InputZipCode', './components/InputZipCode'),
  InputBuildingArea: componentLoader.add('InputBuildingArea', './components/InputBuildingArea'),
  InputTotalArea: componentLoader.add('InputTotalArea', './components/InputTotalArea'),
  StatusBadgeList: componentLoader.add('StatusBadgeList', './components/StatusBadgeList'),
  StatusBadgeShow: componentLoader.add('StatusBadgeShow', './components/StatusBadgeShow')
}