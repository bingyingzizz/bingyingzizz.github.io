# 留数定理在 $f(\zeta)/(\zeta-z)$ 上就是 Cauchy 积分公式
`imp.derived-cif-from-residue` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.cauchy-integral-formula` Cauchy 积分公式

设 $\Omega$ 有界、$\partial\Omega$ 是分段光滑简单闭曲线、取正向，$f$ 在包含 $\overline{\Omega}$ 的开集上全纯。对 $z \in \Omega$ 令

$$g(\zeta) := \frac{f(\zeta)}{\zeta - z}.$$

则 $g$ 在 $\Omega$ 上除 $z$ 外全纯，$z$ 是它唯一的奇点（一阶极点）。把 $g$ 拆成

$$g(\zeta) = \frac{f(z)}{\zeta - z} + \frac{f(\zeta)-f(z)}{\zeta - z},$$

第二项在 $z$ 处有有限极限 $f^{\prime}(z)$，因而在 $\Omega$ 上全纯；第一项的 Laurent 系数 $c_{-1}$ 是 $f(z)$。所以 $\operatorname{Res}(g,z) = f(z)$。

**用留数定理**（只有一个奇点）：

> 续见 proofs/imp.derived-cif-from-residue.2.md
