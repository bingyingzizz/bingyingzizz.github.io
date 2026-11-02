# 振幅判据 + 一致连续 $\implies$ 可积性三例
`imp.integrable-examples` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续 + `thm.evt` 最值定理 → `prop.integrable-examples` 哪些函数可积

**④ Dirichlet 函数不可积。** 任取分割 $P$：每个小区间同时含有理数与无理数（稠密性），故 $M_i = 1$、$m_i = 0$，振幅和 $U - L = \sum \Delta x_i = b - a$ 与 $P$ 无关，永远不小于 $\varepsilon = b - a$。由振幅判据不可积。∎

> ① 里用的正是「紧集上连续 $\implies$ 一致连续」—— 这是 ② 之外唯一需要紧性的地方，而 ② 靠的是**单调**（振幅自动沿分割点裂项）。
