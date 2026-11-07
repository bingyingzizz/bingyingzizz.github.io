# 无穷公理 + 分离公理模式 $\implies \omega$ 存在
`imp.inf-to-omega` · 推出 · strong 边 · 根 `../`

`ax.inf` 无穷公理 + `ax.sep` 分离公理模式 → `thm.omega` 自然数集存在

1. 由无穷公理取一个归纳集 $I$。称 $J \subseteq I$ 是**归纳的**，若 $\emptyset \in J$ 且 $\forall x (x \in J \to x \cup \{x\} \in J)$。
2. **不需要幂集公理**：分离公理模式的公式里本来就允许对集合量化，故可直接从 $I$ 里取出交（不用先把 $\mathcal{P}(I)$ 或归纳子集之族造出来）。令

$$\omega = \{ x \in I : \forall J \bigl( (J \subseteq I \wedge J\text{ 是归纳的}) \to x \in J \bigr) \}$$

即 $\omega$ 是所有归纳子集的交。

> 续见 proofs/imp.inf-to-omega.2.md
