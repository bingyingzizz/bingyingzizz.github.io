# imp.normal-completely-regular
`imp.normal-completely-regular` · 推出 · strong 边 · 根 `../`

`def.normal-space` 正规空间 → `def.completely-regular-space` 完全正则空间

正规空间的定义里已含 $T_{1}$，所以只需证 $T_{3.5}$ 那一半。

设 $F \subseteq X$ 闭、$x \notin F$。由 $T_{1}$，$\{x\}$ 是闭集，于是 $F$ 与 $\{x\}$ 是两个**不交闭集**。由 Urysohn 引理存在连续 $f : X \to [0,1]$ 使

$$f|_{F} \equiv 0, \qquad f(x) = 1 .$$

对任意闭集 $F$ 与 $x \notin F$ 都有这样的 $f$，即 $X$ 是 $T_{3.5}$；又已知 $T_{1}$，故完全正则 ✓。∎

⛔ **方向不能反**：这里用的是**正规**，不是正则。$T_{3}$ 只给不交开集、不给连续函数，所以「正则 $\implies$ 完全正则」是**假**的（Sorgenfrey 平面正是这种例子：它正则、完全正则，但存在正则而不完全正则的空间）。
