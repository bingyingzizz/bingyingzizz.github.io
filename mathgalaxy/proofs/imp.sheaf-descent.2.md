# 预拓扑下的层 $\iff$ 正合列
`imp.sheaf-descent` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.pretopology` 预拓扑 + `def.sieve` 筛 → `thm.sheaf-descent` 层的下降条件

最后一步是米田引理。**在 $\mathbf{Set}$ 里，这个极限就是「每个 $F(X_{i})$ 里取一个元素」**，即 $\operatorname{Hom}(R, F) = \prod_{i} F(X_{i})$。

但这样只用到「$F$ 限制到每一块上」的信息，还没有把「两块在交叠处一致」写进来。要做这件事，就看 $R$ 的两条「投影」：把每个 $f_{i}$ 沿两条腿拉到 $X_{i} \times_{X} X_{j}$ 上，得到两个映射

$$\prod_{i} F(X_{i}) \overset{\alpha}{\underset{\beta}{\rightrightarrows}} \prod_{i,j} F(X_{i} \times_{X} X_{j}), \qquad \alpha((s_{i})_{i}) = (s_{i}|_{X_{i}\times_{X}X_{j}}),\quad \beta((s_{i})_{i}) = (s_{j}|_{X_{i}\times_{X}X_{j}})$$

> 续见 proofs/imp.sheaf-descent.3.md
