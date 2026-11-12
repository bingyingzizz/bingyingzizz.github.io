# Gram–Schmidt orthogonalisation　`thm.gram-schmidt`
English entry · root `../`
[in graph](../#n=thm.gram-schmidt)　·　[Chinese page (authoritative)](./thm.gram-schmidt.md)

In particular: **every finite-dimensional inner product space has an orthonormal basis** (any basis can be orthogonalized).

## Notes · **draft**
⭐ Algorithm (induction): first set $e_1 := v_1 / \|v_1\|$; then for $j = 2, \ldots, k$, successively set

$$w_j := v_j - \sum_{i < j} \langle e_i, v_j \rangle\, e_i, \qquad e_j := \frac{w_j}{\|w_j\|}$$

(each step subtracts all components of $v_j$ along the directions already obtained.)

> continued in nodes/thm.gram-schmidt.en.3.md
