# Weierstrass 收敛性定理　`thm.weierstrass-convergence`　·　说明
根 `../`

**证明（1）**：全纯性用 `thm.morera` 判。任取 $\Omega$ 内的闭三角形 $T$（含内部），每个 $f_{k}$ 沿 $\partial T$ 的积分为零（Cauchy–Goursat）；$\partial T$ 是紧集，一致收敛使积分可以取极限，故 $\oint_{\partial T} f = \lim_{k} \oint_{\partial T} f_{k} = 0$。由 Morera，$f$ 全纯。

**证明（2）**：设 $K \subset \Omega$ 紧，取 $r > 0$ 使 $K$ 的 $r$-邻域仍在 $\Omega$ 内。对 $z \in K$ 用 Cauchy 高阶导数公式（`thm.cauchy-higher-derivative`）在半径 $r$ 的圆上积分：

$$\left|f_{k}^{(m)}(z) - f^{(m)}(z)\right| \le \frac{m!}{r^{m}}\,\sup_{|\zeta - z| \le r}\left|f_{k}(\zeta) - f(\zeta)\right|.$$

右端与 $z$ 无关且随 $k \to \infty$ 趋于 $0$，故在 $K$ 上一致收敛。∎

⭐ **为什么它是「整章的地基」**：它保证「全纯」这个性质在一致收敛下**封闭**，于是可以放心地取极限 —— 正规族（`thm.montel`）、Riemann 映射定理（`thm.riemann-mapping`）、Hurwitz 定理都靠它把「极限函数仍然是全纯的」这句话合法化。

> 续见 notes/thm.weierstrass-convergence.2.md
