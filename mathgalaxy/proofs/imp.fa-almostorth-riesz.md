# 无穷维 $\implies$ 单位球不紧
`imp.fa-almostorth-riesz` · 推出 · strong 边 · 根 `../`

`lem.almost-orthogonal` 几乎正交引理 → `thm.riesz-ball-compact` 单位球紧 ⟺ 有限维

递归取 $e_n$：$e_1$ 任取 $\|e_1\| = 1$；已有 $e_1..e_{n-1}$ 时，$F_{n-1} = \operatorname{span}\{e_1,..,e_{n-1}\}$ 是有限维闭真子空间，由几乎正交引理取 $e_n$，$\|e_n\| = 1$、$d(e_n, F_{n-1}) \ge 1/2$。
于是 $\|e_n - e_m\| \ge 1/2$（$n > m$ 时 $e_m \in F_{n-1}$）。这列在 $B_E$ 里但没有收敛子列，故 $B_E$ 不列紧，由「紧 $\iff$ 列紧」（度量空间）得它不紧。$\blacksquare$

> ⭐ 这是「无穷维没有紧单位球」的标准论证。
