# Eigenspace　`def.eigenspace`
English entry · root `../`
[in graph](../#n=def.eigenspace)　·　[Chinese page (authoritative)](./def.eigenspace.md)

## Notes · **draft**
**Why it is a "subspace"**: $\ker(T - \lambda I)$ is a kernel, hence certainly a subspace. The point is that it is **not an arbitrary subspace** — it is determined by a single eigenvalue, and the sum of the $V_{\lambda}$ for distinct eigenvalues is **direct** (eigenvectors for distinct eigenvalues are linearly independent).

**Why the two multiplicities differ**: $\begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$ has the single eigenvalue $1$, with algebraic multiplicity $2$, but $\ker(T - I)$ is only one-dimensional (geometric multiplicity $1$) — the missing dimension is the source of Jordan blocks (thm.jordan-canonical-form).

> continued in nodes/def.eigenspace.en.4.md
