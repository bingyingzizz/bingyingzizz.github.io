# 底空间保有限积 + $k$-化与积 $\implies$ 投影公式
`imp-link.finprod-projcond` · 推出 · strong 边 · 根 `../`

`cor.cond-ktop-finite-products` 底空间保有限积 + `prop.k-product` k-化与积 → `prop.projection-formula-cond` 投影公式

**（一）$S$ 紧 Hausdorff 的情形。** 此时 $S$ 本身紧、$S(\cdot) = S$ ✓。由「底空间保有限积」
$$(S \times X)(\cdot) \;\cong\; k\bigl(S(\cdot) \times X(\cdot)\bigr) = k\bigl(S \times X(\cdot)\bigr) ✓$$
而 $S$ 紧 Hausdorff 因而局部紧，由「$k$-化与积」$k\bigl(S \times X(\cdot)\bigr) \cong S \times X(\cdot)$ ✓ —— 这一步正是「乘一个局部紧空间」与 $k$-化交换。
**（二）$S$ 只假设局部紧 Hausdorff 的情形（思路）。** 两边作为集合都是 $S \times X(\ast)$ ✓；而底空间的拓扑由「紧 Hausdorff 空间到它的映射」决定（底空间的定义）✓。$S$ 局部紧 Hausdorff 时是它自己的紧子空间的滤过余极限，把 (一) 逐块用上去即可 ✓。
两步合起来即得 $S \times X(\cdot) \cong (S \times X)(\cdot)$ ✓。

> 续见 proofs/imp-link.finprod-projcond.2.md
