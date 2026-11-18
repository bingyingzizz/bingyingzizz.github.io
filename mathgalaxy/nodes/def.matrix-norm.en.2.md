# Matrix Norm　`def.matrix-norm`
English entry · root `../`
[in graph](../#n=def.matrix-norm)　·　[Chinese page (authoritative)](./def.matrix-norm.md)

$$\lVert A\rVert := \sup_{x \ne 0}\frac{\lVert Ax\rVert}{\lVert x\rVert} = \sup_{\lVert x\rVert = 1}\lVert Ax\rVert .$$

**Frobenius norm**: $\lVert A\rVert_{F} := \bigl(\sum_{i,j}\lvert a_{ij}\rvert^{2}\bigr)^{1/2}$ (the length of the matrix viewed as a $mn$-dimensional vector).

**Basic properties**: Both are norms and satisfy $\lVert AB\rVert \le \lVert A\rVert\,\lVert B\rVert$ (submultiplicativity). The operator norm also satisfies $\lVert Ax\rVert \le \lVert A\rVert\,\lVert x\rVert$.

> continued in nodes/def.matrix-norm.en.3.md
