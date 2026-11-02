# 正规推出完全正则（Urysohn 引理的推论）
`imp.normal-completely-regular` · 推出 · strong 边 · 根 `../`

`def.normal-space` 正规空间 + `lem.urysohn` Urysohn 引理 → `def.completely-regular-space` 完全正则空间

设 $X$ 正规（$T_4$），$F \subseteq X$ 闭、$x \notin F$。则 $F$ 与单点集 $\{x\}$ 是两个不交闭集（$T_4$ 含 $T_1$，故 $\{x\}$ 闭）。

由 Urysohn 引理（`lem.urysohn`：正规空间中两个不交闭集可由 $[0,1]$ 上的连续函数分开）存在连续 $f : X \to [0, 1]$ 使

$$f|_{F} \equiv 0, \qquad f(x) = 1 .$$

于是对任意闭集 $F$ 与 $x \notin F$ 都有这样的 $f$，即 $X$ 完全正则。再加上 $X$ 已 $T_1$，得 $T_{3.5}$ ✓。

⭐ **方向不能反**：这里用到的是**正规**（$T_4$），不是正则（$T_3$）。$T_3$ 只给不交开集、不给连续函数，所以 $T_3 \implies T_{3.5}$ 是**假**的（Sorgenfrey 平面之外的经典反例都要靠这条差别）。
⚠️ 反过来 $T_{3.5} \implies T_3$ 只要一行：取 $U = f^{-1}([0, 1/2))$、$V = f^{-1}((1/2, 1])$。
