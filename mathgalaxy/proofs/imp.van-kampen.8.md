# imp.van-kampen
`imp.van-kampen` · 推出 · strong 边 · 根 `../`

`def.fundamental-group` 基本群 + `def.lebesgue-number` 勒贝格数 + `def.path-homotopy` 道路同伦 + `def.normal-subgroup` 正规子群 → `thm.van-kampen` van Kampen 定理

给每个网格顶点 $v$ 选一条从 $x_{0}$ 到 $H(v)$ 的连接道路：若 $H(v) \in U \cap V$，取在 $U \cap V$ 中；若 $H(v) \in U \setminus V$，取在 $U$ 中（此时**所有**含 $v$ 的小方格的像都在 $U$ 里，因为若某格在 $V$，则 $v$ 的像也在 $V$，矛盾）；若 $H(v) \in V \setminus U$，对称地取在 $V$ 中。于是每个小方格 $c$ 的四条边（用两端的连接道路共轭到 $x_{0}$）给出的环路**整条落在**同一个开集（$U$ 或 $V$）里，并且这个环路就是 $c$ 的边界在 $X$ 中的像，它在那个开集里**零伦**（$c$ 是圆盘，$c$ 的像提供零伦）。故该小方格贡献的字在 $\pi_{1}(U)$（或 $\pi_{1}(V)$）中等于 $1$。

> 续见 proofs/imp.van-kampen.9.md
