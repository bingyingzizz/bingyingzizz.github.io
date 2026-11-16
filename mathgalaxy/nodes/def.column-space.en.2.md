# column space of a matrix　`def.column-space`
English entry · root `../`
[in graph](../#n=def.column-space)　·　[Chinese page (authoritative)](./def.column-space.md)

is the **column space** of $A$, that is, the **image** of the linear map $T_A : K^{n} \to K^{m}$, $T_A(x) = Ax$. Its dimension is the **column rank**, which equals $\operatorname{rank} A$.

**Solvability of systems**: $b \in \operatorname{Col}(A)$ if and only if $Ax = b$ has a solution. After reducing $A$ to reduced row echelon form, the pivot columns — that is, the pivot columns of $A$ — give a basis of $\operatorname{Col}(A)$.

## Notes · **draft**
The column space is "where $A$ can reach"; the null space (solution space of the homogeneous system) is "which directions $A$ crushes to $0$". Their dimensions add up to $n$.

> continued in nodes/def.column-space.en.3.md
