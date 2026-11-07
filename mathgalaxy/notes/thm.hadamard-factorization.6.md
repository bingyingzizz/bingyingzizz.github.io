# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第五步：无零点 $\implies$ 指数（完整）。** $\Phi$ 整、无零点，$\mathbb{C}$ 单连通，由 `prop.single-valued-branch` 存在整函数 $h$ 使 $\Phi=e^{h}$；且 $\operatorname{Re}h=\log|\Phi|$。

**第六步：Borel–Carathéodory（完整证明）。** 引理：若 $g$ 在 $|z|\le R$ 全纯、$g(0)=0$、$\operatorname{Re}g\le A$（$A>0$），则对 $|z|=r<R$，$|g(z)|\le2Ar/(R-r)$。证明：$\varphi:=g/(2A-g)$ 在 $|z|\le R$ 全纯（分母实部 $\ge A$），$|\varphi|\le1$（$|g|^{2}\le(2A-\operatorname{Re}g)^{2}+(\operatorname{Im}g)^{2}$ 等价于 $\operatorname{Re}g\le A$），$\varphi(0)=0$；Schwarz 引理（`lem.schwarz`）给 $|\varphi(z)|\le r/R$，于是 $|g|=\bigl|2A\varphi/(1+\varphi)\bigr|\le2A|\varphi|/(1-|\varphi|)\le2Ar/(R-r)$。

> 续见 notes/thm.hadamard-factorization.7.md
