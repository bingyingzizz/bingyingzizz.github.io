# imp.curvature-split
`imp.curvature-split` · 推出 · strong 边 · 根 `../`

`def.geodesic-curvature` 测地曲率 → `prop.curvature-split` 曲率分解

**正交基。** $|\dot\gamma| = 1$ 给出 $\langle \ddot\gamma,\dot\gamma\rangle = \frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}s}|\dot\gamma|^{2} = 0$，所以 $\ddot\gamma$ 落在 $\dot\gamma$ 的正交补里。$n$ 是 $S$ 的单位法向因而 $n\perp\dot\gamma$；$n\times\dot\gamma$ 与两者都正交且是单位向量。于是 $\{n,\,n\times\dot\gamma\}$ 是 $T_{\gamma}S$ 中 $\dot\gamma^{\perp}$ 的一组单位正交基（这里 $\dot\gamma^{\perp}$ 指 $\mathbb{R}^{3}$ 中与 $\dot\gamma$ 正交的二维空间）。
**分解。** 因此
$$\ddot\gamma = \langle \ddot\gamma,n\rangle n+\langle \ddot\gamma,n\times\dot\gamma\rangle\,(n\times\dot\gamma) = \kappa_{n}n+k_{g}\,(n\times\dot\gamma).$$
两个系数：第一个就是法曲率 $\kappa_{n} = \langle \ddot\gamma,n\rangle$，而 $\langle 

> 续见 proofs/imp.curvature-split.2.md
