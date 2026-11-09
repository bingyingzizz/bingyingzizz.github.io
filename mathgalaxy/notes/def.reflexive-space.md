# 自反空间　`def.reflexive-space`　·　说明
根 `../`

自然嵌入总是等距的（Hahn–Banach）：$\|J_X x\| = \sup_{\|\varphi\| \le 1}|\varphi(x)| = \|x\|$。所以自反 $\iff$ $X^{**}$ 中每个元素都来自 $X$。

**例子**：Hilbert 空间；$L^p$、$\ell^p$（$1 < p < \infty$，见 `cor.lp-reflexive`）；有限维空间。

**反例**：$c_0$（$c_0^{**} = \ell^\infty \ne c_0$）、$\ell^1$（$\ell^{1**} = (\ell^\infty)^* \supsetneq \ell^1$）、$C[0,1]$。

⭐ 自反的核心用途：有界序列有弱收敛子列（Eberlein–Šmulian；本图尚未立弱拓扑节点），这是变分存在性与 Milman–Pettis 的入口。

📌 与配对语言的关系：$X$ 自反 $\iff$ 完美配对 $(X, X^*)$ 的两个嵌入都满（`def.perfect-pairing`、`thm.riesz-perfect-pairing`）。
