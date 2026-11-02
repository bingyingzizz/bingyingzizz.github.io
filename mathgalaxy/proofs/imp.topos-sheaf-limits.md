# 拓扑斯上的层 $\iff$ 保极限
`imp.topos-sheaf-limits` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.canonical-topology` 标准拓扑 → `prop.topos-sheaf-limits` 拓扑斯上的层即保极限的预层

**(层 $\implies$ 保极限)** 设 $F$ 是层，$R$ 是 $X$ 的覆盖筛。按标准拓扑的定义，$R \in J(X)$ 恰好意味着

$$X \;\cong\; \varinjlim_{X' \to X \in R} X'$$

（每个从 $X$ 出发的箭头都能被 $R$ 里的箭头穿过。）把 $F$ 作用上去：

$$F(X) \;\cong\; \varprojlim_{X' \to X \in R} F(X')$$

左边是 $\operatorname{Hom}(h_{X}, F)$、右边是 $\operatorname{Hom}(R, F)$，这正是层的双射条件。∎

> 续见 proofs/imp.topos-sheaf-limits.2.md
