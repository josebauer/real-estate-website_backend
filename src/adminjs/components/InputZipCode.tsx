import React, { useState, useEffect } from "react";
import { Label, Input } from '@adminjs/design-system'
import { PatternFormat } from "react-number-format";
import { ValuesType } from "./InputFormattedPrice";
import { ShowPropertyProps } from "adminjs";

export default function InputZipCode({ record }: ShowPropertyProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (record && record) {
      setValue(record.params.zipCode)
    }
  }, [record.params.zipCode])

  return (
    <div>
      <Label required for="zipCode">CEP</Label>
      <PatternFormat
        id="zipCode"
        customInput={Input}
        style={{ width: '100%' }}
        value={value}
        onValueChange={(values: ValuesType) => { setValue(values.value) }}
        format="#####-###"
        required
      />
      <div style={{ height: '24px', marginTop: '4px' }}></div>
    </div>
  )
}