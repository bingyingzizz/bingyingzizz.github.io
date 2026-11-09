# Carathéodory 延拓 + Urysohn 夹逼 + 单点紧化 $\Longrightarrow$ Riesz 表示（依赖登记）
`imp.riesz-markov-inputs` · 推出 · strong 边 · 根 `../`

`thm.caratheodory` Carathéodory 定理 + `lem.urysohn` Урысон 引理 + `def.one-point-compactification` 一点紧化 → `thm.riesz-markov` Riesz–Markov 表示

1. `def.one-point-compactification`（单点紧化）：`X` 局部紧 Hausdorff $\implies$ `X^{+}` 紧 Hausdorff $\implies$ 正规，于是可以在 `X^{+}` 里对闭集用 Urysohn 造夹逼函数 `\varphi`；
2. `lem.urysohn`（Urysohn 引理）：引理 2 的次可加性、紧集上有限性、上下界与唯一性，每一步都靠它造 `\varphi \in C_{c}(X)`（`\varphi = 1` 于 `K`、支集落在指定的相对紧开集里）；
3. `thm.caratheodory`（Carathéodory 延拓）：第 ③ 步把造好的外测度 `\mu^{*}` 限制到 Borel 集上得到 Radon 测度。

> ⚠ 依赖登记边：这三条只是证明链的三块输入，单独都不构成蕴含；表示引理本身的上下界与唯一性在节点注第 ④ 步。
