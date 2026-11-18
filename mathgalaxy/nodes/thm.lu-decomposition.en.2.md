# LU Decomposition　`thm.lu-decomposition`
English entry · root `../`
[in graph](../#n=thm.lu-decomposition)　·　[Chinese page (authoritative)](./thm.lu-decomposition.md)

where $L$ is **unit lower triangular** (every diagonal entry is $1$) and $U$ is **upper triangular**.

**Permutation version (always exists)**: For every invertible $A$, there is a permutation matrix $P$ such that $PA = LU$ (row swaps ensure that the pivots are nonzero).

**Use**: Solving $Ax = b$ reduces to solving $Ly = b$ by forward substitution and $Ux = y$ by back substitution, both of which are $O(n^{2})$. When $A$ stays fixed, $L, U$ can be reused.

> continued in nodes/thm.lu-decomposition.en.3.md
