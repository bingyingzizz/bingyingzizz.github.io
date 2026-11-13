# bilinear form　`def.bilinear-form`
English entry · root `../`
[in graph](../#n=def.bilinear-form)　·　[Chinese page (authoritative)](./def.bilinear-form.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 13 · definition · cluster Multilinear Algebra and Tensors (`algebra.multilinear`) · Abstract Algebra

## Statement · **draft**
Let $V, W, U$ be $K$-vector spaces. A map $B : V \times W \to U$ is **bilinear** iff fixing one variable leaves a linear map in the other:

$$B(v + cv', w) = B(v, w) + c\,B(v', w), \qquad B(v, w + cw') = B(v, w) + c\,B(v, w')$$

When $V = W$ and $U = K$, it is called a **bilinear form** on $V$. The set of all such maps is denoted $\operatorname{Bil}(V, W; U)$ and is a $K$-vector space under pointwise operations.

> continued in nodes/def.bilinear-form.en.2.md
