# Cayley–Hamilton theorem　`thm.cayley-hamilton`
English entry · root `../`
[in graph](../#n=thm.cayley-hamilton)　·　[Chinese page (authoritative)](./thm.cayley-hamilton.md)

Matrix form: for $A \in M_n(K)$, one has $\chi_A(A) = 0$ (the zero matrix).

## Notes · **draft**
⭐ The theorem says "**every operator satisfies its own characteristic equation**" — so $\chi_T$ is **one** of the polynomials that send $T$ to zero, which immediately gives an entry point for using the structure of the $K[x]$-module ($V$ becomes a $K[x]/(\chi_T)$-module).

⚠ A common notational error: one cannot substitute $\chi_T(T) = \det(T I - T)$ like that (that would be a "matrix inside a matrix"); one must **first expand $\chi_T$ as $\sum c_k x^{k}$, then replace term by term with $\sum c_k T^{k}$**.

> continued in nodes/thm.cayley-hamilton.en.3.md
