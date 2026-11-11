# functor　`def.functor`
English entry · root `../`
[in graph](../#n=def.functor)　·　[Chinese page (authoritative)](./def.functor.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 8 · definition · cluster Functors and Natural Transformations (`cat.functor`) · Category Theory

## Statement · **draft**
A **functor** $F : \mathcal{C} \to \mathcal{D}$ from a category $\mathcal{C}$ to a category $\mathcal{D}$ consists of two parts:

- a map on objects $X \mapsto F(X)$;
- a map on morphisms $f \mapsto F(f)$, sending $f : X \to Y$ to $F(f) : F(X) \to F(Y)$.

It is required to **preserve identities** and **preserve composition**:

$$F(1_X) = 1_{F(X)}, \qquad F(g \circ f) = F(g) \circ F(f)$$

> continued in nodes/def.functor.en.2.md
