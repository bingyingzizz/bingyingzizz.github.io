# $(a) \iff (b) \iff (c)$：微积分基本定理的三条等价
`imp.ftc` · 推出 · strong 边 · 根 `../`

`lem.ac-subset-bv` AC ⊆ BV + `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续 + `prop.nbv-derivative` NBV 函数的导数与测度的关系 → `thm.ftc-lebesgue` 微积分基本定理（Lebesgue 版）

$>$ ⭐ 最容易错的直觉是「a.e. 可导 $F' \in L^{1}$ 就够」——**Cantor 函数**正是反例：它 a.e. 可导、$F' \equiv 0 \in L^{1}$，但 $\int _{0}^{1} F' = 0 \ne 1$。**绝对连续这一条不能省。**

> 这条定理是整个「有界变差 / 绝对连续」星团的收官：它把函数侧、积分侧、导数侧三个刻画焊在一起。
