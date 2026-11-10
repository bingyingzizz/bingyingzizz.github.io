# def-dep.cgexp-cc
`def-dep.cgexp-cc` · 等价 · strong 边 · 根 `../`

`prop.cg-cartesian-closed` 紧生成空间是笛卡尔闭的 → `cor.cg-exponential-adjoint` 紧生成空间的指数伴随

**笛卡尔闭 $\implies$ 伴随**

笛卡尔闭给出自然双射 $\operatorname{Hom}(k(X\times Y), Z) \cong \operatorname{Hom}(X, kC(kY, Z))$（右边就是把 currying 的双射用指数对象 $Z^{Y} = kC(kY,Z)$ 写出来；$Z$ 紧生成时 $kC(kY,Z)$ 与 $C(Y,Z)$ 一致）。这组自然双射按定义就是 $k(X\times -) \dashv kC(kY, -)$。

**伴随 $\implies$ 笛卡尔闭**

设 $k(X\times Y) \dashv kC(kY,-)$，其伴随同构把 $f : k(X\times Y)\to Z$ 送到 $\widehat{f} : X \to kC(kY,Z)$，$\widehat{f}(x)(y) = f(x,y)$。与 $k$-化同构 $\operatorname{Hom}_{k\mathbf{Top}}(X, kC(kY,Z)) \cong \operatorname{Hom}_{\mathbf{Top}}(X\times Y, Z)$ 拼起来即得 currying 的自然双射 $C(k(X\times Y), Z)\cong C(X, C(Y,Z))$，即 $k\mathbf{Top}$ 笛卡尔闭。

> 笛卡尔闭与「乘 $Y$ 有右伴随」是同一件事的两种说法。
