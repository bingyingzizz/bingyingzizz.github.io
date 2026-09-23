# Fatou $\implies$ 控制收敛定理
`imp.dct` · 推出 · strong 边 · 根 `../`

`lem.fatou` Fatou 引理 → `thm.dct` 控制收敛定理

**④** ②与③合起来 $\limsup \le \int f \le \liminf$，故极限存在且等于 $\int f$。∎

$>$ ⭐ 关键在于**控制函数提供的非负性**：$g \pm  f_n$ 都是非负的，于是 Fatou 可以直接用。没有 $g$，这一步就写不出来。
$>$ 移项之所以合法，是因为 $g$ 可积（$\int g < \infty$）—— 这正是「控制函数必须属于 $L^{1}$」而不能只是「有界」的原因。
