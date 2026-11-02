# 预测度 $\implies$ 诱导的外测度
`imp.premeasure-to-outer` · 推出 · strong 边 · 根 `../`

`def.premeasure` 预测度 → `prop.outer-measure-induced` 由预测度诱导外测度

设 $\mathfrak{A}$ 是代数，$\mu _{0}$ 是 $\mathfrak{A}$ 上的预测度。对 $A \subseteq X$ 令

$$\mu^*(A) = \inf \{ \sum_j \mu_0(E_j) : E_j \in \mathfrak{A}, A \subseteq \bigcup_j E_j \}$$

**① 定义合理**：$A \subseteq X$ 且 $X \in \mathfrak{A}$，所以总有覆盖，inf 是对非空集合取。

**② $\mu^{*}(\emptyset ) = 0$**：取 $E_{1} = \emptyset$、$E_{2} = E_{3} = \cdots = \emptyset$，则 $\sum \mu _{0}(E_{j}) = 0$，故 $0 \le \mu^{*}(\emptyset ) \le 0$。

**③ 单调**：$A \subseteq B$ 时，$B$ 的每个覆盖也是 $A$ 的覆盖，故 $A$ 的下确界集合更大，$\mu^{*}(A) \le \mu^{*}$(B)。

> 续见 proofs/imp.premeasure-to-outer.2.md
