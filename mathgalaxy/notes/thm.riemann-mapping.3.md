# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

\emptyset$ 给 $s>0$。取 $\varphi_{n}\in\mathcal{F}$ 使 $|\varphi_{n}'(z_{0})|\to s$。族在 $\Omega$ 的每个紧子集上一致有界（$|\varphi_{n}|<1$），由 Montel 定理（`thm.montel`）存在内闭一致收敛子列，仍记 $\varphi_{n}\to f$。则 $f$ 全纯（Weierstrass 收敛定理 `thm.weierstrass-convergence`），$f(z_{0})=0$，$|f'(z_{0})|=\lim|\varphi_{n}'(z_{0})|=s$，故 $f$ 非常数；由第 0 步（b）$f$ 单叶。又 $|f|\le1$ 而 $f$ 非常数，最大模原理给 $|f|<1$，即 $f:\Omega\to\mathbb{D}$。故 $f\in\mathcal{F}$ 且达到极大。
**第三步：$f$ 必满射。** 反设存在 $a\in\mathbb{D}\setminus f(\Omega)$。令 $\varphi_{a}(w)=(w-a)/(1-\bar a w)$ —— $\mathbb{D}$ 的自同构，$\varphi_{a}(a)=0$、$\varphi_{a}'(a)=1/(1-|a|^{2})$。$F:=\varphi_{a}\circ f$ 在 $\Omega$ 上全纯且无零点（$f(\Omega)\subset\mathbb{D}\setminus\{a\}$），$\Omega$ 单连通，故存在全纯 $h$ 使 $h^{2}=F$（`prop.single-valued-branch`）。$h$ 单叶：$h(z_{1})=\pm h(z_{2})\implies F(z_{1})=F(z_{2})\implies f(z_{1})=f(

> 续见 notes/thm.riemann-mapping.4.md
