# 三角不等式 + MCT + DCT $\implies$ $L^p$ 完备
`imp.lp-banach` · 推出 · strong 边 · 根 `../`

`thm.minkowski` Minkowski 不等式 + `thm.mct` 单调收敛定理 + `thm.dct` 控制收敛定理 → `thm.lp-banach` L^p 是 Banach 空间

**① 换成级数。** 赋范线性空间完备 $\iff$ 每个**绝对收敛**的级数都收敛（标准判据）。所以设 $\{f_k\} \subseteq L^p$ 且

$$B := \sum_{k=1}^{\infty} \|f_k\|_p < \infty$$

目标：证明 $\sum_k f_k$ 在 $L^p$ 范数下收敛。

**② 先做逐点收敛。** 令

$$G_n := \sum_{k \le n} |f_k|, \qquad G := \sum_{k=1}^{\infty} |f_k|$$

由 **Minkowski**（三角不等式），$\|G_n\|_p \le \sum_{k \le n} \|f_k\|_p \le B$，即 $\int G_n^p \le B^p$。$G_n \uparrow G$，由 **MCT**，

$$\int G^p = \lim_n \int G_n^p \le B^p$$
于是 $G \in L^p$，特别地 $G < \infty$ a.e.。这就说明 $\sum_k f_k(x)$ 对 a.e. $x$ **绝对收敛**，记其和为 $F$。

> 续见 proofs/imp.lp-banach.2.md
