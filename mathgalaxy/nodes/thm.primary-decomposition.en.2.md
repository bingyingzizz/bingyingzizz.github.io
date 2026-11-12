# primary decomposition into generalised eigenspaces　`thm.primary-decomposition`
English entry · root `../`
[in graph](../#n=thm.primary-decomposition)　·　[Chinese page (authoritative)](./thm.primary-decomposition.md)

- $V = \bigoplus_{i=1}^{r} V_i$, where $V_i := \ker (T - \lambda_i I)^{m_i}$ is the **generalized eigenspace** (also called the **root subspace**);
- $\dim V_i = m_i$ (the algebraic multiplicity), each $V_i$ is $T$-invariant, and $T|_{V_i}$ has only one eigenvalue $\lambda_i$;
- $E_{\lambda_i} = \ker(T - \lambda_i I) \subseteq V_i$ is the "$\lambda_i$ layer" inside it.

## Notes · **draft**
⭐ This step is the **first half** of the Jordan decomposition: first split $V$ into $r$ blocks by eigenvalue, so that only one eigenvalue remains on each block.

> continued in nodes/thm.primary-decomposition.en.3.md
