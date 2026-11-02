# 网收敛与滤子收敛等价
`eq.net-filter` · 等价 · strong 边 · 根 `../`

`def.net` 网 → `def.filter` 滤子

**网 → 滤子**

设 $(x_{\lambda})_{\lambda \in \Lambda}$ 是网。令

$$\mathcal{F} := \bigl\{\, A \subseteq X : \exists \lambda_{0},\ \forall \lambda \ge \lambda_{0},\ x_{\lambda} \in A \,\bigr\} ,$$

即「网最终落在其中」的集合族。**验证滤子公理**：$\emptyset \notin \mathcal{F}$（网总有值）、$X \in \mathcal{F}$；上闭显然；$A, B \in \mathcal{F}$ 时取两个 $\lambda_{0}$ 的上界 $\nu$，则 $\lambda \ge \nu$ 时 $x_{\lambda} \in A \cap B$，故 $A \cap B \in \mathcal{F}$ ✓。

**收敛一致**：$x_{\lambda} \to x$ $\iff$ 每个邻域 $U \ni x$ 都有「最终落在 $U$」$\iff$ $\mathcal{N}(x) \subseteq \mathcal{F}$ $\iff$ $\mathcal{F} \to x$ ✓。

**滤子 → 网**

设 $\mathcal{F}$ 是滤子。取指标集

> 续见 proofs/eq.net-filter.2.md
