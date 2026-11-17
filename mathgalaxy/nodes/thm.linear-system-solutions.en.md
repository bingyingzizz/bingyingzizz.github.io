# structure of the solutions of a linear system　`thm.linear-system-solutions`
English entry · root `../`
[in graph](../#n=thm.linear-system-solutions)　·　[Chinese page (authoritative)](./thm.linear-system-solutions.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 18 · theorem · cluster Matrices and Determinants (`algebra.matrix`) · Abstract Algebra

## Statement · **draft**
Let $A \in M_{m \times n}(K)$ and $b \in K^{m}$, and consider the system $Ax = b$.

- **Solvable** $\iff$ $\operatorname{rank} A = \operatorname{rank}(A \mid b)$ (append $b$ as the $n+1$-th column);
- when solvable, the solution set is the **affine subspace**

$$x_0 + \ker A = \{\, x_0 + u : u \in \ker A \,\}$$

> continued in nodes/thm.linear-system-solutions.en.2.md
