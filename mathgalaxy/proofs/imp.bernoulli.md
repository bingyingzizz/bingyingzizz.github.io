# 归纳 $\implies$ Bernoulli 不等式
`imp.bernoulli` · 推出 · strong 边 · 根 `../`

`thm.induction` 归纳原理与递推定义 → `thm.bernoulli` Bernoulli 不等式

$n = 0$：$1 \ge 1$。$n = 1$：两边都是 $1 + x$。设对 $n$ 成立。因 $x \ge -1$，有 $1 + x \ge 0$，两边同乘不反向：

$$(1+x)^{n+1} = (1+x)^{n}(1+x) \ge (1 + nx)(1+x) = 1 + (n+1)x + n x^{2} \ge 1 + (n+1)x.$$

严格性：若 $x \ne 0$ 且 $n \ge 2$，则上式最后一步的 $n x^{2} > 0$；归纳中至少用一次严格不等号。$\blacksquare$
