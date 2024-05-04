---
category: snippets
tags:
  - jest
  - mock
date: 2023-07-01 # yy-mm-dd
title: How To Mock A Return and Count The Mocked Calls in Jest
header-title: true
---

If you need to do `jest.fn()` to maybe later call `.toHaveBeenCalledWith()` or `.toHaveBeenTimes(1)` - but also need to mock the result of the `jest.fn()` call, you can do something like the below:

```javascript
it('does an example test run', async () => {
    const roleFn = jest.fn()
    const getAppByIdFn = jest.fn()

    roleFn.mockImplementation(() => { return { id: '', getByApplicationId: getAppByIdFn } })
    getAppByIdFn.mockImplementation(() => { return { id: '' } })

    expect(roleFn).toHaveBeenCalledWith('ARG 1')
    expect(roleFn).toHaveBeenCalledWith('ARG 2')
    expect(roleFn).toHaveBeenCalledWith('ARG 3')
})
```