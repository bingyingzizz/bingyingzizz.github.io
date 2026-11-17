# Polar Decomposition　`thm.polar-decomposition`
English entry · root `../`
[in graph](../#n=thm.polar-decomposition)　·　[Chinese page (authoritative)](./thm.polar-decomposition.md)

$A^{*}A$ is always positive semidefinite Hermitian (see the notes to def.positive-definite-matrix), so it has a unique positive semidefinite square root.

Define $U := AP^{-1}$ (when $A$ is invertible); it remains only to check that $U$ preserves the inner product — a one-line computation: $U^{*}U = P^{-1}A^{*}AP^{-1} = P^{-1}P^{2}P^{-1} = I$.

⭐ **Geometric reading**: every linear map is "first stretch along a set of orthogonal directions ($P$), then rotate as a whole ($U$)". The stretch factors are the singular values. This also holds for **non-square** matrices (with an isometry in place of a unitary).

> continued in nodes/thm.polar-decomposition.en.4.md
