# Vector Field　`def.vector-field`
English entry · root `../`
[in graph](../#n=def.vector-field)　·　[Chinese page (authoritative)](./def.vector-field.md)

$$(Xf)(p) := \mathrm{d}f_{p}\bigl(X_{p}\bigr) = \sum_{i} X^{i}(p)\,\frac{\partial f}{\partial x^{i}}(p),$$

When $X$ is **smooth**, $X$ is a **derivation** on $C^{\infty}(M)$: $X(fg) = f\,Xg + g\,Xf$; conversely every derivation comes from a unique **smooth** vector field. ⚠ An **arbitrary section** satisfying only $\pi \circ X = \mathrm{id}$ does not work: $X = |x|\partial_{x}$ is a section, but with $f = x$ one gets $Xf = |x| \notin C^{\infty}$.

$X$ **vanishes** at $p$ if $X_{p} = 0_{p}$; the **support** of $X$ is $\overline{\{p \in M : X_{p} \ne 0\}}$.

> continued in nodes/def.vector-field.en.4.md
