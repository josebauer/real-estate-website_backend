import React, { useState, useEffect } from 'react';
import { Label, Input } from '@adminjs/design-system'
import { NumericFormat } from 'react-number-format';
import { EditPropertyProps } from 'adminjs';

export default function InputBuildingArea({ property, record, onChange }: EditPropertyProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (record && record.params) {
      setValue(record.params[property.path] || '')
    }
  }, [record, property.path])

  const handleValueChange = (values: { value: string, formattedValue: string }) => {
    setValue(values.formattedValue)
    onChange(property.path, values.formattedValue)
  }

  return (
    <div>
      <Label htmlFor="buildingArea">Área construída</Label>
      <NumericFormat
        id="buildingArea"
        customInput={Input}
        style={{ width: '100%' }}
        value={value}
        onValueChange={handleValueChange}
        thousandSeparator="."
        decimalSeparator=","
        suffix=" m²"
        decimalScale={2}
        allowNegative={false}
      />
      <div style={{ height: '24px', marginTop: '4px' }}></div>
    </div>
  )
}