# 三角不等式 $\implies$ 零列关系是等价关系
`imp.triangle-cauchy` · 推出 · strong 边 · 根 `../`

`thm.triangle` 三角不等式 → `def.cauchy-null` Cauchy 列与零列

自反、对称直接由定义读出；**传递**要三角不等式：若 $(x_n) \sim (y_n)$、$(y_n) \sim (z_n)$，则 $|x_n - z_n| \le |x_n - y_n| + |y_n - z_n|$，右边两项都是零列，故 $(x_n) \sim (z_n)$。没有这一条，$\mathbb{R}$ 就没法定义成商集。∎
