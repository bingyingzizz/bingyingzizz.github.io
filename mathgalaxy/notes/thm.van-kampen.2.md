# van Kampen 定理　`thm.van-kampen`　·　说明
根 `../`

$$\alpha \;\simeq_{x_{0}}\; \prod_{i=1}^{n} \big(\beta_{i-1}^{-1} \alpha_{i} \beta_{i}\big),$$

右边每个因子是**完全落在 $U$ 或 $V$ 里**的、以 $x_{0}$ 为基点的闭道路。其实只需要 $\alpha_{i}$ 与相邻的 $\beta_{i-1}$、$\beta_{i}$ **同落在一个**开集里：这样乘积的每一项才能写成 (在 $U$ 中) 或 (在 $V$ 中) 的环路。

**第二步（满射）**：令 $\Phi : \pi_{1}(U) * \pi_{1}(V) \to \pi_{1}(X)$ 由两个包含诱导的群同态给出（自由积的泛性质）。第一步说明每个 $[\alpha] \in \pi_{1}(X)$ 都是若干 $\Phi$-像的乘积，故 $\Phi$ 满射。记 $q : \pi_{1}(U) * \pi_{1}(V) \to P := (\pi_{1}(U) * \pi_{1}(V))/N$ 为商映射。由于对 $\gamma \in G$，$\Phi(i_{*}\gamma \cdot j_{*}\gamma^{-1}) = [\gamma]\,[\gamma]^{-1} = 1$，有 $N \subseteq \ker \Phi$，故 $\Phi$ 下降为

$$\bar{\Phi} : P \longrightarrow \pi_{1}(X).$$

它仍是满射。下面构造它的逆。

> 续见 notes/thm.van-kampen.3.md
