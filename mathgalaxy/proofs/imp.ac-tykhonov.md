# 选择公理：Tychonoff 定理（Alexander 子基引理）
`imp.ac-tykhonov` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `thm.tykhonov` Tychonoff 定理

设 $X = \prod_{i \in I} X_{i}$，$X_{i}$ 紧。由 Alexander 子基引理，只需验证：每个由**子基**元素（即 $p_{i}^{-1}(U_{i})$，$U_{i} \subseteq X_{i}$ 开）组成的覆盖都有有限子覆盖。

反设某个子基覆盖 $\{p_{i}^{-1}(U_{i})\}$ 没有有限子覆盖。对每个 $i$，考虑 $X_{i}$ 里的开集族 $\mathcal{U}_{i} := \{U_{i} : p_{i}^{-1}(U_{i})\ \text{在覆盖里}\}$。若某个 $\mathcal{U}_{i}$ 覆盖 $X_{i}$，则由 $X_{i}$ 紧取出有限子覆盖，对应回 $X$ 就是有限子覆盖 —— 矛盾。故每个 $\mathcal{U}_{i}$ 都不覆盖 $X_{i}$，即每层都存在一个「逃出去」的点。

**这一步要用选择公理**：对每个 $i$ 同时挑出一个 $x_{i} \in X_{i} \setminus \bigcup \mathcal{U}_{i}$（各族非空，但没有统一的规则）。令 $x := (x_{i})_{i \in I}$。

> 续见 proofs/imp.ac-tykhonov.2.md
