# Least Squares　`thm.least-squares`
English entry · root `../`
[in graph](../#n=thm.least-squares)　·　[Chinese page (authoritative)](./thm.least-squares.md)

with respect to $x$. It is uniquely determined by the **normal equations**:

$$A^{T}A\, x = A^{T} b .$$

With full column rank, $A^{T}A$ is positive definite and hence invertible, so the solution is $x = (A^{T}A)^{-1}A^{T}b$.

**Geometric meaning**: $Ax^{*}$ is the **orthogonal projection** of $b$ onto the column space of $A$, and the residual $b - Ax^{*}$ is orthogonal to that space.

> continued in nodes/thm.least-squares.en.3.md
