# imp.stalk-separated
`imp.stalk-separated` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.topos` 拓扑斯 + `def.filtered-category` 滤过范畴 + `def.natural-transformation` 自然变换 → `prop.stalk-separated` 茎与分离预层

对每个 $x \in U$：$s$ 与 $t$ 在 $T_{x}$ 里相等，意味着存在开邻域 $U_{x} \subseteq U$（$x \in U_{x}$）使 $s|_{U_{x}} = t|_{U_{x}}$ ✓。

$\{U_{x}\}_{x \in U}$ 是 $U$ 的开覆盖，由**分离性**得 $s = t$ ✓。
$(\Longleftarrow)$ 反过来设 $s, t \in T(U)$ 在某个开覆盖 $(U_{i})$ 的每支上相等。

任取 $x \in U$，取一支 $U_{i} \ni x$，则 $s$ 与 $t$ 在 $x$ 的邻域 $U_{i}$ 上相等，故它们在茎 $T_{x}$ 里相等 ✓；

这对一切 $x \in U$ 成立，由单射性得 $s = t$ ✓。

∎
