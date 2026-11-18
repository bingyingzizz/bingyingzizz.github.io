# Stokes' Formula on a Single Cube　`lem.single-cube-stokes`
English entry · root `../`
[in graph](../#n=lem.single-cube-stokes)　·　[Chinese page (authoritative)](./lem.single-cube-stokes.md)

$$\int_{I^{k}}\mathrm{d}\eta = \sum_{j=1}^{k}\int_{I^{k-1}}\left[f_{j}\big|_{x^{j}=1} - f_{j}\big|_{x^{j}=0}\right]\mathrm{d}y.$$

**Right-hand side.** By `def.boundary-operator`, $\partial I^{k} = \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha} I^{k}_{(i,\alpha)}$. On face $(i,\alpha)$, the pullback of $\mathrm{d}x^{i}$ is $0$, so only the term with $j = i$ survives:

$$I^{k}_{(i,\alpha)}{}^{*}\eta = (-1)^{i-1} f_{i}\big|_{x^{i}=\alpha}\,\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{k-1},$$

> continued in nodes/lem.single-cube-stokes.en.6.md
