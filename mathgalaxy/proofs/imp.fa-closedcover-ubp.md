# 闭覆盖有内点 $\implies$ 一致有界原理
`imp.fa-closedcover-ubp` · 推出 · strong 边 · 根 `../`

`lem.countable-closed-cover` 闭覆盖的内点 → `thm.ubp` 一致有界原理

令 $F_k := \{x \in E : \sup_i \|u_i x\| \le k\}$。每个 $\{x : \|u_i x\| \le k\}$ 是闭集（$u_i$ 与范数连续），故 $F_k$ 闭。
逐点有界 $\implies E = \bigcup_k F_k$。由「可数个闭集覆盖 Baire 空间 $\implies$ 内点之并稠密」，某个 $F_k$ 有内点，即存在 $B(x_0, r) \subseteq F_k$。
对 $\|x\| \le r$：$\sup_i\|u_i x\| \le \sup_i\|u_i(x + x_0)\| + \sup_i\|u_i x_0\| \le 2k$（两项分别落在 $F_k$ 的两点上）。对任意 $y \ne 0$ 取 $x = r y/\|y\|$，得 $\|u_i y\| \le 2k\|y\|/r$ 对一切 $i$，故 $\sup_i \|u_i\| \le 2k/r < \infty$。$\blacksquare$

> 整条证明只有一处非平凡：某个 $F_k$ 必须有内点 —— 那就是 Baire。
