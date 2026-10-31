# 对合分布　`def.involutive-distribution`　·　说明
根 `../`

**为什么对合是「正确」的条件**：若有积分流形 $N$（`def.integral-manifold`），则「$X, Y$ 落在 $\mathcal{D}$ 里」等于「$X, Y$ 是 $N$ 上的向量场」，于是 $[X,Y]$ 必落在 $TN = \mathcal{D}$ 里 —— 对合是必要条件，而且它只用括号就能验。Frobenius 定理说它也是**充分**的。

**反例（Heisenberg 接触分布）**：$\mathbb{R}^{3}$ 上令 $\mathcal{D} = \ker\omega$，$\omega = \mathrm{d}z - x\,\mathrm{d}y$。$X = \partial_{x}$ 与 $Y = \partial_{y} + x\,\partial_{z}$ 满足 $\omega(X) = 0$、$\omega(Y) = -x + x = 0$，所以它们是 $\mathcal{D}$ 的生成元；但

$$[X,Y] = [\partial_{x},\ \partial_{y} + x\,\partial_{z}] = \partial_{z},\qquad \omega(\partial_{z}) = 1 \ne 0,$$

故 $[X,Y] \notin \mathcal{D}$：这个秩 $2$ 的接触分布不对合，因而**不可能有积分曲面**。它每点附近都「绕着拧」，任何曲面都装不下 —— 这是 Frobenius 定理最省事的反例。

> 续见 notes/def.involutive-distribution.3.md
