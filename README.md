# SSlibs

> Tiêu chí nhẹ và đẹp, có thể cài đặt lại theo yêu cầu ...
> Hướng dẫn chi tiết tại: https://notebook.zohopublic.com/public/notes/01k0ec2ff2b31b68c4775ad0276bfa5323e40

## Install npm

```bash
npm i sslibs
```

## Install yarn

```bash
yarn add sslibs
```

## Usage

```tsx
import React, { Component } from 'react'
import { SSCalendar, SSCountDownUI } from 'sslibs'
import 'sslibs/dist/index.css'

const TestLibs = () => {
  return (
    <>
      <SSCountDownUI />
      <SSCalendar />
    </>
  )
}

export default TestLibs
```


