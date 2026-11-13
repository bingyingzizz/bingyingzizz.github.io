# Residue Theorem　`thm.residue`
English entry · root `../`
[in graph](../#n=thm.residue)　·　[Chinese page (authoritative)](./thm.residue.md)

$$\oint_{\partial\Omega} f(z)\,\mathrm{d}z = 2\pi i \sum_{k=1}^{n} \operatorname{Res}(f, z_k).$$

## Notes · **draft**
⭐ Proof: around each $z_k$ remove a closed disk of radius $\varepsilon$ (pairwise disjoint, all contained in $\Omega$), obtaining $\Omega_\varepsilon = \Omega \setminus \bigcup_k \overline{B(z_k, \varepsilon)}$.

$f$ is holomorphic on $\Omega_\varepsilon$, so the **multiply connected** Cauchy–Goursat theorem gives $\oint_{\partial\Omega_\varepsilon} f = 0$, that is,

> continued in nodes/thm.residue.en.5.md
