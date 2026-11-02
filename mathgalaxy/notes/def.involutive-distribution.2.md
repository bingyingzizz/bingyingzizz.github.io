# 对合分布　`def.involutive-distribution`　·　说明
根 `../`

Frobenius 定理说它也是**充分**的。

**反例（Heisenberg 接触分布）**：$\mathbb{R}^{3}$ 上令 $\mathcal{D} = \ker\omega$，$\omega = \mathrm{d}z - x\,\mathrm{d}y$。

$X = \partial_{x}$ 与 $Y = \partial_{y} + x\,\partial_{z}$ 满足 $\omega(X) = 0$、$\omega(Y) = -x + x = 0$，所以它们是 $\mathcal{D}$ 的生成元；

但

$$[X,Y] = [\partial_{x},\ \partial_{y} + x\,\partial_{z}] = \partial_{z},\qquad \omega(\partial_{z}) = 1 \ne 0,$$

故 $[X,Y] \notin \mathcal{D}$：这个秩 $2$ 的接触分布不对合，因而**不可能有积分曲面**。它每点附近都「绕着拧」，任何曲面都装不下 —— 这是 Frobenius 定理最省事的反例。

⚠️ 「对合」是分布的性质，与生成元的选取无关（换生成元只是乘以 $\operatorname{GL}(k)$-值函数矩阵，括号的封闭性不变）。所以反例里只验一组生成元就够。
