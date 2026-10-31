# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

**第二步：取极值元。** 由 Cauchy 不等式，$|\varphi'(z_{0})|$ 被 $1/\operatorname{dist}(z_{0}, \partial\Omega)$ 控制，故 $s := \sup_{\varphi \in \mathcal{F}} |\varphi'(z_{0})| \in (0, \infty)$。取 $\varphi_{n}$ 使 $|\varphi_{n}'(z_{0})| \to s$；族在 $\mathbb{D}$ 内一致有界，由 **Montel 定理**（`thm.montel`）有内闭一致收敛子列，极限 $f$ 全纯，$f(z_{0}) = 0$、$|f'(z_{0})| = s$，且 $f$ 单叶（单叶性在一致收敛下保持：若 $f(z_{1}) = f(z_{2})$，用 Rouché 或 Hurwitz 反推 $\varphi_{n}$ 不单叶，矛盾）。

**第三步：$f$ 满射。** 若 $f$ 漏掉某点 $w_{1} \in \mathbb{D}$，用 $\mathbb{D}$ 的自同构把 $w_{1}$ 搬到 $0$，再取平方根分支、再搬回去，构造 $\psi \in \mathcal{F}$ 使 $|\psi'(z_{0})| > s$ —— 与 $s$ 的极大性矛盾（这一步是纯计算，核心是 $|g'(0)| = \frac{1 + |a|}{2\sqrt{|a|}} > 1$）。故 $f$ 满。∎

> 续见 notes/thm.riemann-mapping.3.md
