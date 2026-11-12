# Gram–Schmidt orthogonalisation　`thm.gram-schmidt`
English entry · root `../`
[in graph](../#n=thm.gram-schmidt)　·　[Chinese page (authoritative)](./thm.gram-schmidt.md)

⭐ It is the entry point to "matrix factorization": orthogonalizing the columns of $A$ gives the **QR decomposition** $A = QR$ ($Q$ has orthonormal columns, $R$ upper triangular) — numerically far more stable than solving equations directly.

⚠ It depends on the inner product and on the **real/complex field structure**: if the inner product is replaced by a general symmetric bilinear form (e.g. the Minkowski metric), the algorithm runs into $\|w_j\| = 0$ and divides by zero.

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `thm.gram-schmidt` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

