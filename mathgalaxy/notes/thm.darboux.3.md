# Darboux 定理　`thm.darboux`　·　说明
根 `../`

**第四步：解方程并积分成流**。每个 $\omega_{t}$ 非退化，故线性映射 $X \mapsto \iota_{X}\omega_{t}$ 是 $T_{x}M \to T_{x}^{*}M$ 的同构，存在唯一光滑向量场 $X_{t}$ 满足 $\iota_{X_{t}}\omega_{t} = -\theta$，且 $X_{t}$ 光滑依赖于 $(t, x)$。把 $t$ 看成额外坐标，在 $M \times \mathbb{R}$ 上对向量场 $(X_{t}, \partial_{t})$ 用 `thm.flow-local`，得到 $p$ 附近定义在 $[0, 1]$ 上的局部流 $\varphi_{t}$，满足 $\varphi_{0} = \operatorname{id}$ 与 $\frac{d}{dt}\varphi_{t}(x) = X_{t}(\varphi_{t}(x))$。必要时再缩小 $U$，使 $\varphi_{t}$ 对 $t \in [0, 1]$ 都有定义。

**第五步：$\varphi_{1}^{*}\omega = \omega_{0}$**。对 $t$ 求导，用 Cartan 公式 $\mathcal{L}_{X} = d\iota_{X} + \iota_{X}d$ 与 $\frac{d}{dt}\omega_{t} = \eta$：

> 续见 notes/thm.darboux.4.md
