# 勒贝格数　`def.lebesgue-number`　·　续页（第 2 页）
[在星图里打开](../#n=def.lebesgue-number)　·　第 1 页 [nodes/def.lebesgue-number.md](./def.lebesgue-number.md)

## 陈述（续）
设 $(X, d)$ 是**紧**度量空间，$\mathcal{U} = \{U_{i}\}_{i \in I}$ 是它的开覆盖。称 $\lambda > 0$ 为该覆盖的**勒贝格数**，若

$$\operatorname{diam}(A) < \lambda \ \Longrightarrow\ A \subseteq U_{i} \ \text{对某个}\ i .$$

**引理**：紧度量空间的每个开覆盖都有正勒贝格数。

**证明。** 由紧性取有限子覆盖 $U_{1}, \ldots, U_{n}$。令
$$f(x) := \max_{1 \le j \le n} d(x,\, X \setminus U_{j}) = \max_{j}\ \inf_{y \notin U_{j}} d(x, y) ,$$
每个 $x \mapsto d(x, X\setminus U_{j})$ 是连续函数（距离函数连续），有限个的 max 仍连续；又因为 $\{U_{j}\}$ 覆盖 $X$，每个 $x$ 至少属于某个 $U_{j}$，于是 $d(x, X \setminus U_{j}) > 0$，故 $f(x) > 0$ 处处成立。$X$ 紧、$f$ 连续 $\implies$ $f$ 取到最小值 $\lambda := \min f > 0$（这里用到 $f > 0$ 处处成立：最小值不可能为 $0$）。

> 续见 [nodes/def.lebesgue-number.3.md](./def.lebesgue-number.3.md)
