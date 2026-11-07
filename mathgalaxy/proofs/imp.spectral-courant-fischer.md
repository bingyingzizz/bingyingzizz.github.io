# 谱定理 $\Longrightarrow$ Courant–Fischer（Rayleigh 商 + 维数计数）
`imp.spectral-courant-fischer` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） → `thm.courant-fischer` Courant–Fischer 极小极大原理

**① Rayleigh 商是加权平均**。谱定理给标准正交特征基 $u_{1}, \ldots, u_{n}$，$Au_{i} = \lambda_{i}u_{i}$，$\lambda_{1} \ge \cdots \ge \lambda_{n}$；对 $x = \sum c_{i}u_{i} \ne 0$ 有 $R_{A}(x) = \sum \lambda_{i}|c_{i}|^{2} \big/\ \sum |c_{i}|^{2}$，即以 $|c_{i}|^{2}$ 为权的加权平均。

**② 上界**。任取 $\dim S = k$：$S$ 与 $\operatorname{span}(u_{k}, \ldots, u_{n})$ 的维数之和 $k + (n - k + 1) > n$，故有交，交中非零向量满足 $c_{1} = \cdots = c_{k-1} = 0$，于是 $R_{A} \le \lambda_{k}$；所以 $\min_{S} R_{A} \le \lambda_{k}$ 对一切 $\dim S = k$ 的 $S$ 成立。

> 续见 proofs/imp.spectral-courant-fischer.2.md
