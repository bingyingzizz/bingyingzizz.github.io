# Darboux’s Theorem　`thm.darboux`
English entry · root `../`
[in graph](../#n=thm.darboux)　·　[Chinese page (authoritative)](./thm.darboux.md)

**Step 1: Existence of a symplectic basis (linear algebra)**. Let $(V, \omega)$ be a symplectic space of dimension $2n$. Choose $e_{1} \ne 0$. By nondegeneracy there exists $f_{1}$ such that $\omega(e_{1}, f_{1}) \ne 0$. Rescale $f_{1}$ so that $\omega(e_{1}, f_{1}) = 1$ (alternation gives $\omega(e_{1}, e_{1}) = 0$). Set $W = \{v : \omega(e_{1}, v) = \omega(f_{1}, v) = 0\}$. For any $v$, we have $v - \omega(v, f_{1})e_{1} + \omega(v, e_{1})f_{1} \in W$, so $V = \operatorname{span}(e_{1}, f_{1}) \oplus W$. Since $\omega|_{W}$ is nondegenerate, induction on $\dim W$ gives a symplectic basis $e_{1}, \ldots, e_{n}, f_{1}, \ldots, f_{n}$ (`def.symplecti

> continued in nodes/thm.darboux.en.5.md
