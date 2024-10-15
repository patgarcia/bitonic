# bitonic
Fun bitonic sequence generator favoring cleverness over readability

```typescript
const getBitonic = (size: number): number[] =>
  size > 3
    ? [[...Array(size).keys()]]
        .map(
          (arr) =>
            arr.push(
              ...arr
                .splice(0, Math.floor(Math.random() * (size - 1)) || 1)
                .sort((a, b) => b - a)
            ) && arr
        )
        .flat()
    : [0, 2, 1];
```

> [!WARNING]  
> This is just for kicks. Always favor readability.
