import React, { useState, useEffect } from 'react';
import { Label, Input } from '@adminjs/design-system'
import { NumericFormat } from 'react-number-format';
import { ShowPropertyProps } from 'adminjs';

export type ValuesType = {
  value: string
};

export default function InputFormattedPrice({ record }: ShowPropertyProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (record && record) {
      setValue(record.params.price)
    }
  }, [record.params.price])

  return (
    <div>
      <Label for="price">Valor</Label>
      <NumericFormat
        id="price"
        customInput={Input}
        style={{ width: '100%' }}
        value={value}
        onValueChange={(values: ValuesType) => { setValue(values.value) }}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale={true}
        allowNegative={false}
      />
    </div>
  )
}