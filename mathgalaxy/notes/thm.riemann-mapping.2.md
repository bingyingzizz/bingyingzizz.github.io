# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

\Omega$ 单连通，故存在全纯 $g$ 使 $g^{2}=z-a$（`prop.single-valued-branch`：无零点全纯函数在单连通区域有单值对数支，再取 $\exp(\tfrac12\log)$）。$g$ 单叶：$g(z_{1})=g(z_{2})\implies z_{1}=z_{2}$。又 $g(\Omega)\cap(-g(\Omega))=\emptyset$：若 $g(z_{1})=-g(z_{2})$，平方得 $z_{1}=z_{2}$，于是 $g(z_{1})=-g(z_{1})$，故 $g(z_{1})=0$，与 $g^{2}=z-a\ne0$ 矛盾。令 $w_{0}=g(z_{0})$；$g(\Omega)$ 开，取 $r>0$ 使 $B(w_{0},r)\subset g(\Omega)$，则 $B(-w_{0},r)\subset-g(\Omega)$ 与 $g(\Omega)$ 不交，故 $|w+w_{0}|\ge r$（$w\in g(\Omega)$）。于是 $T(w):=1/(w+w_{0})$ 在 $g(\Omega)$ 上全纯单叶且 $|T|\le1/r$；$rT$ 把 $g(\Omega)$ 映入 $\mathbb{D}$。再用 $\mathbb{D}$ 的自同构（`def.mobius`：$\varphi_{b}(w)=(w-b)/(1-\bar b w)$）把 $rT(w_{0})$ 搬到 $0$，得单叶 $\psi:\Omega\to\mathbb{D}$、$\psi(z_{0})=0$；最后乘单位复数使 $\psi'(z_{0})>0$。故 $\mathcal{F}\ne\emptyset$。
**第二步：极值元存在。** 由第 0 步（a），$s\le1/\rho<\infty$；$\mathcal{F}\ne

> 续见 notes/thm.riemann-mapping.3.md
