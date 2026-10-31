# Tychonoff 定理　`thm.tykhonov`　·　说明
根 `../`

**证明（Alexander 子基引理 + 选择公理）。** 记 $X = \prod_{i\in I} X_{i}$，投影 $p_{i} : X\to X_{i}$。取**子基**
$$\mathcal{S} := \{\, p_{i}^{-1}(U_{i}) \;:\; i\in I,\ U_{i}\subseteq X_{i}\ \text{开} \,\}.$$
**Alexander 子基引理**：拓扑空间紧 $\iff$ 每个由子基成员组成的覆盖都有有限子覆盖。所以只需验证后者。
设 $\mathcal{S}_{0} \subseteq \mathcal{S}$ 覆盖 $X$，反设它**没有**有限子覆盖。对每个 $i$ 记
$$\mathcal{U}_{i} := \{\, U_{i} : p_{i}^{-1}(U_{i}) \in \mathcal{S}_{0} \,\},\qquad F_{i} := X_{i}\setminus \bigcup \mathcal{U}_{i}.$$
- **$F_{i} \ne \emptyset$**：否则 $\mathcal{U}_{i}$ 是紧空间 $X_{i}$ 的开覆盖，取有限子覆盖 $U_{1},\ldots,U_{n}$，对应的 $p_{i}^{-1}(U_{1}),\ldots,p_{i}^{-1}(U_{n})$ 就是 $X$ 的有限子覆盖 —— 与反设矛盾 ✓。
- 由**选择公理**取 $x_{i} \in F_{i}$，令 $x := (x_{i})_{i\in I} \in X$。
- 于是对每个 $p_{i}^{-1}(U_{i})\in \mathcal{S}_{0}$ 都有 $x_{i} \notin U_{i}$（因 $x_{i}\in F_{i

> 续见 notes/thm.tykhonov.2.md
