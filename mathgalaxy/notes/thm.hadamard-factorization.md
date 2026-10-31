# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**证明思路（骨架）**：

**第一步：零点密度。** 由 Jensen 公式（`prop.jensen`）$n(R) \log 2 \le \log M(2R) + O(1)$，而 $\log M(2R) = O(R^{\rho + \varepsilon})$，故 $n(R) = O(R^{\rho+\varepsilon})$，于是 $\sum |a_{n}|^{-(\rho+\varepsilon)} < \infty$。这一步说明**统一取 $p = \lfloor \rho \rfloor$ 就够**。

**第二步：除掉零点。** 令 $\Phi(z) := f(z)\big/\prod E_{p}(z/a_{n})$，则 $\Phi$ 无零点、且仍是有限阶（乘积的贡献被初等因子的估计压住）。

**第三步：无零点的有限阶整函数 = $e^{\text{多项式}}$。** 写 $\Phi = e^{h}$（单连通，`prop.single-valued-branch`），则 $\operatorname{Re} h = \log|\Phi| = O(r^{\rho+\varepsilon})$。对 $h$ 用 Borel–Carathéodory 不等式，得 $h$ 是次数 $\le \rho$ 的多项式。∎

⭐ **它是 Weierstrass 乘积的「定量版」**：一旦知道增长阶，就能把因子统一化、并把自由度压成一个多项式。Picard 小定理（`thm.picard-little`）在有限阶情形就靠它证。

> 续见 notes/thm.hadamard-factorization.2.md
