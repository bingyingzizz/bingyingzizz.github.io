# 有限生成代数的解析环　`thm.za-analytic`　·　说明
根 `../`

⭐ 这一条是 `thm.za-analytic` 名字里的「解析环」第一次真正覆盖几何情形：$A = \mathbb{Z}[T]$ 时 $A_\blacksquare$ 就是「$\mathbb{Z}[T]$ 上的固态模」，后面相干对偶全踩在它上面。

⭐ 证明骨架（$A = \mathbb{Z}[T]$ 的情形）：把 $A_\infty := \mathbb{Z}((T^{-1}))$ 看成「$\operatorname{Spec} A$ 边界附近的函数」，它有短正合列

$$0 \to \mathbb{Z}[[U]] \otimes_{\mathbb{Z}} A \xrightarrow{U \mapsto T^{-1}} \mathbb{Z}[[U]] \otimes_{\mathbb{Z}} A \to A_\infty \to 0,$$

从而 $A_\infty$ 紧、幂等（幂等 = $A_\infty \otimes^{L} A_\infty \cong A_\infty$，即「乘两次等于乘一次」）、且 $\operatorname{RHom}_A(A_\infty, C) = 0$ 对一切由 $\prod A$ 的直和构成的复形成立；再用 $\prod_I A / (\prod_I \mathbb{Z} \otimes A)$ 的余核构造 $j_!$。一般有限生成 $A$ 由 Noether 归一化归约到 $A = \mathbb{Z}[T]$。

> 续见 notes/thm.za-analytic.2.md
