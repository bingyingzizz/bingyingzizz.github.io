# Tietze 延拓（Banach 值）　`thm.tietze-banach`　·　说明
根 `../`

再令
$$G := \sum_{i} \varphi_{i}\, g_{i} .$$
- **为什么良定义**：局部有限 $\implies$ 每个点附近只有有限个 $\varphi_{i}$ 非零，和是有限的；$V$ 是**向量空间**，凸组合有意义；$\varphi_{i}$ 连续，故 $G$ 连续。
- **为什么是延拓**：若 $x \in A$，则所有满足 $\varphi_{i}(x) > 0$ 的 $U_{i}$ 都含 $x$，而每个 $g_{i}$ 在 $A \cap U_{i}$ 上等于 $g$，于是 $G(x) = \sum \varphi_{i}(x) g(x) = g(x)$。
**应用到这里**：$X$ 正规（度量 / 仿紧空间都正规）、$K \subseteq X$ 紧故闭，$V$ 实 Banach 空间（局部凸），于是限制映射 $C(X,V) \twoheadrightarrow C(K,V)$ 满。$V = \mathbb{R}^{m}$ 是逐坐标用经典 Tietze。∎
