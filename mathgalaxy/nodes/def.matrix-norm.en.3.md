# Matrix Norm　`def.matrix-norm`
English entry · root `../`
[in graph](../#n=def.matrix-norm)　·　[Chinese page (authoritative)](./def.matrix-norm.md)

**Relation to the spectrum**: $\lVert A\rVert_{2} = \sigma_{\max}(A) = \sqrt{\lambda_{\max}(A^{*}A)}$ (the spectral norm is the largest singular value), and $\lVert A\rVert_{F} = \bigl(\sum \sigma_{i}^{2}\bigr)^{1/2}$.

## Notes · **draft**
**Why both norms are useful**: The operator norm measures the maximum amplification factor and is directly related to spectral radius and convergence ($\rho(A) \le \lVert A\rVert$, `def.spectral-radius`). The Frobenius norm measures the overall size of the entries, is easy to compute, and is naturally suited to low-rank approximation (as in the statement of Eckart–Young).

> continued in nodes/def.matrix-norm.en.4.md
