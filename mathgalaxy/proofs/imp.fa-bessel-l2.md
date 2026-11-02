# Bessel/Parseval $\implies$ 可分 Hilbert $\cong \ell^2$
`imp.fa-bessel-l2` · 推出 · strong 边 · 根 `../`

`thm.bessel-parseval` Bessel 与 Parseval → `thm.separable-hilbert-is-l2` 可分 Hilbert 空间等距于 ℓ²

取正交基 $\{e_i\}$（上一条），定义 $U(x) := (\langle x, e_i\rangle)_i$。Bessel 保证 $U(x) \in \ell^2$，Parseval（完备性）保证 $\|U(x)\|_2 = \|x\|$，故 $U$ 是等距。
满射：给 $(\lambda_i) \in \ell^2$，令 $s_J := \sum_{i \in J}\lambda_i e_i$；由 $\|s_J - s_{J'}\|^2 = \sum_{J \triangle J'}|\lambda_i|^2 \to 0$ 知它是 Cauchy 列，$H$ 完备故收敛到某 $x$，且 $\langle x, e_i\rangle = \lambda_i$。
可分时正交基可数（不可数正交基给出不可数个两两距离 $\sqrt2$ 的点），故 $H \cong \ell^2(\mathbb{N})$。$\blacksquare$

> 三个工具各司其职：Zorn 给基、Bessel 给「入 $\ell^2$」、Parseval 给「保范」。
