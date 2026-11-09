# Cauchy 积分公式、留数公式与 Cauchy–Goursat $\implies$ Newman 围道恒等式
`imp.newman-cauchy-residue` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `lem.newman-tauberian` Newman 解析定理

**Cauchy 积分公式。** 设 $D=\{|z|\le R,\ \operatorname{Re}z\ge-\delta\}$ 是 $g$ 的全纯邻域，$C=\partial D$ 取正向。在 $D$ 上考虑 $(g-g_T)F/z$，其中 $F(z)=e^{zT}(1+z^{2}/R^{2})$ 整、$F(0)=1$。它唯一的极点是 $z=0$（单极点），由 Cauchy 积分公式

$$g(0)-g_T(0)=\frac{1}{2\pi i}\oint_C (g-g_T)(z)\,F(z)\,\frac{dz}{z}.$$

**留数公式。** 上式右端正是 $z=0$ 处留数的 $2\pi i$ 倍：$\operatorname{Res}_{z=0}\bigl((g-g_T)F/z\bigr)=(g(0)-g_T(0))F(0)=g(0)-g_T(0)$。

> 续见 proofs/imp.newman-cauchy-residue.2.md
