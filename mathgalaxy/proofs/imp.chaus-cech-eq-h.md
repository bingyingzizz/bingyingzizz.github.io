# imp.chaus-cech-eq-h
`imp.chaus-cech-eq-h` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.sheaf-cohomology` 层上同调 → `prop.chaus-cech-eq-h` 紧 Hausdorff 上 Čech 就是上同调

**证明思路（经典的比较论证）。** 两边都是 $\Gamma(X, -)$ 的导出函子，差别只在「用哪种消解去算」。要证的其实是一件事：
**紧 Hausdorff 空间的开覆盖的 Čech 项是 $\Gamma(X, -)$-零调的。** 具体地，覆盖 $\mathfrak{X} = (X_{i})_{i}$ 的 Čech 复形每一项是 $\prod_{i} M(X_{i})$ 型的「有限多个可表对象上的取值」（紧性保证可以只取**有限**覆盖 —— 有限细化在覆盖的滤过系统里是共尾的），而这类对象正是「有截面 $\implies$ 零调」那一套（$\mathbb{Z}\cdot h_{X}$ 投射，见「有截面的态射给出零调」）适用的形状。
于是 Cartan–Leray 谱序列 $E^{p,q}_{2} = \ch

> 续见 proofs/imp.chaus-cech-eq-h.2.md
