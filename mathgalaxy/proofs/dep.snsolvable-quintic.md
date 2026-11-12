# $S_{5}$ 不可解排除根式解
`dep.snsolvable-quintic` · 推出 · strong 边 · 根 `../`

`prop.sn-solvable` 对称群的可解性 + `thm.radical-solvable` 根式可解 与 伽罗瓦群可解 → `thm.quintic-unsolvable` 五次方程没有根式解

取 $f=x^{5}-4x+2$。前三步定出伽罗瓦群是 $S_{5}$：不可约 $\implies$ 传递含 $5$-循环；恰三实根 $\implies$ 复共轭给一个换位；$5$-循环加换位生成 $S_{5}$。最后一步取逆否：若 $f$ 根式可解，`thm.radical-solvable` 给出 $\operatorname{Gal}(f)$ 可解；但 $S_{5}$ 不可解 —— 这正是 `prop.sn-solvable` 的内容（$A_{5}$ 单且非交换，故 $S_{5}$ 的换位子列停在 $A_{5}\ne1$）。矛盾。∎

> $S_{5}$ 不可解（$A_{5}$ 单且非交换）—— 图里那句孤立的话，现在终于有下游了。
