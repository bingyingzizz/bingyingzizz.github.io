# 简单函数逼近 $\implies$ 可测函数在极限下封闭
`imp.measurable-limit` · 推出 · strong 边 · 根 `../`

`def.simple-function` 简单函数 + `thm.simple-approximation` 简单函数逼近 → `prop.measurable-closure` 可测函数的封闭性

**① 上确界。** 设 $f_j$ 可测。要证 $\sup_j f_j$ 可测。由判定准则 (2)，只需对生成元 $(a, +\infty]$（$a \in \mathbb{R}$）验证：

$$(\sup_j f_j)^{-1}((a, +\infty]) = \bigcup_j f_j^{-1}((a, +\infty]) \in \mathcal{M}$$

是可数并，故可测。

**② 下确界。** $\inf_j f_j = -\sup_j(-f_j)$，而取负保持可测性，故 inf 也可测。

**③ 极限。** $\liminf_j f_j = \sup_n \inf_{j \ge n} f_j$，由 ①② 可测；同理 $\limsup$ 可测。当极限存在时两者相等，故极限可测。

**④ 和与积。** 先看 $f + g$：对任意 $a \in \mathbb{R}$，

> 续见 proofs/imp.measurable-limit.2.md
