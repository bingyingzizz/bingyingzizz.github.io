# Least Squares　`thm.least-squares`
English entry · root `../`
[in graph](../#n=thm.least-squares)　·　[Chinese page (authoritative)](./thm.least-squares.md)

## Notes · **draft**
**The normal equations express orthogonality of the residual to the column space**: $(b - Ax) \perp \operatorname{col}(A)$ $\iff$ $A^{T}(b - Ax) = 0$ $\iff$ $A^{T}Ax = A^{T}b$. This is the defining property of the projection (`def.orthogonal-projection`).

⭐ **A concrete formula for orthogonal projection**: The matrix form of projection onto the subspace is $P = A(A^{T}A)^{-1}A^{T}$. This $P$ is idempotent and symmetric (the ‘orthogonal idempotent’ in the notes to `def.idempotent`), so it is precisely the projection operator.

> continued in nodes/thm.least-squares.en.4.md
