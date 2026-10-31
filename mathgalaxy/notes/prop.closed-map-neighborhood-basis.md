# 闭映射的邻域基　`prop.closed-map-neighborhood-basis`　·　说明
根 `../`

**证明。** 设 $V \subseteq Y$ 是 $\pi^{-1}(A)$ 的开邻域。取
$$U := X \setminus \pi(Y \setminus V).$$
$\pi$ **闭**说明 $\pi(Y\setminus V)$ 闭，故 $U$ 是开集 ✓。逐条验：
- **$A \subseteq U$**：若 $a \in A$，则 $\pi^{-1}(a) \subseteq \pi^{-1}(A) \subseteq V$，故 $\pi^{-1}(a) \cap (Y\setminus V) = \emptyset$，即 $a \notin \pi(Y\setminus V)$，于是 $a \in U$ ✓；
- **$\pi^{-1}(U) \subseteq V$**：若 $y \in \pi^{-1}(U)$，则 $\pi(y) \notin \pi(Y\setminus V)$，特别地 $y \notin Y \setminus V$，即 $y \in V$ ✓。
于是每个 $\pi^{-1}(A)$ 的开邻域 $V$ 都含着一个形如 $\pi^{-1}(U)$ 的邻域，即这一族构成邻域基 ✓。∎

⭐ 一句话：**闭映射把「$A$ 的邻域」原样搬成「$\pi^{-1}(A)$ 的邻域」**。这条在构造延拓时用来把「局部定义域」从 $X$ 抬到 $Y$ 而不丢失信息（延拓定理证明里的标准一步）。
