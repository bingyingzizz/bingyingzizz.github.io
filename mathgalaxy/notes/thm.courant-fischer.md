# Courant–Fischer 极小极大原理　`thm.courant-fischer`　·　说明
根 `../`

**证明**（谱定理 + 子空间维数计数）。由谱定理，存在 $\mathbb{C}^{n}$ 的标准正交基 $u_{1}, \ldots, u_{n}$ 与实数 $\lambda_{1} \ge \cdots \ge \lambda_{n}$ 使 $Au_{i} = \lambda_{i}u_{i}$。对 $x = \sum_{i} c_{i}u_{i} \ne 0$，

$$R_{A}(x) = \frac{\langle Ax, x\rangle}{\langle x, x\rangle} = \frac{\sum_{i} \lambda_{i}|c_{i}|^{2}}{\sum_{i} |c_{i}|^{2}}$$

是 $\lambda_{1}, \ldots, \lambda_{n}$ 的加权平均（权 $|c_{i}|^{2} \ge 0$ 不全为零）。

**第一等式**。上界：任取 $\dim S = k$。$S$ 与 $\operatorname{span}(u_{k}, \ldots, u_{n})$ 的维数之和是 $k + (n-k+1) = n+1 > n$，故有交，取交中单位向量 $x$；它的 $c_{1} = \cdots = c_{k-1} = 0$，故 $R_{A}(x)$ 是 $\lambda_{k}, \ldots, \lambda_{n}$ 的加权平均，$\le \lambda_{k}$。于是 $\min_{S} R_{A} \le \lambda_{k}$ 对一切 $S$ 成立，取 $\max$ 得 $\le \lambda_{k}$。

> 续见 notes/thm.courant-fischer.2.md
