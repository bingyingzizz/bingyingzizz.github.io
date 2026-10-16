# Tietze 延拓（Banach 值）　`thm.tietze-banach`　·　说明
根 `../`

**证明（Dugundji 延拓定理）。** 取值在拓扑向量空间里的 Tietze 是 Dugundji 的定理：设 $X$ **仿紧**（度量空间即可）、$A \subseteq X$ **闭**、$V$ 是**局部凸**拓扑向量空间，则存在**线性**延拓算子 $C(A, V) \to C(X, V)$，特别地限制映射满。
- **构造**：仿紧性给出 $A$ 的一个开邻域系 $\{U_{i}\}$ 的局部有限细化与配套的**单位分解** $\{\varphi_{i}\}$（$\sum \varphi_{i} = 1$，$\varphi_{i} \ge 0$，支集在 $U_{i}$ 里）。每个 $U_{i}$ 上先把 $g|_{A \cap U_{i}}$ 延拓成一个常值映射 $g_{i}$（取 $A\cap U_{i}$ 上某点的值）；再令
$$G := \sum_{i} \varphi_{i}\, g_{i} .$$
- **为什么良定义**：局部有限 $\implies$ 每个点附近只有有限个 $\varphi_{i}$ 非零，和是有限的；$V$ 是**向量空间**，凸组合有意义；$\varphi_{i}$ 连续，故 $G$ 连续。
- **为什么是延拓**：若 $x \in A$，则所有满足 $\varphi_{i}(x) > 0$ 的 $U_{i}$ 都含 $x$，而每个 $g_{i}$ 在 $A \cap U_{i}$ 上等于 $g$，于是 $G(x) = \sum \varphi_{i}(x) g(x) = g(x)$

> 续见 notes/thm.tietze-banach.3.md
