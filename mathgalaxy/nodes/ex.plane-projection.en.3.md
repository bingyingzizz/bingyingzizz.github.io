# orthogonal projection onto a coordinate plane　`ex.plane-projection`
English entry · root `../`
[in graph](../#n=ex.plane-projection)　·　[Chinese page (authoritative)](./ex.plane-projection.md)

⭐ **It is the geometric core of least squares**: $P b = (b_{1}, b_{2}, 0)$ is exactly the point nearest $b$ among the points of $W$, and the residual $b - Pb = (0, 0, b_{3})$ is orthogonal to $W$ — precisely the geometry behind the normal equations. In general, when $W = \operatorname{col}(A)$ the projection matrix is $A(A^{T}A)^{-1}A^{T}$.

📌 **Relation to the pseudoinverse**: $A = P$ is itself idempotent and symmetric, so $A^{+} = A$ (the four Penrose conditions hold directly). This says that a projection is, in the language of pseudoinverses, the **self-adjoint idempotent** kind.

> continued in nodes/ex.plane-projection.en.4.md
