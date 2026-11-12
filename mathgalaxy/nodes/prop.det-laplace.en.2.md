# Laplace expansion　`prop.det-laplace`
English entry · root `../`
[in graph](../#n=prop.det-laplace)　·　[Chinese page (authoritative)](./prop.det-laplace.md)

(**expansion along row $i$**; the column version is analogous.) Moreover "off-diagonal expansion" gives zero: $\sum_j a_{kj} C_{ij} = 0$ ($k \ne i$).

## Notes · **draft**
⭐ This is the **recursive algorithm** for the determinant: order $n$ reduces to $n$ matrices of order $n-1$, complexity $O(n!)$.

In practice one first uses elimination to reduce a row to a single nonzero entry, then expands — the two together are fast.

> continued in nodes/prop.det-laplace.en.3.md
