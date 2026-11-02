# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

**证明结构（三步，这是本图最深的定理之一，给骨架 + 关键计算 + 出处）**：

**第一步：族不空。** $\Omega \ne \mathbb{C}$ 给出 $a \notin \Omega$；因 $\Omega$ 单连通，存在全纯的单值支 $\sqrt{z - a}$（`prop.single-valued-branch`）。

它把 $\Omega$ 双全纯地送到某个区域内，再用分式线性变换把它搬进 $\mathbb{D}$ 并让 $z_{0} \mapsto 0$。

所以候选族 $\mathcal{F} := \{\, \varphi : \Omega \to \mathbb{D} \text{ 单叶全纯},\ \varphi(z_{0}) = 0 \,\}$ 非空。

**第二步：取极值元。** 由 Cauchy 不等式，$|\varphi'(z_{0})|$ 被 $1/\operatorname{dist}(z_{0}, \partial\Omega)$ 控制，故 $s := \sup_{\varphi \in \mathcal{F}} |\varphi'(z_{0})| \in (0, \infty)$。

取 $\varphi_{n}$ 使 $|\varphi_{n}'(z_{0})| \to s$；

> 续见 notes/thm.riemann-mapping.2.md
