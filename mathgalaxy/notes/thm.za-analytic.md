# 有限生成代数的解析环　`thm.za-analytic`　·　说明
根 `../`

⭐ 这是 Clausen–Scholze, Lectures on Condensed Mathematics, Lecture VIII, Theorem 8.1。它是本图里「解析环」第一次覆盖真正的几何对象：$A=\mathbb{Z}[T]$ 时 $A_\blacksquare$ 就是「$\mathbb{Z}[T]$ 上的固态模」的系数环，后面的相干对偶（`thm.coherent-duality`）全踩在它上面。

**证明的真实规模。** 完整证明是 Lecture VIII 前几节的内容，不是一条边能装下的。$A=\mathbb{Z}[T]$ 的核心路线是：

① 令 $A_\infty:=\mathbb{Z}((T^{-1}))$，把它看成「$\operatorname{Spec} A$ 在无穷远处的函数」，有短正合列

$$0\to \mathbb{Z}[[U]]\otimes_{\mathbb{Z}} A \xrightarrow{1-\mathrm{shift}\otimes T} \mathbb{Z}[[U]]\otimes_{\mathbb{Z}} A \to A_\infty \to 0 .$$

② 由 ① 得 $A_\infty$ 紧投射（前两项形如 $\prod_I \mathbb{Z}\otimes A$），且幂等：$A_\infty\otimes^{L}_{A}A_\infty\cong A_\infty$。

③ 由 ② 得 $\operatorname{RHom}_A(A_\infty,C)=0$，其中 $C$ 由 $\prod_I A$ 的直和构成。

> 续见 notes/thm.za-analytic.2.md
