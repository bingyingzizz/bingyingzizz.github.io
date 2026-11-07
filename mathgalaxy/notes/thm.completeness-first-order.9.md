# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第七步：真值引理。** 对每个公式 $\psi(x_1,\ldots,x_m)$ 与任意闭项 $t_1,\ldots,t_m$：$\mathfrak{A}\vDash\psi[\bar t]$（赋值 $x_i\mapsto[t_i]$）$\iff$ $\Gamma^{*}\vdash\psi(t_1,\ldots,t_m)$。对 $\psi$ 的结构归纳：原子公式按第六步；$\neg$ 用极大性（对每个语句恰有它或它的否定在 $\Gamma^{*}$）；$\wedge$ 用 $\Gamma^{*}$ 对 $\vdash$ 封闭与重言式 $\psi\to(\chi\to\psi\wedge\chi)$、$\psi\wedge\chi\to\psi$、$\psi\wedge\chi\to\chi$。

> 续见 notes/thm.completeness-first-order.10.md
