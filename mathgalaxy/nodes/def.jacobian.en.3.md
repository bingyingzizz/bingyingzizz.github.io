# Jacobian Matrix　`def.jacobian`
English entry · root `../`
[in graph](../#n=def.jacobian)　·　[Chinese page (authoritative)](./def.jacobian.md)

⭐ Three special cases are worth remembering:
- $n = 1$: $J$ is a column, i.e. the tangent vector of a curve;
- $m = 1$: $J$ is a row, i.e. $(\nabla f)^{\mathsf{T}}$;
- $m = n$: $\det J_f(a)$ is the **local volume scaling factor** (this is the determinant factor in `thm.change-of-variables-manifold`).

⚠ Notational convention: some books write the Jacobian transposed (they store $Df$ as a column vector).

The convention here is **rows index the target coordinates and columns index the domain coordinates**, so the chain rule is "multiply from left to right".

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `def.jacobian` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

