import React, { useState, useEffect } from 'react';
import { Label, Input } from '@adminjs/design-system'
import { NumericFormat } from 'react-number-format';
import { ShowPropertyProps } from 'adminjs';
import { ValuesType } from './InputFormattedPrice';

export default function InputTotalArea({ record }: ShowPropertyProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (record && record) {
      setValue(record.params.totalArea)
    }
  }, [record.params.totalArea])

  return (
    <div>
      <Label for="totalArea">Área total</Label>
      <NumericFormat
        id="totalArea"
        customInput={Input}
        style={{ width: '100%' }}
        value={value}
        onValueChange={(values: ValuesType) => { setValue(values.value) }}
        thousandSeparator="."
        decimalSeparator=","
        suffix=" m²"
        decimalScale={2}
        allowNegative={false}
      />
      <div style={{ height: '24px', marginTop: '4px'}}></div>
    </div>
  )
}