import React, { useState, useEffect } from "react";
import { Label, Input } from '@adminjs/design-system'
import { PatternFormat } from "react-number-format";
import { EditPropertyProps } from "adminjs";

export default function InputZipCode({ property, record, onChange }: EditPropertyProps) {
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
      <Label required htmlFor="zipCode">CEP</Label>
      <PatternFormat
        id="zipCode"
        customInput={Input}
        style={{ width: '100%' }}
        value={value}
        onValueChange={handleValueChange}
        format="#####-###"
        required
      />
      <div style={{ height: '24px', marginTop: '4px' }}></div>
    </div>
  )
}