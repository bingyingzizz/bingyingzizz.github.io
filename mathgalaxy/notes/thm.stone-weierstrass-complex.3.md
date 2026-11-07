# Stone–Weierstrass（复情形）　`thm.stone-weierstrass-complex`　·　说明
根 `../`

⚠️ **「对共轭封闭」不能去掉**：取 $A = \mathrm{Alg}(z) \subseteq C(S^{1}, \mathbb{C})$（$S^{1}$ 上多项式代数在一致范数下的闭包，即圆盘代数），它含单位、分离点，但不含 $\bar z$。若 $\bar z \in \overline A$，就有多项式 $p_n$ 使 $p_n \to \bar z$ 一致；但对每个 $n$，$p_n(z)\,z$ 在 $S^{1}$ 上全纯延拓到单位圆盘、由 Cauchy 定理 $\int_{S^{1}} p_n(z)\,z\,dz = 0$，而一致收敛给 $\int_{S^{1}} p_n(z)\,z\,dz \to \int_{S^{1}} \bar z\, z\,dz = \int_{S^{1}} 1\,dz = 2\pi i \ne 0$，矛盾。

⭐ **与表示论的联系**：紧群 $G$ 的矩阵系数 $e_{ij}$ 生成 $C(G)$（因 $\{e_{ij}\}$ 对共轭封闭），且 $\Delta : C(G) \to C(G) \otimes C(G)$，$e_{ij} \mapsto \sum_k e_{ik} \otimes e_{kj}$ —— 这是 Peter–Weyl 的代数基础。
