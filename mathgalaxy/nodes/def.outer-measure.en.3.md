# Outer Measure　`def.outer-measure`
English entry · root `../`
[in graph](../#n=def.outer-measure)　·　[Chinese page (authoritative)](./def.outer-measure.md)

## Statement · **reviewed**
Let $X$ be a non-empty set. A function $\mu^* : \mathcal{P}(X) \to [0, +\infty]$ is an **outer measure** iff

- $\mu^*(\emptyset) = 0$
- **Monotone**: $A \subseteq B \implies \mu^*(A) \le \mu^*(B)$
- **Countably subadditive**: $\mu^*( \bigcup_{j=1}^{\infty} A_j ) \le \sum_{j=1}^{\infty} \mu^*(A_j)$

## Notes · **reviewed**
An outer measure is defined on **all** subsets ($\mathcal{P}(X)$, not on some $\sigma$-algebra); the price is that it only has **sub**additivity.

> 续见 nodes/def.outer-measure.en.4.md
