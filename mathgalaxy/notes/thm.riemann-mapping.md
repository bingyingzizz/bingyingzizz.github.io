# Riemann 映射定理　`thm.riemann-mapping`　·　说明
根 `../`

**证明结构（本轮写全；每一步引用的节点都已在图中证完）。** 记 $\mathcal{F}=\{\varphi:\Omega\to\mathbb{D}\ \text{单叶全纯}:\ \varphi(z_{0})=0\}$，$s:=\sup_{\varphi\in\mathcal{F}}|\varphi'(z_{0})|$。下面依次证：$\mathcal{F}$ 非空；极值元存在；极值元满射；唯一性。
**第 0 步：两个预备。**（a）若 $\varphi:\Omega\to\mathbb{D}$ 全纯，则 $|\varphi'(z_{0})|\le 1/\rho$，$\rho:=\operatorname{dist}(z_{0},\partial\Omega)$：在 $B(z_{0},\rho)\subset\Omega$ 上用 Cauchy 估计（`thm.cauchy-inequality`），$|\varphi|\le1$，故 $|\varphi'(z_{0})|\le1/\rho$。（b）**单叶性在内闭一致极限下保持**：设 $\varphi_{n}\to f$ 内闭一致，$\varphi_{n}$ 单叶、$f$ 非常数。若 $f(z_{1})=f(z_{2})=w$ 而 $z_{1}\ne z_{2}$，由 Hurwitz 零点定理（`thm.hurwitz`，用于 $f-w$）知 $\varphi_{n}-w$ 在 $z_{1}$、$z_{2}$ 附近各有零点（$n$ 大时），与 $\varphi_{n}$ 单叶矛盾。故 $f$ 单叶。
**第一步：$\mathcal{F}$ 非空。** 取 $a\in\mathbb{C}\setminus\Omega$。$z-a$ 在 $\Omega$ 上无零点，$

> 续见 notes/thm.riemann-mapping.2.md
